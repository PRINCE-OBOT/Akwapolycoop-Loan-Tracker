import '../../admin/admin-login/template_admin-login.css';
import '../../assets/reset.css';
import '../../assets/font.css';
import '../../assets/common_general.css';
import '../../assets/style-border-button.css';

import indexDB from '../../module/indexDB/indexDB';

const html = document.querySelector('html');

class BorrowerSessionManager {
  constructor() {
    this.render();
  }

  render() {
    this.checkIfKeyValueExistAndIsBorrowerLogin();
  }

  checkIfKeyValueExistAndIsBorrowerLogin() {
    indexDB.createDatabase(
      {
        storeName: 'borrower-data',
        keyPathValue: 'borrower',
        key: 'isBorrowerLogin',
        runSuccessStatus: this.runWhenKeyValueExistAndBorrowerIsTrue.bind(this),
        runFairStatus: this.runWhenKeyValueExistAndAdminLoginIsFalse.bind(this),
        runErrorStatus: this.runWhenKeyValueDoesNotExist.bind(this),
      },
      'checkIfKeyPathValueExistAndFieldIsTrue',
    );
  }

  runWhenKeyValueExistAndBorrowerIsTrue() {
    html.style.display = 'block';
  }

  runWhenKeyValueExistAndAdminLoginIsFalse() {
    window.location.href = './borrower-login.html';
    console.log('You are not logged in');
  }

  runWhenKeyValueDoesNotExist() {
    window.location.href = './borrower-login.html';
    console.log('Key value doest not exist');
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
        newValue: false,
        key: 'isAdminLogin',
        runSuccessStatus: this.checkIfKeyValueExistAndIsBorrowerLogin.bind(this),
        runErrorStatus: this.runWhenKeyValueDoesNotExist.bind(this),
      },
      'modifyExistingData',
    );
  }
}
new BorrowerSessionManager();
