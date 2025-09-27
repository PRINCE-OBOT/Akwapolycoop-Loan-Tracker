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
const signUpStatus = dialog.querySelector('.sign-up-status');

form.addEventListener('input', handleFieldValidationLogic);
btnSignUp.addEventListener('click', checkIfAllFieldFillIsValid);
window.addEventListener('pageshow', resetForm);

function resetForm() {
  form.reset();
}

function checkIfAllFieldFillIsValid() {
  new FieldValidationUtility({
    messages,
    inputs,
    runWhenAllFieldFillIsValid: checkIfAdminAlreadySignUp,
  });
}

function checkIfAdminAlreadySignUp() {
  indexDB.createDatabase(
    {
      storeName: 'admin-data',
      keyPathValue: 'admin',
      getMethod: 'get',
      trueState: acceptOnlyOneAdmin,
      undefinedState: storeAdminDataToDatabase,
    },
    'checkIfThereIsRecentData',
  );
}

function storeAdminDataToDatabase() {
  const adminData = getAdminDataFromForm();

  indexDB.createDatabase(
    {
      storeName: 'admin-data',
      data: adminData,
      trueState: navigateToAdminDashboard,
      undefinedState: adminDataNotStored,
    },
    'storeData',
  );
}

function setSignUpStatusTextContent(textContent) {
  signUpStatus.textContent = textContent;
  showSignUpStatusModal();
}

function showSignUpStatusModal() {
  const modal = new Modal({ dialog });
  modal.showModal();
}

function acceptOnlyOneAdmin() {
  setSignUpStatusTextContent('Admin already sign up.\nAccept only one Admin!');
}

function generateUsername() {
  const randomNumber = Math.floor(Math.random() * 200) + 1;
  const alterFirstName = firstName.value.slice(0, 3);
  const alterLastName = lastName.value.slice(0, 5);
  const username = `${alterFirstName}_${alterLastName}${randomNumber}`;

  return username;
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

function navigateToAdminDashboard() {
  setSignUpStatusTextContent('Signing Up...');

  setTimeout(() => {
    window.location.href = './admin-dashboard.html';
  }, 2000);
}

function adminDataNotStored() {
  console.log('Admin data not stored');
}

new PasswordValidator({ password, passwordMessage, confirmPassword, confirmPasswordMessage });
