import MathUtility from '../../../module/business-logic/mathUtility';
import eventBus from '../../../module/event-bus/event';
import indexDB from '../../../module/indexDB/indexDB';
import loanApplicantDeposit from './loan-applicant-deposit';

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
  const reader = extractProofOfPaymentFromFile();
  displayProofOfPayment(reader);
}

function storeProofOfPaymentURLFormat(data) {
  const reader = extractProofOfPaymentFromFile();
  storeProofOfPaymentToIndexedDB(reader, data);
}

function extractProofOfPaymentFromFile() {
  const files = fileInput.files;

  filePreview.src = '';
  fileName.textContent = '';

  if (!files) return;

  const proofOfPayment = files[0];
  fileName.textContent = files[0].name;

  const reader = new FileReader();

  reader.readAsDataURL(proofOfPayment);

  return reader;
}

function displayProofOfPayment(reader) {
  reader.onload = (e) => {
    const target = e.target;
    filePreview.src = target.result;
  };
}

function storeProofOfPaymentToIndexedDB(reader, data) {
  reader.onload = (e) => {
    data.deposit = [];

    data.deposit.push({ proofOfPayment: e.target.result });
  };
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

export default bindDepositDocumentUploadEvent;
