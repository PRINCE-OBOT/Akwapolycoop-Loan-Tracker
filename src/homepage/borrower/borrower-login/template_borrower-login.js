import '../../admin/admin-login/template_admin-login.css';
import '../../assets/reset.css';
import '../../assets/font.css';
import '../../assets/common_general.css';
import '../../assets/style-border-button.css';

import registerLocalStorageCustomMethod from '../../module/localStorage/localStorage';
import handleFieldValidationLogic from '../../module/form-validation/field-validator';
import FieldValidationUtility from '../../module/form-validation/field-utility';

import indexDB from '../../module/indexDB/indexDB';
import Modal from '../../module/modal/modal';

const form = document.querySelector('.borrower-login-form');
const username = form.querySelector('#username');
const password = form.querySelector('#password');
const inputs = form.querySelectorAll('input');
const messages = form.querySelectorAll('output.show-message');
const btnLogin = form.querySelector('.btn-login');

const dialog = document.querySelector('dialog');
const loginStatus = dialog.querySelector('.login-status');

const modal = new Modal({ dialog });

registerLocalStorageCustomMethod();

const showLoginStatusModal = () => {
  modal.showModal();
};

const setLoginStatusTextContent = (textContent) => {
  loginStatus.textContent = textContent;
  showLoginStatusModal();
};

const navigateToDashboardPage = () => {
  setTimeout(() => {
    window.location.href = './borrower-dashboard.html';
  }, 2000);
};

const setLoanApplicantIDInLocalStorage = (id) => {
  localStorage.setData({ key: 'recent-loan-applicant', data: { id } });
};

const displayIncorrectUsernameOrPassword = () => {
  setLoginStatusTextContent('Incorrect Username or Password');
};

const processNavigatingToDashboard = (id) => {
  setLoanApplicantIDInLocalStorage(id);
  setLoginStatusTextContent('Logging in...');
  navigateToDashboardPage();
};

const checkIfLoanApplicantDataIsCorrect = () => {
  indexDB.interact(
    {
      storeName: 'loan-applicant-list',
      getMethod: 'getAll',
      username,
      password,
      trueState: processNavigatingToDashboard,
      undefinedState: displayIncorrectUsernameOrPassword,
    },
    'checkIfLoginDetailsMatch',
  );
};

const checkIfAllFieldFillIsValid = () => {
  new FieldValidationUtility({
    messages,
    inputs,
    runWhenAllFieldFillIsValid: checkIfLoanApplicantDataIsCorrect,
  });
};

btnLogin.addEventListener('click', checkIfAllFieldFillIsValid);
form.addEventListener('input', handleFieldValidationLogic);
