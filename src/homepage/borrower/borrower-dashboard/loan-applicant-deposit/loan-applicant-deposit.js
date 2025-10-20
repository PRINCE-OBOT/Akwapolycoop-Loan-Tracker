import './loan-applicant-deposit.css';
import '../../../assets/form-logic.css';
import { format } from 'date-fns';
import MathUtility from '../../../module/business-logic/mathUtility';
import eventBus from '../../../module/event-bus/event';
import indexDB from '../../../module/indexDB/indexDB';

import handleFieldValidationLogic from '../../../module/form-validation/field-validator';

const loanApplicantDeposit = (function () {
  const form = document.createElement('form');

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
                            data-set-field-validation-value="setDesiredAmountValidationValue" 
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
                    <!-- <button type="button" class="btn btn-cancel">Cancel</button> -->
                    <button type="button" class="btn btn-submit">Submit Deposit</button>
                </div>
            </form>
        </div>
    </div>
    `;

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

function formatDateToISOFormat() {
  return format(new Date(), 'EEEE dd, MMMM, yyyy, hh:mm:ss a');
}

function insertMoreFormFieldValues(data) {
  const depositLength = data.deposit.length - 1;

  const deposit = data.deposit[depositLength];

  deposit.dateAndTime = formatDateToISOFormat();
  deposit.status = 'Pending';
  deposit.depositAmount = depositAmount.value;
  deposit.depositID = `DEP${data?.id}-00${depositLength}`;

  storeDataLoanApplicantList(data);
}

const loanApplicantDataNotStore = () => {
  console.log('Deposit data not stored');
};

function displayDepositSubmissionStatus() {
  alert('Your deposit has been submitted. Under Review');
}

function storeDataLoanApplicantList(data) {
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
    functionToGetDataInIndexBD: checkIfDepositAmountIsWithinRange,
  },
});

const errorGettingData = () => {
  console.log('Error getting data');
};

const getLoanApplicantDataFromIndexedDB = (data) => {
  const id = data?.id;

  indexDB.interact(
    {
      storeName: 'loan-applicant-list',
      keyPathValue: id,
      getMethod: 'get',
      returnData: storeProofOfPaymentURLFormat,
      undefinedState: errorGettingData,
    },
    'getData',
  );
};

function checkIfDepositAmountIsWithinRange(data) {
  const outstandingBalance = +MathUtility.prototype.outstandingBalance.textContent;
  const depositAmountValue = +depositAmount.value;

  depositAmountValue > outstandingBalance
    ? alert('You cannot deposit more than your outstanding balance')
    : getLoanApplicantDataFromIndexedDB(data);
}

const bindSubmitApplicationButton = () => {
  eventBus.dispatchEvent(submitDepositFormEvent);
};

btnSubmitDeposit.addEventListener('click', bindSubmitApplicationButton);

const bindDepositDocumentUploadEvent = () => {
  fileInput.addEventListener('change', previewProofOfPayment);
};

export { bindDepositDocumentUploadEvent, loanApplicantDeposit };
