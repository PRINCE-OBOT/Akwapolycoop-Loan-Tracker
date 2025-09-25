import '../../admin/admin-sign-up/template_admin-sign-up.css';
import './template_borrower-dashboard.css';
import '../../assets/reset.css';
import '../../assets/font.css';
import '../../assets/common_general.css';
import '../../assets/style-border-button.css';

import FormUtility from '../../module/form-validation/form-utility';
import InputFieldValidator from '../../module/form-validation/input-field-validator';
import SelectFieldValidator from '../../module/form-validation/select-field-validator copy';

import indexDB from '../../module/indexDB/indexDB';

import Modal from '../../module/modal/modal';

import {
  businessNameContainer,
  monthlyIncomeContainer,
  currentJobYearContainer,
} from './template_borrower-dashboard-created-element';

import SelectSwitchDisplay from '../../module/switchDisplay/select-switch-display';

const form = document.querySelector('.loan-application-form');

const email = form.querySelector('#email');

const firstName = form.querySelector('#first-name');

const lastName = form.querySelector('#last-name');

const phoneNumber = form.querySelector('#phone-number');
const phoneNumberMessage = form.querySelector('#phone-number-message');

const gender = form.querySelector('#gender');
const genderMessage = form.querySelector('#gender-message');

const dateOfBirth = form.querySelector('#date-of-birth');
const dateOfBirthMessage = form.querySelector('#date-of-birth-message');

const address = form.querySelector('#resident-address');
const addressMessage = form.querySelector('#resident-address-message');

const nin = form.querySelector('#nin');
const ninMessage = form.querySelector('#nin-message');

const passport = form.querySelector('#passport');
const passportMessage = form.querySelector('#passport-message');

const businessName = businessNameContainer.querySelector('#business-name');
const businessNameMessage = businessNameContainer.querySelector('#business-name-message');

const employmentAndIncome = form.querySelector('.employment-and-income');

const employmentStatus = form.querySelector('#employment-status');
const employmentStatusMessage = form.querySelector('#employment-status-message');

const monthlyIncome = monthlyIncomeContainer.querySelector('#monthly-income');
const monthlyIncomeMessage = monthlyIncomeContainer.querySelector('#monthly-income-message');

const currentJobDuration = currentJobYearContainer.querySelector('#current-job-duration');
const currentJobDurationMessage = currentJobYearContainer.querySelector(
  '#current-job-duration-message',
);

const btnSubmitApplication = form.querySelector('.btn-submit-application');

const displayRegistrationProcess = document.querySelector('.displayRegistrationProcess');

const html = document.querySelector('html');

const btnLogout = document.querySelector('.logout-button');

const dialog = document.querySelector('dialog');
const btnCancel = dialog.querySelector('.btn-cancel');
const btnYes = dialog.querySelector('.btn-yes');

new InputFieldValidator({
  field: phoneNumber,
  fieldMessage: phoneNumberMessage,
  pattern: /0?[0-9]{10}/,
  fieldErrorMessage: 'Incorrect Phone Number',
});

new InputFieldValidator({
  field: nin,
  fieldMessage: ninMessage,
  pattern: /^[0-9]{11}$/,
  fieldErrorMessage: 'Invalid NIN',
});

