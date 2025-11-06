import indexDB from '../indexDB/indexDB';

class MathUtility {
  static balance({ data, callback }) {
    const deposit = data.deposit;

    if (!deposit) return;

    const activeDeposit = deposit.filter(
      (item) => item.depositAmountDynamic !== 0 && item.status === 'Approve',
    );

    const activeDepositBalance = activeDeposit.reduce(
      (acc, current) => acc + current.depositAmountDynamic,
      0,
    );

    callback(activeDepositBalance, data);
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
    let monthlyWithdrawalAmountSum = 0;

    const filterApproveAndUnpaidLoan = (data) => {
      if (!data.loan) return;

      for (let i = 0; i < data.loan.length; i++) {
        const loan = data.loan[i];

        // if (loan.status === 'Approve' && loan.loanAmountDynamic !== 0)
        if (loan.status === 'Approve' && loan.loanAmountDynamic !== 0) {
          const newLoanAmountDynamic = loan.loanAmountDynamic - loan.monthlyWithdrawalAmount;

          if (newLoanAmountDynamic >= 0) {
            // This prevent case when the deposited amount is smaller than the monthlyWithdrawalAmount
            // e.g Member deposit 500, and the next expression is loanAmountDynamic (1000) - monthlyWithdrawalAmount (600)
            // In the above case the loanAmount get subtract for what the member did'nt pay for.

            monthlyWithdrawalAmountSum += loan.monthlyWithdrawalAmount;

            if (monthlyWithdrawalAmountSum > depositAmount) {
              const owingBalance = loan.loanAmountDynamic - loan.monthlyWithdrawalAmount;
              loan.loanAmountDynamic = owingBalance + (monthlyWithdrawalAmountSum - depositAmount);
              break;
            }

            loan.loanAmountDynamic = newLoanAmountDynamic;
          } else {
            loan.loanAmountDynamic = 0;
          }
        }
      }

      (function setDepositAmountDynamic() {
        if (!data.deposit) return;

        const amount = depositAmount - monthlyWithdrawalAmountSum;
        const depositAmountDynamic = amount <= 0 ? 0 : amount;

        for (let i = 0; i < data.deposit.length; i++) {
          if (data.deposit[i].depositID === depositID) {
            data.deposit[i].depositAmountDynamic = depositAmountDynamic;
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
