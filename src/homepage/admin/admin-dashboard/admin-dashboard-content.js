const adminDashboardContent = function createAdminDashboardContent() {
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

                <a class="dashboard-borrower-link" href="./borrower-dashboard.html">
                  Dashboard Borrower
                </a>
              </div>

              <div class="dashboard-borrower-section-right-side">
                <img src="../../assets/images/chat-with-ai.svg" alt="Chat-with-ai" />
              </div>
              <img class="image-circle" src="../../assets/images/circle-and-outer-lines_teal.svg" />
            </div>

            <div class="overview-metric-section">
              <h2 class="title">Overview Metrics</h2>

              <div class="overview-metric-information-section">
                <div class="total-applicant-loan-section">
                  <div class="total-loan-title-section">
                    <img src="../../assets/images/total-loan-applicant.svg" alt="Total loan icon" />
                    <h5>Total Loans Applicant</h5>
                  </div>

                  <h2 class="total-loan-value"></h2>
                </div>

                <div class="revenue-loan-section">
                  <div class="revenue-title-section">
                    <img src="../../assets/images/revenue.svg" alt="Revenue icon" />
                    <h5>Revenue</h5>
                  </div>

                  <h2 class="revenue-value"></h2>
                </div>

                <div class="approved-loan-section">
                  <div class="approved-loan-title-section">
                    <img src="../../assets/images/approve-loan.svg" alt="Approved loan icon" />
                    <h5>Approved Loan</h5>
                  </div>

                  <h2 class="approved-loan-value"></h2>
                </div>

                <div class="pending-loan-section">
                  <div class="pending-loan-title-section">
                    <img src="../../assets/images/pending-loan.svg" alt="Pending Loan icon" />
                    <h5>Pending Loan</h5>
                  </div>
                  <h2 class="pending-loan-value"></h2>
                </div>

                <div class="decline-loan-section">
                  <div class="decline-loan-title-section">
                    <img src="../../assets/images/delined-loan.svg" alt="Decline Loan icon" />
                    <h5>Decline Loan</h5>
                  </div>

                  <h2 class="decline-loan-value"></h2>
                </div>
              </div>
            </div>
          `;

  div.classList('admin-dashboard-content');

  return div;
};

export default adminDashboardContent;
