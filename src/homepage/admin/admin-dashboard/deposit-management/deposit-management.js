import { compareAsc, format } from 'date-fns';

import eyeViewImg from '../../../assets/images/eye-view.svg';

import eventBus from '../../../module/event-bus/event';
import indexDB from '../../../module/indexDB/indexDB';

const depositManagement = (function createDepositManagementContent() {
  const div = document.createElement('div');

  div.innerHTML = `
            <h5 class="brief-text">Oversee and manage all loan applications within the system.</h5>
            <button type="button" class="btn-create-mass-deposit">Create Mass Deposit</button>  
            <div class="filter-section">
              <h3>Filter Loans</h3>
              <p>Find specific loans by it status</p>

              <div class="search-section">
                <input type="search" placeholder="Search Deposit by Deposit ID" />
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
                    Deposit(s)
                    (<span class="number-of-deposit"></span>)
                  </h4>
                  <p class="sub-heading">A comprehensive list of deposit</p>
                </caption>

                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>Deposit ID</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th colspan="4">Actions</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
            `;

  div.classList.add('deposit-container');

  return div;
})();

const numberOfDeposit = depositManagement.querySelector('.number-of-deposit');
const searchBar = depositManagement.querySelector('input[type=search]');
const searchStatus = depositManagement.querySelector('.search-status');
const tbody = depositManagement.querySelector('tbody');
const btnCreateMassDeposit = depositManagement.querySelector('.btn-create-mass-deposit');

function setNumberOfDepositValue(value) {
  numberOfDeposit.textContent = value;
}

const Event = ({ text, contentKey = 'question' }) =>
  new CustomEvent('dialog-manager', {
    detail: {
      contentKey,
      closedByValue: 'any',
      text,
    },
  });

const events = {
  approve: Event({ text: 'approve the deposit?' }),
  decline: Event({ text: 'decline the deposit?' }),
  adminVerification: Event({ contentKey: 'adminVerification' }),
};

const showDepositApproveOption = () => {
  eventBus.dispatchEvent(events.approve);
};

