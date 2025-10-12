const loanerManagement = function createLoanerManagementContent() {
  const div = document.createElement('div');
  `
 <div class="loaner-management-content">
            <h5>Oversee and manage all loan applications within the system.</h5>

            <div class="filter-section">
              <h3>Filter Loans</h3>
              <p>Find specific loans by it status</p>

              <div class="search-section">
                <input type="search" placeholder="Search borrower" />
                <select name="borrower-search-status" id="">
                  <option value="all-status">All Status</option>
                  <option value="decline">Decline</option>
                  <option value="approved">Approved</option>
                  <option value="pending">Pending</option>
                </select>
              </div>
            </div>

            <div class="loan-list-section">
              <table>
                <caption>
                  <h4 class="loan-list-heading">
                    All Loans
                    <span class="number-in-list">18</span>
                  </h4>
                  <p class="sub-heading">A comprehensive list of all loan application</p>
                </caption>

                <thead>
                  <tr>
                    <th>Borrower Name</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Application Date</th>
                    <th rowspan="3">Actions</th>
                  </tr>
                </thead>

                <tbody></tbody>
              </table>
            </div>
          </div>`;

  div.classList('loaner-management-content');

  return div;
};

export default loanerManagement;
