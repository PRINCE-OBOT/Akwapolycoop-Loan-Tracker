import { dialogEvent } from '../../../module/dialog/dialog-manager';
import eventBus from '../../../module/event-bus/event';
import indexDB from '../../../module/indexDB/indexDB';
import './proof-of-payment.css';

const proofOfPayment = (function createProofOfPayment() {
  const form = document.createElement('form');

  form.innerHTML = `
     <!-- Header -->
     <div class="proof-dialog-header">
         <h1>Proof of Payment</h1>
         <button class="close-btn">✕</button>
     </div>
   <!-- Body -->
     <div class="proof-dialog-body">
         <!-- Date of Payment -->
         <div class="info-section">
             <div class="info-label">Date of Payment</div>
             <div class="info-value">October 15, 2025 at 10:30 AM</div>
         </div>
       <!-- Image Container -->
         <div class="image-container">
             <img src="" alt="Proof of Payment" class="proof-of-payment-preview">
         </div>
     </div>
     `;

  form.classList.add('proof-of-payment');

  return form;
})();

const demo = () => {};

const proofOfPaymentPreview = proofOfPayment.querySelector('.proof-of-payment-preview');

const errorGettingData = () => {
  console.log('Error getting data');
};

const getActionDataFromLocalStorage = () => {
  const data = localStorage.getData({ key: 'action' });
  return data;
};

const insertDepositProofOfPayment = (data) => {
  const { depositID } = getActionDataFromLocalStorage();

  const deposit = data.deposit;

  const result = deposit.find((obj) => obj.depositID === depositID);

  proofOfPaymentPreview.src = result.proofOfPayment;

  dispatchProfileEvent();
};

const dispatchProfileEvent = () => {
  eventBus.dispatchEvent(dialogEvent.proofOfPayment);
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
