import './template_admin-dashboard.css';
import '../../assets/reset.css';
import '../../assets/font.css';
import '../../assets/common_general.css';
import '../../assets/style-border-button.css';
import Navigation from '../../module/navigation/navigation';

import indexDB from '../../module/indexDB/indexDB';

import Modal from '../../module/modal/modal';

import adminLoginPlainColorImage from '../../assets/images/admin-login_plain-color.svg';
import adminSignupPlainColorImage from '../../assets/images/admin-sign-up_plain-color.svg';

const headerBottomSection = document.querySelector('.header_bottom-section');
const contentSection = document.querySelector('.content-section');
const navigationSection = document.querySelector('.navigation-section');
const dialog = document.querySelector('dialog');
const btnCancel = dialog.querySelector('.btn-cancel');
const btnYes = dialog.querySelector('.btn-yes');
const adminGreeting = document.querySelector('.greeting');
const totalLoanValue = document.querySelector('.total-loan-value');
const revenueValue = document.querySelector('.revenue-value');
const approvedLoanValue = document.querySelector('.approved-loan-value');
const pendingLoanValue = document.querySelector('.pending-loan-value');
const declineLoanValue = document.querySelector('.decline-loan-value');

const adminProfileSection = document.createElement('div');
const adminLoginAndSignupSection = document.createElement('div');

adminLoginAndSignupSection.innerHTML = `
<a class="admin-login" href="./admin-login.html">
   <img
     class="img_admin-login"
     src="${adminLoginPlainColorImage}"
     alt="admin plain color login icon"
   />
   Admin Login
 </a>
 <a class="admin-sign-up" href="./admin-sign-up.html">
   <img
     class="img_admin-sign-up"
     src="${adminSignupPlainColorImage}"
     alt="admin plain color sign-up icon"
   />
   Admin Sign up
 </a>
`;
adminLoginAndSignupSection.classList.add('adminLoginAndSignupSection');

adminProfileSection.innerHTML = `
<button type="button" class="logout-button">Logout</button>
<div class="admin-profile">P</div>
`;

adminProfileSection.classList.add('adminProfileSection');

function removeNavigationSectionChild(navigationToSectionRemove) {
  const section = navigationSection.querySelector(navigationToSectionRemove);

  if (!section) return;

  section.remove();
}

function appendNavigationSectionChild(section) {
  navigationSection.append(section);
}

function insertAdminProfileSection() {
  removeNavigationSectionChild('.adminLoginSection');
  appendNavigationSectionChild(adminProfileSection);
}

function insertAdminLoginAndSignup() {
  removeNavigationSectionChild('.adminProfileSection');
  appendNavigationSectionChild(adminLoginAndSignupSection);
}

function setGreetingTextContent(greetingTextContent) {
  adminGreeting.textContent = greetingTextContent;
}

function getAdminUsernameFromDatabase() {
  function returnData(data) {
    if (data === undefined) {
      setGreetingTextContent('You do not have a data');
      return;
    }

    setGreetingTextContent(data.username);
  }

  indexDB.createDatabase(
    {
      storeName: 'admin-data',
      keyPathValue: 'admin',
      returnData,
    },
    'getData',
  );
}
function getAdminDashboardLoanData() {
  const adminLoanData = {
    id: 'admin-loan-data',
    totalLoanApplicant: '128459',
    revenue: '1092',
    approvedLoan: '1234',
    pendingLoan: '23',
    declineLoan: '453',
  };

  return adminLoanData;
}

function setTotalLoanTextContent(textContent) {
  totalLoanValue.textContent = textContent;
}

function setApproveLoanTextContent(textContent) {
  approvedLoanValue.textContent = textContent;
}

function setPendingLoanTextContent(textContent) {
  pendingLoanValue.textContent = textContent;
}

function setRevenueTextContent(textContent) {
  revenueValue.textContent = textContent;
}

function setDeclineLoanTextContent(textContent) {
  declineLoanValue.textContent = textContent;
}

function adminDashboardLoanDataIsStored() {
  alert('Admin loan data is stored');
}

function adminDashboardLoanDataNotStored() {
  alert('admin loan data not stored');
}

function storeAdminLoanDataToDatabase() {
  const adminLoanData = getAdminDashboardLoanData();

  indexDB.createDatabase(
    {
      storeName: 'admin-dashboard-loan-data',
      data: adminLoanData,
      runSuccessStatus: adminDashboardLoanDataIsStored,
      runErrorStatus: adminDashboardLoanDataNotStored,
    },
    'storeData',
  );
}

