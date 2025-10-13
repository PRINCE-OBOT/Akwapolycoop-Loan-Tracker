import { compareAsc, parse } from 'date-fns';
import indexDB from '../../module/indexDB/indexDB';
import eyeViewImg from '../../assets/images/eye-view.svg';
import dialogEvent from '../../module/dialog/dialog-manager';
import eventBus from '../../module/event-bus/event';

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
                    <th>Amount (N)</th>
                    <th>Tenor (Days)</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th colspan="3">Actions</th>
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

const getDate = (dateAndTime) => {
  const date = dateAndTime.slice(0, dateAndTime.lastIndexOf(','));
  return date;
};

const getTime = (dateAndTime) => {
  const time = dateAndTime.slice(dateAndTime.lastIndexOf(',') + 1);
  return time;
};

const getSerialNumber = (index) => {
  const serialNumber = index + 1;
  return serialNumber;
};

const createTableTr = () => {
  const tr = document.createElement('tr');
  return tr;
};

const getTbody = () => {
  const tbody = loanerManagement.querySelector('tbody');
  return tbody;
};

(function addEventToTbody() {
  const tbody = getTbody();
  tbody.addEventListener('click', handleOptionContent);
})();

const showApproveOption = () => {
  eventBus.dispatchEvent(dialogEvent.optionApprove);
};

const showDeclineOption = () => {
  eventBus.dispatchEvent(dialogEvent.optionDecline);
};

const OptionHandler = {
  approveOption: showApproveOption,
  declineOption: showDeclineOption,
};

function handleOptionContent(e) {
  const optionKey = e.target.dataset.optionKey;

  if (!optionKey) return;

  OptionHandler[optionKey]();
}

const appendTrToTbody = (tr) => {
  const tbody = getTbody();
  tbody.append(tr);
};

const setAttributeToTr = ({ tr, value }) => {
  tr.setAttribute('data-loan-id', value);
};

function insertTakeLoanDataToTable(takeLoanList) {
  takeLoanList.forEach((data, index) => {
    const tr = createTableTr();
    const serialNumber = getSerialNumber(index);
    const date = getDate(data.dateAndTime);
    const time = getTime(data.dateAndTime);

    tr.innerHTML = `
       <td>${serialNumber}</td>
       <td>${data.loanID}</td>
       <td>${data['desired-amount']}</td>
       <td>${data.tenor}</td>
       <td>${data.status}</td>
       <td>${date}</td>
       <td>${time}</td>
       <td><img src="${eyeViewImg}" alt="eye view"/>View</td>
       <td><button data-option-key="approveOption" class="btn-approve-loan">Approve</button></td>
       <td><button data-option-key="declineOption" class="btn-decline-loan">Decline</button></td>
      `;
    setAttributeToTr({ tr, value: data.loanID });
    appendTrToTbody(tr);
  });
}

const sortTakenLoan = (takeLoanList) => {
  const format = 'EEEE dd, MMMM, yyyy, hh:mm:ss a';

  takeLoanList.sort((prev, next) => {
    const prevDateAndTime = parse(prev.dateAndTime, format, new Date());
    const nextDataAndTime = parse(next.dateAndTime, format, new Date());
    return compareAsc(prevDateAndTime, nextDataAndTime);
  });

  insertTakeLoanDataToTable(takeLoanList);
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

const loanerManagementGetDataInDBBus = new EventTarget();
loanerManagementGetDataInDBBus.addEventListener('get-data-in-indexedDB', getLoanApplicant);

export { loanerManagement, getLoanApplicant, loanerManagementGetDataInDBBus };
