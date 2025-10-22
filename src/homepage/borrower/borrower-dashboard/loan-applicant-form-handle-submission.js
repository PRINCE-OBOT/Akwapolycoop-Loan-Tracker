import indexDB from '../../module/indexDB/indexDB';

import loanApplicantForm from './loan-applicant-form';
import {
  businessNameContainer,
  monthlyIncomeContainer,
  currentJobDurationContainer,
} from './employment-and-income-content';

import eventBus from '../../module/event-bus/event';

const form = loanApplicantForm;

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
const guarantorFirstName = form.querySelector('#guarantor-first-name');
const guarantorLastName = form.querySelector('#guarantor-last-name');
const guarantorEmail = form.querySelector('#guarantor-email');
const guarantorGender = form.querySelector('#guarantor-gender');
const guarantorPhoneNumber = form.querySelector('#guarantor-phone-number');
const guarantorDateOfBirth = form.querySelector('#guarantor-date-of-birth');
const guarantorResidentAddress = form.querySelector('#guarantor-resident-address');
const accountNumber = form.querySelector('#account-number');
const accountName = form.querySelector('#account-name');
const bankName = form.querySelector('#bank-name');

const btnSubmitApplication = form.querySelector('.btn-submit-application');

const submitLoanApplicationFormEvent = new CustomEvent('all-field-valid', {
  detail: {
    form,
    functionToGetDataInIndexBD: getLoanApplicantDataIndexedDB,
  },
});

const bindSubmitApplicationButton = () =>
  btnSubmitApplication.addEventListener('click', () =>
    eventBus.dispatchEvent(submitLoanApplicationFormEvent),
  );

function getLoanApplicantDataIndexedDB() {
  const data = localStorage.getData({ key: 'recent-loan-applicant' });

  indexDB.interact(
    {
      storeName: 'loan-applicant-list',
      keyPathValue: data?.id,
      getMethod: 'get',
      returnData: convertFileToDataURLFormat,
      undefinedState: errorGettingData,
    },
    'getData',
  );
}

function resetForm() {
  loanApplicantForm.reset();
}

function convertFileToDataURLFormat(data) {
  const selectedPassport = passport.files[0];

  const reader = new FileReader();

  reader.readAsDataURL(selectedPassport);

  reader.onload = (e) => {
    data.loanApplicantFormData = {};
    data.loanApplicantFormData.passport = e.target.result;

    insertMoreFormFieldValues(data);
  };
}

function insertMoreFormFieldValues(data) {
  data.loanApplicantFormData.dateAndTime = new Date();
  data.loanApplicantFormData.status = 'Pending';

  function setValue(element) {
    data.loanApplicantFormData[element.id] = element.value;
  }

  const listOfFormField = [
    gender,
    guarantorGender,
    guarantorEmail,
    guarantorLastName,
    guarantorFirstName,
    accountNumber,
    accountName,
    bankName,
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
  resetForm();
  indexDB.interact(
    {
      storeName: 'loan-applicant-list',
      data,
      trueState: displayFormSubmissionStatus,
      undefinedState: loanApplicantDataNotStore,
    },
    'storeData',
  );
}

const Event = ({ eventName, text = null, closedByValue = 'any', contentKey = null }) =>
  new CustomEvent(eventName, {
    detail: {
      contentKey,
      closedByValue,
      text,
    },
  });

const events = {
  success: Event({
    eventName: 'dialog-manager',
    contentKey: 'status',
    text: 'You form has been submitted. Under Review',
  }),
  showTakeLoan: Event({
    eventName: 'custom-change-content',
    contentKey: 'take-loan',
  }),
};

function displayFormSubmissionStatus() {
  eventBus.dispatchEvent(events.success);
}

function loanApplicantDataNotStore() {
  console.log('loan applicant data not stored');
}

function errorGettingData() {
  console.log('Error while getting data');
}

export default bindSubmitApplicationButton;
