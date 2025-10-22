import chatWithAIImg from '../../assets/images/chat-with-ai.svg';
import totalLoanApplicantImg from '../../assets/images/total-loan-applicant.svg';
import revenueImg from '../../assets/images/revenue.svg';
import pendingLoanImg from '../../assets/images/pending-loan.svg';
import declineLoanImg from '../../assets/images/delined-loan.svg';
import approveLoanImg from '../../assets/images/approve-loan.svg';
import MathUtility from '../../module/business-logic/mathUtility';

const adminDashboardContent = (function createAdminDashboardContent() {
  const div = document.createElement('div');

  div.innerHTML = `
            <div class="dashboard-borrower-section">
              <div class="dashboard-borrower-section-left-side">
                <div class="dashboard-borrower-section-left-side-text">
                  <h2>Empowering Financial Journeys</h2>
                  <p>
                    Seamlessly manage and track all your loan activities, from Dashboard to
                    Repayment. Akwapolycoop Loan Tracker provides intuitive tools for both
                    administrators and borrowers to ensure clarity and efficiency.
                  </p>
                </div>
                <p>
                  Trusted.
                </p>
              </div>

              <div class="dashboard-borrower-section-right-side">
              <img src="${chatWithAIImg}" alt="Chat with AI">
              </div>
            </div>

            <div class="overview-metric-section">
              <h2 class="title">Overview Metrics</h2>

              <div class="overview-metric-information-section">
                <div class="total-applicant-loan-section">
                  <div class="total-loan-title-section">
                  <img src="${totalLoanApplicantImg}" alt="Total Loan Applicant">
                    <h5>Total Taken Loans</h5>
                  </div>

                  <h2 class="total-loan-value"></h2>
                </div>

                <!--
                <div class="revenue-loan-section">
                  <div class="revenue-title-section">
                  <img src="${revenueImg}" alt="Revenue">
                    <h5>Revenue</h5>
                  </div>

                  <h2 class="revenue-value"></h2>
                </div>
                -->

                <div class="approved-loan-section">
                  <div class="approved-loan-title-section">
                  <img src="${approveLoanImg}" alt="Approve Loan">
                    <h5>Approved Loan</h5>
                  </div>

                  <h2 class="approved-loan-value"></h2>
                </div>

                <div class="pending-loan-section">
                  <div class="pending-loan-title-section">
                  <img src="${pendingLoanImg}" alt="Pending Loan">
                    <h5>Pending Loan</h5>
                  </div>
                  <h2 class="pending-loan-value"></h2>
                </div>

                <div class="decline-loan-section">
                  <div class="decline-loan-title-section">
                  <img src="${declineLoanImg}" alt="Pending Loan">
                    <h5>Decline Loan</h5>
                  </div>

                  <h2 class="decline-loan-value"></h2>
                </div>
              </div>
            </div>
          `;

  div.classList.add('admin-dashboard-content');

  return div;
})();

const totalTakenLoan = adminDashboardContent.querySelector('.total-loan-value');
const approveLoan = adminDashboardContent.querySelector('.approved-loan-value');
const pendingLoan = adminDashboardContent.querySelector('.pending-loan-value');
const declineLoan = adminDashboardContent.querySelector('.decline-loan-value');

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

const adminDashboardContentBBus = new EventTarget();
adminDashboardContentBBus.addEventListener('render-content', rerunOverMetric);

export { adminDashboardContent, adminDashboardContentBBus };
