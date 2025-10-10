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

import Modal from '../../module/modal/modal';

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

const dialog = document.querySelector('dialog');
const displaySignUpStatus = dialog.querySelector('.display_borrower-sign-up-status');

form.addEventListener('input', handleFieldValidationLogic);
btnSignUp.addEventListener('click', checkIfAllFieldFillIsValid);
window.addEventListener('pageshow', resetForm);

registerLocalStorageCustomMethod();

function resetForm() {
  form.reset();
}

function checkIfAllFieldFillIsValid() {
  new FieldValidationUtility({
    messages,
    inputs,
    runWhenAllFieldFillIsValid: checkIfUserExistInLoanApplicantList,
  });
}

function checkIfUserExistInLoanApplicantList() {
  indexDB.createDatabase(
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
}

function storeDataToLoanApplicantList() {
  const loanApplicantData = getSignUpDataFromForm();

  indexDB.createDatabase(
    {
      storeName: 'loan-applicant-list',
      data: loanApplicantData,
      trueState: storeLoanApplicantIDInLocalStorage,
      undefinedState: loanApplicantDataNotStore,
    },
    'storeData',
  );
}

function storeLoanApplicantIDInLocalStorage(id) {
  const data = { id };
  localStorage.setData({ key: 'recent-loan-applicant', data });

  navigateToDashboardPage();
}

function navigateToDashboardPage() {
  setBorrowerSignUpStatus('Signing up...');

  setTimeout(() => {
    window.location.href = './borrower-dashboard.html';
  }, 2000);
}

function generateUsername() {
  const randomNumber = Math.floor(Math.random() * 200) + 1;
  const alterFirstName = firstName.value.slice(0, 3);
  const alterLastName = lastName.value.slice(0, 5);
  const username = `${alterFirstName}_${alterLastName}${randomNumber}`;

  return username.toLowerCase();
}

function getSignUpDataFromForm() {
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
}

function accountAlreadyExist() {
  setBorrowerSignUpStatus('Account already exist');
}

function displaySignUpStatusModal() {
  const modal = new Modal({ dialog });
  modal.showModal();
}

function setBorrowerSignUpStatus(text) {
  displaySignUpStatus.textContent = text;
  displaySignUpStatusModal();
}

function loanApplicantDataNotStore() {
  console.log('Borrower data not stored');
}

new PasswordValidator({ password, passwordMessage, confirmPassword, confirmPasswordMessage });
