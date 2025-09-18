import '../../admin/admin-login/template_admin-login.css';
import '../../assets/reset.css';
import '../../assets/font.css';
import '../../assets/common_general.css';
import '../../assets/style-border-button.css';

import LoginCheck from '../../module/login/login-check';
import PasswordLogin from '../../module/login/login-field';

import indexDB from '../../module/indexDB/indexDB';
import Modal from '../../module/modal/modal';

const btnLogin = document.querySelector('.btn-login');
const inputs = document.querySelectorAll('input');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const dialog = document.querySelector('dialog');
const loginStatus = dialog.querySelector('.login-status');

class LoginManager {
  constructor() {
    this.render();
  }

  render() {
    new PasswordLogin({ field: password });

    new PasswordLogin({ field: username });

    new LoginCheck({
      loginButton: btnLogin,
      inputs,
      runWhenFormIsFilled: this.checkIfLoanApplicantExist.bind(this),
    });
  }

  setLoginStatusTextContent(textContent) {
    loginStatus.textContent = textContent;
  }

  displayLoginStatusModal() {
    setTimeout(() => {
      const modal = new Modal({ dialog });
      modal.showModal();
    }, 200);
  }

  navigateToProfilePage() {
    this.setLoginStatusTextContent('Logging in...');

    this.displayLoginStatusModal();

    setTimeout(() => {
      window.location.href = './borrower-profile.html';
    }, 2000);
  }

  navigateToDashboardPage() {
    this.setLoginStatusTextContent('Logging in...');

    this.displayLoginStatusModal();

    setTimeout(() => {
      window.location.href = './borrower-dashboard.html';
    }, 2000);
  }

  incorrectUsernameOrPassword() {
    this.setLoginStatusTextContent('Incorrect Username or Password');

    this.displayLoginStatusModal();
  }

  checkIfBorrowerHasSignUp() {
    indexDB.createDatabase(
      {
        storeName: 'borrower-sign-up-list',
        getMethod: 'getAll',
        username,
        password,
        trueState: this.navigateToDashboardPage.bind(this),
        undefinedState: this.incorrectUsernameOrPassword.bind(this),
      },
      'checkIfLoginDetailsMatch',
    );
    this.setLoginStatusTextContent('Incorrect username or password');
  }

  checkIfLoanApplicantExist() {
    indexDB.createDatabase(
      {
        storeName: 'borrower-loan-applicant-list',
        getMethod: 'getAll',
        username,
        password,
        trueState: this.navigateToProfilePage.bind(this),
        undefinedState: this.checkIfBorrowerHasSignUp.bind(this),
      },
      'checkIfLoginDetailsMatch',
    );
  }
}

new LoginManager();
