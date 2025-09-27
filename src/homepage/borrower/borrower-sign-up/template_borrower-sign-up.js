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

const dialog = document.querySelector('dialog');
const btnSignUp = document.querySelector('.btn-sign-up');

const displaySignUpStatus = document.querySelector('.display_borrower-sign-up-status');

form.addEventListener('input', handleFieldValidationLogic);

new PasswordValidator({
  password,
  passwordMessage,
  confirmPassword,
  confirmPasswordMessage,
});

class BorrowerSignUpManager {
  constructor() {
    this.render();
  }

  render() {
    window.addEventListener('pageshow', this.resetForm.bind(this));
    this.bindEvent();
  }

  bindEvent() {
    btnSignUp.addEventListener('click', this.checkFormValidity.bind(this));
  }

  checkFormValidity() {
    new FieldValidationUtility({
      messages,
      inputs,
      runWhenAllFormIsValid: this.checkIfUserExistInLoanApplicantList.bind(this),
    });
  }

  resetForm() {
    form.reset();
  }

  borrowerDataNotStored() {
    console.log('Borrower data not stored');
  }

  displaySignUpStatusModal() {
    const modal = new Modal({ dialog });
    modal.showModal();
  }

  userAlreadyExist() {
    this.setBorrowerSignUpStatus('User already exist');

    this.displaySignUpStatusModal();
  }

  checkBorrowerSignUpList() {
    indexDB.createDatabase(
      {
        storeName: 'borrower-sign-up-list',
        getMethod: 'getAll',
        firstName,
        lastName,
        email,
        trueState: this.userAlreadyExist.bind(this),
        falseState: this.storeDataToBorrowerSignUpList.bind(this),
      },
      'checkIfUserAlreadyHaveAccount',
    );
  }

  checkIfUserExistInLoanApplicantList() {
    indexDB.createDatabase(
      {
        storeName: 'borrower-loan-applicant-list',
        getMethod: 'getAll',
        firstName,
        lastName,
        email,
        trueState: this.userAlreadyExist.bind(this),
        falseState: this.checkBorrowerSignUpList.bind(this),
      },
      'checkIfUserAlreadyHaveAccount',
    );
  }

  storeDataToBorrowerSignUpList() {
    const borrowerData = this.getAdminDataFromForm();

    indexDB.createDatabase(
      {
        storeName: 'borrower-sign-up-list',
        data: borrowerData,
        trueState: this.storeDataToBorrowerRecentlySignUp.bind(this),
        undefinedState: this.borrowerDataNotStored.bind(this),
      },
      'storeData',
    );
  }

  storeDataToBorrowerRecentlySignUp() {
    const borrowerData = this.getAdminDataFromForm();

    borrowerData.id = 'recent-sign-up';
    indexDB.createDatabase(
      {
        storeName: 'borrower-recently-sign-up',
        data: borrowerData,
        trueState: this.deleteRecentLoanApplicant.bind(this),
        undefinedState: this.borrowerDataNotStored.bind(this),
      },
      'storeData',
    );
  }

  deleteRecentLoanApplicant() {
    indexDB.createDatabase(
      {
        storeName: 'borrower-recently-loan-applicant',
        keyPathValue: 'recent-loan-applicant',
        trueState: this.navigateToDashboardPage.bind(this),
        undefinedState: this.errorWhileDeletingKey.bind(this),
      },
      'deleteKey',
    );
  }

  errorWhileDeletingKey() {
    alert('error while deleting recent loan applicant');
  }

  navigateToDashboardPage() {
    this.setBorrowerSignUpStatus('Signing up...');

    this.displaySignUpStatusModal();

    setTimeout(() => {
      window.location.href = './borrower-dashboard.html';
    }, 2000);
  }

  generateUsername() {
    const randomNumber = Math.floor(Math.random() * 200) + 1;
    const alterFirstName = firstName.value.slice(0, 3);
    const alterLastName = lastName.value.slice(0, 5);
    const username = `${alterFirstName}_${alterLastName}${randomNumber}`;

    return username;
  }

  getAdminDataFromForm() {
    const username = this.generateUsername();

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

  setBorrowerSignUpStatus(text) {
    displaySignUpStatus.textContent = text;
  }
}

new BorrowerSignUpManager();
