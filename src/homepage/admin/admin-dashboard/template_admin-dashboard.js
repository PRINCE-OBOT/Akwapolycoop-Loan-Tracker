import './template_admin-dashboard.css';
import '../../assets/reset.css';
import '../../assets/font.css';
import '../../assets/common_general.css';
import '../../assets/style-border-button.css';

import Navigation from '../../module/navigation/navigation';

import LoanerManagement from './template_admin-loaner-management';

import indexDB from '../../module/indexDB/indexDB';

import {
  checkIfAdminLoanDataExist,
  useDefaultAdminLoanData,
} from './template_admin-dashboard-loan-data-value';

import {
  adminLoginAndSignupSection,
  adminProfileSection,
} from './template_admin-dashboard-created-element';

import Modal from '../../module/modal/modal';

const headerBottomSection = document.querySelector('.header_bottom-section');
const contentSection = document.querySelector('.content-section');
const navigationSection = document.querySelector('.navigation-section');
const dialog = document.querySelector('dialog');
const btnYes = dialog.querySelector('.btn-yes');
const adminGreeting = document.querySelector('.greeting');
const LoanerManagementTbody = document.querySelector('tbody');

function selectLogoutButtonInAdminProfileSection() {
  const btnLogout = adminProfileSection.querySelector('.logout-button');
  new Modal({ btnShowModal: btnLogout, dialog });
}

function insertAdminProfileSection() {
  removeNavigationSectionChild('.adminLoginSection');
  appendNavigationSectionChild(adminProfileSection);
}

function adminIsLogin() {
  insertAdminProfileSection();
  getAdminUsernameFromDatabase();
  checkIfAdminLoanDataExist();
}

function adminIsNotLogin() {
  insertAdminLoginAndSignup();
  setGreetingTextContent('You are not logged in');
  useDefaultAdminLoanData();
}

function removeNavigationSectionChild(navigationToSectionRemove) {
  const section = navigationSection.querySelector(navigationToSectionRemove);

  if (!section) return;

  section.remove();
}

function appendNavigationSectionChild(section) {
  navigationSection.append(section);
}

function insertAdminLoginAndSignup() {
  removeNavigationSectionChild('.adminProfileSection');
  appendNavigationSectionChild(adminLoginAndSignupSection);
}

function setGreetingTextContent(greetingTextContent) {
  adminGreeting.textContent = greetingTextContent;
}

function returnData(data) {
  if (data === undefined) {
    setGreetingTextContent('You do not have a data');
    return;
  }

  setGreetingTextContent(data.username);
}

function getAdminUsernameFromDatabase() {
  indexDB.interact(
    {
      storeName: 'admin-data',
      keyPathValue: 'admin',
      getMethod: 'get',
      returnData,
    },
    'getData',
  );
}

function logoutAdmin() {
  indexDB.interact(
    {
      storeName: 'admin-data',
      keyPathValue: 'admin',
      getMethod: 'get',
      newValue: { isAdminLogin: false },
      keys: ['isAdminLogin'],

      trueState: checkIfAdminIsLogin,
      undefinedState: errorWhileDeletingKey,
    },
    'modifyData',
  );
}

function errorWhileDeletingKey() {
  console.log('did not delete nothing');
}

checkIfAdminIsLogin();
selectLogoutButtonInAdminProfileSection();

function checkIfAdminIsLogin() {
  indexDB.interact(
    {
      storeName: 'admin-data',
      keyPathValue: 'admin',
      getMethod: 'get',
      key: 'isAdminLogin',
      trueState: adminIsLogin,
      undefinedState: adminIsNotLogin,
    },
    'checkStateOfData',
  );
}

btnYes.addEventListener('click', logoutAdmin);

new Navigation({ btnSection: headerBottomSection, contentSection, activeIndex: 0 });

new LoanerManagement({ tbody: LoanerManagementTbody });