// storeAdminLoanDataToDatabase()

function getAdminLoanDataFromDatabase() {
  function returnData(data) {
    if (data === undefined) {
      console.log('No loan data');
      return;
    }

    setTotalLoanTextContent(data.totalLoanApplicant);
    setRevenueTextContent(data.revenue);
    setApproveLoanTextContent(data.approvedLoan);
    setPendingLoanTextContent(data.pendingLoan);
    setDeclineLoanTextContent(data.declineLoan);
  }

  indexDB.createDatabase(
    {
      storeName: 'admin-dashboard-loan-data',
      keyPathValue: 'admin-loan-data',
      returnData,
    },
    'getData',
  );
}
function runWhenKeyValueExistAndAdminDashboardLoanDataIsTrue() {
  getAdminLoanDataFromDatabase();
}

function runWhenKeyValueExistAndAdminDashboardLoanIsFalse() {
  const defaultLoanValue = '0000';
  setTotalLoanTextContent(defaultLoanValue);
  setApproveLoanTextContent(defaultLoanValue);
  setPendingLoanTextContent(defaultLoanValue);
  setRevenueTextContent(defaultLoanValue);
  setDeclineLoanTextContent(defaultLoanValue);
}

function runWhenAdminLoanDataKeyLoanDataDoesNotExist() {
  storeAdminLoanDataToDatabase();
}
function runWhenKeyValueDoesNotExist() {
  console.log('Key value doest not exist');
}

function runWhenKeyValueExistAndAdminLoginIsTrue() {
  insertAdminProfileSection();
  getAdminUsernameFromDatabase();
  runWhenKeyValueExistAndAdminDashboardLoanDataIsTrue();
}

function runWhenKeyValueExistAndAdminLoginIsFalse() {
  insertAdminLoginAndSignup();
  setGreetingTextContent('You are not logged in');
  runWhenKeyValueExistAndAdminDashboardLoanIsFalse();
}

function checkIfKeyValueExistAndIsAdminLogin() {
  indexDB.createDatabase(
    {
      storeName: 'admin-data',
      keyPathValue: 'admin',
      key: 'isAdminLogin',
      runSuccessStatus: runWhenKeyValueExistAndAdminLoginIsTrue,
      runFairStatus: runWhenKeyValueExistAndAdminLoginIsFalse,
      runErrorStatus: runWhenKeyValueDoesNotExist,
    },
    'checkIfKeyPathValueExistAndFieldIsTrue',
  );
}
checkIfKeyValueExistAndIsAdminLogin();

function checkIfKeyValueExistAndHasAdminDashboardLoanData() {
  indexDB.createDatabase(
    {
      storeName: 'admin-dashboard-loan-data',
      keyPathValue: 'admin-loan-data',
      runSuccessStatus: runWhenKeyValueExistAndAdminDashboardLoanDataIsTrue,
      runFairStatus: runWhenKeyValueExistAndAdminDashboardLoanIsFalse,
      runErrorStatus: runWhenAdminLoanDataKeyLoanDataDoesNotExist,
    },
    'checkIfKeyPathValueExistAndFieldIsTrue',
  );
}
checkIfKeyValueExistAndHasAdminDashboardLoanData();

function logoutAdmin() {
  indexDB.createDatabase(
    {
      storeName: 'admin-data',
      keyPathValue: 'admin',
      newValue: false,
      key: 'isAdminLogin',

      // Use `checkIfKeyValueExistAndIsAdminLogin` in `runSuccessStatus`
      // to run `runWhenKeyValueExistAndAdminLoginIsTrue` and `runWhenKeyValueDoesNotExist`
      // as it handle both functions properly base on
      // whether key value exist and admin is logged in,
      // instead of running `runWhenKeyValueExistAndAdminLoginIsTrue` directly on `runSuccessStatus`
      // when `runErrorStatus` is just a fallback when  `key` is undefined
      // as `runWhenKeyValueDoesNotExist` is not handle properly in `modifyExistingData`

      runSuccessStatus: checkIfKeyValueExistAndIsAdminLogin,
      runErrorStatus: runWhenKeyValueDoesNotExist,
    },
    'modifyExistingData',
  );
}

btnYes.addEventListener('click', logoutAdmin);

const btnLogout = adminProfileSection.querySelector('.logout-button');
new Modal({ btnShowModal: btnLogout, btnCloseModal: btnCancel, dialog });
new Modal({ btnShowModal: btnLogout, btnCloseModal: btnYes, dialog });

new Navigation({ btnSection: headerBottomSection, contentSection, activeIndex: 0 });
