import eventBus from '../event-bus/event';
import { formOption, question } from './form-Option';
import { formStatus, h4 } from './form-Status';
import loanApplicantProfile from '../../borrower/loan-applicant-profile/loan-applicant-profile';
import { proofOfPayment } from '../../admin/admin-dashboard/proof-of-payment/proof-of-payment';
import { loanApplicantDeposit } from '../../borrower/borrower-dashboard/loan-applicant-deposit/loan-applicant-deposit';
import depositPreferenceForm from '../../borrower/borrower-dashboard/deposit-preference-form/deposit-preference-form';
import adminVerificationForm from '../../admin/admin-dashboard/verification-form';

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

const appendDepositPreferenceFormToDialog = () => {
  dialog.append(depositPreferenceForm);
};

const appendAdminVerificationFormToDialog = () => {
  dialog.append(adminVerificationForm);
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
  depositPreferenceForm: appendDepositPreferenceFormToDialog,
  adminVerification: appendAdminVerificationFormToDialog,
  // previousContent: appendPreviousContent,
};

// const appendedContentList = [];

// function appendPreviousContent() {
//   console.log(appendedContentList[0], appendedContentList);
//   // if (console.log(appendedContentList[0], appendedContentList))
//   dialogContentHandler[appendedContentList[0]]();
// }

// function hasPreviousContentListExceeded() {
//   if (appendedContentList.length > 2) {
//     appendedContentList.shift();
//   }
// }

function DialogManager(e) {
  const detail = e.detail;

  dialog.innerHTML = '';

  dialog.setAttribute('closedby', detail.closedByValue);

  // detail.contentKey === 'previousContent'
  //   ? appendedContentList.push(appendedContentList[0])
  //   : appendedContentList.push(detail.contentKey);

  // const isAllItemQuestion = appendedContentList[0] === 'question' && appendedContentList[1] === 'question'
  // if(isAllItemQuestion) return

  dialogContentHandler[detail.contentKey](detail);

  // hasPreviousContentListExceeded();

  setDataSizeOfDialog(detail.size);

  dialog.showModal();
  // debugger
  // dialog.show();
  // dialog[detail.showType]();
}

function setDataSizeOfDialog(size = 'medium') {
  dialog.setAttribute('data-size', size);
}

function closeDialog() {
  dialog.close();
}

eventBus.addEventListener('dialog-manager', DialogManager);
eventBus.addEventListener('manual-close-dialog', closeDialog);

export { dialog, appendDialogToBody };
