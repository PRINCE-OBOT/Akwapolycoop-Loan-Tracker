import './template_borrower-register.css';
import '../../admin/admin-sign-up/template_admin-sign-up.css';
import '../../assets/reset.css';
import '../../assets/font.css';
import '../../assets/common_general.css';
import '../../assets/style-border-button.css';

import FormUtility from '../../module/form-validation/form-utility';
import EmailValidator from '../../module/form-validation/email-validator';
import NameValidator from '../../module/form-validation/name-validator';
import TelValidator from '../../module/form-validation/tel-validator';
import GenderValidator from '../../module/form-validation/gender-validator';

import indexDB from '../../module/indexDB/indexDB';

import Modal from '../../module/modal/modal';

const messages = document.querySelectorAll('output:not([readonly])');
const inputs = document.querySelectorAll('input:not([readonly])');

const email = document.querySelector('#email');
const emailMessage = document.querySelector('#email-message');

const firstName = document.querySelector('#first-name');
const firstNameMessage = document.querySelector('#first-name-message');

const lastName = document.querySelector('#last-name');
const lastNameMessage = document.querySelector('#last-name-message');

const phoneNumber = document.querySelector('#phone-number');
const phoneNumberMessage = document.querySelector('#phone-number-message');

const gender = document.querySelector('#gender');
const genderMessage = document.querySelector('#gender-message');

const btnValidate = document.querySelector('.btn-validate');
const html = document.querySelector('html');

const btnLogout = document.querySelector('.logout-button');
console.log(messages);
const dialog = document.querySelector('dialog');
const btnCancel = dialog.querySelector('.btn-cancel');
const btnYes = dialog.querySelector('.btn-yes');

new EmailValidator({ email, emailMessage });

new NameValidator({ name: firstName, nameMessage: firstNameMessage });

new NameValidator({ name: lastName, nameMessage: lastNameMessage });

new TelValidator({ tel: phoneNumber, telMessage: phoneNumberMessage });

new GenderValidator({ gender, genderMessage });

new Modal({ btnShowModal: btnLogout, btnCloseModal: btnCancel, dialog });
new Modal({ btnShowModal: btnLogout, btnCloseModal: btnYes, dialog });

class BorrowerSessionManager {
  constructor() {
    this.btnYes = btnYes;
    this.render();
  }

  render() {
    this.checkIfKeyValueExistAndIsBorrowerLogin({ btnYes });
    this.bindEvent();
  }

  bindEvent() {
    this.btnYes.addEventListener('click', this.logoutBorrower.bind(this));
  }

  checkIfKeyValueExistAndIsBorrowerLogin() {
    indexDB.createDatabase(
      {
        storeName: 'borrower-data',
        keyPathValue: 'borrower',
        keys: 'isBorrowerLogin',
        runSuccessStatus: this.runWhenKeyValueExistAndBorrowerIsTrue.bind(this),
        runFairStatus: this.runWhenKeyValueExistAndBorrowerLoginIsFalse.bind(this),
        runErrorStatus: this.runWhenKeyValueDoesNotExist.bind(this),
      },
      'checkIfKeyPathValueExistAndFieldIsTrue',
    );
  }

  runWhenKeyValueExistAndBorrowerIsTrue() {
    html.style.display = 'block';
    this.getBorrowerDataFromDatabase();
  }

  returnData(data) {
    if (data === undefined) {
      this.setGreetingTextContent('You do not have a data');
      return;
    }

    firstName.value = data.firstName;
    lastName.value = data.lastName;
    email.value = data.email;
  }

  getBorrowerDataFromDatabase() {
    indexDB.createDatabase(
      {
        storeName: 'borrower-data',
        keyPathValue: 'borrower',
        returnData: this.returnData.bind(this),
      },
      'getData',
    );
  }

  runWhenKeyValueExistAndBorrowerLoginIsFalse() {
    window.location.href = './borrower-login.html';
    console.log('You are not logged in');
  }

  runWhenKeyValueDoesNotExist() {
    window.location.href = './borrower-login.html';
    console.log('keys value doest not exist');
  }

  logoutBorrower() {
    indexDB.createDatabase(
      {
        storeName: 'borrower-data',
        keyPathValue: 'borrower',
        newValue: { isBorrowerLogin: false },
        keys: ['isBorrowerLogin'],
        runSuccessStatus: this.checkIfKeyValueExistAndIsBorrowerLogin.bind(this),
        runErrorStatus: this.runWhenKeyValueDoesNotExist.bind(this),
      },
      'modifyExistingData',
    );
  }
}
new BorrowerSessionManager({ btnYes });

// function modifyExistingDataInDatabase() {
//   indexDB.createDatabase(
//     {
//       storeName: 'borrower-data',
//       keyPathValue: 'borrower',
//       newValue: true,
//       keys: 'isAdminLogin',

//       runSuccessStatus: openAdminDashboard,
//       runErrorStatus: failModifyingAdminData,
//     },
//     'modifyExistingData',
//   );
// }

function runWhenAllFormIsValid() {
  // modifyExistingDataInDatabase()
}

new FormUtility({
  buttonSubmit: btnValidate,
  messages,
  inputs,
  runWhenAllFormIsValid,
});
