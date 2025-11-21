import './proof-of-payment.css';

import { format } from 'date-fns';
import eventBus from '../../../module/event-bus/event';
import indexDB from '../../../module/indexDB/indexDB';
import approveImg from '../../../assets/images/approve-loan.svg';
import declineImg from '../../../assets/images/delined-loan.svg';

const proofOfPayment = (function createProofOfPayment() {
  const form = document.createElement('form');
  form.method = 'dialog';

  form.innerHTML = `
     <!-- Header -->
     <div class="proof-payment-header">
         <h1>Date of Payment</h1>
         <button class="close-btn">✕</button>
   
         </div>
   
     <div class="proof-payment-body">
       <!--<div class="amount-deposit-body">
           <p>Amount</p>
           <p class="amount-deposit"></p>
       </div> -->
        <img src="" alt="Proof of Payment" class="proof-of-payment-preview">
        <div class="proof-payment-date-section">
            <div class="field">
                <label>Date</label>
                <div class="field-value date-of-payment">+234 803 456 7890</div>
            <div class="field">
                <label>Time</label>
                <div class="field-value time-of-payment">+234 803 456 7890</div>
            </div>    
        
     </div>
     `;

  form.classList.add('proof-of-payment');

  return form;
})();

const demo = () => {};

const Event = ({ text = null, closedByValue = 'any', contentKey = 'status' }) =>
  new CustomEvent('dialog-manager', {
    detail: {
      contentKey,
      closedByValue,
      text,
    },
  });

const events = {
  underReviewProofOfPayment: Event({
    text: 'Your Withdrawal is under review',
    contentKey: 'status',
  }),
};

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
  const { withdrawalID } = getActionDataFromLocalStorage();

  const withdrawal = data.withdrawal;

  const result = withdrawal.find((obj) => obj.withdrawalID === withdrawalID);

  if (!result.actionDate) {
    eventBus.dispatchEvent(events.underReviewProofOfPayment);
    return;
  }

  const date = getDate(result.actionDate);
  const time = getTime(result.actionDate);

  proofOfPaymentPreview.src = result.status === 'Approve' ? approveImg : declineImg;
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
