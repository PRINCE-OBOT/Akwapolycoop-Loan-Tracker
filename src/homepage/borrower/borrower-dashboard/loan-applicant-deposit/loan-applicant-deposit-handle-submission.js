import loanApplicantDeposit from './loan-applicant-deposit';

// const uploadArea = loanApplicantDeposit.querySelector('uploadArea');
const fileInput = loanApplicantDeposit.querySelector('#fileInput');
const filePreview = loanApplicantDeposit.querySelector('.file-preview');
const fileName = loanApplicantDeposit.querySelector('.fileName');
// const fileSize = loanApplicantDeposit.querySelector('fileSize');
// const removeFile = loanApplicantDeposit.querySelector('removeFile');
// const depositForm = loanApplicantDeposit.querySelector('depositForm');

function convertFileToDataURLFormat(e) {
  const files = e.target.files[0];
  const selectedDocument = files;
  fileName.textContent = files.name;

  const reader = new FileReader();

  reader.readAsDataURL(selectedDocument);

  reader.onload = (event) => {
    const target = event.target;
    filePreview.src = target.result;
  };
}

const bindDepositDocumentUploadEvent = () => {
  fileInput.addEventListener('input', convertFileToDataURLFormat);
};

export default bindDepositDocumentUploadEvent;
