import chatWithAI from '../../assets/images/chat-with-ai.svg';

import MathUtility from '../../module/business-logic/mathUtility';
import dashboardContent from '../../module/dashboard-content/dashboard-content';

const sectionRightImage = dashboardContent.querySelector('.section-right-side');
const title = dashboardContent.querySelector('.title');
const text = dashboardContent.querySelector('.text');
const totalTakenLoan = dashboardContent.querySelector('.total-loan-value');
const approveLoan = dashboardContent.querySelector('.approved-loan-value');
const declineLoan = dashboardContent.querySelector('.decline-loan-value');

function setLoanValue(value) {
  totalTakenLoan.textContent = value;
}
function setDepositValue(value) {
  approveLoan.textContent = value;
}
function setWithdrawalValue(value) {
  declineLoan.textContent = value;
}

function rerunOverMetric() {
  title.textContent = 'Empowering Financial Journeys';
  text.textContent = `Seamlessly manage and track all your loan activities, from Dashboard to
Repayment. Akwapolycoop Loan Tracker provides intuitive tools for both
administrators and borrowers to ensure clarity and efficiency.`;

  sectionRightImage.src = chatWithAI;

  MathUtility.generalOverMetric({
    loan: setLoanValue,
    deposit: setDepositValue,
    withdrawal: setWithdrawalValue,
  });
}

const adminDashboardContentBus = new EventTarget();
adminDashboardContentBus.addEventListener('render-content', rerunOverMetric);

export default adminDashboardContentBus;
