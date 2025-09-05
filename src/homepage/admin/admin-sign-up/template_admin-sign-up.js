import './template_admin-sign-up.css';
import '../../assets/reset.css';
import '../../assets/font.css';
import '../../assets/common_general.css';
import '../../assets/style-border-button.css';

import FormValidator from '../../module/form-validation/form-validator';
import EmailValidator from '../../module/form-validation/email-validator';
import PasswordValidator from '../../module/form-validation/password-validator';
import NameValidator from '../../module/form-validation/name-validator';

import indexDB from '../../module/indexDB/indexDB';

import Modal from '../../module/modal/modal';

const messages = document.querySelectorAll('output.show-message');
const inputs = document.querySelectorAll('input');

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

const dialog = document.querySelector('dialog');
const btnSignUp = document.querySelector('.btn-sign-up');

const form = document.querySelector('form');

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
    adminDashboardReference.click();
  }, 2000);
}

function adminDataNotStored() {
  alert('Admin data not stored');
}

function runWhenAllFormIsValid() {
  const adminData = getAdminDataFromForm();

  indexDB.createDatabase(
    {
      storeName: 'admin-data',
      data: adminData,
      runSuccessStatus: adminDataIsStored,
      runErrorStatus: adminDataNotStored,
    },
    'storeData',
  );
}

new FormValidator({
  buttonSubmit: btnSignUp,
  messages,
  inputs,
  runWhenAllFormIsValid,
});

function resetForm() {
  form.reset();
}

window.addEventListener('pageshow', resetForm);
