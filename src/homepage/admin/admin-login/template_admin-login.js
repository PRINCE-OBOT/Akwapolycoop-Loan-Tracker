import './template_admin-login.css';
import '../../assets/reset.css';
import '../../assets/font.css';
import '../../assets/common_general.css';

import LoginCheck from '../../module/login/login-check';
import PasswordLogin from '../../module/login/login-field';

import indexDB from '../../module/indexDB/indexDB';

const btnLogin = document.querySelector('.btn-login');
const inputs = document.querySelectorAll('input');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

function runWhenDataIsCorrect() {
  alert('Data is correct');
}

function runWhenDataIsIncorrect() {
  alert('Data is incorrect');
}

function getDataFromForm() {
  const adminLoginData = {
    keyPathValue: 'admin',
    username: username.value,
    password: password.value,
    storeName: 'admin-data',
    runSuccessStatus: runWhenDataIsCorrect,
    runErrorStatus: runWhenDataIsIncorrect,
  };

  indexDB.createDatabase();

  indexDB.checkIfDataMatch(adminLoginData);
}

new PasswordLogin({ field: password });

new PasswordLogin({ field: username });

new LoginCheck({
  loginButton: btnLogin,
  inputs,
  runWhenFormIsFilled: getDataFromForm,
});
