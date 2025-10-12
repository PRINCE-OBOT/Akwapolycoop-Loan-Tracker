import { compareAsc, parse } from 'date-fns';
import indexDB from '../../module/indexDB/indexDB';

const loanerManagement = (function createLoanerManagementContent() {
  const div = document.createElement('div');

  div.innerHTML = `
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
                    <th>S/N</th>
                    <th>Loan ID</th>
                    <th>Name</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody></tbody>
              </table>
            </div>
          `;

  div.classList.add('loaner-management-content');

  return div;
})();

function errorWhileGettingData() {
  console.log('Error while getting data');
}

const sortTakenLoan = (takeLoanList) => {
  const format = 'EEEE dd, MMMM, yyyy, hh:mm:ss a';

  takeLoanList.sort((prev, next) => {
    const prevDateAndTime = parse(prev.dateAndTime, format, new Date());
    const nextDataAndTime = parse(next.dateAndTime, format, new Date());
    return compareAsc(prevDateAndTime, nextDataAndTime);
  });
  console.log(takeLoanList);
};

const getTakeLoan = (loanApplicantListData) => {
  const takeLoanList = [];

  loanApplicantListData.forEach((data) => {
    if (!data.takeLoan) return;
    data.takeLoan.forEach((takeLoan) => takeLoanList.push(takeLoan));
  });

  sortTakenLoan(takeLoanList);
};

const getLoanApplicant = () => {
  indexDB.interact(
    {
      storeName: 'loan-applicant-list',
      getMethod: 'getAll',
      returnData: getTakeLoan,
      undefineState: errorWhileGettingData,
    },
    'getData',
  );
};
getLoanApplicant();

export { loanerManagement, getLoanApplicant };
