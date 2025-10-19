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

eventBus.addEventListener('dialog-manager', DialogManager);

export default appendDialogToBody;
