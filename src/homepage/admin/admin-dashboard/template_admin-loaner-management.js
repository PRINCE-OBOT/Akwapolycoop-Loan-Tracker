import indexDB from '../../module/indexDB/indexDB';

export default class LoanerManagement {
  constructor({ buttonViewDetails, dialog, buttonCloseModal, tbody }) {
    this.buttonViewDetails = buttonViewDetails;
    this.dialog = dialog;
    this.buttonCloseModal = buttonCloseModal;

    this.tbody = tbody;
    this.render();
  }

  render() {
    this.getLoanApplicantDataFromDatabase();
  }

  createTableElementAndInsertLoanApplicantData(loanApplicantData) {
    loanApplicantData.forEach((data) => {
      const tr = document.createElement('tr');

      const fullname = `${data.firstName} ${data.lastName}`;

      tr.innerHTML = `
        <td>${fullname}</td>
        `;

      this.tbody.append(tr);
    });
  }

  errorWhileGettingLoanApplicantData() {
    console.log('Error while loading loan applicant data');
  }

  getLoanApplicantDataFromDatabase() {
    indexDB.createDatabase(
      {
        storeName: 'borrower-loan-applicant-list',
        getMethod: 'getAll',
        returnData: this.createTableElementAndInsertLoanApplicantData.bind(this),
        undefinedState: this.errorWhileGettingLoanApplicantData.bind(this),
      },
      'getData',
    );
  }
}
