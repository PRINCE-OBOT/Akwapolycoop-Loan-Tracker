import MathUtility from '../../module/business-logic/mathUtility';
import dashboardContent from '../../module/dashboard-content/dashboard-content';

const totalTakenLoan = dashboardContent.querySelector('.total-loan-value');
const approveLoan = dashboardContent.querySelector('.approved-loan-value');
const declineLoan = dashboardContent.querySelector('.decline-loan-value');
const pendingLoanSection = dashboardContent.querySelector('.pending-loan-section');

pendingLoanSection.remove();

function setTotalTakenLoanValue(value) {
  totalTakenLoan.textContent = value;
}
function setApproveLoanValue(value) {
  approveLoan.textContent = value;
}
function setDeclineLoanValue(value) {
  declineLoan.textContent = value;
}

function rerunOverMetric() {
  MathUtility.specificOverMetric({
    loan: setTotalTakenLoanValue,
    deposit: setApproveLoanValue,
    withdrawal: setDeclineLoanValue,
  });
}

const memberDashboardContentBus = new EventTarget();
memberDashboardContentBus.addEventListener('render-content', rerunOverMetric);

export default memberDashboardContentBus;
