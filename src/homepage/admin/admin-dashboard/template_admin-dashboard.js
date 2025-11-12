import './template_admin-dashboard.css';
import '../../assets/reset.css';
import '../../assets/font.css';
import '../../assets/common_general.css';
import '../../assets/style-border-button.css';

import { appendDialogToBody } from '../../module/dialog/dialog-manager';

import indexDB from '../../module/indexDB/indexDB';

import registerLocalStorageCustomMethod from '../../module/localStorage/localStorage';
import appendContent from '../../module/content-holder/content-holder';
import eventBus from '../../module/event-bus/event';
import { bindDepositDocumentUploadEvent } from '../../borrower/borrower-dashboard/loan-applicant-deposit/loan-applicant-deposit';
import bindAllFieldValidEvent from '../../borrower/borrower-dashboard/is-all-field-valid';
import pipe from '../../module/composition/pipe';
import bindMassModifyIndexedDB from './mass-modify-indexedDB';
import bindMassDividend from './mass-dividend';

const headerBottomSection = document.querySelector('.header_bottom-section');
const contentHolder = document.querySelector('.content-holder');
const btnLogout = document.querySelector('.logout-button');

const html = document.querySelector('html');

registerLocalStorageCustomMethod();

bindDepositDocumentUploadEvent();
bindAllFieldValidEvent();
bindMassModifyIndexedDB();
bindMassDividend();

appendDialogToBody.prototype.body = document.body;
appendDialogToBody();

appendContent.prototype.holder = contentHolder;
appendContent({ detail: { contentKey: 'loan-applicant-management' } });

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
  // admin has already sign up before and not*-2 to get the `id` value
  const id = getRecentAdminID();

  if (!id) {
    navigateToLoginPage();
    return;
  }

  makeAdminDashboardDisplayBlock();
  getRecentAdminData({ id, returnData: insertAdminDataToDashboardPage });
})();

const removeRecentAdminDataFromLocalStorage = () => localStorage.removeItem('recent-admin');

const getAction = (obj) => {
  obj.key = 'action';
  obj.data = { action: 'logout' };
  return obj;
};

const storeActionToLocalStorage = (data) => {
  localStorage.setData(data);
};

const processStoring = pipe(getAction, storeActionToLocalStorage);

const Event = ({ text }) =>
  new CustomEvent('dialog-manager', {
    detail: {
      contentKey: 'question',
      closedByValue: 'any',
      text,
    },
  });

const events = {
  logout: Event({ text: 'logout?' }),
};

const showLogoutOption = () => {
  processStoring({});
  eventBus.dispatchEvent(events.logout);
};

const logoutAdmin = () => {
  removeRecentAdminDataFromLocalStorage();
  navigateToLoginPage();
};

function handleContentDisplay(e) {
  const customContentEvent = new CustomEvent('custom-change-content', {
    detail: {
      contentKey: e.target.dataset.contentKey,
    },
  });

  eventBus.dispatchEvent(customContentEvent);
}

eventBus.addEventListener('logout', logoutAdmin);

btnLogout.addEventListener('click', showLogoutOption);

headerBottomSection.addEventListener('click', handleContentDisplay);
