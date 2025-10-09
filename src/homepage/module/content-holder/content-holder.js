import eventBus from '../event-bus/event';

import loanApplicantForm from '../../borrower/borrower-dashboard/loan-applicant-form';
import takeLoan from '../../borrower/borrower-dashboard/take-loan';
import myLoan from '../../borrower/borrower-dashboard/myLoan';

const contents = {
  loanApplicantForm,
  takeLoan,
  myLoan,
};

function appendContent(e) {
  const detail = e.detail;

  const content = contents[detail.contentKey]();

  appendContent.prototype.holder.innerHTML = '';
  appendContent.prototype.holder.append(content);
}

const bindCustomChangeContentEvent = () => {
  eventBus.addEventListener('custom-change-content', appendContent);
};

export { appendContent, bindCustomChangeContentEvent };
