import { format } from 'date-fns';
import eventBus from '../../module/event-bus/event';
import indexDB from '../../module/indexDB/indexDB';
import eyeViewImg from '../../assets/images/eye-view.svg';
import approveImg from '../../assets/images/approve-loan.svg';

import registerLocalStorageCustomMethod from '../../module/localStorage/localStorage';
import { proofOfPayment } from '../../admin/admin-dashboard/proof-of-payment/proof-of-payment';

registerLocalStorageCustomMethod();

const proofOfPaymentPreview = proofOfPayment.querySelector('.proof-of-payment-preview');
const dateOfPayment = proofOfPayment.querySelector('.date-of-payment');
const timeOfPayment = proofOfPayment.querySelector('.time-of-payment');

const myDeposit = (function createTableHeading() {
  const div = document.createElement('div');

  div.innerHTML = `
            <h5 class="brief-text">Oversee and manage all loan applications within the system.</h5>

            <div class="filter-section">
              <h3>Filter Deposit</h3>
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
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
            `;

  div.classList.add('my-deposit-container');

  return div;
})();

const numberOfDeposit = myDeposit.querySelector('.number-of-deposit');
const searchBar = myDeposit.querySelector('input[type=search]');
const searchStatus = myDeposit.querySelector('.search-status');
const tbody = myDeposit.querySelector('tbody');

const getSerialNumber = (index) => {
  const serialNumber = index + 1;
  return serialNumber;
};

const Event = ({ text = null, closedByValue = 'any', contentKey = 'status' }) =>
  new CustomEvent('dialog-manager', {
    detail: {
      contentKey,
      closedByValue,
      text,
    },
  });

const events = {
  failMyDeposit: Event({ text: 'You have not made a deposit' }),
  proof: Event({ contentKey: 'proof' }),
  underReviewProofOfPayment: Event({
    text: 'Your Deposit is under review',
    contentKey: 'status',
  }),
};

function setNumberOfDepositValue(value) {
  numberOfDeposit.textContent = value;
}

const isDepositExist = (loanApplicantData) => {
  if (!loanApplicantData.deposit) {
    eventBus.dispatchEvent(events.failMyDeposit);
  } else {
    insertLoanApplicantDataToTr(loanApplicantData);
  }
  setNumberOfDepositValue(loanApplicantData.deposit?.length || 0);
};

const createTableTr = () => {
  const tr = document.createElement('tr');
  return tr;
};

const appendTrToTbody = (tr) => {
  tbody.append(tr);
};

function setAttributeToTr({ tr, id, depositID }) {
  tr.setAttribute('data-id', id);
  tr.setAttribute('data-deposit-ID', depositID);
}

function insertLoanApplicantDataToTr(loanApplicantData) {
  tbody.innerHTML = '';

  loanApplicantData.deposit.reverse().forEach((data, index) => {
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
       <td data-view="proofOfPayment">
       <img src="${eyeViewImg}" alt="view proof of payment" class="eye-view"/>
       View Detail
       </td>
      `;

    setAttributeToTr({ tr, id: loanApplicantData.id, depositID: data.depositID });
    appendTrToTbody(tr);
  });
}

function errorWhileGettingData() {
  console.log('Error while getting data');
}

const getRecentLoanApplicantID = () => {
  const data = localStorage.getData({ key: 'recent-loan-applicant' });
  return data?.id;
};

const getRecentLoanApplicant = () => {
  const id = getRecentLoanApplicantID();

  indexDB.interact(
    {
      storeName: 'loan-applicant-list',
      keyPathValue: id,
      getMethod: 'get',
      returnData: isDepositExist,
      undefineState: errorWhileGettingData,
    },
    'getData',
  );
};

const getDepositIDFromTr = (tr) => {
  const depositID = tr.getAttribute('data-deposit-ID');
  return depositID;
};

const getDate = (actionDate) => {
  const date = format(actionDate, 'yyyy-MM-dd');
  return date;
};

const getTime = (actionDate) => {
  const time = format(actionDate, 'HH:mm:ss');
  return time;
};

const dispatchProofOfPaymentEvent = () => {
  eventBus.dispatchEvent(events.proof);
};

function insertDataToProofOfPayment(result) {
  if (!result.actionDate) {
    eventBus.dispatchEvent(events.underReviewProofOfPayment);
    return;
  }

  proofOfPaymentPreview.src = result.massDeposit ? approveImg : result.proofOfPayment;

  const date = getDate(result.actionDate);
  const time = getTime(result.actionDate);

  dateOfPayment.textContent = date;
  timeOfPayment.textContent = time;

  dispatchProofOfPaymentEvent();
}

function getRecentLoanApplicantForProofOfPayment(depositID) {
  const findClickDeposit = (data) => {
    const result = data.deposit.find((obj) => obj.depositID === depositID);

    insertDataToProofOfPayment(result);
  };

  const id = getRecentLoanApplicantID();

  indexDB.interact(
    {
      storeName: 'loan-applicant-list',
      keyPathValue: id,
      getMethod: 'get',
      returnData: findClickDeposit,
      undefineState: errorWhileGettingData,
    },
    'getData',
  );
}

function displayProofOfPayment(e) {
  const tr = e.target.closest('tr');

  const depositID = getDepositIDFromTr(tr);

  getRecentLoanApplicantForProofOfPayment(depositID);
}

const viewHandler = {
  proofOfPayment: displayProofOfPayment,
};

function handleViewDisplay(e) {
  const view = e.target.dataset.view;

  if (!view) return;

  viewHandler[view](e);
}

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

searchStatus.addEventListener('change', filterLoanApplicantByStatus);
searchBar.addEventListener('input', filterLoanApplicantByDepositID);
tbody.addEventListener('click', handleViewDisplay);

const depositRenderContentDBBus = new EventTarget();
depositRenderContentDBBus.addEventListener('render-content', getRecentLoanApplicant);

export { myDeposit, depositRenderContentDBBus };
