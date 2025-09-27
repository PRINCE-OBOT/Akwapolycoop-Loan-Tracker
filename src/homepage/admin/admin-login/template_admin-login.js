import './template_admin-login.css';
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
window.addEventListener('pageshow', resetForm);

function resetForm() {
  form.reset();
}

function checkIfAllFieldFillIsValid() {
  new FieldValidationUtility({
    messages,
    inputs,
    runWhenAllFieldFillIsValid: checkIfLoginDetailsMatch,
  });
}

function checkIfLoginDetailsMatch() {
  indexDB.createDatabase(
    {
      storeName: 'admin-data',
      keyPathValue: 'admin',
      username,
      password,
      getMethod: 'getAll',
      trueState: checkIfAdminIsAlreadyLogin,
      undefinedState: setIncorrectLoginStatus,
    },
    'checkIfLoginDetailsMatch',
  );
}

function checkIfAdminIsAlreadyLogin() {
  indexDB.createDatabase(
    {
      storeName: 'admin-data',
      keyPathValue: 'admin',
      getMethod: 'get',
      key: 'isAdminLogin',
      trueState: setAdminAlreadyLoginStatus,
      undefinedState: loginAdmin,
    },
    'checkStateOfData',
  );
}

function loginAdmin() {
  indexDB.createDatabase(
    {
      storeName: 'admin-data',
      keyPathValue: 'admin',
      getMethod: 'get',
      newValue: { isAdminLogin: true },
      keys: ['isAdminLogin'],

      trueState: navigateToAdminDashboard,
      undefinedState: failModifyingAdminData,
    },
    'modifyData',
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

function setIncorrectLoginStatus() {
  setLoginStatusTextContent('Incorrect username or password');
}

function setAdminAlreadyLoginStatus() {
  setLoginStatusTextContent('Admin Already Exist');
}

function navigateToAdminDashboard() {
  setLoginStatusTextContent('Logging in...');
  setTimeout(() => {
    window.location.href = './admin-dashboard.html';
  }, 2000);
}

function failModifyingAdminData() {
  console.log('indexedDB was not able to modify isAdminLogin state');
}
