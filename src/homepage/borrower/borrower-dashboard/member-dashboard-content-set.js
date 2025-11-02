import MathUtility from '../../module/business-logic/mathUtility';
import dashboardContent from '../../module/dashboard-content/dashboard-content';

const totalTakenLoan = dashboardContent.querySelector('.total-loan-value');
const approveLoan = dashboardContent.querySelector('.approved-loan-value');
const pendingLoan = dashboardContent.querySelector('.pending-loan-value');
const declineLoan = dashboardContent.querySelector('.decline-loan-value');

function setTotalTakenLoanValue(value) {
  totalTakenLoan.textContent = value;
}
function setApproveLoanValue(value) {
  approveLoan.textContent = value;
}
function setDeclineLoanValue(value) {
  declineLoan.textContent = value;
}
function setPendingLoanValue(value) {
  pendingLoan.textContent = value;
}

function rerunOverMetric() {
  MathUtility.overMetric({
    totalTakenLoan: setTotalTakenLoanValue,
    approveLoan: setApproveLoanValue,
    declineLoan: setDeclineLoanValue,
    pendingLoan: setPendingLoanValue,
  });
}

const memberDashboardContentBus = new EventTarget();
memberDashboardContentBus.addEventListener('render-content', rerunOverMetric);

export default memberDashboardContentBus;
