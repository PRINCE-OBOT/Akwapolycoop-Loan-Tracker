import MathUtility from '../../module/business-logic/mathUtility';
import dashboardContent from '../../module/dashboard-content/dashboard-content';

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
  MathUtility.generalOverMetric({
    loan: setLoanValue,
    deposit: setDepositValue,
    withdrawal: setWithdrawalValue,
  });
}

const adminDashboardContentBus = new EventTarget();
adminDashboardContentBus.addEventListener('render-content', rerunOverMetric);

export default adminDashboardContentBus;
