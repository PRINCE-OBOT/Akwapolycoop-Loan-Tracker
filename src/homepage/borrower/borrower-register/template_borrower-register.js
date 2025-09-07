import './template_borrower-register.css';
import '../../admin/admin-sign-up/template_admin-sign-up.css';
import '../../assets/reset.css';
import '../../assets/font.css';
import '../../assets/common_general.css';
import '../../assets/style-border-button.css';

import FormValidator from '../../module/form-validation/form-validator';
import EmailValidator from '../../module/form-validation/email-validator';
import NameValidator from '../../module/form-validation/name-validator';

import indexDB from '../../module/indexDB/indexDB';

import Modal from '../../module/modal/modal';

const messages = document.querySelectorAll('output.show-message');
const inputs = document.querySelectorAll('input');

const email = document.querySelector('#email');
const emailMessage = document.querySelector('#email-message');

const firstName = document.querySelector('#first-name');
const firstNameMessage = document.querySelector('#first-name-message');

const lastName = document.querySelector('#last-name');
const lastNameMessage = document.querySelector('#last-name-message');

const dialog = document.querySelector('dialog');
const btnSignUp = document.querySelector('.btn-validate');

new EmailValidator({ email, emailMessage });

new NameValidator({ name: firstName, nameMessage: firstNameMessage });

new NameValidator({ name: lastName, nameMessage: lastNameMessage });

const html = document.querySelector('html');

const btnLogout = document.querySelector('.logout-button');
const btnCancel = dialog.querySelector('.btn-cancel');
const btnYes = dialog.querySelector('.btn-yes');

new Modal({ btnShowModal: btnLogout, btnCloseModal: btnCancel, dialog });
new Modal({ btnShowModal: btnLogout, btnCloseModal: btnYes, dialog });

class BorrowerSessionManager {
  constructor() {
    this.render();
  }

  render() {
    this.checkIfKeyValueExistAndIsBorrowerLogin({ btnYes });
    this.btnYes = btnYes;
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
        key: 'isBorrowerLogin',
        runSuccessStatus: this.runWhenKeyValueExistAndBorrowerIsTrue.bind(this),
        runFairStatus: this.runWhenKeyValueExistAndBorrowerLoginIsFalse.bind(this),
        runErrorStatus: this.runWhenKeyValueDoesNotExist.bind(this),
      },
      'checkIfKeyPathValueExistAndFieldIsTrue',
    );
  }

  runWhenKeyValueExistAndBorrowerIsTrue() {
    html.style.display = 'block';
  }

  runWhenKeyValueExistAndBorrowerLoginIsFalse() {
    window.location.href = './borrower-login.html';
    console.log('You are not logged in');
  }

  runWhenKeyValueDoesNotExist() {
    window.location.href = './borrower-login.html';
    console.log('Key value doest not exist');
  }

  logoutBorrower() {
    indexDB.createDatabase(
      {
        storeName: 'borrower-data',
        keyPathValue: 'borrower',
        newValue: false,
        key: 'isBorrowerLogin',
        runSuccessStatus: this.checkIfKeyValueExistAndIsBorrowerLogin.bind(this),
        runErrorStatus: this.runWhenKeyValueDoesNotExist.bind(this),
      },
      'modifyExistingData',
    );
  }
}
new BorrowerSessionManager({ btnYes });

function runWhenAllFormIsValid() {
  alert('all form is valid');
}

new FormValidator({
  buttonSubmit: btnSignUp,
  messages,
  inputs,
  runWhenAllFormIsValid,
});
