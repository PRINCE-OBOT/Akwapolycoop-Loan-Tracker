import '../../admin/admin-login/template_admin-login.css';
import '../../assets/reset.css';
import '../../assets/font.css';
import '../../assets/common_general.css';
import '../../assets/style-border-button.css';

import handleFieldValidationLogic from '../../module/form-validation/field-validator';
import FieldValidationUtility from '../../module/form-validation/field-utility';

import indexDB from '../../module/indexDB/indexDB';
import Modal from '../../module/modal/modal';

const form = document.querySelector('form');
const username = form.querySelector('#username');
const password = form.querySelector('#password');
const inputs = form.querySelectorAll('input');
const messages = form.querySelectorAll('output.show-message');
const btnLogin = form.querySelector('.btn-login');

const dialog = document.querySelector('dialog');
const loginStatus = dialog.querySelector('.login-status');

form.addEventListener('input', handleFieldValidationLogic);
btnLogin.addEventListener('click', checkIfAllFieldFillIsValid);

function checkIfAllFieldFillIsValid() {
  new FieldValidationUtility({
    messages,
    inputs,
    runWhenAllFieldFillIsValid: checkIfLoanApplicantExist,
  });
}

function checkIfLoanApplicantExist() {
  indexDB.createDatabase(
    {
      storeName: 'borrower-loan-applicant-list',
      getMethod: 'getAll',
      username,
      password,
      trueState: navigateToProfilePage,
      undefinedState: checkIfBorrowerAlreadySignUp,
    },
    'checkIfLoginDetailsMatch',
  );
}

function checkIfBorrowerAlreadySignUp() {
  indexDB.createDatabase(
    {
      storeName: 'borrower-sign-up-list',
      getMethod: 'getAll',
      username,
      password,
      trueState: navigateToDashboardPage,
      undefinedState: incorrectUsernameOrPassword,
    },
    'checkIfLoginDetailsMatch',
  );
}

function showLoginStatusModal() {
  const modal = new Modal({ dialog });
  modal.showModal();
}

function setLoginStatusTextContent(textContent) {
  loginStatus.textContent = textContent;
  showLoginStatusModal();
}

function successLoginStatusTextContent() {
  setLoginStatusTextContent('Logging in...');
}

function navigateToProfilePage() {
  successLoginStatusTextContent();
  setTimeout(() => {
    window.location.href = './borrower-profile.html';
  }, 2000);
}

function navigateToDashboardPage() {
  successLoginStatusTextContent();

  setTimeout(() => {
    window.location.href = './borrower-dashboard.html';
  }, 2000);
}

function incorrectUsernameOrPassword() {
  setLoginStatusTextContent('Incorrect Username or Password');
}
