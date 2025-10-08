import '../../assets/form-logic.css';
import '../../assets/form.css';
import './template_borrower-dashboard.css';
import '../../assets/reset.css';
import '../../assets/font.css';
import '../../assets/common_general.css';
import '../../assets/style-border-button.css';

import registerLocalStorageCustomMethod from '../../module/localStorage/localStorage';
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

const html = document.querySelector('html');

const btnLogout = document.querySelector('.logout-button');

const dialog = document.querySelector('dialog');
const btnYes = dialog.querySelector('.btn-yes');

form.addEventListener('input', handleFieldValidationLogic);
registerLocalStorageCustomMethod();

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
    const data = localStorage.getData({ key: 'recent-loan-applicant' });

    if (data === null) {
      this.navigateToLoginPage();
      return;
    }

    html.style.display = 'block';

    const id = data.id;

    indexDB.createDatabase(
      {
        storeName: 'loan-applicant-list',
        keyPathValue: id,
        getMethod: 'get',
        returnData: this.returnData.bind(this),
        undefinedState: this.errorGettingData.bind(this),
      },
      'getData',
    );
  }

  errorGettingData() {
    console.log('Error while getting data from dashboard');
  }

  returnData(data) {
    if (data === undefined) {
      console.log('Did not find key in store');
      return;
    }
    console.log(data);
    firstName.value = data.firstName;
    lastName.value = data.lastName;
    email.value = data.email;
  }

  navigateToLoginPage() {
    window.location.href = './borrower-login.html';
    console.log('You are not logged in');
  }

  logoutBorrower() {
    localStorage.removeItem('recent-loan-applicant');
    this.navigateToLoginPage();
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
}
new BorrowerSessionManager();
