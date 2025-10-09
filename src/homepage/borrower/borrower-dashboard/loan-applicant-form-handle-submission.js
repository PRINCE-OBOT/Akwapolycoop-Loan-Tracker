import indexDB from '../../module/indexDB/indexDB';

import loanApplicantForm from './loan-applicant-form';
import {
  businessNameContainer,
  monthlyIncomeContainer,
  currentJobDurationContainer,
} from './employment-and-income-content';
import FieldValidationUtility from '../../module/form-validation/field-utility';

const form = loanApplicantForm();

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

const btnSubmitApplication = form.querySelector('.btn-submit-application');

const bindSubmitApplicationButton = () =>
  btnSubmitApplication.addEventListener('click', checkIfAllFieldFillIsValid);

function checkIfAllFieldFillIsValid() {
  const messages = form.querySelectorAll('output.show-message');
  const inputs = form.querySelectorAll('input');

  new FieldValidationUtility({
    messages,
    inputs,
    runWhenAllFieldFillIsValid: getLoanApplicantIdInLocalStorage,
  });
}

function getLoanApplicantIdInLocalStorage() {
  const data = localStorage.getData({ key: 'recent-loan-applicant' });

  getLoanApplicantDataIndexedDB(data);
}

function getLoanApplicantDataIndexedDB(data) {
  const id = data.id;

  indexDB.createDatabase(
    {
      storeName: 'loan-applicant-list',
      keyPathValue: id,
      getMethod: 'get',
      returnData: convertFileToDataURLFormat,
      undefinedState: errorGettingData,
    },
    'getData',
  );
}

function convertFileToDataURLFormat(data) {
  const selectedPassport = passport.files[0];

  const reader = new FileReader();

  reader.readAsDataURL(selectedPassport);

  reader.onload = (e) => {
    data.loanApplicantFormData.passport = e.target.result;

    insertMoreFormFieldValues(data);
  };
}

function insertMoreFormFieldValues(data) {
  function setValue(element) {
    data.loanApplicantFormData[element.id] = element.value;
  }

  const listOfFormField = [
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
  ];

  const selectedOption = employmentStatus.options[employmentStatus.selectedIndex];

  if (selectedOption.dataset.switch === 'showElement') {
    listOfFormField.unshift(businessName, monthlyIncome, currentJobDuration);
  }

  listOfFormField.forEach((field) => {
    setValue(field);
  });

  storeDataLoanApplicantList(data);
}

function storeDataLoanApplicantList(data) {
  indexDB.createDatabase(
    {
      storeName: 'loan-applicant-list',
      data,
      trueState: displayFormSubmissionStatus,
      undefinedState: loanApplicantDataNotStore,
    },
    'storeData',
  );
}

function displayFormSubmissionStatus() {
  alert('You form has been submitted');
}

function loanApplicantDataNotStore() {
  console.log('loan applicant data not stored');
}

function errorGettingData() {
  console.log('Error while getting data');
}

console.log('hey');

export default bindSubmitApplicationButton;
