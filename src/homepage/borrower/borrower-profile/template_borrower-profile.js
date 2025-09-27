import './template_borrower-profile.css';
import '../../assets/reset.css';
import '../../assets/font.css';
import '../../assets/common_general.css';
import '../../assets/style-border-button.css';

import indexDB from '../../module/indexDB/indexDB';

import Modal from '../../module/modal/modal';

const btnLogout = document.querySelector('.logout-button');
const dialog = document.querySelector('dialog');
const btnCancel = dialog.querySelector('.btn-cancel');
const btnYes = dialog.querySelector('.btn-yes');

const greeting = document.querySelector('.greeting');

new Modal({ btnShowModal: btnLogout, btnCloseModal: btnCancel, dialog });
new Modal({ btnShowModal: btnLogout, btnCloseModal: btnYes, dialog });

btnYes.addEventListener('click', logoutBorrower);

function getBorrowerDataFromDatabase() {
  indexDB.createDatabase(
    {
      storeName: 'borrower-recently-loan-applicant',
      keyPathValue: 'recent-loan-applicant',
      getMethod: 'get',
      returnData,
    },
    'getData',
  );
}

getBorrowerDataFromDatabase();

function returnData(data) {
  if (data === undefined) {
    this.setGreetingTextContent('You do not have a data');
    return;
  }
  greeting.textContent = data.firstName;
}

function logoutBorrower() {
  //   indexDB.createDatabase(
  //     {
  //       storeName: 'recent-borrower-data',
  //       keyPathValue: 'borrower',
  //       newValue: { isBorrowerLogin: false },
  //       keys: ['isBorrowerLogin'],
  //       trueState: checkIfBorrowerProfileIsGenerated,
  //       undefinedState: keyValueDoesNotExist,
  //     },
  //     'modifyData',
  //   );
}
