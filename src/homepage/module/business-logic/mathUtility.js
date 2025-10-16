import indexDB from '../indexDB/indexDB';

class MathUtility {
  static calculateOutstandingBalance(approveLoan) {
    const outstandingBalance = approveLoan.reduce(
      (accumulator, currentValue) => accumulator + currentValue.outstandingBalance,
      0,
    );
    MathUtility.prototype.outstandingBalance.textContent = outstandingBalance;
  }

  static filterApproveTakenLoan(data) {
    const approveLoan = data.takeLoan.filter((loan) => loan.status === 'Approve');

    this.calculateOutstandingBalance(approveLoan);
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
        returnData: this.filterApproveTakenLoan.bind(this),
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
