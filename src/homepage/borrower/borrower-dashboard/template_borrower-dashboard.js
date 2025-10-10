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

registerLocalStorageCustomMethod();
bindCustomChangeContentEvent();
bindSubmitApplicationButton();
bindSubmitLoanButton();
bindAllFieldValidEvent();
getRecentLoanApplicantData();

appendContent.prototype.holder = contentHolder;

leftSideBar.addEventListener('click', setContentInDashboardHolder);

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
  'take-loan': () => getRecentLoanApplicantData(),
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

setContentInDashboardHolder({ target: { dataset: { customSet: 'loan-applicant-form' } } });

function getRecentLoanApplicantData() {
  const data = localStorage.getData({ key: 'recent-loan-applicant' });

  indexDB.interact(
    {
      storeName: 'loan-applicant-list',
      getMethod: 'get',
      keyPathValue: data.id,
      returnData: checkIfLoanApplicantFormDataExist,
      undefinedState: errorGettingData,
    },
    'getData',
  );
}

function checkIfLoanApplicantFormDataExist(data) {
  if (!data.loanApplicantFormData) {
    leftSideBar.prepend(loanApplicantForm);

    alert('Please submit your "LOAN APPLICATION FORM" to take loan');
    return;
  }

  eventBus.dispatchEvent(takeLoanEvent);
}

function errorGettingData() {
  console.log('Error getting data');
}

new Modal({ btnShowModal: btnLogout, dialog });

class BorrowerSessionManager {
  constructor() {
    this.render();
  }

  render() {
    this.bindEvent();
    this.checkIfThereIsRecentLoanApplicant();
  }

  bindEvent() {
    btnYes.addEventListener('click', this.logoutBorrower.bind(this));
  }

  checkIfThereIsRecentLoanApplicant() {
    const data = localStorage.getData({ key: 'recent-loan-applicant' });

    if (data === null) {
      this.navigateToLoginPage();
      return;
    }

    html.style.display = 'block';

    const id = data.id;

    indexDB.interact(
      {
        storeName: 'loan-applicant-list',
        keyPathValue: id,
        getMethod: 'get',
        returnData: this.loanApplicantData.bind(this),
        undefinedState: this.errorGettingData.bind(this),
      },
      'getData',
    );
  }

  loanApplicantData() {
    console.log('Loan applicant data');
  }

  errorGettingData() {
    console.log('Error while getting data from dashboard');
  }

  navigateToLoginPage() {
    window.location.href = './borrower-login.html';
    console.log('You are not logged in');
  }

  logoutBorrower() {
    localStorage.removeItem('recent-loan-applicant');
    this.navigateToLoginPage();
  }

  keyValueDoesNotExist() {
    console.log('Key does not exist');
  }
}
new BorrowerSessionManager();
