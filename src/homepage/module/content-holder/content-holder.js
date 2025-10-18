import eventBus from '../event-bus/event';

import loanApplicantForm from '../../borrower/borrower-dashboard/loan-applicant-form';
import takeLoan from '../../borrower/borrower-dashboard/take-loan';
import { myLoan } from '../../borrower/borrower-dashboard/myLoan';
import adminDashboardContent from '../../admin/admin-dashboard/admin-dashboard-content';
import {
  loanerManagement,
  loanerManagementGetDataInDBBus,
} from '../../admin/admin-dashboard/loan-management';
import loanApplicantDeposit from '../../borrower/borrower-dashboard/loan-applicant-deposit/loan-applicant-deposit';
import {
  depositManagement,
  depositManagementGetDataInDBBus,
} from '../../admin/admin-dashboard/deposit-management/deposit-management';

const getDataInIndexedDB = new CustomEvent('get-data-in-indexedDB');

const bus = {
  'deposit-management': depositManagementGetDataInDBBus,
  'loan-management': loanerManagementGetDataInDBBus,
};

const contents = {
  loanApplicantForm,
  takeLoan,
  myLoan,
  loanApplicantDeposit,
  'admin-dashboard': adminDashboardContent,
  'loan-management': loanerManagement,
  'deposit-management': depositManagement,
};

function appendContent(e) {
  const detail = e.detail;

  const content = contents[detail.contentKey];

  if (!content) return;

  appendContent.prototype.holder.innerHTML = '';
  appendContent.prototype.holder.append(content);

  bus[detail.contentKey]?.dispatchEvent(getDataInIndexedDB);
}

(function bindCustomChangeContentEvent() {
  eventBus.addEventListener('custom-change-content', appendContent);
})();

export default appendContent;
