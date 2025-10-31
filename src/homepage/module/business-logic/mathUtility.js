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

    if (!deposit) return;

    const activeDeposit = deposit.filter(
      (item) => item.depositAmountDynamic !== 0 && item.status !== 'Pending',
    );
    const balance = activeDeposit.reduce((acc, current) => acc + current.depositAmountDynamic, 0);

    callback(balance, data);
  }

  static withdrawalApprove({ id, withdrawalAmount }) {
    const filterApproveAndUnpaidDeposit = (data) => {
      if (!data.deposit) return;

      for (let i = 0; i < data.deposit.length; i++) {
        if (data.deposit[i].status !== 'Approve' || data.deposit[i].depositAmountDynamic === 0)
          continue;

        const balance = withdrawalAmount - data.deposit[i].depositAmountDynamic;

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

  static overMetric({ totalTakenLoan, approveLoan, declineLoan, pendingLoan }) {
    const filterApproveLoan = (takeLoanList) => {
      const approveLoanResult = takeLoanList.filter((loan) => loan.status === 'Approve');
      approveLoan(approveLoanResult.length);
    };

    const filterDeclineLoan = (takeLoanList) => {
      const declineLoanResult = takeLoanList.filter((loan) => loan.status === 'Decline');
      declineLoan(declineLoanResult.length);
    };

    const filterPendingLoan = (takeLoanList) => {
      const pendingLoanResult = takeLoanList.filter((loan) => loan.status === 'Pending');
      pendingLoan(pendingLoanResult.length);
    };

    const filterTakenLoan = (loanApplicantData) => {
      const takeLoanList = [];

      loanApplicantData.forEach((data) => {
        if (!data.takeLoan) return;
        data.takeLoan.forEach((takeLoan) => takeLoanList.push(takeLoan));
      });

      totalTakenLoan(takeLoanList.length);

      filterApproveLoan(takeLoanList);
      filterDeclineLoan(takeLoanList);
      filterPendingLoan(takeLoanList);
    };

    indexDB.interact(
      {
        storeName: 'loan-applicant-list',
        getMethod: 'getAll',
        returnData: filterTakenLoan,
        undefinedState: errorGettingData,
      },
      'getData',
    );
  }
}

function errorGettingData() {
  console.log('Error getting data');
}

export default MathUtility;
