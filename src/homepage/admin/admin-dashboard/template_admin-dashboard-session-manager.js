import indexDB from '../../module/indexDB/indexDB';

import {
  runWhenAdminLoanDataKeyLoanDataDoesNotExist,
  runWhenKeyValueExistAndAdminDashboardLoanDataIsTrue,
  runWhenKeyValueExistAndAdminDashboardLoanIsFalse,
} from './template_admin-dashboard-loan-data-value';

import {
  adminLoginAndSignupSection,
  adminProfileSection,
} from './template_admin-dashboard-created-element';

import Modal from '../../module/modal/modal';

export default class AdminSessionManager {
  constructor({ btnYes, navigationSection, adminGreeting, dialog, btnCancel }) {
    this.dialog = dialog;
    this.btnCancel = btnCancel;
    this.btnYes = btnYes;
    this.navigationSection = navigationSection;
    this.adminGreeting = adminGreeting;
    ((this.runWhenAdminLoanDataKeyLoanDataDoesNotExist =
      runWhenAdminLoanDataKeyLoanDataDoesNotExist),
      (this.runWhenKeyValueExistAndAdminDashboardLoanDataIsTrue =
        runWhenKeyValueExistAndAdminDashboardLoanDataIsTrue),
      (this.runWhenKeyValueExistAndAdminDashboardLoanIsFalse =
        runWhenKeyValueExistAndAdminDashboardLoanIsFalse),
      (this.adminLoginAndSignupSection = adminLoginAndSignupSection),
      (this.adminProfileSection = adminProfileSection),
      this.render());
  }

  render() {
    this.checkIfKeyValueExistAndIsAdminLogin();
    this.selectLogoutButtonInAdminProfileSection();
    this.bindEvent();
  }

  bindEvent() {
    this.btnYes.addEventListener('click', this.logoutAdmin.bind(this));
  }

  checkIfKeyValueExistAndIsAdminLogin() {
    indexDB.createDatabase(
      {
        storeName: 'admin-data',
        keyPathValue: 'admin',
        keys: 'isAdminLogin',
        runSuccessStatus: this.runWhenKeyValueExistAndAdminLoginIsTrue.bind(this),
        runFairStatus: this.runWhenKeyValueExistAndAdminLoginIsFalse.bind(this),
        runErrorStatus: this.runWhenKeyValueDoesNotExist.bind(this),
      },
      'checkIfKeyPathValueExistAndFieldIsTrue',
    );
  }

  selectLogoutButtonInAdminProfileSection() {
    this.btnLogout = this.adminProfileSection.querySelector('.logout-button');
    new Modal({ btnShowModal: this.btnLogout, btnCloseModal: this.btnCancel, dialog: this.dialog });
    new Modal({ btnShowModal: this.btnLogout, btnCloseModal: this.btnYes, dialog: this.dialog });
  }

  insertAdminProfileSection() {
    this.removeNavigationSectionChild('.adminLoginSection');
    this.appendNavigationSectionChild(this.adminProfileSection);
  }

  runWhenKeyValueExistAndAdminLoginIsTrue() {
    this.insertAdminProfileSection();
    this.getAdminUsernameFromDatabase();
    this.runWhenKeyValueExistAndAdminDashboardLoanDataIsTrue();
  }

  runWhenKeyValueExistAndAdminLoginIsFalse() {
    this.insertAdminLoginAndSignup();
    this.setGreetingTextContent('You are not logged in');
    this.runWhenKeyValueExistAndAdminDashboardLoanIsFalse();
  }

  runWhenKeyValueDoesNotExist() {
    console.log('keys value doest not exist');
    this.runWhenKeyValueExistAndAdminLoginIsFalse();
    this.runWhenAdminLoanDataKeyLoanDataDoesNotExist();
  }

  removeNavigationSectionChild(navigationToSectionRemove) {
    this.section = this.navigationSection.querySelector(navigationToSectionRemove);

    if (!this.section) return;

    this.section.remove();
  }

  appendNavigationSectionChild(section) {
    this.navigationSection.append(section);
  }

  insertAdminLoginAndSignup() {
    this.removeNavigationSectionChild('.adminProfileSection');
    this.appendNavigationSectionChild(this.adminLoginAndSignupSection);
  }

  setGreetingTextContent(greetingTextContent) {
    this.adminGreeting.textContent = greetingTextContent;
  }

  returnData(data) {
    if (data === undefined) {
      this.setGreetingTextContent('You do not have a data');
      return;
    }

    this.setGreetingTextContent(data.username);
  }

  getAdminUsernameFromDatabase() {
    indexDB.createDatabase(
      {
        storeName: 'admin-data',
        keyPathValue: 'admin',
        returnData: this.returnData.bind(this),
      },
      'getData',
    );
  }

  logoutAdmin() {
    indexDB.createDatabase(
      {
        storeName: 'admin-data',
        keyPathValue: 'admin',
        newValue: { isAdminLogin: false },
        keys: ['isAdminLogin'],

        // Use `checkIfKeyValueExistAndIsAdminLogin` in `runSuccessStatus`
        // to run `runWhenKeyValueExistAndAdminLoginIsTrue` and `runWhenKeyValueDoesNotExist`
        // as it handle both s properly base on
        // whether keys value exist and admin is logged in,
        // instead of running `runWhenKeyValueExistAndAdminLoginIsTrue` directly on `runSuccessStatus`
        // when `runErrorStatus` is just a fallback when  `keys` is undefined
        // as `runWhenKeyValueDoesNotExist` is not handle properly in `modifyData`

        runSuccessStatus: this.checkIfKeyValueExistAndIsAdminLogin.bind(this),
        runErrorStatus: this.runWhenKeyValueDoesNotExist.bind(this),
      },
      'modifyData',
    );
  }
}
