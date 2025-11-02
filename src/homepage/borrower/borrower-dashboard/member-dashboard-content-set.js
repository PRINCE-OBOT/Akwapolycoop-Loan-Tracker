import adventureMap from '../../assets/images/adventure-map.svg';

import MathUtility from '../../module/business-logic/mathUtility';
import dashboardContent from '../../module/dashboard-content/dashboard-content';

const sectionRightImage = dashboardContent.querySelector('.section-right-side');
const title = dashboardContent.querySelector('.title');
const text = dashboardContent.querySelector('.text');
const totalTakenLoan = dashboardContent.querySelector('.total-loan-value');
const approveLoan = dashboardContent.querySelector('.approved-loan-value');
const declineLoan = dashboardContent.querySelector('.decline-loan-value');
const pendingLoanSection = dashboardContent.querySelector('.pending-loan-section');

sectionRightImage.src = adventureMap;
title.textContent = 'Simplify Your Loan Management';
text.textContent =
  'Take control of your finances with our intuitive loan tracker. Easily manage and track loan activities from deposit to repayment, ensuring clarity and efficiency';

pendingLoanSection.remove();

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
  MathUtility.specificOverMetric({
    loan: setLoanValue,
    deposit: setDepositValue,
    withdrawal: setWithdrawalValue,
  });
}

const memberDashboardContentBus = new EventTarget();
memberDashboardContentBus.addEventListener('render-content', rerunOverMetric);

export default memberDashboardContentBus;
