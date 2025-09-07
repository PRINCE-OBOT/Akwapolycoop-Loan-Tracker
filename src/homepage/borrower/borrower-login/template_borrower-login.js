import '../../admin/admin-login/template_admin-login.css';
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

const registerPageReference = document.createElement('a');
registerPageReference.href = './borrower-register.html';

function failModifyingBorrowerData() {
  alert('indexedDB was not able to modify isBorrowerLogin state');
}

function setLoginStatusTextContent(textContent) {
  loginStatus.textContent = textContent;
}

function openBorrowerRegistrationPage() {
  setLoginStatusTextContent('Logging in...');

  setTimeout(() => {
    registerPageReference.click();
  }, 2000);
}

function modifyExistingDataInDatabase() {
  indexDB.createDatabase(
    {
      storeName: 'borrower-data',
      keyPathValue: 'borrower',
      newValue: true,
      key: 'isBorrowerLogin',

      runSuccessStatus: openBorrowerRegistrationPage,
      runErrorStatus: failModifyingBorrowerData,
    },
    'modifyExistingData',
  );
}

function runWhenKeyValueExistAndBorrowerLoginIsFalse() {
  modifyExistingDataInDatabase();
}

function runWhenKeyValueExistAndBorrowerLoginIsTrue() {
  setLoginStatusTextContent('Borrower Already Exist');
}

function runWhenKeyValueDoesNotExist() {
  alert('Key path value does not exist');
}

function checkIfKeyValueExistAndIsAdminLogin() {
  indexDB.createDatabase(
    {
      storeName: 'borrower-data',
      keyPathValue: 'borrower',
      key: 'isBorrowerLogin',
      runSuccessStatus: runWhenKeyValueExistAndBorrowerLoginIsTrue,
      runFairStatus: runWhenKeyValueExistAndBorrowerLoginIsFalse,
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
      keyPathValue: 'borrower',
      username: username.value,
      password: password.value,
      storeName: 'borrower-data',
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
