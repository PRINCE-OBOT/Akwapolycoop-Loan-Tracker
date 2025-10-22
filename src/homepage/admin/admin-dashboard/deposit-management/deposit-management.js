import { compareAsc, format } from 'date-fns';

import eyeViewImg from '../../../assets/images/eye-view.svg';

import eventBus from '../../../module/event-bus/event';
import indexDB from '../../../module/indexDB/indexDB';

const depositManagement = (function createDepositManagementContent() {
  const div = document.createElement('div');

  div.innerHTML = `
            <h5 class="brief-text">Oversee and manage all loan applications within the system.</h5>

            <div class="filter-section">
              <h3>Filter Loans</h3>
              <p>Find specific loans by it status</p>

              <div class="search-section">
                <input type="search" placeholder="Search Deposit" />
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
                    Deposit(s)
                    (<span class="number-of-deposit"></span>)
                  </h4>
                  <p class="sub-heading">A comprehensive list of all loan applicant</p>
                </caption>

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
            `;

  div.classList.add('deposit-container');

  return div;
})();

const numberOfDeposit = depositManagement.querySelector('.number-of-deposit');

function setNumberOfDepositValue(value) {
  numberOfDeposit.textContent = value;
}

const getTbody = () => {
  const tbody = depositManagement.querySelector('tbody');
  return tbody;
};

const question = (text) =>
  new CustomEvent('dialog-manager', {
    detail: {
      contentKey: 'question',
      closedByValue: 'any',
      text,
    },
  });

const questionEvent = {
  approve: question('approve the deposit?'),
  decline: question('decline the deposit?'),
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
  const { depositAmount } = getAttributeFromTr(e);

  const obj = {
    key: 'action',
    data: {
      action: 'modifyData',
      id,
      value: [{ status }, { actionDate: new Date() }],
      firstKey: ['deposit', 'deposit'],
      secondKey: ['status', 'actionDate'],
      depositAmount,
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

const storeActionToLocalStorage = (obj) => {
  localStorage.setData(obj);
};

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
  const tbody = getTbody();
  tbody.append(tr);
};

function insertDepositDataToTable(depositList) {
  const tbody = getTbody();
  tbody.innerHTML = '';

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
       <td data-db-first-key="proofOfPayment"><img src="${eyeViewImg}" class="eye-view" alt="eye view"/>Proof of Payment</td>
       <td data-db-first-key="loanApplicantForm"><img src="${eyeViewImg}" class="eye-view" alt="eye view"/>View Profile</td>
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

const optionKeySection = (function createOptionKey() {
  return `
  <td><button data-option-key="depositApproveOption" data-db-first-key="deposit" data-status="Approve" class="btn-approve-loan">Approve</button></td>
  <td><button data-option-key="depositDeclineOption" data-db-first-key="deposit" data-status="Decline" class="btn-decline-loan">Decline</button></td>`;
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

const depositManagementGetDataInDBBus = new EventTarget();
depositManagementGetDataInDBBus.addEventListener(
  'render-content',
  getLoanApplicantForDepositManagement,
);

export { depositManagement, depositManagementGetDataInDBBus };
