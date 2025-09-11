import './template_borrower-dashboard.css';
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

const displayRegistrationProcess = document.querySelector('.displayRegistrationProcess');

const btnValidate = document.querySelector('.btn-validate');
const html = document.querySelector('html');

const btnLogout = document.querySelector('.logout-button');

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
    this.render();
  }

  render() {
    this.bindEvent();
    this.checkIfThereIsRecentLoanApplicant();
    new FormUtility({
      buttonSubmit: btnValidate,
      messages,
      inputs,
      runWhenAllFormIsValid: this.modifyRecentBorrowerSignUp.bind(this),
    });
  }

  bindEvent() {
    btnYes.addEventListener('click', this.logoutBorrower.bind(this));
  }

  checkIfThereIsRecentLoanApplicant() {
    indexDB.createDatabase(
      {
        storeName: 'borrower-recently-loan-applicant',
        keyPathValue: 'recent-loan-applicant',
        key: 'isRecentLoanApplicant',
        getMethod: 'get',
        trueState: this.navigateToProfilePage.bind(this),
        falseState: this.checkIfThereIsRecentSignUpBorrower.bind(this),
        undefinedState: this.checkIfThereIsRecentSignUpBorrower.bind(this),
      },
      'checkKeysValueState',
    );
  }

  navigateToProfilePage() {
    window.location.href = './borrower-profile.html';
  }

  returnData(data) {
    if (data === undefined) {
      console.log('Did not find key in store');
      return;
    }

    firstName.value = data.firstName;
    lastName.value = data.lastName;
    email.value = data.email;
  }

  getRecentSignUpBorrower() {
    indexDB.createDatabase(
      {
        storeName: 'borrower-recently-sign-up',
        keyPathValue: 'recent-sign-up',
        getMethod: 'get',
        returnData: this.returnData.bind(this),
      },
      'getData',
    );
  }

  checkIfThereIsRecentSignUpBorrower() {
    indexDB.createDatabase(
      {
        storeName: 'borrower-recently-sign-up',
        keyPathValue: 'recent-sign-up',
        key: 'isRecentSignUpBorrower',
        getMethod: 'get',
        trueState: this.recentSignUpBorrowerExist.bind(this),
        falseState: this.redirectToLoginPage.bind(this),
        undefinedState: this.redirectToLoginPage.bind(this),
      },
      'checkKeysValueState',
    );
  }

  recentSignUpBorrowerExist() {
    html.style.display = 'block';
    this.getRecentSignUpBorrower();
  }

  redirectToLoginPage() {
    window.location.href = './borrower-login.html';
    console.log('You are not logged in');
  }

  logoutBorrower() {
    indexDB.createDatabase(
      {
        storeName: 'borrower-recently-sign-up',
        keyPathValue: 'recent-sign-up',
        newValue: { isRecentSignUpBorrower: false },
        keys: ['isRecentSignUpBorrower'],
        getMethod: 'get',
        trueState: this.redirectToLoginPage.bind(this),
        undefinedState: this.runWhenKeyValueDoesNotExist.bind(this),
      },
      'modifyData',
    );
  }

  runWhenKeyValueDoesNotExist() {
    console.log('Key does not exist');
  }

  modifyRecentBorrowerSignUp() {
    indexDB.createDatabase(
      {
        storeName: 'borrower-recently-sign-up',
        keyPathValue: 'recent-sign-up',
        getMethod: 'get',
        newValue: {
          isRecentSignUpBorrower: false,
        },
        keys: ['isRecentSignUpBorrower'],

        trueState: this.getDataInRecentSignUp.bind(this),
        undefinedState: this.failModifyingAdminData.bind(this),
      },
      'modifyData',
    );
  }

  getDataInRecentSignUp() {
    indexDB.createDatabase(
      {
        storeName: 'borrower-recently-sign-up',
        getMethod: 'get',
        keyPathValue: 'recent-sign-up',
        returnData: this.storeDataToLoanApplicantList.bind(this),
        trueState: this.processNavigatingToProfilePage.bind(this),
        undefinedState: this.failModifyingAdminData.bind(this),
      },
      'getData',
    );
  }

  getDataInRecentSignUpForRecentApplicant() {
    indexDB.createDatabase(
      {
        storeName: 'borrower-recently-sign-up',
        getMethod: 'get',
        keyPathValue: 'recent-sign-up',
        returnData: this.storeDataToBorrowerRecentLoanApplicant.bind(this),
        trueState: this.processNavigatingToProfilePage.bind(this),
        undefinedState: this.failModifyingAdminData.bind(this),
      },
      'getData',
    );
  }

  storeDataToLoanApplicantList(data) {
    const keys = ['id', 'isRecentLoanApplicant'];

    for (let i = 0; i < keys.length; i++) {
      delete data[keys[i]];
    }

    indexDB.createDatabase(
      {
        storeName: 'borrower-loan-applicant-list',
        data,
        trueState: this.getDataInRecentSignUpForRecentApplicant.bind(this),
        undefinedState: this.dataNotStored.bind(this),
      },
      'storeData',
    );
  }

  storeDataToBorrowerRecentLoanApplicant(data) {
    data.id = 'recent-loan-applicant';
    data.isRecentLoanApplicant = true;

    indexDB.createDatabase(
      {
        storeName: 'borrower-recently-loan-applicant',
        data,
        trueState: this.navigateToProfilePage.bind(this),
        undefinedState: this.dataNotStored.bind(this),
      },
      'storeData',
    );
  }

  dataNotStored() {
    console.log('Not stored');
  }

  dataNotStoredToBorrowerLoanApplicantList() {
    console.log('Data not stored to loan applicant list');
  }

  storeDataToRecentLoanApplicant(data) {
    delete data.id;

    indexDB.createDatabase(
      {
        storeName: 'borrower-loan-applicant-list',
        data,
        trueState: this.storeDataToRecentLoanApplicant.bind(this),
        undefinedState: this.dataNotStoredToBorrowerLoanApplicantList.bind(this),
      },
      'storeData',
    );
  }

  processNavigatingToProfilePage() {
    displayRegistrationProcess.textContent = 'Generating Profile...';

    setTimeout(() => {
      this.navigateToProfilePage();
    }, 2000);
  }

  failModifyingAdminData() {
    alert('indexedDB was not able to update borrower Dashboard data');
  }
}
new BorrowerSessionManager();
