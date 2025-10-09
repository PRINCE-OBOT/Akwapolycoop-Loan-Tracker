import eventBus from '../event-bus/event';

import loanApplicantForm from '../../borrower/borrower-dashboard/template_borrower-loan-applicant-form';

const contents = {
  loanApplicantForm,
};

eventBus.addEventListener('custom-change-content', appendContent);

function appendContent(e) {
  const detail = e.detail;

  const content = contents[detail.contentKey];

  appendContent.prototype.holder.append(content);
}
