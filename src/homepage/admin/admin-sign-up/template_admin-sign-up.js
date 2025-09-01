/* eslint-disable no-new */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import './template_admin-sign-up.css';
import '../../assets/reset.css';
import '../../assets/font.css';
import '../../assets/common_general.css';

import FormValidator from '../../component/form-validation/form-validator';
import EmailValidator from '../../component/form-validation/email-validator';
import PasswordValidator from '../../component/form-validation/password-validator';
import NameValidator from '../../component/form-validation/name-validator';

import indexDB from '../../component/indexDB/indexDB';

const messages = document.querySelectorAll('output.show-message');
const inputs = document.querySelectorAll('input');

const btnSubmit = document.querySelector('.btn-sign-up');

const password = document.querySelector('#password');
const passwordMessage = document.querySelector('#password-message');

const confirmPassword = document.querySelector('#confirm-password');
const confirmPasswordMessage = document.querySelector('#confirm-password-message');

const email = document.querySelector('#email');
const emailMessage = document.querySelector('#email-message');

const firstName = document.querySelector('#first-name');
const firstNameMessage = document.querySelector('#first-name-message');

const lastName = document.querySelector('#last-name');
const lastNameMessage = document.querySelector('#last-name-message');

new PasswordValidator({
  password,
  passwordMessage,
  confirmPassword,
  confirmPasswordMessage,
});

new EmailValidator({ email, emailMessage });

new NameValidator({ name: firstName, nameMessage: firstNameMessage });

new NameValidator({ name: lastName, nameMessage: lastNameMessage });

function generateUsername() {
  const randomNumber = Math.floor(Math.random() * 200) + 1;
  const alterFirstName = firstName.value.slice(0, 3);
  const alterLastName = lastName.value.slice(0, 5);
  const username = `${alterFirstName}_${alterLastName}${randomNumber}`;

  return username;
}

function getAdminDataFromForm() {
  const username = generateUsername()
  
  const adminData = {
    id: 'admin',
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
    username
  };
  return adminData;
}

function adminDataIsStored() {
  alert('Admin data stored');
}

function adminDataNotStored() {
  alert('Admin data not stored');
}

function runWhenAllFormIsValid() {
  indexDB.createDatabase({ databaseName: 'akp-loan-tracker', version: 2 });

  indexDB.createObjectStore({ storeName: 'admin-data', keyPath: 'id' });

  const adminData = getAdminDataFromForm();

  indexDB.storeData({
    storeName: 'admin-data',
    data: adminData,
    runSuccessStatus: adminDataIsStored,
    runErrorStatus: adminDataNotStored,
  });
}

new FormValidator({
  buttonSubmit: btnSubmit,
  messages,
  inputs,
  runWhenAllFormIsValid,
});
