import { compareAsc, format } from 'date-fns';

import eyeViewImg from '../../assets/images/eye-view.svg';

import eventBus from '../../module/event-bus/event';
import indexDB from '../../module/indexDB/indexDB';

const withdrawalManagement = (function createDepositManagementContent() {
  const div = document.createElement('div');

  div.innerHTML = `
            <h5 class="brief-text">Oversee and manage all loan applications within the system.</h5>

            <div class="filter-section">
              <h3>Filter Loans</h3>
              <p>Find specific withdrawal by it status</p>

              <div class="search-section">
                <input type="search" placeholder="Search withdrawal by withdrawal ID" />
                <select name="search-status" class="search-status" id="">
                  <option value=" ">All Status</option>
                  <option value="decline">Decline</option>
                  <option value="approve">Approved</option>
                  <option value="pending">Pending</option>
                </select>
              </div>
            </div>

            <div class="loan-list-section">
              <table>
                <caption>
                  <h4 class="loan-list-heading">
                    Withdrawal(s)
                    (<span class="number-of-withdrawal"></span>)
                  </h4>
                  <p class="sub-heading">A comprehensive list of withdrawal</p>
                </caption>

                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>Withdrawal ID</th>
                    <th>Amount Paid</th>
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

  div.classList.add('withdrawal-container');

  return div;
})();

const numberOfDeposit = withdrawalManagement.querySelector('.number-of-withdrawal');
const searchBar = withdrawalManagement.querySelector('input[type=search]');
const searchStatus = withdrawalManagement.querySelector('.search-status');
const tbody = withdrawalManagement.querySelector('tbody');

function setNumberOfDepositValue(value) {
  numberOfDeposit.textContent = value;
}

const question = (text) =>
  new CustomEvent('dialog-manager', {
    detail: {
      contentKey: 'question',
      closedByValue: 'any',
      text,
    },
  });

const questionEvent = {
  approve: question('approve the withdrawal?'),
  decline: question('decline the withdrawal?'),
};

const showDepositApproveOption = () => {
  eventBus.dispatchEvent(questionEvent.approve);
};

const showDepositDeclineOption = () => {
  eventBus.dispatchEvent(questionEvent.decline);
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

(function addEventToTbody() {})();

const getAttributeFromTarget = (e) => {
  const target = e.target;

  const status = target.getAttribute('data-status');

  return { status };
};

const provideModifyActionData = ({ id, e }) => {
  const { status } = getAttributeFromTarget(e);
  const { withdrawalAmount, withdrawalID } = getAttributeFromTr(e);

  const obj = {
    key: 'action',
    data: {
      action: 'modifyData',
      id: +id,
      withdrawalID,
      value: [{ status }, { actionDate: new Date() }],
      firstKey: ['withdrawal', 'withdrawal'],
      secondKey: ['status', 'actionDate'],
      withdrawalAmount: +withdrawalAmount,
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

const getDepositIDFromTr = (tr) => {
  const withdrawalID = tr.getAttribute('data-withdrawal-id');
  return withdrawalID;
};

const getDepositAmountFromTr = (tr) => {
  const withdrawalAmount = tr.getAttribute('data-withdrawal-amount');
  return withdrawalAmount;
};

const getAttributeFromTr = (e) => {
  const tr = e.target.closest('tr');
  const id = getIDFromTr(tr);
  const withdrawalID = getDepositIDFromTr(tr);
  const withdrawalAmount = getDepositAmountFromTr(tr);

  return { id, withdrawalID, withdrawalAmount };
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
  withdrawal: getClickTrLoanApplicantData,
  loanApplicantForm: getViewProfileActionData,
};

const viewProfileEvent = new CustomEvent('profile');

const dispatchGetLoanApplicantData = () => {
  eventBus.dispatchEvent(viewProfileEvent);
};

// views for displaying `loan applicant profile` and `proof of payment`
// The functions get data stored in localStorage containing id referencing the `tr` click
// which will be used to access indexedDB

const Views = {
  loanApplicantForm: dispatchGetLoanApplicantData,
};

function handleActionStorage(e) {
  const key = e.target.dataset.dbFirstKey;

  if (!key) return;

  DBKeyHandler[key](e);

  if (Views[key]) Views[key]();
}

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
  const date = format(dateAndTime, 'yyyy-MM-dd');
  return date;
};

const getTime = (dateAndTime) => {
  const time = format(dateAndTime, 'HH:mm:ss');
  return time;
};

const setAttributeToTr = ({ tr, id, withdrawalID, withdrawalAmount }) => {
  tr.setAttribute('data-id', id);
  tr.setAttribute('data-withdrawal-id', withdrawalID);
  tr.setAttribute('data-withdrawal-amount', withdrawalAmount);
};

const appendTrToTbody = (tr) => {
  tbody.append(tr);
};

function insertDepositDataToTable(depositList) {
  tbody.innerHTML = '';

  depositList.forEach((data, index) => {
    const tr = createTableTr();
    const serialNumber = getSerialNumber(index);
    const date = getDate(data.dateAndTime);
    const time = getTime(data.dateAndTime);

    tr.innerHTML = `
       <td>${serialNumber}</td>
       <td class="withdrawalID">${data.withdrawalID}</td>
       <td>${data.withdrawalAmount}</td>
       <td class="status">${data.status}</td>
       <td>${date}</td>
       <td>${time}</td>
       <td data-db-first-key="loanApplicantForm"><img src="${eyeViewImg}" class="eye-view" alt="eye view"/>View Profile</td>
      `;
    checkStatus({ tr, status: data.status });
    setAttributeToTr({
      tr,
      id: data.id,
      withdrawalID: data.withdrawalID,
      withdrawalAmount: data.withdrawalAmount,
    });
    appendTrToTbody(tr);
  });
}

const optionKeySection = (function createOptionKey() {
  return `
  <td><button data-option-key="depositApproveOption" data-db-first-key="withdrawal" data-status="Approve" class="btn-approve-loan">Approve</button></td>
  <td><button data-option-key="depositDeclineOption" data-db-first-key="withdrawal" data-status="Decline" class="btn-decline-loan">Decline</button></td>`;
})();

function checkStatus({ tr, status }) {
  if (status === 'Pending') tr.innerHTML += optionKeySection;
}

const sortTakenLoan = (depositList) => {
  depositList.sort((prev, next) => compareAsc(next.dateAndTime, prev.dateAndTime));

  insertDepositDataToTable(depositList);
};

const getDeposit = (loanApplicantListData) => {
  const depositList = [];

  loanApplicantListData.forEach((data) => {
    if (!data.withdrawal) return;

    const id = data.id;

    data.withdrawal.forEach((withdrawal) => {
      withdrawal.id = id;
      depositList.push(withdrawal);
    });
  });

  setNumberOfDepositValue(depositList.length);
  sortTakenLoan(depositList);
};

const getLoanApplicantForDepositManagement = () => {
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

function getDepositID(tr) {
  const withdrawalID = tr.querySelector('.withdrawalID');
  return withdrawalID.textContent.toLowerCase();
}

function getTrs() {
  const trs = tbody.querySelectorAll('tr');
  return trs;
}

function filterLoanApplicantByDepositID(e) {
  const trs = getTrs();
  const searchBarValue = e.target.value.toLowerCase();

  trs.forEach((tr) => {
    const withdrawalID = getDepositID(tr);
    withdrawalID.includes(searchBarValue) ? tr.classList.remove('hide') : tr.classList.add('hide');
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
searchBar.addEventListener('input', filterLoanApplicantByDepositID);
tbody.addEventListener('click', handleOptionContent);
tbody.addEventListener('click', handleActionStorage);

const withdrawalManagementGetDataInDBBus = new EventTarget();
withdrawalManagementGetDataInDBBus.addEventListener(
  'render-content',
  getLoanApplicantForDepositManagement,
);

export { withdrawalManagement, withdrawalManagementGetDataInDBBus };
