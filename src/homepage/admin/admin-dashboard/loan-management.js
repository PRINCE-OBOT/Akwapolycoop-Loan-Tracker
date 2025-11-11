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
                    <th>Amount(N)</th>
                    <th>Disburse(N)</th>
                    <th>Dividend(N)</th>
                    <th>Pay</th>
                    <th>Monthly WA</th>
                    <th>Status</th>
                    <th>O/S</th>
                    <th>Purpose</th>
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

const getDepositAmountFromTr = (tr) => {
  const loanAmount = tr.getAttribute('data-loan-amount');
  return loanAmount;
};

const getAttributeFromTr = (e) => {
  const tr = e.target.closest('tr');
  const id = getIDFromTr(tr);
  const loanID = getLoanIDFromTr(tr);
  const loanAmount = getDepositAmountFromTr(tr);

  return { id, loanID, loanAmount };
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

const provideModifyActionData = ({ id, e }) => {
  const { status } = getAttributeFromTarget(e);
  const { loanAmount, loanID } = getAttributeFromTr(e);

  const obj = {
    key: 'action',
    data: {
      action: 'modifyData',
      id: +id,
      loanID,
      value: [{ status }, { loanAmountDynamic: +loanAmount }, { actionDate: new Date() }],
      firstKey: new Array(3).fill('loan'),
      secondKey: ['status', 'loanAmountDynamic', 'actionDate'],
      loanAmount: +loanAmount,
    },
  };

  storeActionToLocalStorage(obj);
};

function getClickTrLoanApplicantData(e) {
  const { id } = getAttributeFromTr(e);

  provideModifyActionData({ id, e });
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
};

const showLoanApproveOption = () => {
  eventBus.dispatchEvent(events.approve);
};

function showDeclineOption() {
  eventBus.dispatchEvent(events.decline);
}

const OptionHandler = {
  approveOption: showLoanApproveOption,
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

const setAttributeToTr = ({ tr, loanID, loanAmount }) => {
  const id = extractIdFromLoanID(loanID);

  tr.setAttribute('data-id', id);
  tr.setAttribute('data-loan-id', loanID);
  tr.setAttribute('data-loan-amount', loanAmount);
};

function insertTakeLoanDataToTable(loanList) {
  tbody.innerHTML = '';

  loanList.forEach((data, index) => {
    const tr = createTableTr();
    const serialNumber = getSerialNumber(index);
    const date = getDate(data.dateAndTime);
    const time = getTime(data.dateAndTime);

    tr.innerHTML = `
       <td>${serialNumber}</td>
       <td class="loanID">${data.loanID}</td>
       <td>${data.loanAmount}</td>
       <td>${data.amountDisburse}</td>
       <td>${data.dividendAmount}</td>
       <td>${data.monthlyWithdrawalAmount}</td>
       <td class="status">${data.status}</td>
       <td>${data.loanAmountDynamic}</td>
       <td>${data.loanPurpose}</td>
       <td>${date}</td>
       <td>${time}</td>
       <td data-db-first-key="loanApplicantForm"><img src="${eyeViewImg}" class="eye-view" alt="eye view"/>View Profile</td>
       <td><button data-option-key="approveOption" data-db-first-key="takeLoan" data-status="Approve" class="btn-approve-loan">Approve</button></td>
       <td><button data-option-key="declineOption" data-db-first-key="takeLoan" data-status="Decline" class="btn-decline-loan">Decline</button></td>
      `;
    checkStatus({ tr, status: data.status });
    setAttributeToTr({ tr, loanID: data.loanID, loanAmount: data.loanAmount });
    appendTrToTbody(tr);
  });
}

function checkStatus({ tr, status }) {
  if (status !== 'Pending') tr.setAttribute('data-action-perform', 'not-pending');
}

const sortTakenLoan = (loanList) => {
  loanList.sort((prev, next) => compareAsc(next.dateAndTime, prev.dateAndTime));

  insertTakeLoanDataToTable(loanList);
};

const getTakeLoan = (loanApplicantListData) => {
  const loanList = [];

  loanApplicantListData.forEach((data) => {
    if (!data.loan) return;
    data.loan.forEach((loan) => loanList.push(loan));
  });

  setNumberOfLoanValue(loanList.length);
  sortTakenLoan(loanList);
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
