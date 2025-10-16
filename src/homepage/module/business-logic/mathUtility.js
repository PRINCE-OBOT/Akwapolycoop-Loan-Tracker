import { differenceInDays } from 'date-fns';
import indexDB from '../indexDB/indexDB';

const PERCENTAGE = 0.3333 / 100;
// So calculating for 30 days would be 0.3333 * 30 =  9.999 ~ 0

const getDifferenceInDays = (currentObject) => {
  const actionDate = currentObject.actionDate;
  const todayDate = new Date();

  return differenceInDays(actionDate, todayDate);
};

class MathUtility {
  static calculateOutstandingBalance(approveAndIncompleteLoan) {
    const outstandingBalance = approveAndIncompleteLoan.reduce((accumulator, currentObject) => {
      const currentPercentageValue =
        +currentObject['desired-amount'] * (getDifferenceInDays(currentObject) * PERCENTAGE);

      accumulator = currentPercentageValue + +currentObject['desired-amount'];

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
        undefinedState: this.errorGettingData,
      },
      'getData',
    );
  }

  static getRecentLoanApplicantID() {
    const data = localStorage.getData({ key: 'recent-loan-applicant' });
    return data?.id;
  }

  static outstandingBalance() {
    const id = this.getRecentLoanApplicantID();
    this.getRecentLoanApplicantDataFromIndexedDB(id);
  }
}

export default MathUtility;
