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
  profile: appendLoanApplicantProfileToDialog,
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
        closedByValue: 'closerequest',
        text,
      },
    }),
  profile: () =>
    new CustomEvent('dialog-manager', {
      detail: {
        contentKey: 'profile',
        closedByValue: 'any',
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
  profile: contentEvent.profile(),
};

eventBus.addEventListener('dialog-manager', DialogManager);

export { appendDialogToBody, dialogEvent };
