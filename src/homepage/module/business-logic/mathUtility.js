import indexDB from '../indexDB/indexDB';

class MathUtility {
  static balance({ data, callback }) {
    const deposit = data.deposit;
    const loan = data.loan;

    if (!deposit) return;

    const activeDeposit = deposit.filter(
      (item) => item.depositAmountDynamic !== 0 && item.status === 'Approve',
    );

    const activeDepositBalance = activeDeposit.reduce(
      (acc, current) => acc + current.depositAmountDynamic,
      0,
    );

    const activeLoan = loan?.filter(
      (item) => item.loanAmountDynamic !== 0 && item.status === 'Approve',
    );

    const activeLoanBalance = activeLoan?.reduce(
      (acc, current) => acc + current.loanAmountDynamic,
      0,
    );

    const balance = activeDepositBalance - (activeLoanBalance || 0);

    callback(balance, data);
  }

  // If member has deposit, check if their is any deposit that is approve and can be use to subtract
  // If it exist, get that deposit, use the withdrawal amount and subtract the depositAmountDynamic,
  // depositAmountDynamic - is a duplicate of the real deposit amount that is use for calculation
  // If the balance is more than 0, make `depositAmountDynamic` to be 0, initially depositAmountDynamic will be the deposit amount.
  // That way when member balance is been accumulated from database using the depositAmountDynamic and loanAmountDynamic
  // Their will be a reduction in member balance.
  // When the balance return a negative number that means the withdrawal amount is exhausted
  // So the `depositAmountDynamic` becomes Math.abs(negativeNumber)

  static withdrawalApprove({ id, withdrawalAmount }) {
    const filterApproveAndUnpaidDeposit = (data) => {
      if (!data.deposit) return;

      for (let i = 0; i < data.deposit.length; i++) {
        if (data.deposit[i].status === 'Approve' && data.deposit[i].depositAmountDynamic !== 0) {
          const balance = withdrawalAmount - data.deposit[i].depositAmountDynamic;

          if (balance >= 0) {
            data.deposit[i].depositAmountDynamic = 0;
          } else {
            const newDepositAmount = Math.abs(balance);
            data.deposit[i].depositAmountDynamic = newDepositAmount;
            return;
          }

          withdrawalAmount = balance;
        }
      }

      const store = () => {
        console.log('Successfully Updated deposit');
      };

      indexDB.interact(
        {
          storeName: 'loan-applicant-list',
          data,
          trueState: store,
          undefinedState: errorGettingData,
        },
        'storeData',
      );
    };

    (function getRecentLoanApplicantDataFromIndexedDB() {
      indexDB.interact(
        {
          storeName: 'loan-applicant-list',
          keyPathValue: id,
          getMethod: 'get',
          returnData: filterApproveAndUnpaidDeposit,
          undefinedState: errorGettingData,
        },
        'getData',
      );
    })();
  }

  // If member has taken loan, check if their is any loan that is approve and not paid completely
  // If it exist get that loan, use the amount deposit and subtract the loan,
  // If the balance is more than 0, make `depositAmount` to be balance value as it amount could pay off another loan,
  // When the balance return a negative number that means the deposit amount could not pay off the entire loan amount
  // So the `loanAmount` becomes Math.abs(negativeNumber),  and the deposit amount becomes 0

  static depositApprove({ id, depositAmount, depositID }) {
    let balance;
    const filterApproveAndUnpaidLoan = (data) => {
      if (!data.loan) return;

      for (let i = 0; i < data.loan.length; i++) {
        if (data.loan[i].status === 'Approve' && data.loan[i].loanAmountDynamic !== 0) {
          balance = depositAmount - data.loan[i].loanAmountDynamic;

          if (balance >= 0) {
            data.loan[i].loanAmountDynamic = 0;
          } else {
            const newLoanAmount = Math.abs(balance);
            data.loan[i].loanAmountDynamic = newLoanAmount;
            balance = 0;
            return;
          }

          depositAmount = balance;
        }
      }

      balance = balance === undefined ? depositAmount : balance;

      (function setDepositAmountDynamic() {
        if (!data.deposit) return;

        for (let i = 0; i < data.deposit.length; i++) {
          if (data.deposit[i].depositID === depositID) {
            data.deposit[i].depositAmountDynamic = balance;
            break;
          }
        }
      })();

      const store = () => {
        console.log('Successfully Updated deposit');
      };

      indexDB.interact(
        {
          storeName: 'loan-applicant-list',
          data,
          trueState: store,
          undefinedState: errorGettingData,
        },
        'storeData',
      );
    };

    (function getRecentLoanApplicantDataFromIndexedDB() {
      indexDB.interact(
        {
          storeName: 'loan-applicant-list',
          keyPathValue: id,
          getMethod: 'get',
          returnData: filterApproveAndUnpaidLoan,
          undefinedState: errorGettingData,
        },
        'getData',
      );
    })();
  }

  static specificOverMetric({ loan, deposit, withdrawal }) {
    const getLengthOfData = (loanApplicantData) => {
      loan(loanApplicantData.loan?.length || 0);
      deposit(loanApplicantData.deposit?.length || 0);
      withdrawal(loanApplicantData.withdrawal?.length || 0);
    };

    const id = getRecentLoanApplicantIDInLocalStorage();

    indexDB.interact(
      {
        storeName: 'loan-applicant-list',
        keyPathValue: id,
        getMethod: 'get',
        returnData: getLengthOfData,
        undefinedState: errorGettingData,
      },
      'getData',
    );
  }

  static generalOverMetric({ loan, deposit, withdrawal }) {
    let loanLength = 0;
    let depositLength = 0;
    let withdrawalLength = 0;

    function setLoanLength(obj) {
      loanLength += obj.loan?.length || 0;
    }

    function setDepositLength(obj) {
      depositLength += obj.deposit?.length || 0;
    }

    function setWithdrawalLength(obj) {
      withdrawalLength += obj.withdrawal?.length || 0;
    }

    const setLengthOfData = (loanApplicantData) => {
      loanApplicantData.forEach((obj) => {
        setLoanLength(obj);
        setDepositLength(obj);
        setWithdrawalLength(obj);
      });

      loan(loanLength);
      deposit(depositLength);
      withdrawal(withdrawalLength);
    };

    indexDB.interact(
      {
        storeName: 'loan-applicant-list',
        getMethod: 'getAll',
        returnData: setLengthOfData,
        undefinedState: errorGettingData,
      },
      'getData',
    );
  }
}

function errorGettingData() {
  console.log('Error getting data');
}

function getRecentLoanApplicantIDInLocalStorage() {
  const data = localStorage.getData({ key: 'recent-loan-applicant' });
  return data?.id;
}

export default MathUtility;
