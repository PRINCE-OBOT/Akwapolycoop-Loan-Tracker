import './template_admin-sign-up.css';
import '../../assets/reset.css';
import '../../assets/font.css';
import '../../assets/common_general.css';
import '../../assets/style-border-button.css';

import FieldValidationUtility from '../../module/form-validation/field-utility';
import PasswordValidator from '../../module/form-validation/password-validator';
import handleFieldValidationLogic from '../../module/form-validation/field-validator';

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
const firstName = form.querySelector('#first-name');
const lastName = form.querySelector('#last-name');

const btnSignUp = form.querySelector('.btn-sign-up');
const dialog = document.querySelector('dialog');

btnSignUp.addEventListener('click', checkFormValidity);
form.addEventListener('input', handleFieldValidationLogic);

function checkFormValidity() {
  new FieldValidationUtility({
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
