import '../../admin/admin-sign-up/template_admin-sign-up.css';
import '../../assets/reset.css';
import '../../assets/font.css';
import '../../assets/common_general.css';
import '../../assets/style-border-button.css';

import FormUtility from '../../module/form-validation/form-utility';
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

const displaySignUpStatus = document.querySelector('.display_borrower-sign-up-status');

const form = document.querySelector('form');

new PasswordValidator({
  password,
  passwordMessage,
  confirmPassword,
  confirmPasswordMessage,
});

new EmailValidator({ email, emailMessage });

new NameValidator({ name: firstName, nameMessage: firstNameMessage });

new NameValidator({ name: lastName, nameMessage: lastNameMessage });

class BorrowerSignUpManager {
  constructor() {
    this.render();
  }

  render() {
    window.addEventListener('pageshow', this.resetForm.bind(this));

    new FormUtility({
      buttonSubmit: btnSignUp,
      messages,
      inputs,
      runWhenAllFormIsValid: this.runWhenAllFormIsValid.bind(this),
    });
  }

  modifyRecentLoanApplicantValue() {
    console.log('run');
    indexDB.createDatabase(
      {
        storeName: 'borrower-recently-loan-applicant',
        keyPathValue: 'recent-loan-applicant',
        newValue: { isRecentLoanApplicant: false },
        keys: ['isRecentLoanApplicant'],
        getMethod: 'get',
        trueState: this.checkIfUserExistInLoanApplicantList.bind(this),
        undefinedState: this.checkIfUserExistInLoanApplicantList.bind(this),
      },
      'modifyData',
    );
  }

  resetForm() {
    form.reset();
  }

  runWhenAllFormIsValid() {
    this.modifyRecentLoanApplicantValue();
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
    this.checkIfUserExistInBorrowerSignUpList();
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
      'checkIfDataExist',
    );
  }

  checkIfUserExistInBorrowerSignUpList() {
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
      'checkIfDataExist',
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
        trueState: this.borrowerDataCompletelyStore.bind(this),
        undefinedState: this.borrowerDataNotStored.bind(this),
      },
      'storeData',
    );
  }

  borrowerDataCompletelyStore() {
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
      isRecentSignUpBorrower: true,
      isRecentLoanApplicant: false,
    };
    return borrowerData;
  }

  setBorrowerSignUpStatus(text) {
    displaySignUpStatus.textContent = text;
  }
}

new BorrowerSignUpManager();
