import { compareAsc, format } from 'date-fns';
import indexDB from '../../module/indexDB/indexDB';
import eyeViewImg from '../../assets/images/eye-view.svg';
import eventBus from '../../module/event-bus/event';
import bindModifyIndexdbEvent from './loan-management-modify';

bindModifyIndexdbEvent();

const loanerManagement = (function createLoanerManagementContent() {
  const div = document.createElement('div');

  div.innerHTML = `
            <h5 class="brief-text">Oversee and manage all loan applications within the system.</h5>

            <div class="filter-section">
              <h3>Filter Loans</h3>
              <p>Find specific loans by it status</p>

              <div class="search-section">
                <input type="search" placeholder="Search Loan by Loan ID" />
                <select name="search-status" class="search-status" id="">
                  <option value=" ">All Status</option>
                  <option value="decline">Decline</option>
                  <option value="approve">Approve</option>
                  <option value="pending">Pending</option>
                </select>
              </div>
            </div>

            <div class="loan-list-section">
              <table>
                <caption>
                  <h4 class="loan-list-heading">
                    Loan(s)
                    (<span class="number-of-loan"></span>)
                  </h4>
                  <p class="sub-heading">A comprehensive list of all taken loan</p>
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

  div.classList.add('loan-management-content');

  return div;
})();

const numberOfLoans = loanerManagement.querySelector('.number-of-loan');
const searchBar = loanerManagement.querySelector('input[type=search]');
const searchStatus = loanerManagement.querySelector('.search-status');
const tbody = loanerManagement.querySelector('tbody');

function setNumberOfLoanValue(value) {
  numberOfLoans.textContent = value;
}

function errorWhileGettingData() {
  console.log('Error while getting data');
}

const getDate = (dateAndTime) => {
  const date = format(dateAndTime, 'yyyy-MM-dd');
  return date;
};

const getTime = (dateAndTime) => {
  const time = format(dateAndTime, 'HH:mm:ss');
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

const provideModifyActionData = ({ amount, id, loanID, e }) => {
  const { status } = getAttributeFromTarget(e);

  const obj = {
    key: 'action',
    data: {
      action: 'modifyData',
      id,
      loanID,
      value: [{ status }, { outstandingBalance: +amount }, { actionDate: new Date() }],
      firstKey: new Array(3).fill('takeLoan'),
      secondKey: ['status', 'outstandingBalance', 'actionDate'],
    },
  };

  storeActionToLocalStorage(obj);
};

function getClickTrLoanApplicantData(e) {
  const { id, loanID } = getAttributeFromTr(e);

  const getTakeLoanAmount = (data) => {
    const result = data.takeLoan.find((obj) => obj.loanID === loanID);
    const amount = result['desired-amount'];

    provideModifyActionData({ amount, id, loanID, e });
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
}

const DBKeyHandler = {
  takeLoan: getClickTrLoanApplicantData,
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

const Event = ({ text = null, contentKey = 'question' }) =>
  new CustomEvent('dialog-manager', {
    detail: {
      contentKey,
      closedByValue: 'any',
      text,
    },
  });

const events = {
  approve: Event({ text: 'approve the loan?' }),
  decline: Event({ text: 'decline the loan?' }),
  depositForm: Event({ contentKey: 'depositForm' }),
};

const showDepositForm = () => {
  eventBus.dispatchEvent(events.depositForm);
};

function showDeclineOption() {
  eventBus.dispatchEvent(events.decline);
}

const OptionHandler = {
  approveOption: showDepositForm,
  declineOption: showDeclineOption,
};

function handleOptionContent(e) {
  const optionKey = e.target.dataset.optionKey;

  if (!optionKey) return;

  OptionHandler[optionKey]();
}

const appendTrToTbody = (tr) => {
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
  tbody.innerHTML = '';

  takeLoanList.forEach((data, index) => {
    const tr = createTableTr();
    const serialNumber = getSerialNumber(index);
    const date = getDate(data.dateAndTime);
    const time = getTime(data.dateAndTime);

    tr.innerHTML = `
       <td>${serialNumber}</td>
       <td class="loanID">${data.loanID}</td>
       <td>${data['desired-amount']}</td>
       <td>${data.tenor}</td>
       <td class="status">${data.status}</td>
       <td>${date}</td>
       <td>${time}</td>
       <td data-db-first-key="loanApplicantForm"><img src="${eyeViewImg}" class="eye-view" alt="eye view"/>View Profile</td>
       
      `;
    checkStatus({ tr, status: data.status });
    setAttributeToTr({ tr, loanID: data.loanID });
    appendTrToTbody(tr);
  });
}

const optionKeySection = (function createOptionKey() {
  return `
  <td><button data-option-key="approveOption" data-db-first-key="takeLoan" data-status="Approve" class="btn-approve-loan">Approve</button></td>
  <td><button data-option-key="declineOption" data-db-first-key="takeLoan" data-status="Decline" class="btn-decline-loan">Decline</button></td>`;
})();

function checkStatus({ tr, status }) {
  if (status === 'Pending') tr.innerHTML += optionKeySection;
}

const sortTakenLoan = (takeLoanList) => {
  takeLoanList.sort((prev, next) => compareAsc(next.dateAndTime, prev.dateAndTime));

  insertTakeLoanDataToTable(takeLoanList);
};

const getTakeLoan = (loanApplicantListData) => {
  const takeLoanList = [];

  loanApplicantListData.forEach((data) => {
    if (!data.takeLoan) return;
    data.takeLoan.forEach((takeLoan) => takeLoanList.push(takeLoan));
  });

  setNumberOfLoanValue(takeLoanList.length);
  sortTakenLoan(takeLoanList);
};

const getLoanApplicantForLoanManagement = () => {
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

function getLoanID(tr) {
  const loanID = tr.querySelector('.loanID');
  return loanID.textContent.toLowerCase();
}

function getTrs() {
  const trs = tbody.querySelectorAll('tr');
  return trs;
}

function filterLoanApplicantByLoanID(e) {
  const trs = getTrs();
  const searchBarValue = e.target.value.toLowerCase();

  trs.forEach((tr) => {
    const loanID = getLoanID(tr);
    loanID.includes(searchBarValue) ? tr.classList.remove('hide') : tr.classList.add('hide');
  });
}

function getStatus(tr) {
  const status = tr.querySelector('.status');
  return `${status.textContent.toLowerCase()} `;
}

function filterLoanApplicantByStatus(e) {
  const trs = getTrs();
  const searchStatusValue = e.target.value.toLowerCase();

  trs.forEach((tr) => {
    const status = getStatus(tr);
    status.includes(searchStatusValue) ? tr.classList.remove('hide') : tr.classList.add('hide');
  });
}

searchStatus.addEventListener('change', filterLoanApplicantByStatus);
searchBar.addEventListener('input', filterLoanApplicantByLoanID);
tbody.addEventListener('click', handleOptionContent);
tbody.addEventListener('click', handleActionStorage);
const loanerManagementGetDataInDBBus = new EventTarget();
loanerManagementGetDataInDBBus.addEventListener(
  'render-content',
  getLoanApplicantForLoanManagement,
);

export { loanerManagement, loanerManagementGetDataInDBBus };
