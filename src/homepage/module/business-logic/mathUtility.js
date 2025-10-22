import { addDays, differenceInDays } from 'date-fns';
import indexDB from '../indexDB/indexDB';

const PERCENTAGE = 0.3333 / 100;
// So calculating for 30 days would be 0.3333 * 30 =  9.999 ~ 0

const getDifferenceInDays = (actionDate) => {
  const futureDay = addDays(new Date(), 4);

  // console.log(differenceInDays(futureDay, actionDate));

  return differenceInDays(futureDay, actionDate);
};

class MathUtility {
  static outstandingBalance(id, callback) {
    const calculateOutstandingBalance = (approveAndIncompleteLoan) => {
      const outstandingBalance = approveAndIncompleteLoan.reduce((accumulator, currentObject) => {
        // 1. Get the percentage of the `desired-amount`
        // 2. Add the derive percentage value to the `desired-amount`,
        // 3. The final result get preserve, and will be added after the next `takeLoan` finishes no. 2

        const currentPercentageValue =
          currentObject.outstandingBalance *
          (getDifferenceInDays(currentObject.actionDate) * PERCENTAGE);

        const result = accumulator + currentPercentageValue + currentObject.outstandingBalance;

        accumulator = Math.round(result * 100) / 100;

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

  static depositApprove({ id, depositAmount }) {
    const filterApproveAndIncompleteLoan = (data) => {
      if (!data.takeLoan) return;

      for (let i = 0; i < data.takeLoan.length; i++) {
        if (data.takeLoan[i].status !== 'Approve' && data.takeLoan[i].paidStatus !== 'Incomplete')
          continue;

        // Percentage base on accumulated days
        const currentPercentageValue =
          data.takeLoan[i].outstandingBalance *
          getDifferenceInDays(data.takeLoan[i].actionDate) *
          PERCENTAGE;

        const percentageAndOutstandingBalance =
          currentPercentageValue + data.takeLoan[i].outstandingBalance;

        const balance = depositAmount - percentageAndOutstandingBalance;

        if (balance >= 0) {
          data.takeLoan[i].paidStatus = 'Completed';
          data.takeLoan[i].outstandingBalance = 0;
        } else {
          data.takeLoan[i].outstandingBalance = Math.abs(balance);
          break;
        }

        depositAmount = balance;
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
          returnData: filterApproveAndIncompleteLoan,
          undefinedState: errorGettingData,
        },
        'getData',
      );
    })();
  }
}

function errorGettingData() {
  console.log('Error getting data');
}

export default MathUtility;
