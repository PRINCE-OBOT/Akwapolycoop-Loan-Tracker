import './loan-applicant-deposit.css';
import '../../../assets/form-logic.css';
// import MathUtility from '../../../module/business-logic/mathUtility';
import eventBus from '../../../module/event-bus/event';
import indexDB from '../../../module/indexDB/indexDB';

import handleFieldValidationLogic from '../../../module/form-validation/field-validator';
import FieldValidationUtility from '../../../module/form-validation/field-utility';

const loanApplicantDeposit = (function () {
  const form = document.createElement('form');
  form.novalidate;

  form.innerHTML = `
    <div class="deposit-container">
        <div class="header">
            <h1>Deposit Information</h1>
            <p>Complete your deposit details to proceed with your loan application</p>
        </div>

        <div class="form-content">
            <div class="info-box">
                <strong>📋 Important:</strong>
                Please ensure all documents are clear and legible for faster verification.
            </div>

            <form id="depositForm">
                <div class="form-group">
                    <label for="depositAmount">
                        Deposit Amount
                        <div class="label-hint">Enter the amount you wish to deposit</div>
                    </label>
                    <div class="input-wrapper">
                        <span class="currency-symbol">N</span>
                        <input 
                            type="number" 
                            id="depositAmount" 
                            placeholder="5000" 
                            step="0.01"
                            min="100"
                            data-set-field-validation-value="setWithdrawalAmountValidationValue" 
                            min="0"
                            required
                        >
                        <output id="deposit-amount-message" class="show-message"></output>
                    </div>
                </div>

                <div class="form-group">
                    <label>
                        Proof of Payment
                        <div class="label-hint">Upload a clear image or document as proof</div>
                    </label>
                    <div class="upload-area" id="uploadArea">
                        <div class="upload-icon">📸</div>
                        <div class="upload-text">
                            <h3>Click to upload or drag and drop</h3>
                            <p>Your proof of payment document</p>
                            <div class="file-formats">PNG, JPG, PDF up to 10MB</div>
                        </div>
                        <input 
                            type="file" 
                            id="proof-of-payment" 
                            data-set-field-validation-value="setPassportValidationValue"
                            accept=".png,.jpg,.jpeg,.pdf"
                            required
                        >
                        <output id="proof-of-payment-message" class="show-message"></output>
                    </div>
                    <div class="file-preview-container" >
                        <img class="file-preview"  src="" />
                        <p class="fileName">Your Document Preview will display here.</p>
                    </div>
                </div>

                <div class="form-actions">
                    <!-- <button  class="btn btn-cancel">Cancel</button> -->
                    <button type="button" class="btn btn-submit">Submit Deposit</button>
                </div>
            </form>
        </div>
    </div>
    `;
  form.classList.add('deposit-form');

  form.addEventListener('input', handleFieldValidationLogic);

  return form;
})();

// const uploadArea = loanApplicantDeposit.querySelector('uploadArea');
const fileInput = loanApplicantDeposit.querySelector('#proof-of-payment');
const filePreview = loanApplicantDeposit.querySelector('.file-preview');
const fileName = loanApplicantDeposit.querySelector('.fileName');
const btnSubmitDeposit = loanApplicantDeposit.querySelector('.btn-submit');
const depositAmount = loanApplicantDeposit.querySelector('#depositAmount');
// const fileSize = loanApplicantDeposit.querySelector('fileSize');
// const removeFile = loanApplicantDeposit.querySelector('removeFile');
// const depositForm = loanApplicantDeposit.querySelector('depositForm');

function previewProofOfPayment() {
  const isUpload = extractProofOfPaymentFromFile();

  if (!isUpload.paymentProof) return;

  displayProofOfPayment({ reader: isUpload.paymentProof });
}

function storeProofOfPaymentURLFormat(data) {
  const isUpload = extractProofOfPaymentFromFile();

  if (!isUpload.paymentProof) return;

  storeProofOfPaymentToIndexedDB({ reader: isUpload.paymentProof, data });
}

function extractProofOfPaymentFromFile() {
  const files = fileInput.files;

  filePreview.src = '';
  fileName.textContent = '';

  if (files.length === 0) return { paymentProof: false };

  const proofOfPayment = files[0];
  fileName.textContent = files[0].name;

  const reader = new FileReader();

  reader.readAsDataURL(proofOfPayment);

  return { paymentProof: reader };
}

function displayProofOfPayment({ reader }) {
  reader.onload = (e) => {
    const target = e.target;
    filePreview.src = target.result;
  };
}

function storeProofOfPaymentToIndexedDB({ reader, data }) {
  reader.onload = (e) => {
    if (!data.deposit) data.deposit = [];

    data.deposit.push({ proofOfPayment: e.target.result });

    insertMoreFormFieldValues(data);
  };
}

