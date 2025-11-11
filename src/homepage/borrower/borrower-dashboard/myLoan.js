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

const myLoan = (function createTableHeading() {
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
                    <th>Loan Status</th>
                    <th>Monthly WA</th>
                    <th>Paid Status</th>
                    <th>O/S</th>
                    <th>Purpose</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th data-view="proofOfPayment">Action Date</th>
                  </tr>
                </thead>

                <tbody></tbody>
              </table>
            </div>
          `;

  div.classList.add('loan-management-content');

  return div;
})();

const numberOfLoans = myLoan.querySelector('.number-of-loan');
const searchBar = myLoan.querySelector('input[type=search]');
const tbody = myLoan.querySelector('tbody');
const searchStatus = myLoan.querySelector('.search-status');

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
  failMyLoan: Event({ text: 'You have not taken a loan' }),
  proof: Event({ contentKey: 'proof' }),
  underReviewProofOfPayment: Event({
    text: 'Your Loan is under review',
    contentKey: 'status',
  }),
};

function setNumberOfLoanValue(value) {
  numberOfLoans.textContent = value;
}

const isLoanExist = (loanApplicantData) => {
  if (!loanApplicantData.loan) {
    eventBus.dispatchEvent(events.failMyLoan);
  } else {
    insertLoanApplicantDataToTr(loanApplicantData);
  }
  setNumberOfLoanValue(loanApplicantData.loan?.length || 0);
};

const createTableTr = () => {
  const tr = document.createElement('tr');
  return tr;
};

const appendTrToTbody = (tr) => {
  tbody.append(tr);
};

function setAttributeToTr({ tr, id, loanID }) {
  tr.setAttribute('data-id', id);
  tr.setAttribute('data-loan-ID', loanID);
}

function insertLoanApplicantDataToTr(loanApplicantData) {
  tbody.innerHTML = '';

  loanApplicantData.loan.reverse().forEach((data, index) => {
    const tr = createTableTr();
    const serialNumber = getSerialNumber(index);
    const date = getDate(data.dateAndTime);
    const time = getTime(data.dateAndTime);
    const paidStatus =
      data.status === 'Approve' && data.loanAmountDynamic === 0 ? 'Complete' : 'Incomplete';

    tr.innerHTML = `
       <td>${serialNumber}</td>
       <td class='loanID'>${data.loanID}</td>
       <td>${data.loanAmount}</td>
       <td>${data.amountDisburse}</td>
       <td>${data.dividendAmount}</td>
       <td class="status">${data.status}</td>
       <td>${data.monthlyWithdrawalAmount}</td>
       <td>${paidStatus}</td>
       <td>${data.loanAmountDynamic}</td>
       <td>${data.loanPurpose}</td>
       <td>${date}</td>
       <td>${time}</td>
       <td data-view="proofOfPayment">
       <img src="${eyeViewImg}" alt="view proof of payment" class="eye-view"/>
       </td>
      `;

    setAttributeToTr({ tr, id: loanApplicantData.id, loanID: data.loanID });
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
      returnData: isLoanExist,
      undefineState: errorWhileGettingData,
    },
    'getData',
  );
};

const getLoanIDFromTr = (tr) => {
  const loanID = tr.getAttribute('data-loan-ID');
  return loanID;
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

function getRecentLoanApplicantForProofOfPayment(loanID) {
  const findLoanIDProofOfPayment = (data) => {
    const result = data.loan.find((takenLoan) => takenLoan.loanID === loanID);

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

  const loanID = getLoanIDFromTr(tr);

  getRecentLoanApplicantForProofOfPayment(loanID);
}

const viewHandler = {
  proofOfPayment: displayProofOfPayment,
};

function handleViewDisplay(e) {
  const view = e.target.dataset.view;

  if (!view) return;

  viewHandler[view](e);
}

(function addEventToTbody() {
  tbody.addEventListener('click', handleViewDisplay);
})();

function getLoanID(tr) {
  const loanID = tr.querySelector('.loanID');
  return loanID.textContent.toLowerCase();
}

function getTrs() {
  const trs = tbody.querySelectorAll('tr');
  return trs;
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

function filterLoanApplicantByLoanID(e) {
  const trs = getTrs();
  const searchBarValue = e.target.value.toLowerCase();

  trs.forEach((tr) => {
    const loanID = getLoanID(tr);
    loanID.includes(searchBarValue) ? tr.classList.remove('hide') : tr.classList.add('hide');
  });
}

searchStatus.addEventListener('change', filterLoanApplicantByStatus);
searchBar.addEventListener('input', filterLoanApplicantByLoanID);
const myLoanGetDataInDBBus = new EventTarget();
myLoanGetDataInDBBus.addEventListener('render-content', getRecentLoanApplicant);

export { myLoan, myLoanGetDataInDBBus };
