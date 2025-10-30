import eventBus from '../event-bus/event';
import { formOption, question } from './form-Option';
import { formStatus, h4 } from './form-Status';
import loanApplicantProfile from '../../borrower/loan-applicant-profile/loan-applicant-profile';
import { proofOfPayment } from '../../admin/admin-dashboard/proof-of-payment/proof-of-payment';
import { loanApplicantDeposit } from '../../borrower/borrower-dashboard/loan-applicant-deposit/loan-applicant-deposit';
import preferredDepositForm from '../../borrower/borrower-dashboard/preffered-deposit/preffered-deposit';

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

const appendPreferredDepositFormToDialog = () => {
  dialog.append(preferredDepositForm);
};

const appendDepositFormToDialog = () => {
  dialog.append(loanApplicantDeposit);
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
  depositForm: appendDepositFormToDialog,
  preferredDepositForm: appendPreferredDepositFormToDialog,
};

function DialogManager(e) {
  const detail = e.detail;

  dialog.innerHTML = '';

  dialog.setAttribute('closedby', detail.closedByValue);

  dialogContentHandler[detail.contentKey](detail);

  dialog.showModal();
}

function closeDialog() {
  dialog.close();
}

eventBus.addEventListener('dialog-manager', DialogManager);
eventBus.addEventListener('manual-close-dialog', closeDialog);

export default appendDialogToBody;
