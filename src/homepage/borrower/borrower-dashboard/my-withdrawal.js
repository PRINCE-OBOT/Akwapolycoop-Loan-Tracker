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
  const table = document.createElement('table');

  table.innerHTML = `
   <caption>
     <h4 class="my-withdrawal-table-heading">
       My Withdrawal
     </h4>
   </caption>

   <thead>
     <tr>
       <th>S/N</th>
       <th>Withdrawal ID</th>
       <th>Amount(N)</th>
       <th>Status</th>
       <th>Proof </th>
       <th>Date</th>
       <th>Time</th>
     </tr>
   </thead>

   <tbody>
   </tbody>`;

  return table;
})();

const getSerialNumber = (index) => {
  const serialNumber = index + 1;
  return serialNumber;
};

const getTbody = () => {
  const tbody = myWithdrawal.querySelector('tbody');
  return tbody;
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
  failMyWithdrawal: Event({ text: 'You have not taken a withdrawal' }),
  proof: Event({ contentKey: 'proof' }),
  underReviewProofOfPayment: Event({
    text: 'Your Withdrawal is under review',
    contentKey: 'status',
  }),
};

const isWithdrawalExist = (loanApplicantData) => {
  !loanApplicantData.withdrawal
    ? eventBus.dispatchEvent(events.failMyWithdrawal)
    : insertLoanApplicantDataToTr(loanApplicantData);
};

const createTableTr = () => {
  const tr = document.createElement('tr');
  return tr;
};

const appendTrToTbody = (tr) => {
  const tbody = getTbody();
  tbody.append(tr);
};

function setAttributeToTr({ tr, id, withdrawalID }) {
  tr.setAttribute('data-id', id);
  tr.setAttribute('data-withdrawal-ID', withdrawalID);
}

function insertLoanApplicantDataToTr(loanApplicantData) {
  const tbody = getTbody();
  tbody.innerHTML = '';

  loanApplicantData.withdrawal.reverse().forEach((data, index) => {
    const tr = createTableTr();
    const serialNumber = getSerialNumber(index);
    const date = getDate(data.dateAndTime);
    const time = getTime(data.dateAndTime);

    tr.innerHTML = `
       <td>${serialNumber}</td>
       <td>${data.withdrawalID}</td>
       <td>${data.withdrawalAmount}</td>
       <td>${data.status}</td>
       <td data-view="proofOfPayment">
       <img src="${eyeViewImg}" alt="view proof of payment" class="eye-view"/>
       View Proof
       </td>
       <td>${date}</td>
       <td>${time}</td>
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

(function addEventToTbody() {
  const tbody = getTbody();
  tbody.addEventListener('click', handleViewDisplay);
})();

const myWithdrawalGetDataInDBBus = new EventTarget();
myWithdrawalGetDataInDBBus.addEventListener('render-content', getRecentLoanApplicant);

export { myWithdrawal, myWithdrawalGetDataInDBBus };
