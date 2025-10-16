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
import { getRecentLoanApplicant } from './myLoan';
import { appendDialogToBody, dialogEvent } from '../../module/dialog/dialog-manager';
import pipe from '../../module/composition/pipe';
import MathUtility from '../../module/business-logic/mathUtility';

const leftSideBar = document.querySelector('.left-side-bar');
const contentHolder = document.querySelector('.content-holder');
const logoutButton = document.querySelector('.logout-button');

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

appendDialogToBody.prototype.body = document.body;
appendDialogToBody();
appendContent.prototype.holder = contentHolder;

const dispatchTakeLoanEvent = () => {
  eventBus.dispatchEvent(events.takeLoan);
};

const checkIfLoanApplicantFormDataExist = (data) => {
  data.loanApplicantFormData
    ? dispatchTakeLoanEvent()
    : alert('Loan Application Form Not Submitted');
};

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

const events = {
  loanApplicantForm: new CustomEvent('custom-change-content', {
    detail: {
      contentKey: 'loanApplicantForm',
    },
  }),

  takeLoan: new CustomEvent('custom-change-content', {
    detail: {
      contentKey: 'takeLoan',
    },
  }),

  myLoan: new CustomEvent('custom-change-content', {
    detail: {
      contentKey: 'myLoan',
    },
  }),
};

const showLoanApplicantForm = () => {
  eventBus.dispatchEvent(events.loanApplicantForm);
};

const showTakeLoan = () => {
  const id = getRecentLoanApplicantID();
  getRecentLoanApplicantData({ id, returnData: checkIfLoanApplicantFormDataExist });
};

const getDataInIndexedDB = new CustomEvent('get-data-in-indexedDB');

const showMyLoan = () => {
  eventBus.dispatchEvent(events.myLoan);
  eventBus.dispatchEvent(getDataInIndexedDB);
  eventBus.removeEventListener('get-data-in-indexedDB', getRecentLoanApplicant);
};

const contentHandler = {
  'loan-applicant-form': showLoanApplicantForm,
  'take-loan': showTakeLoan,
  'my-loan': showMyLoan,
};

function setContentInDashboardHolder(e) {
  const contentKey = e.target.dataset.contentKey;

  if (!contentKey) return;

  contentHandler[contentKey]();
}

const logoutBorrower = () => {
  removeRecentLoanApplicantDataFromLocalStorage();
  navigateToLoginPage();
};

const prependLoanApplicationFormBeforeSideBar = () => {
  leftSideBar.prepend(loanApplicantForm);
};

const prependWhenLoanApplicantDataDoesNotExist = (data) => {
  !data.loanApplicantFormData ? prependLoanApplicationFormBeforeSideBar() : null;
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

leftSideBar.addEventListener('click', setContentInDashboardHolder);

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

const showLogoutOption = () => {
  processStoring({});
  eventBus.dispatchEvent(dialogEvent.logout);
};
logoutButton.addEventListener('click', showLogoutOption);

const outstandingBalance = document.querySelector('.outstanding-balance');

MathUtility.prototype.outstandingBalance = outstandingBalance;

MathUtility.outstandingBalance();
