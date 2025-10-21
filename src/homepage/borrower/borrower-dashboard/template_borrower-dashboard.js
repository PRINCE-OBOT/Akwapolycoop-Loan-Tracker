import '../../assets/form-logic.css';
import '../../assets/form.css';
import './template_borrower-dashboard.css';
import '../../assets/reset.css';
import '../../assets/font.css';
import '../../assets/common_general.css';
import '../../assets/style-border-button.css';

import registerLocalStorageCustomMethod from '../../module/localStorage/localStorage';
import bindAllFieldValidEvent from './is-all-field-valid';

import appendContent from '../../module/content-holder/content-holder';

import bindSubmitApplicationButton from './loan-applicant-form-handle-submission';
import bindSubmitLoanButton from './take-loan-submission';

import indexDB from '../../module/indexDB/indexDB';

import eventBus from '../../module/event-bus/event';
import appendDialogToBody from '../../module/dialog/dialog-manager';
import pipe from '../../module/composition/pipe';
import MathUtility from '../../module/business-logic/mathUtility';
import { bindDepositDocumentUploadEvent } from './loan-applicant-deposit/loan-applicant-deposit';

const leftSideBar = document.querySelector('.left-side-bar');
const bottomLeftSideBar = document.querySelector('.bottom-left-sidebar');
const contentHolder = document.querySelector('.content-holder');
const logoutButton = document.querySelector('.logout-button');
const outstandingBalance = document.querySelector('.outstanding-balance');

const html = document.querySelector('html');

const loanApplicantForm = document.createElement('li');
loanApplicantForm.textContent = 'Loan Application Form';
loanApplicantForm.setAttribute('data-content-key', 'loan-applicant-form');

// Running the following function allow the following action to work:
// - Use custom method such `getData` and `setData` in localStorage
registerLocalStorageCustomMethod();
// - Click on element *specifically* in the sidebar to change content in the dashboard
// - Click on `submit application` and `submit loan` button to submit the form
bindSubmitApplicationButton();
bindSubmitLoanButton();
// - Check whether all field to be submitted is valid
bindAllFieldValidEvent();

bindDepositDocumentUploadEvent();

appendDialogToBody.prototype.body = document.body;
appendDialogToBody();
appendContent.prototype.holder = contentHolder;

MathUtility.prototype.outstandingBalance = outstandingBalance;
MathUtility.outstandingBalance();

const getRecentLoanApplicantID = () => {
  const data = localStorage.getData({ key: 'recent-loan-applicant' });
  return data?.id;
};

const makeBorrowerDashboardDisplayBlock = () => {
  html.style.display = 'block';
};

const removeRecentLoanApplicantDataFromLocalStorage = () =>
  localStorage.removeItem('recent-loan-applicant');

const navigateToLoginPage = () => {
  window.location.href = './borrower-login.html';
};

const errorGettingData = () => {
  console.log('Error getting data');
};

const logoutBorrower = () => {
  removeRecentLoanApplicantDataFromLocalStorage();
  navigateToLoginPage();
};

const prependLoanApplicationFormBeforeSideBar = () => {
  bottomLeftSideBar.prepend(loanApplicantForm);
};

function removeLoanApplicantTab() {
  loanApplicantForm.remove();
}

const prependWhenLoanApplicantDataDoesNotExist = (data) => {
  if (data.loanApplicantFormData) {
    if (data.loanApplicantFormData.status !== 'Approve') prependLoanApplicationFormBeforeSideBar();
  }
};

function insertLoanApplicantDataToDashboardPage(data) {
  console.log('Loan applicant data gotten');

  prependWhenLoanApplicantDataDoesNotExist(data);
}

const getRecentLoanApplicantData = ({ id, returnData }) => {
  indexDB.interact(
    {
      storeName: 'loan-applicant-list',
      getMethod: 'get',
      keyPathValue: id,
      returnData,
      undefinedState: errorGettingData,
    },
    'getData',
  );
};

(function checkIfThereIsRecentLoanApplicant() {
  const id = getRecentLoanApplicantID();

  if (!id) {
    navigateToLoginPage();
    return;
  }
  // `insertLoanApplicantDataToDashboardPage` is the callback function to run when
  // the recentLoanApplicantData is retrieve from indexedDB
  makeBorrowerDashboardDisplayBlock();
  getRecentLoanApplicantData({ id, returnData: insertLoanApplicantDataToDashboardPage });
})();

eventBus.addEventListener('logout', logoutBorrower);

const getAction = (obj) => {
  obj.key = 'action';
  obj.data = { action: 'logout' };
  return obj;
};

const storeActionToLocalStorage = (data) => {
  localStorage.setData(data);
};

const processStoring = pipe(getAction, storeActionToLocalStorage);

const question = ({ text }) =>
  new CustomEvent('dialog-manager', {
    detail: {
      contentKey: 'question',
      closedByValue: 'any',
      text,
    },
  });

const questionEvent = {
  logout: question({ text: 'logout?' }),
};

const showLogoutOption = () => {
  processStoring({});
  eventBus.dispatchEvent(questionEvent.logout);
};

function getDepositActionData() {
  const obj = {
    key: 'action',
    data: {
      action: 'deposit',
    },
  };

  storeActionToLocalStorage(obj);
}

function handleContentDisplay(e) {
  const contentKey = e.target.dataset.contentKey;

  if (!contentKey) return;

  if (contentKey === 'deposit') getDepositActionData();

  const customContentEvent = new CustomEvent('custom-change-content', {
    detail: {
      contentKey,
    },
  });

  eventBus.dispatchEvent(customContentEvent);
}
logoutButton.addEventListener('click', showLogoutOption);

leftSideBar.addEventListener('click', handleContentDisplay);

eventBus.addEventListener('remove-loan-applicant-tab', removeLoanApplicantTab);
