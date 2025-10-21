import { addDays, differenceInDays } from 'date-fns';
import indexDB from '../indexDB/indexDB';

const PERCENTAGE = 0.3333 / 100;
// Calculating for 30 days would be 0.3333 * 30 =  9.999 ~ 0

const getDifferenceInDays = (currentObject) => {
  const actionDate = currentObject.actionDate;
  // const todayDate = new Date();

  const futureDay = addDays(new Date(), 4);

  // console.log(differenceInDays(futureDay, actionDate));

  return differenceInDays(futureDay, actionDate);
};

const getRecentLoanApplicantID = () => {
  const data = localStorage.getData({ key: 'recent-loan-applicant' });
  return data?.id;
};

class MathUtility {
  static calculateOutstandingBalance(approveAndIncompleteLoan) {
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

    MathUtility.prototype.outstandingBalance.textContent = outstandingBalance;
  }

  static filterApproveAndIncompleteLoan(data) {
    if (!data.takeLoan) return;

    const approveAndIncompleteLoan = data.takeLoan.filter(
      (loan) => loan.status === 'Approve' && loan.paidStatus === 'Incomplete',
    );

    this.calculateOutstandingBalance(approveAndIncompleteLoan);
  }

  static errorGettingData() {
    console.log('Error getting data');
  }

  static getRecentLoanApplicantDataFromIndexedDB(id) {
    indexDB.interact(
      {
        storeName: 'loan-applicant-list',
        keyPathValue: id,
        getMethod: 'get',
        returnData: this.filterApproveAndIncompleteLoan.bind(this),
        undefinedState: this.errorGettingData.bind(this),
      },
      'getData',
    );
  }

  static outstandingBalance() {
    const id = getRecentLoanApplicantID();
    this.getRecentLoanApplicantDataFromIndexedDB(id);
  }
}

export default MathUtility;
