import './template_admin-sign-up.css';
import '../../assets/reset.css';
import '../../assets/font.css';
import '../../assets/common_general.css';
import '../../assets/style-border-button.css';

import FormUtility from '../../module/form-validation/form-utility';
import PasswordValidator from '../../module/form-validation/password-validator';
import InputFieldValidator from '../../module/form-validation/input-field-validator';

import indexDB from '../../module/indexDB/indexDB';

import Modal from '../../module/modal/modal';

const form = document.querySelector('.admin-sign-up-form');

const messages = form.querySelectorAll('output.show-message');
const inputs = form.querySelectorAll('input');

const password = form.querySelector('#password');
const passwordMessage = form.querySelector('#password-message');

const confirmPassword = form.querySelector('#confirm-password');
const confirmPasswordMessage = form.querySelector('#confirm-password-message');

const email = form.querySelector('#email');
const emailMessage = form.querySelector('#email-message');

const firstName = form.querySelector('#first-name');
const firstNameMessage = form.querySelector('#first-name-message');

const lastName = form.querySelector('#last-name');
const lastNameMessage = form.querySelector('#last-name-message');

const btnSignUp = form.querySelector('.btn-sign-up');
const dialog = document.querySelector('dialog');

btnSignUp.addEventListener('click', checkFormValidity);

function checkFormValidity() {
  new FormUtility({
    messages,
    inputs,
    runWhenAllFormIsValid,
  });
}

new PasswordValidator({
  password,
  passwordMessage,
  confirmPassword,
  confirmPasswordMessage,
});

new InputFieldValidator({
  field: firstName,
  fieldMessage: firstNameMessage,
  pattern: /^[a-zA-Z]{1,}$/,
  fieldErrorMessage: 'Incorrect name format',
});

new InputFieldValidator({
  field: lastName,
  fieldMessage: lastNameMessage,
  pattern: /^[a-zA-Z]{1,}$/,
  fieldErrorMessage: 'Incorrect name format',
});

new InputFieldValidator({
  field: email,
  fieldMessage: emailMessage,
  pattern: /^[a-zA-Z0-9.]{4,}@(gmail|yahoo|hotmail).com$/,
  fieldErrorMessage: 'Incorrect email',
});

function generateUsername() {
  const randomNumber = Math.floor(Math.random() * 200) + 1;
  const alterFirstName = firstName.value.slice(0, 3);
  const alterLastName = lastName.value.slice(0, 5);
  const username = `${alterFirstName}_${alterLastName}${randomNumber}`;

  return username;
}

function displaySignUpStatusModal() {
  const modal = new Modal({ dialog });
  modal.showModal();
}

function getAdminDataFromForm() {
  const username = generateUsername();

  const adminData = {
    id: 'admin',
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
    username,
    isAdminLogin: true,
  };
  return adminData;
}

function adminDataIsStored() {
  setTimeout(() => {
    displaySignUpStatusModal();
  }, 200);

  setTimeout(() => {
    window.location.href = './admin-dashboard.html';
  }, 2000);
}

function adminDataNotStored() {
  console.log('Admin data not stored');
}

function runWhenAllFormIsValid() {
  const adminData = getAdminDataFromForm();

  indexDB.createDatabase(
    {
      storeName: 'admin-data',
      data: adminData,
      trueState: adminDataIsStored,
      undefinedState: adminDataNotStored,
    },
    'storeData',
  );
}

function resetForm() {
  form.reset();
}

window.addEventListener('pageshow', resetForm);
