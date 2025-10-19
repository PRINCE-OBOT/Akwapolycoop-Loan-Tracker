import '../../assets/form-logic.css';
import '../../assets/form.css';
import '../../assets/reset.css';
import '../../assets/font.css';
import '../../assets/common_general.css';
import '../../assets/style-border-button.css';

import registerLocalStorageCustomMethod from '../../module/localStorage/localStorage';
import FieldValidationUtility from '../../module/form-validation/field-utility';
import PasswordValidator from '../../module/form-validation/password-validator';
import handleFieldValidationLogic from '../../module/form-validation/field-validator';

import indexDB from '../../module/indexDB/indexDB';

import appendDialogToBody from '../../module/dialog/dialog-manager';
import eventBus from '../../module/event-bus/event';

const form = document.querySelector('.borrower-sign-up-form');
const messages = form.querySelectorAll('output.show-message');
const inputs = form.querySelectorAll('input');
const firstName = form.querySelector('#first-name');
const lastName = form.querySelector('#last-name');
const email = form.querySelector('#email');
const password = form.querySelector('#password');
const passwordMessage = form.querySelector('#password-message');
const confirmPassword = form.querySelector('#confirm-password');
const confirmPasswordMessage = form.querySelector('#confirm-password-message');
const btnSignUp = form.querySelector('.btn-sign-up');

registerLocalStorageCustomMethod();
appendDialogToBody.prototype.body = document.body;
appendDialogToBody();

const resetForm = () => {
  form.reset();
};

const processNavigatingToDashboard = () => {
  setBorrowerSignUpStatus('Signing up...');
  navigateToDashboardPage();
};

function storeLoanApplicantIDInLocalStorage(id) {
  localStorage.setData({ key: 'recent-loan-applicant', data: { id } });
  processNavigatingToDashboard();
}

function navigateToDashboardPage() {
  setTimeout(() => {
    window.location.href = './borrower-dashboard.html';
  }, 2000);
}

const status = ({ text, closedByValue = 'any' }) =>
  new CustomEvent('dialog-manager', {
    detail: {
      contentKey: 'status',
      closedByValue,
      text,
    },
  });

const statusEvent = {
  fail: status({ text: 'Account Already Exist', closedByValue: 'any' }),
  signUp: status({ text: 'Signing in...', closedByValue: 'closerequest' }),
};

const setBorrowerSignUpStatus = () => {
  eventBus.dispatchEvent(statusEvent.signUp);
};

const loanApplicantDataNotStore = () => {
  console.log('Borrower data not stored');
};

const generateUsername = () => {
  const randomNumber = Math.floor(Math.random() * 200) + 1;
  const alterFirstName = firstName.value.slice(0, 3);
  const alterLastName = lastName.value.slice(0, 5);
  const username = `${alterFirstName}_${alterLastName}${randomNumber}`;

  return username.toLowerCase();
};

const getSignUpDataFromForm = () => {
  const username = generateUsername();

  const SignUpData = {
    signUpData: {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
      username,
    },
  };

  return SignUpData;
};

const storeDataToLoanApplicantList = () => {
  const loanApplicantData = getSignUpDataFromForm();

  indexDB.interact(
    {
      storeName: 'loan-applicant-list',
      data: loanApplicantData,
      trueState: storeLoanApplicantIDInLocalStorage,
      undefinedState: loanApplicantDataNotStore,
    },
    'storeData',
  );
};

const accountAlreadyExist = () => {
  eventBus.dispatchEvent(statusEvent.fail);
};

const checkIfUserExistInLoanApplicantList = () => {
  indexDB.interact(
    {
      storeName: 'loan-applicant-list',
      getMethod: 'getAll',
      firstName,
      lastName,
      email,
      trueState: accountAlreadyExist,
      falseState: storeDataToLoanApplicantList,
    },
    'checkIfUserAlreadyHaveAccount',
  );
};

const checkIfAllFieldFillIsValid = () => {
  new FieldValidationUtility({
    messages,
    inputs,
    runWhenAllFieldFillIsValid: checkIfUserExistInLoanApplicantList,
  });
};

btnSignUp.addEventListener('click', checkIfAllFieldFillIsValid);
form.addEventListener('input', handleFieldValidationLogic);
window.addEventListener('pageshow', resetForm);

new PasswordValidator({ password, passwordMessage, confirmPassword, confirmPasswordMessage });
