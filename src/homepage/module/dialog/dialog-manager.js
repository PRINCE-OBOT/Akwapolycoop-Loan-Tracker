import eventBus from '../event-bus/event';
import { formOption, question } from './form-Option';
import { formStatus, h4 } from './form-Status';
import loanApplicantProfile from '../../borrower/loan-applicant-profile/loan-applicant-profile';

const dialog = (function createDialogElement() {
  return document.createElement('dialog');
})();

function appendDialogToBody() {
  appendDialogToBody.prototype.body.append(dialog);
}

const appendLoanApplicantProfileToDialog = () => {
  dialog.append(loanApplicantProfile);
};

const setLoanApplicantProfileText = (detail) => {
  insertLoanApplicantDataToProfile(detail.data);
  appendLoanApplicantProfileToDialog();
};

const appendFormOptionToDialog = () => {
  dialog.append(formOption);
};

const setQuestionText = (detail) => {
  question.textContent = `Are you sure you want to ${detail.text}`;
  appendFormOptionToDialog();
};

const appendFormStatusToDialog = () => {
  dialog.append(formStatus);
};

const setStatusText = (detail) => {
  h4.textContent = detail.text;
  appendFormStatusToDialog();
};

const dialogContentHandler = {
  question: setQuestionText,
  status: setStatusText,
  profile: setLoanApplicantProfileText,
};

function DialogManager(e) {
  const detail = e.detail;

  dialog.innerHTML = '';

  dialog.setAttribute('closedby', detail.closedByValue);

  dialogContentHandler[detail.contentKey](detail);

  // window.scrollTo({ top: 0 , behavior: 'smooth' });
  dialog.showModal();
}

const contentEvent = {
  status: ({ text, closedByValue = 'any' }) =>
    new CustomEvent('dialog-manager', {
      detail: {
        contentKey: 'status',
        closedByValue,
        text,
      },
    }),
  option: ({ text }) =>
    new CustomEvent('dialog-manager', {
      detail: {
        contentKey: 'question',
        closedByValue: 'any',
        text,
      },
    }),
  profile: (data) =>
    new CustomEvent('dialog-manager', {
      detail: {
        contentKey: 'profile',
        closedByValue: 'any',
        data,
      },
    }),
};

const dialogEvent = {
  login: contentEvent.status({ text: 'Logging in...', closedByValue: 'closerequest' }),
  fail: contentEvent.status({ text: 'Incorrect Username or Password' }),
  signUp: contentEvent.status({ text: 'Signing in...', closedByValue: 'closerequest' }),
  signUpFail: contentEvent.status({ text: 'Account Already Exist', closedByValue: 'any' }),
  logout: contentEvent.option({ text: 'logout?' }),
  approve: contentEvent.option({ text: 'approve the loan?' }),
  decline: contentEvent.option({ text: 'decline the loan?' }),
  profile: (data) => contentEvent.profile(data),
};

eventBus.addEventListener('dialog-manager', DialogManager);

const applicationDate = loanApplicantProfile.querySelector('#application-date');
const passport = loanApplicantProfile.querySelector('.passport');
const firstName = loanApplicantProfile.querySelector('.first-name');
const lastName = loanApplicantProfile.querySelector('.last-name');
const email = loanApplicantProfile.querySelector('.email');
const phoneNumber = loanApplicantProfile.querySelector('.phone-number');
const dateOfBirth = loanApplicantProfile.querySelector('.date-of-birth');
const residentAddress = loanApplicantProfile.querySelector('.resident-address');
const bankName = loanApplicantProfile.querySelector('.bank-name');
const accountNumber = loanApplicantProfile.querySelector('.account-number');
const accountName = loanApplicantProfile.querySelector('.account-name');
const status = loanApplicantProfile.querySelector('.status');
// const state = loanApplicantProfile.querySelector('.state')

const guarantorFirstName = loanApplicantProfile.querySelector('.guarantor-first-name');
const guarantorLastName = loanApplicantProfile.querySelector('.guarantor-last-name');
const guarantorPhoneNumber = loanApplicantProfile.querySelector('.guarantor-phone-number');
const guarantorResidentAddress = loanApplicantProfile.querySelector('.guarantor-resident-address');

function insertLoanApplicantDataToProfile(data) {
  const loanApplicantFormData = data.loanApplicantFormData;
  const signUpData = data.signUpData;

  applicationDate.textContent = loanApplicantFormData.date;
  passport.src = loanApplicantFormData.passport;

  firstName.textContent = signUpData.firstName;
  lastName.textContent = signUpData.lastName;
  email.textContent = signUpData.email;
  phoneNumber.textContent = loanApplicantFormData['phone-number'];
  dateOfBirth.textContent = loanApplicantFormData['date-of-birth'];
  residentAddress.textContent = loanApplicantFormData['resident-address'];
  accountNumber.textContent = loanApplicantFormData['account-number'];
  accountName.textContent = loanApplicantFormData['account-name'];
  bankName.textContent = loanApplicantFormData['bank-name'];
  status.textContent = loanApplicantFormData.status;
  // add state and local government area later
  //   state.textContent = loanApplicantFormData.state

  guarantorFirstName.textContent = loanApplicantFormData['guarantor-first-name'];
  guarantorLastName.textContent = loanApplicantFormData['guarantor-last-name'];
  guarantorPhoneNumber.textContent = loanApplicantFormData['guarantor-phone-number'];
  guarantorResidentAddress.textContent = loanApplicantFormData['guarantor-resident-address'];
}

export { appendDialogToBody, dialogEvent };
