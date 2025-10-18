import eventBus from '../event-bus/event';
import { formOption, question } from './form-Option';
import { formStatus, h4 } from './form-Status';
import loanApplicantProfile from '../../borrower/loan-applicant-profile/loan-applicant-profile';
import { proofOfPayment } from '../../admin/admin-dashboard/proof-of-payment/proof-of-payment';

const dialog = (function createDialogElement() {
  return document.createElement('dialog');
})();

function appendDialogToBody() {
  appendDialogToBody.prototype.body.append(dialog);
}

const appendLoanApplicantProfileToDialog = () => {
  dialog.append(loanApplicantProfile);
};

const appendProofOfPaymentToDialog = () => {
  dialog.append(proofOfPayment);
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
  proof: appendProofOfPaymentToDialog,
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
  profile: () =>
    new CustomEvent('dialog-manager', {
      detail: {
        contentKey: 'profile',
        closedByValue: 'any',
      },
    }),
  proof: () =>
    new CustomEvent('dialog-manager', {
      detail: {
        contentKey: 'proof',
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
  loanApprove: contentEvent.option({ text: 'approve the loan?' }),
  loanDecline: contentEvent.option({ text: 'decline the loan?' }),
  applicantApprove: contentEvent.option({ text: 'approve the loan?' }),
  applicantDecline: contentEvent.option({ text: 'decline the loan?' }),
  depositApprove: contentEvent.option({ text: 'approve the deposit?' }),
  depositDecline: contentEvent.option({ text: 'decline the deposit?' }),
  profile: contentEvent.profile(),
  proofOfPayment: contentEvent.proof(),
};

eventBus.addEventListener('dialog-manager', DialogManager);

export { appendDialogToBody, dialogEvent };