const showDepositDeclineOption = () => {
  eventBus.dispatchEvent(events.decline);
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
  const { depositAmount, depositID } = getAttributeFromTr(e);

  const obj = {
    key: 'action',
    data: {
      action: 'modifyData',
      id: +id,
      depositID,
      value: [{ status }, { actionDate: new Date() }],
      firstKey: ['deposit', 'deposit'],
      secondKey: ['status', 'actionDate'],
      depositAmount: +depositAmount,
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
  const depositID = tr.getAttribute('data-deposit-id');
  return depositID;
};

const getDepositAmountFromTr = (tr) => {
  const depositAmount = tr.getAttribute('data-deposit-amount');
  return depositAmount;
};

const getAttributeFromTr = (e) => {
  const tr = e.target.closest('tr');
  const id = getIDFromTr(tr);
  const depositID = getDepositIDFromTr(tr);
  const depositAmount = getDepositAmountFromTr(tr);

  return { id, depositID, depositAmount };
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

const getProofOfPaymentActionData = (e) => {
  const { id, depositID } = getAttributeFromTr(e);

  const obj = {
    key: 'action',
    data: {
      id: +id,
      action: 'proof',
      depositID,
    },
  };

  storeActionToLocalStorage(obj);
};

function storeActionToLocalStorage(obj) {
  localStorage.setData(obj);
}

const DBKeyHandler = {
  deposit: getClickTrLoanApplicantData,
  loanApplicantForm: getViewProfileActionData,
  proofOfPayment: getProofOfPaymentActionData,
};

const viewProfileEvent = new CustomEvent('profile');

const dispatchGetLoanApplicantData = () => {
  eventBus.dispatchEvent(viewProfileEvent);
};

const proofOfPaymentEvent = new CustomEvent('proof');

const dispatchGetProofOfPaymentData = () => {
  eventBus.dispatchEvent(proofOfPaymentEvent);
};

// views for displaying `loan applicant profile` and `proof of payment`
// The functions get data stored in localStorage containing id referencing the `tr` click
// which will be used to access indexedDB

const Views = {
  loanApplicantForm: dispatchGetLoanApplicantData,
  proofOfPayment: dispatchGetProofOfPaymentData,
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

const setAttributeToTr = ({ tr, id, depositID, depositAmount }) => {
  tr.setAttribute('data-id', id);
  tr.setAttribute('data-deposit-id', depositID);
  tr.setAttribute('data-deposit-id', depositID);
  tr.setAttribute('data-deposit-amount', depositAmount);
};

const appendTrToTbody = (tr) => {
  tbody.append(tr);
};

function showAdminVerificationForm() {
  eventBus.dispatchEvent(events.adminVerification);
}

function getMassDepositAction() {
  const obj = {
    key: 'action',
    data: {
      action: 'massModifyData',
    },
  };
  return obj;
}

function handleMassDepositActionStorage() {
  const massDepositAction = getMassDepositAction();
  storeActionToLocalStorage(massDepositAction);
}

function handleCreateMassDeposit() {
  showAdminVerificationForm();
  handleMassDepositActionStorage();
}

function insertDepositDataToTable(depositList) {
  tbody.innerHTML = '';

  depositList.forEach((data, index) => {
    const tr = createTableTr();
    const serialNumber = getSerialNumber(index);
    const date = getDate(data.dateAndTime);
    const time = getTime(data.dateAndTime);

    tr.innerHTML = `
       <td>${serialNumber}</td>
       <td class="depositID">${data.depositID}</td>
       <td>${data.depositAmount}</td>
       <td class="status">${data.status}</td>
       <td>${date}</td>
       <td>${time}</td>
       <td data-db-first-key="proofOfPayment"><img src="${eyeViewImg}" class="eye-view" alt="eye view"/>Proof of Payment</td>
       <td data-db-first-key="loanApplicantForm"><img src="${eyeViewImg}" class="eye-view" alt="eye view"/>View Profile</td>
       <td><button data-option-key="depositApproveOption" data-db-first-key="deposit" data-status="Approve" class="btn-approve-loan">Approve</button></td>
       <td><button data-option-key="depositDeclineOption" data-db-first-key="deposit" data-status="Decline" class="btn-decline-loan">Decline</button></td>
      `;
    checkStatus({ tr, status: data.status });
    setAttributeToTr({
      tr,
      id: data.id,
      depositID: data.depositID,
      depositAmount: data.depositAmount,
    });
    appendTrToTbody(tr);
  });
}

function checkStatus({ tr, status }) {
  if (status !== 'Pending') tr.setAttribute('data-action-perform', 'not-pending');
}

const sortTakenLoan = (depositList) => {
  depositList.sort((prev, next) => compareAsc(next.dateAndTime, prev.dateAndTime));

  insertDepositDataToTable(depositList);
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
  const depositID = tr.querySelector('.depositID');
  return depositID.textContent.toLowerCase();
}

function getTrs() {
  const trs = tbody.querySelectorAll('tr');
  return trs;
}

function filterLoanApplicantByDepositID(e) {
  const trs = getTrs();
  const searchBarValue = e.target.value.toLowerCase();

  trs.forEach((tr) => {
    const depositID = getDepositID(tr);
    depositID.includes(searchBarValue) ? tr.classList.remove('hide') : tr.classList.add('hide');
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

btnCreateMassDeposit.addEventListener('click', handleCreateMassDeposit);
searchStatus.addEventListener('change', filterLoanApplicantByStatus);
searchBar.addEventListener('input', filterLoanApplicantByDepositID);
tbody.addEventListener('click', handleOptionContent);
tbody.addEventListener('click', handleActionStorage);
const depositManagementGetDataInDBBus = new EventTarget();
depositManagementGetDataInDBBus.addEventListener(
  'render-content',
  getLoanApplicantForDepositManagement,
);

export { depositManagement, depositManagementGetDataInDBBus };
