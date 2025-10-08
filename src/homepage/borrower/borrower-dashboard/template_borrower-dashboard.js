import '../../assets/form-logic.css';
import '../../assets/form.css';
import './template_borrower-dashboard.css';
import '../../assets/reset.css';
import '../../assets/font.css';
import '../../assets/common_general.css';
import '../../assets/style-border-button.css';

import FieldValidationUtility from '../../module/form-validation/field-utility';
import handleFieldValidationLogic from '../../module/form-validation/field-validator';
import SelectSwitchDisplay from '../../module/switchDisplay/select-switch-display';

import indexDB from '../../module/indexDB/indexDB';

import Modal from '../../module/modal/modal';

import {
  businessNameContainer,
  monthlyIncomeContainer,
  currentJobDurationContainer,
} from './template_borrower-dashboard-created-element';

const form = document.querySelector('.loan-application-form');

const email = form.querySelector('#email');
const firstName = form.querySelector('#first-name');
const lastName = form.querySelector('#last-name');
const gender = form.querySelector('#gender');
const phoneNumber = form.querySelector('#phone-number');
const dateOfBirth = form.querySelector('#date-of-birth');
const residentAddress = form.querySelector('#resident-address');
const nin = form.querySelector('#nin');
const passport = form.querySelector('#passport');
const employmentStatus = form.querySelector('#employment-status');
const businessName = businessNameContainer.querySelector('#business-name');
const monthlyIncome = monthlyIncomeContainer.querySelector('#monthly-income');
const currentJobDuration = currentJobDurationContainer.querySelector('#current-job-duration');
const desiredAmount = form.querySelector('#desired-amount');
const tenor = form.querySelector('#tenor');
const guarantorFirstName = form.querySelector('#guarantor-first-name');
const guarantorLastName = form.querySelector('#guarantor-last-name');
const guarantorEmail = form.querySelector('#guarantor-email');
const guarantorGender = form.querySelector('#guarantor-gender');
const guarantorPhoneNumber = form.querySelector('#guarantor-phone-number');
const guarantorDateOfBirth = form.querySelector('#guarantor-date-of-birth');
const guarantorResidentAddress = form.querySelector('#guarantor-resident-address');

const employmentAndIncome = form.querySelector('.employment-and-income');

const btnSubmitApplication = form.querySelector('.btn-submit-application');

const displayRegistrationProcess = document.querySelector('.displayRegistrationProcess');

const html = document.querySelector('html');

const btnLogout = document.querySelector('.logout-button');

const dialog = document.querySelector('dialog');
const btnYes = dialog.querySelector('.btn-yes');

form.addEventListener('input', handleFieldValidationLogic);

new Modal({ btnShowModal: btnLogout, dialog });

class BorrowerSessionManager {
  constructor() {
    this.render();
  }

  render() {
    this.bindEvent();
    this.checkIfThereIsRecentLoanApplicant();
    new SelectSwitchDisplay({
      select: employmentStatus,
      inputs: [businessNameContainer, monthlyIncomeContainer, currentJobDurationContainer],
      container: employmentAndIncome,
    });
  }

  bindEvent() {
    btnYes.addEventListener('click', this.logoutBorrower.bind(this));
    btnSubmitApplication.addEventListener('click', this.checkIfAllFieldFillIsValid.bind(this));
  }

  checkIfAllFieldFillIsValid() {
    const messages = form.querySelectorAll('output.show-message');
    const inputs = form.querySelectorAll('input:not([readonly])');

    new FieldValidationUtility({
      messages,
      inputs,
      runWhenAllFieldFillIsValid: this.getDataInRecentSignUp.bind(this),
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

  convertFileToDataURLFormat(data) {
    const selectPassport = passport.files[0];

    const reader = new FileReader();

    reader.readAsDataURL(selectPassport);

    reader.onload = (e) => {
      data.passport = e.target.result;

      this.getFormFieldData(data);
    };
  }

  getFormFieldData(data) {
    function setValue(element) {
      data[element.id] = element.value;
    }

    const listOfFormField = [];

    const selectedOption = employmentStatus.options[employmentStatus.selectedIndex];

    if (selectedOption.dataset.switch === 'showElement') {
      listOfFormField.unshift(businessName, monthlyIncome, currentJobDuration);
    }

    listOfFormField.unshift(
      gender,
      guarantorGender,
      guarantorEmail,
      guarantorLastName,
      guarantorFirstName,
      tenor,
      desiredAmount,
      nin,
      phoneNumber,
      dateOfBirth,
      residentAddress,
      guarantorPhoneNumber,
      guarantorDateOfBirth,
      guarantorResidentAddress,
      employmentStatus,
    );

    listOfFormField.forEach((field) => {
      setValue(field);
    });

    this.storeDataToRecentLoanApplicantAndLoanApplicantList(data);
  }

  getDataInRecentSignUp() {
    indexDB.createDatabase(
      {
        storeName: 'borrower-recently-sign-up',
        getMethod: 'get',
        keyPathValue: 'recent-sign-up',
        returnData: this.convertFileToDataURLFormat.bind(this),
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
