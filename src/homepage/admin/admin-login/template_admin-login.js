import './template_admin-login.css';
import '../../assets/reset.css';
import '../../assets/font.css';
import '../../assets/common_general.css';
import '../../assets/style-border-button.css';

import handleFieldValidationLogic from '../../module/form-validation/field-validator';
import FieldValidationUtility from '../../module/form-validation/field-utility';

import indexDB from '../../module/indexDB/indexDB';
import registerLocalStorageCustomMethod from '../../module/localStorage/localStorage';
import eventBus from '../../module/event-bus/event';
import appendDialogToBody from '../../module/dialog/dialog-manager';

const form = document.querySelector('.admin-login-form');
const username = form.querySelector('#username');
const password = form.querySelector('#password');
const inputs = form.querySelectorAll('input');
const messages = form.querySelectorAll('output.show-message');
const btnLogin = form.querySelector('.btn-login');

registerLocalStorageCustomMethod();
appendDialogToBody.prototype.body = document.body;
appendDialogToBody();

const error = () => {
  console.log('Error');
};

const resetForm = () => {
  form.reset();
};

const adminLoginDataStore = () => {
  console.log('Admin data stored');
};

const navigateToDashboardPage = () => {
  setTimeout(() => {
    window.location.href = './admin-dashboard.html';
  }, 2000);
};

const setLoanApplicantIDInLocalStorage = () => {
  localStorage.setData({ key: 'recent-admin', data: { id: 1 } });
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

const processNavigatingToDashboard = () => {
  eventBus.dispatchEvent(statusEvent.login);
  setLoanApplicantIDInLocalStorage();
  navigateToDashboardPage();
};

const checkIfLoginDataIsCorrect = () => {
  indexDB.interact(
    {
      storeName: 'admin',
      username,
      password,
      getMethod: 'getAll',
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
    runWhenAllFieldFillIsValid: checkIfLoginDataIsCorrect,
  });
};

const storeAdminSignUpData = () => {
  const data = {
    id: 1,
    signUpData: {
      username: 'admin',
      password: '123456',
    },
  };

  indexDB.interact(
    {
      storeName: 'admin',
      data,
      trueState: adminLoginDataStore,
      undefinedState: error,
    },
    'storeData',
  );
};

const checkIfAdminSignUpDataExist = (data) => {
  if (!data) storeAdminSignUpData();
};

(function getAdminDataFromIndexedBD() {
  indexDB.interact(
    {
      storeName: 'admin',
      keyPathValue: 1,
      getMethod: 'get',
      returnData: checkIfAdminSignUpDataExist,
      undefinedState: error,
    },
    'getData',
  );
})();

form.addEventListener('input', handleFieldValidationLogic);
btnLogin.addEventListener('click', checkIfAllFieldFillIsValid);
window.addEventListener('pageshow', resetForm);
