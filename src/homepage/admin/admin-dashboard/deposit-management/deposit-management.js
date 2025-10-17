import { compareAsc, parse } from 'date-fns';

import eyeViewImg from '../../../assets/images/eye-view.svg';

import { dialogEvent } from '../../../module/dialog/dialog-manager';
import eventBus from '../../../module/event-bus/event';
import indexDB from '../../../module/indexDB/indexDB';
import './deposit-management.css';

const depositManagement = (function createDepositManagementContent() {
  const div = document.createElement('div');

  div.innerHTML = `
      <div class="table-wrapper">
      <div class="table-header">
        <h2>All Deposits</h2>
        <div class="search-box">
          <input type="text" id="searchInput" placeholder="Search by serial number..." />
        </div>
      </div>

      <div class="table-content">
        <table id="depositsTable">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Amount Paid</th>
              <th>Status</th>
              <th>Date</th>
              <th>Time</th>
              <th>Proof</th>
              <th>Details</th>
              <th colspan="3">Actions</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
    `;

  div.classList.add('deposit-container');

  return div;
})();

const getTbody = () => {
  const tbody = depositManagement.querySelector('tbody');
  return tbody;
};

const showDepositApproveOption = () => {
  eventBus.dispatchEvent(dialogEvent.depositApprove);
};

const showDepositDeclineOption = () => {
  eventBus.dispatchEvent(dialogEvent.depositDecline);
};

const OptionHandler = {
  depositApproveOption: showDepositApproveOption,
  depositDeclineOption: showDepositDeclineOption,
};

function handleOptionContent(e) {
  const optionKey = e.target.dataset.optionKey;

  if (!optionKey) return;

  OptionHandler[optionKey]();
}

(function addEventToTbody() {
  const tbody = getTbody();
  tbody.addEventListener('click', handleOptionContent);
  tbody.addEventListener('click', handleActionStorage);
})();

const getAttributeFromTarget = (e) => {
  const target = e.target;

  const status = target.getAttribute('data-status');

  return { status };
};

const provideModifyActionData = ({ id, e }) => {
  const { status } = getAttributeFromTarget(e);

  const obj = {
    key: 'action',
    data: {
      action: 'modifyData',
      id,
      value: [{ status }, { actionDate: new Date() }],
      firstKey: ['deposit', 'deposit'],
      secondKey: ['status', 'actionDate'],
    },
  };

  storeActionToLocalStorage(obj);
};

function getClickTrLoanApplicantData(e) {
  const { id } = getAttributeFromTr(e);

  provideModifyActionData({ id, e });
}

const getIDFromTr = (tr) => {
  const id = tr.getAttribute('data-id');
  return id;
};

const getAttributeFromTr = (e) => {
  const tr = e.target.closest('tr');
  const id = getIDFromTr(tr);

  return { id };
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

const storeActionToLocalStorage = (obj) => {
  localStorage.setData(obj);
};

const DBKeyHandler = {
  deposit: getClickTrLoanApplicantData,
  loanApplicantForm: getViewProfileActionData,
};

function handleActionStorage(e) {
  const key = e.target.dataset.dbFirstKey;

  if (!key) return;

  DBKeyHandler[key](e);

  if (key === 'loanApplicantForm') dispatchGetLoanApplicantData();
}

const viewProfileEvent = new CustomEvent('profile');

const dispatchGetLoanApplicantData = () => {
  eventBus.dispatchEvent(viewProfileEvent);
};

const errorWhileGettingData = () => {
  console.log('Error while getting data');
};

const createTableTr = () => {
  const tr = document.createElement('tr');
  return tr;
};

const getSerialNumber = (index) => {
  const serialNumber = index + 1;
  return serialNumber;
};

const getDate = (dateAndTime) => {
  const date = dateAndTime.slice(0, dateAndTime.lastIndexOf(','));
  return date;
};

const getTime = (dateAndTime) => {
  const time = dateAndTime.slice(dateAndTime.lastIndexOf(',') + 1);
  return time;
};

const setAttributeToTr = ({ tr, id }) => {
  tr.setAttribute('data-id', id);
};

const appendTrToTbody = (tr) => {
  const tbody = getTbody();
  tbody.append(tr);
};

function insertTakeLoanDataToTable(depositList) {
  depositList.forEach((data, index) => {
    const tr = createTableTr();
    const serialNumber = getSerialNumber(index);
    const date = getDate(data.dateAndTime);
    const time = getTime(data.dateAndTime);

    tr.innerHTML = `
       <td>${serialNumber}</td>
       <td>${data.depositAmount}</td>
       <td>${data.status}</td>
       <td>${date}</td>
       <td>${time}</td>
       <td><img src="${eyeViewImg}" class="eye-view" alt="eye view"/>Proof of Payment</td>
       <td data-db-first-key="loanApplicantForm"><img src="${eyeViewImg}" class="eye-view" alt="eye view"/>View Profile</td>
       <td><button data-option-key="depositApproveOption" data-db-first-key="deposit" data-status="Approve" class="btn-approve-loan">Approve</button></td>
       <td><button data-option-key="depositDeclineOption" data-db-first-key="deposit" data-status="Decline" class="btn-decline-loan">Decline</button></td>
      `;
    setAttributeToTr({ tr, id: data.id });
    appendTrToTbody(tr);
  });
}

const sortTakenLoan = (depositList) => {
  const format = 'EEEE dd, MMMM, yyyy, hh:mm:ss a';

  depositList.sort((prev, next) => {
    const prevDateAndTime = parse(prev.dateAndTime, format, new Date());
    const nextDataAndTime = parse(next.dateAndTime, format, new Date());
    return compareAsc(nextDataAndTime, prevDateAndTime);
  });

  insertTakeLoanDataToTable(depositList);
};

const getDeposit = (loanApplicantListData) => {
  const depositList = [];

  loanApplicantListData.forEach((data) => {
    if (!data.deposit) return;

    const id = data.id;

    data.deposit.forEach((deposit) => {
      deposit.id = id;
      depositList.push(deposit);
    });
  });
  sortTakenLoan(depositList);
};

const getLoanApplicant = () => {
  indexDB.interact(
    {
      storeName: 'loan-applicant-list',
      getMethod: 'getAll',
      returnData: getDeposit,
      undefineState: errorWhileGettingData,
    },
    'getData',
  );
};

const depositManagementGetDataInDBBus = new EventTarget();
depositManagementGetDataInDBBus.addEventListener('get-data-in-indexedDB', getLoanApplicant);

export { depositManagement, depositManagementGetDataInDBBus };
