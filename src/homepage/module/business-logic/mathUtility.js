import { addDays, differenceInDays } from 'date-fns';
import indexDB from '../indexDB/indexDB';

const PERCENTAGE = 0.3333 / 100;
// So calculating for 30 days would be 0.3333 * 30 =  9.999 ~ 0

const getDifferenceInDays = (currentObject) => {
  const actionDate = currentObject.actionDate;
  // const todayDate = new Date();

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
          +currentObject['desired-amount'] * (getDifferenceInDays(currentObject) * PERCENTAGE);

        const result = accumulator + currentPercentageValue + +currentObject['desired-amount'];

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
}

function errorGettingData() {
  console.log('Error getting data');
}

export default MathUtility;
