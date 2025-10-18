import './template_admin-dashboard.css';
import '../../assets/reset.css';
import '../../assets/font.css';
import '../../assets/common_general.css';
import '../../assets/style-border-button.css';

import { appendDialogToBody, dialogEvent } from '../../module/dialog/dialog-manager';

import indexDB from '../../module/indexDB/indexDB';

import registerLocalStorageCustomMethod from '../../module/localStorage/localStorage';
import appendContent from '../../module/content-holder/content-holder';
import eventBus from '../../module/event-bus/event';
import { loanerManagementGetDataInDBBus } from './loan-management';
import { depositManagementGetDataInDBBus } from './deposit-management/deposit-management';

const headerBottomSection = document.querySelector('.header_bottom-section');
const contentHolder = document.querySelector('.content-holder');
const btnLogout = document.querySelector('.logout-button');

const html = document.querySelector('html');

registerLocalStorageCustomMethod();

appendDialogToBody.prototype.body = document.body;
appendDialogToBody();

appendContent.prototype.holder = contentHolder;

// const logoutAdmin = () => {};

const events = {
  adminDashboard: new CustomEvent('custom-change-content', {
    detail: {
      contentKey: 'adminDashboardContent',
    },
  }),

  loanerManagement: new CustomEvent('custom-change-content', {
    detail: {
      contentKey: 'loanerManagement',
    },
  }),

  depositManagement: new CustomEvent('custom-change-content', {
    detail: {
      contentKey: 'depositManagement',
    },
  }),
};

const showAdminDashboard = () => {
  eventBus.dispatchEvent(events.adminDashboard);
};

const getDataInIndexedDB = new CustomEvent('get-data-in-indexedDB');

const showDepositManagement = () => {
  eventBus.dispatchEvent(events.depositManagement);
  depositManagementGetDataInDBBus.dispatchEvent(getDataInIndexedDB);
};

showDepositManagement();

const showLoanerManagement = () => {
  eventBus.dispatchEvent(events.loanerManagement);
  loanerManagementGetDataInDBBus.dispatchEvent(getDataInIndexedDB);
};
// showLoanerManagement();

const contentHandler = {
  'admin-dashboard': showAdminDashboard,
  'loan-management': showLoanerManagement,
  'deposit-management': showDepositManagement,
};

function setContentInDashboardHolder(e) {
  const contentKey = e.target.dataset.contentKey;

  if (!contentKey) return;

  contentHandler[contentKey]();
}

const errorGettingData = () => {
  console.log('Error while getting data');
};

const insertAdminDataToDashboardPage = () => {
  console.log('Admin data gotten');
};

const getRecentAdminData = ({ id, returnData }) => {
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

const makeAdminDashboardDisplayBlock = () => {
  html.style.display = 'block';
};

const navigateToLoginPage = () => {
  window.location.href = './admin-login.html';
};

const getRecentAdminID = () => {
  const data = localStorage.getData({ key: 'recent-admin' });
  return data?.id;
};

(function checkIfAdminRecentlyLogin() {
  // The purpose of getting the admin ID is to be sure that
  // admin has already sign up before and not to get the `id` value
  const id = getRecentAdminID();

  if (!id) {
    navigateToLoginPage();
    return;
  }

  makeAdminDashboardDisplayBlock();
  getRecentAdminData({ id, returnData: insertAdminDataToDashboardPage });
})();

headerBottomSection.addEventListener('click', setContentInDashboardHolder);

const showLogoutOption = () => {
  eventBus.dispatchEvent(dialogEvent.logout);
};

btnLogout.addEventListener('dialog-manager', showLogoutOption);

export default showLoanerManagement;
