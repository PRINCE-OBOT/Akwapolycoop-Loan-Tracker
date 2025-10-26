import eventBus from '../event-bus/event';

import loanApplicantForm from '../../borrower/borrower-dashboard/loan-applicant-form';
import takeLoan from '../../borrower/borrower-dashboard/take-loan';
import { myLoan, myLoanGetDataInDBBus } from '../../borrower/borrower-dashboard/myLoan';
import {
  adminDashboardContent,
  adminDashboardContentBBus,
} from '../../admin/admin-dashboard/admin-dashboard-content';
import {
  loanerManagement,
  loanerManagementGetDataInDBBus,
} from '../../admin/admin-dashboard/loan-management';
import { loanApplicantDeposit } from '../../borrower/borrower-dashboard/loan-applicant-deposit/loan-applicant-deposit';
import {
  depositManagement,
  depositManagementGetDataInDBBus,
} from '../../admin/admin-dashboard/deposit-management/deposit-management';
import {
  loanApplicantManagement,
  loanApplicantManagementGetDataInDBBus,
} from '../../admin/admin-dashboard/loan-applicant-management';
import { myDeposit, depositRenderContentDBBus } from '../../borrower/borrower-dashboard/myDeposit';

const getDataInIndexedDB = new CustomEvent('render-content');

const bus = {
  'deposit-management': depositManagementGetDataInDBBus,
  'loan-management': loanerManagementGetDataInDBBus,
  'my-loan': myLoanGetDataInDBBus,
  'loan-applicant-management': loanApplicantManagementGetDataInDBBus,
  'my-deposit': depositRenderContentDBBus,
  'admin-dashboard': adminDashboardContentBBus,
};

const contents = {
  'loan-applicant-form': loanApplicantForm,
  'take-loan': takeLoan,
  'my-loan': myLoan,
  'my-deposit': myDeposit,
  deposit: loanApplicantDeposit,
  'admin-dashboard': adminDashboardContent,
  'loan-management': loanerManagement,
  'deposit-management': depositManagement,
  'loan-applicant-management': loanApplicantManagement,
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
