import './template_admin-sign-up.css';
import '../../assets/reset.css';
import '../../assets/font.css';
import '../../assets/common_general.css';

import FormValidator from '../../module/form-validation/form-validator';
import EmailValidator from '../../module/form-validation/email-validator';
import PasswordValidator from '../../module/form-validation/password-validator';
import NameValidator from '../../module/form-validation/name-validator';

import indexDB from '../../module/indexDB/indexDB';

const messages = document.querySelectorAll('output.show-message');
const inputs = document.querySelectorAll('input');
const signUpStatus = document.querySelector('.display-signup-status');

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

const adminDashboardReference = document.createElement('a');
adminDashboardReference.href = './admin-dashboard.html';

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

function displaySignUpStatus() {
  signUpStatus.textContent = 'Submitting data...';
}

function clearForm() {
  firstName.value = '';
  lastName.value = '';
  email.value = '';
  password.value = '';
  confirmPassword.value = '';
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
  };
  return adminData;
}

function adminDataIsStored() {
  // Remove the quick replace of red border when input is empty
  inputs.forEach((input) => {
    input.style = 'border-color: var(--clr-valid)';
  });

  setTimeout(() => {
    adminDashboardReference.click();
  }, 2000);

  setTimeout(() => {
    clearForm();
  }, 2050);
}

function adminDataNotStored() {
  alert('Admin data not stored');
}

function runWhenAllFormIsValid() {
  indexDB.createDatabase();

  indexDB.createObjectStore({ storeName: 'admin-data' });

  const adminData = getAdminDataFromForm();

  displaySignUpStatus();

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
