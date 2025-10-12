import './template_admin-login.css';
import '../../assets/reset.css';
import '../../assets/font.css';
import '../../assets/common_general.css';
import '../../assets/style-border-button.css';

import handleFieldValidationLogic from '../../module/form-validation/field-validator';
import FieldValidationUtility from '../../module/form-validation/field-utility';

import indexDB from '../../module/indexDB/indexDB';
import Modal from '../../module/modal/modal';

const form = document.querySelector('.admin-login-form');
const username = form.querySelector('#username');
const password = form.querySelector('#password');
const inputs = form.querySelectorAll('input');
const messages = form.querySelectorAll('output.show-message');
const btnLogin = form.querySelector('.btn-login');

const dialog = document.querySelector('dialog');
const loginStatus = dialog.querySelector('.login-status');

const modal = new Modal({ dialog });

const error = () => {
  console.log('Error');
};

const resetForm = () => {
  form.reset();
};

const adminLoginDataStore = () => {
  console.log('Admin data stored');
};

const showLoginStatusModal = () => {
  modal.showModal();
};

const navigateToDashboardPage = () => {
  setTimeout(() => {
    window.location.href = './admin-dashboard.html';
  }, 2000);
};

const setLoanApplicantIDInLocalStorage = () => {
  localStorage.setData({ key: 'recent-admin', data: { id: 1 } });
};

const setLoginStatusTextContent = (textContent) => {
  loginStatus.textContent = textContent;
  showLoginStatusModal();
};

const processNavigatingToDashboard = () => {
  setLoginStatusTextContent('Logging in...');
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
      undefinedState: error,
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
