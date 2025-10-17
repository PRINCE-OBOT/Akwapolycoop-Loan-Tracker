import { compareAsc, parse } from 'date-fns';
import indexDB from '../../module/indexDB/indexDB';
import eyeViewImg from '../../assets/images/eye-view.svg';
import { dialogEvent } from '../../module/dialog/dialog-manager';
import eventBus from '../../module/event-bus/event';
import bindModifyIndexdbEvent from './loaner-management-modify';

bindModifyIndexdbEvent();

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
  tbody.addEventListener('click', handleActionStorage);
})();

const getIDFromTr = (tr) => {
  const id = tr.getAttribute('data-id');
  return id;
};

const getLoanIDFromTr = (tr) => {
  const loanID = tr.getAttribute('data-loan-ID');
  return loanID;
};

const getAttributeFromTarget = (e) => {
  const target = e.target;

  const status = target.getAttribute('data-status');

  return { status };
};

const getAttributeFromTr = (e) => {
  const tr = e.target.closest('tr');
  const id = getIDFromTr(tr);
  const loanID = getLoanIDFromTr(tr);

  return { id, loanID };
};

const storeActionToLocalStorage = (obj) => {
  localStorage.setData(obj);
};

const getViewProfileActionData = (e) => {
  const { id } = getAttributeFromTr(e);

  const obj = {
    key: 'action',
    data: {
      id: +id,
      action: 'viewProfile',
    },
  };

  storeActionToLocalStorage(obj);
};

const getModifyActionData = ({ amount, id, loanID, e }) => {
  const { status } = getAttributeFromTarget(e);

  const obj = {
    key: 'action',
    data: {
      action: 'modifyData',
      id,
      loanID,
      value: [{ status }, { outstandingBalance: +amount }, { actionDate: new Date() }],
      firstKey: ['takeLoan', 'takeLoan', 'takeLoan'],
      secondKey: ['status', 'outstandingBalance', 'actionDate'],
    },
  };

  storeActionToLocalStorage(obj);
};

function getRecentLoanApplicantData(e) {
  const { id, loanID } = getAttributeFromTr(e);

  const getTakeLoanAmount = (data) => {
    const result = data.takeLoan.find((obj) => obj.loanID === loanID);
    const amount = result['desired-amount'];

    getModifyActionData({ amount, id, loanID, e });
  };

  indexDB.interact(
    {
      storeName: 'loan-applicant-list',
      getMethod: 'get',
      keyPathValue: +id,
      returnData: getTakeLoanAmount,
      undefinedState: errorWhileGettingData,
    },
    'getData',
  );
  // getModifyActionData;
}

const DBKeyHandler = {
  takeLoan: getRecentLoanApplicantData,
  loanApplicantForm: getViewProfileActionData,
};

const viewProfileEvent = new CustomEvent('profile');

const dispatchGetLoanApplicantData = () => {
  eventBus.dispatchEvent(viewProfileEvent);
};

function handleActionStorage(e) {
  const key = e.target.dataset.dbFirstKey;

  if (!key) return;

  DBKeyHandler[key](e);

  if (key === 'loanApplicantForm') dispatchGetLoanApplicantData();
}

const showApproveOption = () => {
  eventBus.dispatchEvent(dialogEvent.approve);
};

const showDeclineOption = () => {
  eventBus.dispatchEvent(dialogEvent.decline);
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

const extractIdFromLoanID = (loanID) => {
  const id = loanID.slice(loanID.indexOf('N') + 1, loanID.indexOf('-'));
  return id;
};

const setAttributeToTr = ({ tr, loanID }) => {
  const id = extractIdFromLoanID(loanID);

  tr.setAttribute('data-loan-id', loanID);
  tr.setAttribute('data-id', id);
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
       <td data-db-first-key="loanApplicantForm"><img src="${eyeViewImg}" class="eye-view" alt="eye view"/>View</td>
       <td><button data-option-key="approveOption" data-db-first-key="takeLoan" data-status="Approve" class="btn-approve-loan">Approve</button></td>
       <td><button data-option-key="declineOption" data-db-first-key="takeLoan" data-status="Decline" class="btn-decline-loan">Decline</button></td>
      `;
    setAttributeToTr({ tr, loanID: data.loanID });
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

// eventBus.dispatchEvent(dialogEvent.profile)
export { loanerManagement, getLoanApplicant, loanerManagementGetDataInDBBus };
