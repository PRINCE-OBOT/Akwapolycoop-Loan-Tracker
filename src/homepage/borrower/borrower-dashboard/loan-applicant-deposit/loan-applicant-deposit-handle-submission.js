import eventBus from '../../../module/event-bus/event';
import indexDB from '../../../module/indexDB/indexDB';
import loanApplicantDeposit from './loan-applicant-deposit';

// const uploadArea = loanApplicantDeposit.querySelector('uploadArea');
const fileInput = loanApplicantDeposit.querySelector('#proof-of-payment');
const filePreview = loanApplicantDeposit.querySelector('.file-preview');
const fileName = loanApplicantDeposit.querySelector('.fileName');
const btnSubmitDeposit = loanApplicantDeposit.querySelector('.btn-submit');
// const fileSize = loanApplicantDeposit.querySelector('fileSize');
// const removeFile = loanApplicantDeposit.querySelector('removeFile');
// const depositForm = loanApplicantDeposit.querySelector('depositForm');

function convertFileToDataURLFormat(e) {
  const files = e.target.files[0];
  filePreview.src = '';
  fileName.textContent = '';

  if (!files) return;

  const selectedDocument = files;
  fileName.textContent = files.name;

  const reader = new FileReader();

  reader.readAsDataURL(selectedDocument);

  reader.onload = (event) => {
    const target = event.target;
    filePreview.src = target.result;
  };
}

const submitDepositFormEvent = new CustomEvent('all-field-valid', {
  detail: {
    form: loanApplicantDeposit,
    functionToGetDataInIndexBD: getLoanApplicantDataIndexedDB,
  },
});

const errorGettingData = () => {
  console.log('Error getting data');
};

function getLoanApplicantDataIndexedDB(data) {
  const id = data?.id;
  alert(id);
  indexDB.interact(
    {
      storeName: 'loan-applicant-list',
      keyPathValue: id,
      getMethod: 'get',
      returnData: convertFileToDataURLFormat,
      undefinedState: errorGettingData,
    },
    'getData',
  );
}

const bindSubmitApplicationButton = () => {
  eventBus.dispatchEvent(submitDepositFormEvent);
};

btnSubmitDeposit.addEventListener('click', bindSubmitApplicationButton);

const bindDepositDocumentUploadEvent = () => {
  fileInput.addEventListener('input', convertFileToDataURLFormat);
};

export default bindDepositDocumentUploadEvent;
