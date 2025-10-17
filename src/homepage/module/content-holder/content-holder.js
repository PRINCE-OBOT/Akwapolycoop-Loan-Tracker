import eventBus from '../event-bus/event';

import loanApplicantForm from '../../borrower/borrower-dashboard/loan-applicant-form';
import takeLoan from '../../borrower/borrower-dashboard/take-loan';
import { myLoan } from '../../borrower/borrower-dashboard/myLoan';
import adminDashboardContent from '../../admin/admin-dashboard/admin-dashboard-content';
import { loanerManagement } from '../../admin/admin-dashboard/loaner-management';
import loanApplicantDeposit from '../../borrower/borrower-dashboard/loan-applicant-deposit/loan-applicant-deposit';

const contents = {
  loanApplicantForm,
  takeLoan,
  myLoan,
  adminDashboardContent,
  loanerManagement,
  loanApplicantDeposit,
};

function appendContent(e) {
  const detail = e.detail;

  const content = contents[detail.contentKey];

  appendContent.prototype.holder.innerHTML = '';
  appendContent.prototype.holder.append(content);
}

(function bindCustomChangeContentEvent() {
  eventBus.addEventListener('custom-change-content', appendContent);
})();

export default appendContent;
