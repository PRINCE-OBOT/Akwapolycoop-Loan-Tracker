import { format } from 'date-fns';
import eventBus from '../../module/event-bus/event';
import indexDB from '../../module/indexDB/indexDB';
import eyeViewImg from '../../assets/images/eye-view.svg';
import declineImg from '../../assets/images/delined-loan.svg';
import approveImg from '../../assets/images/approve-loan.svg';

import registerLocalStorageCustomMethod from '../../module/localStorage/localStorage';
import { proofOfPayment } from '../../admin/admin-dashboard/proof-of-payment/proof-of-payment';

registerLocalStorageCustomMethod();

const proofOfPaymentPreview = proofOfPayment.querySelector('.proof-of-payment-preview');
const dateOfPayment = proofOfPayment.querySelector('.date-of-payment');
const timeOfPayment = proofOfPayment.querySelector('.time-of-payment');

const myWithdrawal = (function createTableHeading() {
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

  div.classList.add('my-withdrawal-container');

  return div;
})();

const numberOfDeposit = myWithdrawal.querySelector('.number-of-withdrawal');
const searchBar = myWithdrawal.querySelector('input[type=search]');
const searchStatus = myWithdrawal.querySelector('.search-status');
const tbody = myWithdrawal.querySelector('tbody');

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
  failMyWithdrawal: Event({ text: 'You have not make a withdrawal' }),
  proof: Event({ contentKey: 'proof' }),
  underReviewProofOfPayment: Event({
    text: 'Your Withdrawal is under review',
    contentKey: 'status',
  }),
};

function setNumberOfDepositValue(value) {
  numberOfDeposit.textContent = value;
}

const isWithdrawalExist = (loanApplicantData) => {
  if (!loanApplicantData.withdrawal) {
    eventBus.dispatchEvent(events.failMyWithdrawal);
  } else {
    insertLoanApplicantDataToTr(loanApplicantData);
  }
  setNumberOfDepositValue(loanApplicantData.withdrawal?.length || 0);
};

const createTableTr = () => {
  const tr = document.createElement('tr');
  return tr;
};

const appendTrToTbody = (tr) => {
  tbody.append(tr);
};

function setAttributeToTr({ tr, id, withdrawalID }) {
  tr.setAttribute('data-id', id);
  tr.setAttribute('data-withdrawal-ID', withdrawalID);
}

function insertLoanApplicantDataToTr(loanApplicantData) {
  tbody.innerHTML = '';

  loanApplicantData.withdrawal.reverse().forEach((data, index) => {
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
       <td data-view="proofOfPayment">
       <img src="${eyeViewImg}" alt="view proof of payment" class="eye-view"/>
       View Proof
       </td>
      `;

    setAttributeToTr({ tr, id: loanApplicantData.id, withdrawalID: data.withdrawalID });
    appendTrToTbody(tr);
  });
}

function errorWhileGettingData() {
  console.log('Error while getting data');
}

const getRecentLoanApplicantIDInLocalStorage = () => {
  const data = localStorage.getData({ key: 'recent-loan-applicant' });
  return data?.id;
};

const getRecentLoanApplicant = () => {
  const id = getRecentLoanApplicantIDInLocalStorage();

  indexDB.interact(
    {
      storeName: 'loan-applicant-list',
      keyPathValue: id,
      getMethod: 'get',
      returnData: isWithdrawalExist,
      undefineState: errorWhileGettingData,
    },
    'getData',
  );
};

const getLoanIDFromTr = (tr) => {
  const withdrawalID = tr.getAttribute('data-withdrawal-ID');
  return withdrawalID;
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

  proofOfPaymentPreview.src = result.status === 'Approve' ? approveImg : declineImg;

  const date = getDate(result.actionDate);
  const time = getTime(result.actionDate);

  dateOfPayment.textContent = date;
  timeOfPayment.textContent = time;

  dispatchProofOfPaymentEvent();
}

function getRecentLoanApplicantForProofOfPayment(withdrawalID) {
  const findLoanIDProofOfPayment = (data) => {
    const result = data.withdrawal.find((takenLoan) => takenLoan.withdrawalID === withdrawalID);

    insertDataToProofOfPayment(result);
  };

  const id = getRecentLoanApplicantIDInLocalStorage();

  indexDB.interact(
    {
      storeName: 'loan-applicant-list',
      keyPathValue: id,
      getMethod: 'get',
      returnData: findLoanIDProofOfPayment,
      undefineState: errorWhileGettingData,
    },
    'getData',
  );
}

function displayProofOfPayment(e) {
  const tr = e.target.closest('tr');

  const withdrawalID = getLoanIDFromTr(tr);

  getRecentLoanApplicantForProofOfPayment(withdrawalID);
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

tbody.addEventListener('click', handleViewDisplay);
const myWithdrawalGetDataInDBBus = new EventTarget();
myWithdrawalGetDataInDBBus.addEventListener('render-content', getRecentLoanApplicant);

export { myWithdrawal, myWithdrawalGetDataInDBBus };
