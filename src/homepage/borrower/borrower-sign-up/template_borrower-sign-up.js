import '../../admin/admin-sign-up/template_admin-sign-up.css';
import '../../assets/reset.css';
import '../../assets/font.css';
import '../../assets/common_general.css';
import '../../assets/style-border-button.css';

import FieldValidationUtility from '../../module/form-validation/field-utility';
import PasswordValidator from '../../module/form-validation/password-validator';
import handleFieldValidationLogic from '../../module/form-validation/field-validator';

import indexDB from '../../module/indexDB/indexDB';

import Modal from '../../module/modal/modal';

const form = document.querySelector('form');
const messages = form.querySelectorAll('output.show-message');
const inputs = form.querySelectorAll('input');
const firstName = form.querySelector('#first-name');
const lastName = form.querySelector('#last-name');
const email = form.querySelector('#email');
const password = form.querySelector('#password');
const passwordMessage = form.querySelector('#password-message');
const confirmPassword = form.querySelector('#confirm-password');
const confirmPasswordMessage = form.querySelector('#confirm-password-message');
const btnSignUp = form.querySelector('.btn-sign-up');

const dialog = document.querySelector('dialog');
const displaySignUpStatus = dialog.querySelector('.display_borrower-sign-up-status');

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
    runWhenAllFieldFillIsValid: checkIfUserExistInLoanApplicantList,
  });
}

function checkIfUserExistInLoanApplicantList() {
  indexDB.createDatabase(
    {
      storeName: 'borrower-loan-applicant-list',
      getMethod: 'getAll',
      firstName,
      lastName,
      email,
      trueState: accountAlreadyExist,
      falseState: checkIfUserExistInBorrowerSignUpList,
    },
    'checkIfUserAlreadyHaveAccount',
  );
}

function checkIfUserExistInBorrowerSignUpList() {
  indexDB.createDatabase(
    {
      storeName: 'borrower-sign-up-list',
      getMethod: 'getAll',
      firstName,
      lastName,
      email,
      trueState: accountAlreadyExist,
      falseState: storeDataToBorrowerSignUpList,
    },
    'checkIfUserAlreadyHaveAccount',
  );
}

function storeDataToBorrowerSignUpList() {
  const borrowerData = getAdminDataFromForm();

  indexDB.createDatabase(
    {
      storeName: 'borrower-sign-up-list',
      data: borrowerData,
      trueState: storeDataToBorrowerRecentlySignUp,
      undefinedState: borrowerDataNotStored,
    },
    'storeData',
  );
}

function storeDataToBorrowerRecentlySignUp() {
  const borrowerData = getAdminDataFromForm();

  borrowerData.id = 'recent-sign-up';
  indexDB.createDatabase(
    {
      storeName: 'borrower-recently-sign-up',
      data: borrowerData,
      // Deleting recent loan applicant allow dashboard.html to navigate to dashboard.html
      // instead of navigating to profilePage.html when their is recent loan applicant
      trueState: deleteRecentLoanApplicant,
      undefinedState: borrowerDataNotStored,
    },
    'storeData',
  );
}

function deleteRecentLoanApplicant() {
  indexDB.createDatabase(
    {
      storeName: 'borrower-recently-loan-applicant',
      keyPathValue: 'recent-loan-applicant',
      trueState: navigateToDashboardPage,
      undefinedState: errorWhileDeletingKey,
    },
    'deleteKey',
  );
}

function navigateToDashboardPage() {
  setBorrowerSignUpStatus('Signing up...');

  setTimeout(() => {
    window.location.href = './borrower-dashboard.html';
  }, 2000);
}

function generateUsername() {
  const randomNumber = Math.floor(Math.random() * 200) + 1;
  const alterFirstName = firstName.value.slice(0, 3);
  const alterLastName = lastName.value.slice(0, 5);
  const username = `${alterFirstName}_${alterLastName}${randomNumber}`;

  return username.toLowerCase();
}

function getAdminDataFromForm() {
  const username = generateUsername();

  const borrowerData = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
    username,
  };
  return borrowerData;
}

function accountAlreadyExist() {
  setBorrowerSignUpStatus('Account already exist');
}

function displaySignUpStatusModal() {
  const modal = new Modal({ dialog });
  modal.showModal();
}

function setBorrowerSignUpStatus(text) {
  displaySignUpStatus.textContent = text;
  displaySignUpStatusModal();
}

function errorWhileDeletingKey() {
  console.log('error while deleting recent loan applicant');
}

function borrowerDataNotStored() {
  console.log('Borrower data not stored');
}

new PasswordValidator({ password, passwordMessage, confirmPassword, confirmPasswordMessage });
