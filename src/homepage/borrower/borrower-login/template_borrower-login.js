import '../../admin/admin-login/template_admin-login.css';
import '../../assets/reset.css';
import '../../assets/font.css';
import '../../assets/common_general.css';
import '../../assets/style-border-button.css';

import registerLocalStorageCustomMethod from '../../module/localStorage/localStorage';
import handleFieldValidationLogic from '../../module/form-validation/field-validator';
import FieldValidationUtility from '../../module/form-validation/field-utility';

import indexDB from '../../module/indexDB/indexDB';
import eventBus from '../../module/event-bus/event';
import { appendDialogToBody } from '../../module/dialog/dialog-manager';

const form = document.querySelector('.login-form');
const membershipID = form.querySelector('#membership-ID');
const inputs = form.querySelectorAll('input');
const messages = form.querySelectorAll('output.show-message');
const btnLogin = form.querySelector('.btn-login');

registerLocalStorageCustomMethod();

appendDialogToBody.prototype.body = document.body;
appendDialogToBody();

const navigateToDashboardPage = () => {
  setTimeout(() => {
    window.location.href = './borrower-dashboard.html';
  }, 2000);
};

const setLoanApplicantIDInLocalStorage = (id) => {
  localStorage.setData({ key: 'recent-loan-applicant', data: { id } });
};

const Event = ({ text, closedByValue = 'any' }) =>
  new CustomEvent('dialog-manager', {
    detail: {
      contentKey: 'status',
      closedByValue,
      text,
    },
  });

const events = {
  login: Event({ text: 'Logging in...', closedByValue: 'closerequest' }),
  fail: Event({ text: 'Incorrect Membership ID' }),
};

const displayIncorrectMembershipID = () => {
  eventBus.dispatchEvent(events.fail);
};

const processNavigatingToDashboard = (id) => {
  setLoanApplicantIDInLocalStorage(id);
  eventBus.dispatchEvent(events.login);
  navigateToDashboardPage();
};

function resetForm() {
  form.reset();
}

function isMembershipIDCorrect(data) {
  for (let i = 0; i < data.length; i++) {
    const memberAppForm = data[i].membershipApplicationForm;
    if (memberAppForm) {
      if (memberAppForm.membershipID === membershipID.value) {
        processNavigatingToDashboard(data[i].id);
        return;
      }
    }
  }

  displayIncorrectMembershipID();
  resetForm();
}

const checkIfLoanApplicantDataIsCorrect = () => {
  indexDB.interact(
    {
      storeName: 'loan-applicant-list',
      getMethod: 'getAll',
      returnData: isMembershipIDCorrect,
      undefinedState: displayIncorrectMembershipID,
    },
    'getData',
  );
};

const checkIfAllFieldFillIsValid = () => {
  new FieldValidationUtility({
    messages,
    inputs,
    runWhenAllFieldFillIsValid: checkIfLoanApplicantDataIsCorrect,
  });
};

btnLogin.addEventListener('click', checkIfAllFieldFillIsValid);
form.addEventListener('input', handleFieldValidationLogic);
