import indexDB from '../../module/indexDB/indexDB';

import loanApplicantForm from './loan-applicant-form';

import eventBus from '../../module/event-bus/event';
import FieldValidationUtility from '../../module/form-validation/field-utility';

const form = loanApplicantForm.querySelector('form');

// Applicant Details
const firstName = form.querySelector('#first-name');
const lastName = form.querySelector('#last-name');
const email = form.querySelector('#email');
const gender = form.querySelector('#gender');
const maritalStatus = form.querySelector('#maritalStatus');
const dateOfBirth = form.querySelector('#date-of-birth');
const residentAddress = form.querySelector('#resident-address');
const phoneNumber = form.querySelector('#phone-number');
const nin = form.querySelector('#nin');
const state = form.querySelector('#state');
const lga = form.querySelector('#lga');
const staffId = form.querySelector('#staffId');
const department = form.querySelector('#department');
const fixedDepositAmount = form.querySelector('#fixed-deposit-amount');
const position = form.querySelector('#position');
const passport = form.querySelector('#passport');
const employmentDate = form.querySelector('#employmentDate');
const employmentType = form.querySelector('#employmentType');
const salaryRange = form.querySelector('#salaryRange');
const applicationLetter = form.querySelector('#applicationLetter');
const RNumber = form.querySelector('#RNumber');
const accountNumber = form.querySelector('#account-number');
const accountName = form.querySelector('#account-name');
const bankName = form.querySelector('#bank-name');

// First guarantor information
const guarantor1Name = form.querySelector('#guarantor1Name');
const guarantor1StaffId = form.querySelector('#guarantor1StaffId');
const guarantorDepartment = form.querySelector('#guarantor1Department');
const guarantor1Position = form.querySelector('#guarantor1Position');
const guarantor1Phone = form.querySelector('#guarantor1Phone');
const guarantor1Email = form.querySelector('#guarantor1Email');
const guarantor1Relationship = form.querySelector('#guarantor1Relationship');

// Second guarantor information
const guarantor2Name = form.querySelector('#guarantor2Name');
const guarantor2StaffId = form.querySelector('#guarantor2StaffId');
const guarantor2Department = form.querySelector('#guarantor2Department');
const guarantor2Position = form.querySelector('#guarantor2Position');
const guarantor2Phone = form.querySelector('#guarantor2Phone');
const guarantor2Email = form.querySelector('#guarantor2Email');
const guarantor2Relationship = form.querySelector('#guarantor2Relationship');

const btnSubmitApplication = form.querySelector('.btn-submit-application');

const submitLoanApplicationFormEvent = new CustomEvent('all-field-valid', {
  detail: {
    form,
    functionToGetDataInIndexBD: isUserAlreadyAccountExist,
  },
});

const Event = ({
  eventName = 'dialog-manager',
  text = null,
  closedByValue = 'any',
  contentKey = 'status',
}) =>
  new CustomEvent(eventName, {
    detail: {
      contentKey,
      closedByValue,
      text,
    },
  });

const events = {
  success: Event({
    text: 'You form has been submitted. Under Review',
  }),
  showTakeLoan: Event({
    eventName: 'custom-change-content',
    contentKey: 'take-loan',
  }),
  userAlreadyExist: Event({ text: 'User Already Exist' }),
};

const bindSubmitApplicationButton = () =>
  btnSubmitApplication.addEventListener('click', () =>
    eventBus.dispatchEvent(submitLoanApplicationFormEvent),
  );

function resetForm() {
  form.reset();
  FieldValidationUtility.resetFieldValidity(form);
}

function userAccountExist() {
  alert('exist');
}

function isUserAlreadyAccountExist() {
  indexDB.interact(
    {
      storeName: 'loan-applicant-list',
      getMethod: 'getAll',
      firstName,
      lastName,
      email,
      returnData: userAccountExist,
      falseState: gatherData,
    },
    'isUserAlreadyAccountExist',
  );
}

function gatherData() {
  const passportDataURL = convertPassportToDataURL();

  passportDataURL.then((data) => {
    const applicationLetterURL = convertApplicationLetterToDataURL(data);

    applicationLetterURL.then((moreData) => {
      insertMoreFormFieldValues(moreData);
    });
  });
}

function convertApplicationLetterToDataURL(data) {
  const applicantApplicationLetter = applicationLetter.files[0];

  const reader = new FileReader();
  reader.readAsDataURL(applicantApplicationLetter);

  return new Promise((resolve) => {
    reader.onload = (e) => {
      data.membershipApplicationForm.applicationLetter = e.target.result;
      resolve(data);
    };
  });
}

function convertPassportToDataURL() {
  const applicantPassport = passport.files[0];

  const reader = new FileReader();
  reader.readAsDataURL(applicantPassport);

  const data = {};
  data.membershipApplicationForm = {};

  return new Promise((resolve) => {
    reader.onload = (e) => {
      data.membershipApplicationForm.passport = e.target.result;
      resolve(data);
    };
  });
}

function insertMoreFormFieldValues(data) {
  data.membershipApplicationForm.dateAndTime = new Date();
  data.membershipApplicationForm.status = 'Pending';

  function setValue(element) {
    data.membershipApplicationForm[element.id] = element.value;
  }

  const listOfFormField = [
    firstName,
    lastName,
    email,
    gender,
    staffId,
    department,
    fixedDepositAmount,
    position,
    maritalStatus,
    employmentDate,
    employmentType,
    salaryRange,
    RNumber,
    accountNumber,
    accountName,
    bankName,
    nin,
    state,
    lga,
    phoneNumber,
    dateOfBirth,
    residentAddress,
    guarantor1Name,
    guarantor1StaffId,
    guarantorDepartment,
    guarantor1Position,
    guarantor1Phone,
    guarantor1Email,
    guarantor1Relationship,
    guarantor2Name,
    guarantor2StaffId,
    guarantor2Department,
    guarantor2Position,
    guarantor2Phone,
    guarantor2Email,
    guarantor2Relationship,
  ];

  listOfFormField.forEach((field) => {
    setValue(field);
  });

  // eventBus.dispatchEvent(events)
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

function displayFormSubmissionStatus() {
  eventBus.dispatchEvent(events.success);
}

function loanApplicantDataNotStore() {
  console.log('loan applicant data not stored');
}

export default bindSubmitApplicationButton;
