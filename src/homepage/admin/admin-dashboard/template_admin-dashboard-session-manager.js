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

export default class AdminSessionManager {
  constructor({ btnYes, navigationSection, adminGreeting, dialog, btnCancel }) {
    this.dialog = dialog;
    this.btnCancel = btnCancel;
    this.btnYes = btnYes;
    this.navigationSection = navigationSection;
    this.adminGreeting = adminGreeting;
    this.render();
  }

  render() {
    this.checkIfAdminIsLogin();
    this.selectLogoutButtonInAdminProfileSection();
    this.bindEvent();
  }

  bindEvent() {
    this.btnYes.addEventListener('click', this.logoutAdmin.bind(this));
  }

  checkIfAdminIsLogin() {
    indexDB.createDatabase(
      {
        storeName: 'admin-data',
        keyPathValue: 'admin',
        getMethod: 'get',
        key: 'isAdminLogin',
        trueState: this.adminIsLogin.bind(this),
        undefinedState: this.adminIsNotLogin.bind(this),
      },
      'checkStateOfData',
    );
  }

  selectLogoutButtonInAdminProfileSection() {
    this.btnLogout = adminProfileSection.querySelector('.logout-button');
    new Modal({ btnShowModal: this.btnLogout, btnCloseModal: this.btnCancel, dialog: this.dialog });
    new Modal({ btnShowModal: this.btnLogout, btnCloseModal: this.btnYes, dialog: this.dialog });
  }

  insertAdminProfileSection() {
    this.removeNavigationSectionChild('.adminLoginSection');
    this.appendNavigationSectionChild(adminProfileSection);
  }

  adminIsLogin() {
    this.insertAdminProfileSection();
    this.getAdminUsernameFromDatabase();
    checkIfAdminLoanDataExist();
  }

  adminIsNotLogin() {
    this.insertAdminLoginAndSignup();
    this.setGreetingTextContent('You are not logged in');
    useDefaultAdminLoanData();
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
    this.appendNavigationSectionChild(adminLoginAndSignupSection);
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
        getMethod: 'get',
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
        getMethod: 'get',
        newValue: { isAdminLogin: false },
        keys: ['isAdminLogin'],

        trueState: this.render.bind(this),
        undefinedState: this.errorWhileDeletingKey.bind(this),
      },
      'modifyData',
    );
  }

  errorWhileDeletingKey() {
    console.log('did not delete nothing');
  }
}