function insertMoreFormFieldValues(data) {
  const depositLength = data.deposit.length - 1;

  const deposit = data.deposit[depositLength];

  deposit.dateAndTime = new Date();
  deposit.status = 'Pending';
  deposit.depositAmount = +depositAmount.value;
  deposit.depositAmountDynamic = +depositAmount.value;
  deposit.depositID = `DEP${data?.id}-00${depositLength}`;

  storeDataLoanApplicantList(data);
}

const loanApplicantDataNotStore = () => {
  console.log('Deposit data not stored');
};

function displayDepositSubmissionStatus() {
  eventBus.dispatchEvent(events.successDeposit);
}

function resetForm() {
  filePreview.src = '';
  fileName.textContent = 'Your Document Preview will display here.';
  loanApplicantDeposit.reset();
  FieldValidationUtility.resetFieldValidity(loanApplicantDeposit);
}

function storeDataLoanApplicantList(data) {
  resetForm();
  indexDB.interact(
    {
      storeName: 'loan-applicant-list',
      data,
      trueState: displayDepositSubmissionStatus,
      undefinedState: loanApplicantDataNotStore,
    },
    'storeData',
  );
}

const submitDepositFormEvent = new CustomEvent('all-field-valid', {
  detail: {
    form: loanApplicantDeposit,
    functionToGetDataInIndexBD: handleDepositDirection,
  },
});

const errorGettingData = () => {
  console.log('Error getting data');
};

const getLoanApplicantDataFromIndexedDB = (callback) => {
  const data = localStorage.getData({ key: 'recent-loan-applicant' });
  const id = data?.id;

  indexDB.interact(
    {
      storeName: 'loan-applicant-list',
      keyPathValue: id,
      getMethod: 'get',
      returnData: callback,
      undefinedState: errorGettingData,
    },
    'getData',
  );
};

const Event = ({ text, closedByValue = 'any' }) =>
  new CustomEvent('dialog-manager', {
    detail: {
      contentKey: 'status',
      closedByValue,
      text,
    },
  });

const events = {
  failDepositApprove: Event({
    text: 'Approve deposit amount does not match Loan Applicant deposit amount',
  }),
  failDeposit: Event({ text: 'Deposit amount must not be less than your deposit preference' }),
  successDeposit: Event({ text: 'Your deposit has been submitted. Under Review' }),
  modifyIndexdb: new CustomEvent('modify-indexdb'),
  manualCloseDialog: new CustomEvent('manual-close-dialog'),
};

const storeActionToLocalStorage = (obj) => {
  localStorage.setData(obj);
};

function addMoreActionToTakeLoan(data) {
  data.firstKey.push('takeLoan');
  data.secondKey.push('adminProofOfPayment');

  const obj = {
    key: 'action',
    data,
  };

  storeActionToLocalStorage(obj);

  resetForm();
  eventBus.dispatchEvent(events.modifyIndexdb);
  eventBus.dispatchEvent(events.manualCloseDialog);
}

function convertFileToDataURLFormat() {
  const selectedProofOfPayment = fileInput.files[0];

  const reader = new FileReader();

  reader.readAsDataURL(selectedProofOfPayment);

  reader.onload = (e) => {
    const data = getActionFromLocalStorage();

    data.value.push({ adminProofOfPayment: e.target.result });

    addMoreActionToTakeLoan(data);
  };
}

function checkIfAdminDepositAmountIsWithinRange(data) {
  const depositApproveAmount = data.value.find(
    (element) => element.outstandingBalance,
  ).outstandingBalance;

  if (+depositAmount.value === depositApproveAmount) {
    convertFileToDataURLFormat();
  } else {
    eventBus.dispatchEvent(events.failDepositApprove);
    resetForm();
  }
}

const Actions = {
  deposit: () => getLoanApplicantDataFromIndexedDB(isDepositAmountWithRange),
  modifyData: checkIfAdminDepositAmountIsWithinRange,
};

function getActionFromLocalStorage() {
  const data = localStorage.getData({ key: 'action' });
  return data;
}

function isDepositAmountWithRange(data) {
  +depositAmount.value < +data.depositPreference
    ? failDeposit()
    : storeProofOfPaymentURLFormat(data);
}

function handleDepositDirection() {
  const data = getActionFromLocalStorage();

  Actions[data?.action](data);
}

function failDeposit() {
  eventBus.dispatchEvent(events.failDeposit);
  resetForm();
}

function dispatchDepositFormEvent() {
  eventBus.dispatchEvent(submitDepositFormEvent);
}

btnSubmitDeposit.addEventListener('click', dispatchDepositFormEvent);

const bindDepositDocumentUploadEvent = () => {
  fileInput.addEventListener('change', previewProofOfPayment);
};

export { bindDepositDocumentUploadEvent, loanApplicantDeposit };
