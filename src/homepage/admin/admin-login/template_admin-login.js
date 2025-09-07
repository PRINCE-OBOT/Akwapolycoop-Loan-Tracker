import './template_admin-login.css';
import '../../assets/reset.css';
import '../../assets/font.css';
import '../../assets/common_general.css';
import '../../assets/style-border-button.css';

import LoginCheck from '../../module/login/login-check';
import PasswordLogin from '../../module/login/login-field';

import indexDB from '../../module/indexDB/indexDB';
import Modal from '../../module/modal/modal';

const btnLogin = document.querySelector('.btn-login');
const inputs = document.querySelectorAll('input');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const dialog = document.querySelector('dialog');
const loginStatus = dialog.querySelector('.login-status');

function failModifyingAdminData() {
  alert('indexedDB was not able to modify isAdminLogin state');
}

function setLoginStatusTextContent(textContent) {
  loginStatus.textContent = textContent;
}

function openAdminDashboard() {
  setLoginStatusTextContent('Logging in...');

  setTimeout(() => {
    window.location.href = './admin-dashboard.html';
  }, 2000);
}

function modifyExistingDataInDatabase() {
  indexDB.createDatabase(
    {
      storeName: 'admin-data',
      keyPathValue: 'admin',
      newValue: { isAdminLogin: true },
      keys: ['isAdminLogin'],

      runSuccessStatus: openAdminDashboard,
      runErrorStatus: failModifyingAdminData,
    },
    'modifyExistingData',
  );
}

function runWhenKeyValueExistAndAdminIsFalse() {
  modifyExistingDataInDatabase();
}

function runWhenKeyValueExistAndAdminLoginIsTrue() {
  setLoginStatusTextContent('Admin Already Exist');
}

function runWhenKeyValueDoesNotExist() {
  alert('keys path value does not exist');
}

function checkIfKeyValueExistAndIsAdminLogin() {
  indexDB.createDatabase(
    {
      storeName: 'admin-data',
      keyPathValue: 'admin',
      keys: 'isAdminLogin',
      runSuccessStatus: runWhenKeyValueExistAndAdminLoginIsTrue,
      runFairStatus: runWhenKeyValueExistAndAdminIsFalse,
      runErrorStatus: runWhenKeyValueDoesNotExist,
    },
    'checkIfKeyPathValueExistAndFieldIsTrue',
  );
}

function runWhenDataIsIncorrect() {
  setLoginStatusTextContent('Incorrect username or password');
}

function runWhenDataIsCorrect() {
  checkIfKeyValueExistAndIsAdminLogin();
}

function processUserLoginDetails() {
  const modal = new Modal({ dialog });
  modal.showModal();

  indexDB.createDatabase(
    {
      keyPathValue: 'admin',
      username: username.value,
      password: password.value,
      storeName: 'admin-data',
      runSuccessStatus: runWhenDataIsCorrect,
      runErrorStatus: runWhenDataIsIncorrect,
    },
    'checkIfLoginDetailsMatch',
  );
}

new PasswordLogin({ field: password });

new PasswordLogin({ field: username });

new LoginCheck({
  loginButton: btnLogin,
  inputs,
  runWhenFormIsFilled: processUserLoginDetails,
});
