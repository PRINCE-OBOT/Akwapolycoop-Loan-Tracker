import { addDays, differenceInDays } from 'date-fns';
import indexDB from '../indexDB/indexDB';

const PERCENTAGE = 0.5 / 100;
//  0.3333/100 * amount(30000) =  99.999 per day accumulated

const getDifferenceInDays = (actionDate) =>
  // const futureDay = addDays(new Date(), 4);

  // differenceInDays(new Date(), actionDate);
  differenceInDays(addDays(new Date(), 4), actionDate);
class MathUtility {
  static outstandingBalance(id, callback) {
    const calculateOutstandingBalance = (approveAndIncompleteLoan) => {
      const outstandingBalance = approveAndIncompleteLoan.reduce((accumulator, currentObject) => {
        const interest =
          currentObject.outstandingBalance *
          PERCENTAGE *
          getDifferenceInDays(currentObject.actionDate);

        const repayment = interest + currentObject.outstandingBalance;

        accumulator += Math.round(repayment * 100) / 100;

        return accumulator;
      }, 0);

      callback(outstandingBalance);
    };

    const filterApproveAndIncompleteLoan = (data) => {
      if (!data.takeLoan) return;

      const approveAndIncompleteLoan = data.takeLoan.filter(
        (loan) => loan.status === 'Approve' && loan.paidStatus === 'Incomplete',
      );

      calculateOutstandingBalance(approveAndIncompleteLoan);
    };

    (function getRecentLoanApplicantDataFromIndexedDB() {
      indexDB.interact(
        {
          storeName: 'loan-applicant-list',
          keyPathValue: id,
          getMethod: 'get',
          returnData: filterApproveAndIncompleteLoan,
          undefinedState: errorGettingData,
        },
        'getData',
      );
    })();
  }

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

  static withdrawalApprove({ id, withdrawalAmount }) {
    const filterApproveAndUnpaidDeposit = (data) => {
      if (!data.deposit) return;

      for (let i = 0; i < data.deposit.length; i++) {
        if (data.deposit[i].status !== 'Approve' || data.deposit[i].depositAmountDynamic <= 0)
          continue;

        const balance = withdrawalAmount - data.deposit[i].depositAmountDynamic;

        // Amount greater than 0 means you have withdraw all amount from that deposit
        if (balance >= 0) {
          data.deposit[i].depositAmountDynamic = 0;
        } else {
          const newDepositAmount = Math.abs(balance);
          data.deposit[i].depositAmountDynamic = newDepositAmount;
          break;
        }

        withdrawalAmount = balance;
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

  static depositApprove({ id, depositAmount, depositID }) {
    let balance;
    const filterApproveAndUnpaidLoan = (data) => {
      function setDepositAmountDynamic() {
        if (!data.deposit) return;

        for (let i = 0; i < data.deposit.length; i++) {
          if (data.deposit[i].depositID === depositID) {
            data.deposit[i].depositAmountDynamic = balance;
            break;
          }
        }
      }

      if (!data.loan) return;

      for (let i = 0; i < data.loan.length; i++) {
        if (data.loan[i].status === 'Approve' && data.loan[i].loanAmountDynamic !== 0) {
          balance = depositAmount - data.loan[i].loanAmountDynamic;

          if (balance >= 0) {
            data.loan[i].loanAmountDynamic = 0;
          } else {
            const newLoanAmount = Math.abs(balance);
            data.loan[i].loanAmountDynamic = newLoanAmount;

            break;
          }

          depositAmount = balance;
        }
      }

      balance = balance === undefined ? depositAmount : balance;

      setDepositAmountDynamic(balance);

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
      loan(loanApplicantData.loan?.length);
      deposit(loanApplicantData.deposit?.length);
      withdrawal(loanApplicantData.withdrawal?.length);
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

    function getLoanLength(obj) {
      loanLength += obj.loan?.length || 0;
    }

    function getDepositLength(obj) {
      depositLength += obj.deposit?.length || 0;
    }

    function getWithdrawalLength(obj) {
      withdrawalLength += obj.withdrawal?.length || 0;
    }

    const getLengthOfData = (loanApplicantData) => {
      loanApplicantData.forEach((obj) => {
        getLoanLength(obj);
        getDepositLength(obj);
        getWithdrawalLength(obj);
      });

      loan(loanLength);
      deposit(depositLength);
      withdrawal(withdrawalLength);
    };

    indexDB.interact(
      {
        storeName: 'loan-applicant-list',
        getMethod: 'getAll',
        returnData: getLengthOfData,
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
