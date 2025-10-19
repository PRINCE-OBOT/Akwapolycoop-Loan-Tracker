import '../../admin/admin-login/template_admin-login.css';
import '../../assets/reset.css';
import '../../assets/font.css';
import '../../assets/common_general.css';
import '../../assets/style-border-button.css';

import registerLocalStorageCustomMethod from '../../module/localStorage/localStorage';
import handleFieldValidationLogic from '../../module/form-validation/field-validator';
import FieldValidationUtility from '../../module/form-validation/field-utility';

import indexDB from '../../module/indexDB/indexDB';
import eventBus from '../../module/event-bus/event';
import appendDialogToBody from '../../module/dialog/dialog-manager';

const form = document.querySelector('.borrower-login-form');
const username = form.querySelector('#username');
const password = form.querySelector('#password');
const inputs = form.querySelectorAll('input');
const messages = form.querySelectorAll('output.show-message');
const btnLogin = form.querySelector('.btn-login');

registerLocalStorageCustomMethod();

appendDialogToBody.prototype.body = document.body;
appendDialogToBody();

const navigateToDashboardPage = () => {
  setTimeout(() => {
    window.location.href = './borrower-dashboard.html';
  }, 2000);
};

const setLoanApplicantIDInLocalStorage = (id) => {
  localStorage.setData({ key: 'recent-loan-applicant', data: { id } });
};

const status = ({ text, closedByValue = 'any' }) =>
  new CustomEvent('dialog-manager', {
    detail: {
      contentKey: 'status',
      closedByValue,
      text,
    },
  });

const statusEvent = {
  login: status({ text: 'Logging in...', closedByValue: 'closerequest' }),
  fail: status({ text: 'Incorrect Username or Password' }),
};

const displayIncorrectUsernameOrPassword = () => {
  eventBus.dispatchEvent(statusEvent.fail);
};

const processNavigatingToDashboard = (id) => {
  setLoanApplicantIDInLocalStorage(id);
  eventBus.dispatchEvent(statusEvent.login);
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
