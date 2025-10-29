import '../../assets/form-logic.css';
import '../../assets/form.css';
import '../../assets/reset.css';
import '../../assets/font.css';
import '../../assets/common_general.css';
import '../../assets/style-border-button.css';

import loanApplicantForm from '../borrower-dashboard/loan-applicant-form';

const joinUsHolder = document.querySelector('.join-us-content-holder');

joinUsHolder.append(loanApplicantForm);

function resetForm() {
  loanApplicantForm.reset();
}

window.addEventListener('pageshow', resetForm);
