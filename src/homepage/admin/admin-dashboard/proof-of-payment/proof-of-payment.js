import './proof-of-payment.css';

import { format } from 'date-fns';
import eventBus from '../../../module/event-bus/event';
import indexDB from '../../../module/indexDB/indexDB';

const proofOfPayment = (function createProofOfPayment() {
  const form = document.createElement('form');
  form.method = 'dialog';

  form.innerHTML = `
     <!-- Header -->
     <div class="proof-dialog-header">
         <h1>Proof of Payment</h1>
         <button class="close-btn">✕</button>
     </div>
   
     <div class="proof-dialog-body">
     <img src="" alt="Proof of Payment" class="proof-of-payment-preview">
         
         <div class="info-section">
             <div class="info-label">Date of Payment</div>
             <div class="date-of-payment"></div>
             <div class="time-of-payment"><div>
         </div>
     </div>
     `;

  form.classList.add('proof-of-payment');

  return form;
})();

const demo = () => {};

const proofOfPaymentPreview = proofOfPayment.querySelector('.proof-of-payment-preview');
const dateOfPayment = proofOfPayment.querySelector('.date-of-payment');
const timeOfPayment = proofOfPayment.querySelector('.time-of-payment');

const errorGettingData = () => {
  console.log('Error getting data');
};

const getActionDataFromLocalStorage = () => {
  const data = localStorage.getData({ key: 'action' });
  return data;
};

const getDate = (dateAndTime) => {
  const date = format(dateAndTime, 'yyyy-MM-dd');
  return date;
};

const getTime = (dateAndTime) => {
  const time = format(dateAndTime, 'HH:mm:ss');
  return time;
};

const insertDepositProofOfPayment = (data) => {
  const { depositID } = getActionDataFromLocalStorage();

  const deposit = data.deposit;

  const result = deposit.find((obj) => obj.depositID === depositID);

  const date = getDate(result.dateAndTime);
  const time = getTime(result.dateAndTime);

  proofOfPaymentPreview.src = result.proofOfPayment;
  dateOfPayment.textContent = date;
  timeOfPayment.textContent = time;

  dispatchProofOfPaymentEvent();
};

const proof = (text) =>
  new CustomEvent('dialog-manager', {
    detail: {
      contentKey: 'proof',
      closedByValue: 'any',
      text,
    },
  });

const proofEvent = {
  proof: proof(),
};

const dispatchProofOfPaymentEvent = () => {
  eventBus.dispatchEvent(proofEvent.proof);
};

function getLoanApplicantData() {
  const { id } = getActionDataFromLocalStorage();

  indexDB.interact(
    {
      storeName: 'loan-applicant-list',
      getMethod: 'get',
      keyPathValue: +id,
      returnData: insertDepositProofOfPayment,
      undefineState: errorGettingData,
    },
    'getData',
  );
}

eventBus.addEventListener('proof', getLoanApplicantData);

export { demo, proofOfPayment };
