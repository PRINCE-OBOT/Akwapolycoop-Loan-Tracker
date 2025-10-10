import '../../assets/form-logic.css';
import '../../assets/form.css';
import './template_borrower-dashboard.css';
import '../../assets/reset.css';
import '../../assets/font.css';
import '../../assets/common_general.css';
import '../../assets/style-border-button.css';

import registerLocalStorageCustomMethod from '../../module/localStorage/localStorage';

import {
  appendContent,
  bindCustomChangeContentEvent,
} from '../../module/content-holder/content-holder';

import bindSubmitApplicationButton from './loan-applicant-form-handle-submission';

import indexDB from '../../module/indexDB/indexDB';

import Modal from '../../module/modal/modal';
import eventBus from '../../module/event-bus/event';

const leftSideBar = document.querySelector('.left-side-bar');
const contentHolder = document.querySelector('.content-holder');

const html = document.querySelector('html');

const btnLogout = document.querySelector('.logout-button');

const dialog = document.querySelector('dialog');
const btnYes = dialog.querySelector('.btn-yes');

registerLocalStorageCustomMethod();
bindCustomChangeContentEvent();
bindSubmitApplicationButton();

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

const myLoan = new CustomEvent('custom-change-content', {
  detail: {
    contentKey: 'myLoan',
  },
});

const setContentEvent = {
  'loan-applicant-form': loanApplicantFormEvent,
  'take-loan': takeLoanEvent,
  'my-loan': myLoan,
};

function setContentInDashboardHolder(e) {
  const setContent = e.target.dataset.customSet;

  if (!setContent) return;

  eventBus.dispatchEvent(setContentEvent[setContent]);
}

setContentInDashboardHolder({ target: { dataset: { customSet: 'loan-applicant-form' } } });
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

    indexDB.createDatabase(
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
