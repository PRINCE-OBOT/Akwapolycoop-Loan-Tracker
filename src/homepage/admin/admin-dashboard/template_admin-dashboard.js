import './template_admin-dashboard.css';
import '../../assets/reset.css';
import '../../assets/font.css';
import '../../assets/common_general.css';
import '../../assets/style-border-button.css';

import Navigation from '../../module/navigation/navigation';

import LoanerManagement from './template_admin-loaner-management';

import indexDB from '../../module/indexDB/indexDB';

// import {
//   checkIfAdminLoanDataExist,
//   useDefaultAdminLoanData,
// } from './template_admin-dashboard-loan-data-value';

import Modal from '../../module/modal/modal';
import registerLocalStorageCustomMethod from '../../module/localStorage/localStorage';

const headerBottomSection = document.querySelector('.header_bottom-section');
const contentSection = document.querySelector('.content-section');
const btnLogout = document.querySelector('.logout-button');
const dialog = document.querySelector('dialog');
const btnYes = dialog.querySelector('.btn-yes');
const LoanerManagementTbody = document.querySelector('tbody');

const html = document.querySelector('html');

registerLocalStorageCustomMethod();

const logoutAdmin = () => {};

const errorGettingData = () => {
  console.log('Error while getting data');
};

const insertAdminDataToDashboardPage = () => {
  alert('Admin data gotten');
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
  return data.id;
};

checkIfAdminRecentlyLogin();

function checkIfAdminRecentlyLogin() {
  const id = getRecentAdminID();

  if (!id) {
    navigateToLoginPage();
    return;
  }

  makeAdminDashboardDisplayBlock();
  getRecentAdminData({ id, returnData: insertAdminDataToDashboardPage });
}

btnYes.addEventListener('click', logoutAdmin);

new Navigation({ btnSection: headerBottomSection, contentSection, activeIndex: 0 });

new LoanerManagement({ tbody: LoanerManagementTbody });
new Modal({ btnShowModal: btnLogout, dialog });
