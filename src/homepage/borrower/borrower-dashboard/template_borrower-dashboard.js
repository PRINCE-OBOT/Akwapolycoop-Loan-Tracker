import '../../assets/form-logic.css';
import '../../assets/form.css';
import './template_borrower-dashboard.css';
import '../../assets/reset.css';
import '../../assets/font.css';
import '../../assets/common_general.css';
import '../../assets/style-border-button.css';

import registerLocalStorageCustomMethod from '../../module/localStorage/localStorage';
import bindAllFieldValidEvent from './is-all-field-valid';

import {
  appendContent,
  bindCustomChangeContentEvent,
} from '../../module/content-holder/content-holder';

import bindSubmitApplicationButton from './loan-applicant-form-handle-submission';
import bindSubmitLoanButton from './take-loan-submission';

import indexDB from '../../module/indexDB/indexDB';

import Modal from '../../module/modal/modal';
import eventBus from '../../module/event-bus/event';
import { getRecentLoanApplicantListOfTakenLoan } from './myLoan';

const leftSideBar = document.querySelector('.left-side-bar');
const contentHolder = document.querySelector('.content-holder');

const html = document.querySelector('html');

const btnLogout = document.querySelector('.logout-button');

const dialog = document.querySelector('dialog');
const btnYes = dialog.querySelector('.btn-yes');

const loanApplicantForm = document.createElement('li');
loanApplicantForm.textContent = 'Loan Application Form';
loanApplicantForm.setAttribute('data-custom-set', 'loan-applicant-form');

new Modal({ btnShowModal: btnLogout, dialog });

registerLocalStorageCustomMethod();
bindCustomChangeContentEvent();
bindSubmitApplicationButton();
bindSubmitLoanButton();
bindAllFieldValidEvent();

appendContent.prototype.holder = contentHolder;

const dispatchTakeLoanEvent = () => {
  eventBus.dispatchEvent(takeLoanEvent);
};

const checkIfLoanApplicantFormDataExist = (data) => {
  data.loanApplicantFormData
    ? dispatchTakeLoanEvent()
    : alert('Loan Application Form Not Submitted');
};

const getRecentLoanApplicantID = () => {
  const data = localStorage.getData({ key: 'recent-loan-applicant' });
  return data.id;
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

const getRecentLoanApplicantData = ({ id, returnData }) => {
  // returnValue is `id` of recent-loan-applicant in localStorage
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
const loanApplicantFormEvent = new CustomEvent('custom-change-content', {
  detail: {
    contentKey: 'loanApplicantForm',
  },
});

const takeLoanEvent = new CustomEvent('custom-change-content', {
  detail: {
    contentKey: 'takeLoan',
  },
});

const myLoanEvent = new CustomEvent('custom-change-content', {
  detail: {
    contentKey: 'myLoan',
  },
});

const insertTakeLoanDataToMyLoanEvent = new CustomEvent('get-data-in-indexedDB');

const setContentEvent = {
  'loan-applicant-form': () => eventBus.dispatchEvent(loanApplicantFormEvent),
  'take-loan': () => {
    const id = getRecentLoanApplicantID();
    getRecentLoanApplicantData({ id, returnData: checkIfLoanApplicantFormDataExist });
  },
  'my-loan': () => {
    eventBus.dispatchEvent(myLoanEvent);

    eventBus.dispatchEvent(insertTakeLoanDataToMyLoanEvent);
    eventBus.removeEventListener('get-data-in-indexedDB', getRecentLoanApplicantListOfTakenLoan);
  },
};

function setContentInDashboardHolder(e) {
  const setContent = e.target.dataset.customSet;

  if (!setContent) return;

  setContentEvent[setContent]();
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

(function checkIfThereIsRecentLoanApplicant() {
  const id = getRecentLoanApplicantID();

  if (!id) {
    navigateToLoginPage();
    return;
  }

  // `insertLoanApplicantDataToDashboardPage` is the callback function to when
  // the recentLoanApplicantData is retrieve from indexedDB
  makeBorrowerDashboardDisplayBlock();
  getRecentLoanApplicantData({ id, returnData: insertLoanApplicantDataToDashboardPage });
})();

leftSideBar.addEventListener('click', setContentInDashboardHolder);
btnYes.addEventListener('click', logoutBorrower);

// ==== remove pipe as it is not needed when the composition does not transform data ====