new InputFieldValidator({
  field: businessName,
  fieldMessage: businessNameMessage,
  pattern: /^[a-zA-Z0-9_' -]{5,}$/,
  fieldErrorMessage: 'Business Name not Descriptive',
});

new InputFieldValidator({
  field: address,
  fieldMessage: addressMessage,
  pattern: /(?=.*\s)(?=.*[a-zA-Z])(?=.*[0-9]).{20,}/,
  fieldErrorMessage: 'Address not Descriptive',
});

new InputFieldValidator({
  field: dateOfBirth,
  fieldMessage: dateOfBirthMessage,
  pattern: /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/,
  fieldErrorMessage: 'Incorrect Date of Birth',
});

new InputFieldValidator({
  field: passport,
  fieldMessage: passportMessage,
  pattern: /^.+\.(png|jpe?g)$/,
  fieldErrorMessage: 'Unsupported Image Format',
});

new InputFieldValidator({
  field: monthlyIncome,
  fieldMessage: monthlyIncomeMessage,
  pattern: /^[1-9]{1}[0-9]{3,}$/,
  fieldErrorMessage: 'Not within range',
});

new InputFieldValidator({
  field: currentJobDuration,
  fieldMessage: currentJobDurationMessage,
  pattern: /^([1-9]+ [a-zA-Z]+)( [1-9]+ [a-zA-Z]+)*$/,
  fieldErrorMessage: 'Not within range',
});

new SelectFieldValidator({
  field: gender,
  fieldMessage: genderMessage,
  fieldErrorMessage: "You've not selected a gender",
});

new SelectFieldValidator({
  field: employmentStatus,
  fieldMessage: employmentStatusMessage,
  fieldErrorMessage: "You've not selected an Employment Status",
});

new Modal({ btnShowModal: btnLogout, btnCloseModal: btnCancel, dialog });
new Modal({ btnShowModal: btnLogout, btnCloseModal: btnYes, dialog });

class BorrowerSessionManager {
  constructor() {
    this.render();
  }

  render() {
    this.bindEvent();
    this.checkIfThereIsRecentLoanApplicant();
    new SelectSwitchDisplay({
      select: employmentStatus,
      inputs: [businessNameContainer, monthlyIncomeContainer, currentJobYearContainer],
      container: employmentAndIncome,
    });
  }

  bindEvent() {
    btnYes.addEventListener('click', this.logoutBorrower.bind(this));
    btnSubmitApplication.addEventListener('click', this.checkFormValidity.bind(this));
  }

  checkFormValidity() {
    const messages = form.querySelectorAll('output:not([readonly])');
    const inputs = form.querySelectorAll('input:not([readonly])');

    new FormUtility({
      messages,
      inputs,
      runWhenAllFormIsValid: this.getDataInRecentSignUp.bind(this),
    });
  }

  checkIfThereIsRecentLoanApplicant() {
    indexDB.createDatabase(
      {
        storeName: 'borrower-recently-loan-applicant',
        keyPathValue: 'recent-loan-applicant',
        getMethod: 'get',
        trueState: this.navigateToProfilePage.bind(this),
        falseState: this.checkIfThereIsRecentSignUpBorrower.bind(this),
        undefinedState: this.checkIfThereIsRecentSignUpBorrower.bind(this),
      },
      'checkIfThereIsRecentData',
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

  getRecentSignUpBorrowerData() {
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
        getMethod: 'get',
        trueState: this.navigateToDashboardPage.bind(this),
        falseState: this.navigateToLoginPage.bind(this),
        undefinedState: this.navigateToLoginPage.bind(this),
      },
      'checkIfThereIsRecentData',
    );
  }

  navigateToDashboardPage() {
    html.style.display = 'block';
    this.getRecentSignUpBorrowerData();
  }

  navigateToLoginPage() {
    window.location.href = './borrower-login.html';
    console.log('You are not logged in');
  }

  logoutBorrower() {
    indexDB.createDatabase(
      {
        storeName: 'borrower-recently-sign-up',
        keyPathValue: 'recent-sign-up',
        trueState: this.navigateToLoginPage.bind(this),
        undefinedState: this.errorWhileDeletingKey.bind(this),
      },
      'deleteKey',
    );
  }

  errorWhileDeletingKey() {
    console.log('Error while deleting key');
  }

  keyValueDoesNotExist() {
    console.log('Key does not exist');
  }

  getDataInRecentSignUp() {
    indexDB.createDatabase(
      {
        storeName: 'borrower-recently-sign-up',
        getMethod: 'get',
        keyPathValue: 'recent-sign-up',
        returnData: this.storeDataToRecentLoanApplicantAndLoanApplicantList.bind(this),
        undefinedState: this.noDataReturn.bind(this),
      },
      'getData',
    );
  }

  noDataReturn() {
    console.log('No data return');
  }

  storeDataToRecentLoanApplicant() {
    console.log('loan store in recent loan applicant');
  }

  storeDataToRecentLoanApplicantAndLoanApplicantList(data) {
    data.id = 'recent-loan-applicant';

    // After learning async, come modify this code so
    // `deleteRecentBorrowerSignUp` runs only when `storeDataToRecentLoanApplicant` has run

    indexDB.createDatabase(
      {
        storeName: 'borrower-recently-loan-applicant',
        data,
        trueState: this.storeDataToRecentLoanApplicant.bind(this),
        undefinedState: this.dataNotStored.bind(this),
      },
      'storeData',
    );

    const { ...cloneData } = data;
    delete cloneData.id;

    indexDB.createDatabase(
      {
        storeName: 'borrower-loan-applicant-list',
        data: cloneData,
        trueState: this.deleteRecentBorrowerSignUp.bind(this),
        undefinedState: this.dataNotStored.bind(this),
      },
      'storeData',
    );
  }

  dataNotStored() {
    console.log('Not stored');
  }

  deleteRecentBorrowerSignUp() {
    indexDB.createDatabase(
      {
        storeName: 'borrower-recently-sign-up',
        keyPathValue: 'recent-sign-up',
        trueState: this.navigateToProfilePage.bind(this),
        undefinedState: this.errorWhileDeletingKey.bind(this),
      },
      'deleteKey',
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
