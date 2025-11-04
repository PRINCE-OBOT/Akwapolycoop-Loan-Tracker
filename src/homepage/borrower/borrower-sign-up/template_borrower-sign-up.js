import '../../assets/form-logic.css';
import '../../assets/form.css';
import '../../assets/reset.css';
import '../../assets/font.css';
import '../../assets/common_general.css';
import '../../assets/style-border-button.css';
import './template_borrower-sign-up.css';

import loanApplicantForm from '../borrower-dashboard/loan-applicant-form';
import bindAllFieldValidEvent from '../borrower-dashboard/is-all-field-valid';
import bindSubmitApplicationButton from '../borrower-dashboard/loan-applicant-form-handle-submission';

const joinUsHolder = document.querySelector('.join-us-content-holder');

bindAllFieldValidEvent();
bindSubmitApplicationButton();

joinUsHolder.append(loanApplicantForm);
