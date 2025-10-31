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
import bindSubmitDepositPreference from './deposit-preference-form/deposit-preference-form-submission';

const leftSideBar = document.querySelector('.left-side-bar');
const contentHolder = document.querySelector('.content-holder');
const logoutButton = document.querySelector('.logout-button');
const outstandingBalance = document.querySelector('.outstanding-balance');

const html = document.querySelector('html');

// Running the following function allow the following action to work:
// - Use custom method such `getData` and `setData` in localStorage
registerLocalStorageCustomMethod();
// - Click on element *specifically* in the sidebar to change content in the dashboard
// - Click on `submit application`, `submit deposit preference` and `Submit Withdrawal` button to submit the form
bindSubmitApplicationButton();
bindSubmitLoanButton();
bindSubmitDepositPreference();
// - Check whether all field to be submitted is valid
bindAllFieldValidEvent();

bindDepositDocumentUploadEvent();

appendDialogToBody.prototype.body = document.body;
appendDialogToBody();
appendContent.prototype.holder = contentHolder;

function setOutStandingBalance(outstandingBalanceValue) {
  outstandingBalance.textContent = outstandingBalanceValue;
}

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

// const prependWhenLoanApplicantDataDoesNotExist = (data) => {
//   if (data.membershipApplicationForm) {
//     // if (data.membershipApplicationForm.status !== 'Approve') ;
//   }
// };

function getRecentLoanApplicantData({ id, returnData }) {
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
}

function getOutstandingBalance(id) {
  MathUtility.outstandingBalance(id, setOutStandingBalance);
}

function isMemberNew(data) {
  if (data.isMemberNew) {
    eventBus.dispatchEvent(events.displayPreferredDepForm);
  }
}

(function checkIfThereIsRecentLoanApplicant() {
  const id = getRecentLoanApplicantID();

  if (!id) {
    navigateToLoginPage();
    return;
  }
  makeBorrowerDashboardDisplayBlock();
  // isMemberNew(id)
  getOutstandingBalance(id);
  // `insertLoanApplicantDataToDashboardPage` is the callback function to run when
  // the recentLoanApplicantData is retrieve from indexedDB
  getRecentLoanApplicantData({ id, returnData: isMemberNew });
})();

const getAction = (obj) => {
  obj.key = 'action';
  obj.data = { action: 'logout' };
  return obj;
};

const storeActionToLocalStorage = (data) => {
  localStorage.setData(data);
};

const processStoring = pipe(getAction, storeActionToLocalStorage);

const Event = ({ text, contentKey = 'question', closedByValue = 'any' }) =>
  new CustomEvent('dialog-manager', {
    detail: {
      contentKey,
      closedByValue,
      text,
    },
  });

const events = {
  logout: Event({ text: 'logout?' }),
  displayPreferredDepForm: Event({
    contentKey: 'depositPreferenceForm',
    closedByValue: 'closerequest',
  }),
};

const showLogoutOption = () => {
  processStoring({});
  eventBus.dispatchEvent(events.logout);
};

function getDepositActionData() {
  const id = getRecentLoanApplicantID();
  const obj = {
    key: 'action',
    data: {
      action: 'deposit',
      id,
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

eventBus.addEventListener('logout', logoutBorrower);

logoutButton.addEventListener('click', showLogoutOption);

leftSideBar.addEventListener('click', handleContentDisplay);
