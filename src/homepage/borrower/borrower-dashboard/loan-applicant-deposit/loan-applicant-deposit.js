import './loan-applicant-deposit.css';
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
                            placeholder="0.00" 
                            step="0.01" 
                            min="0"
                            required
                        >
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
                            id="fileInput" 
                            accept=".png,.jpg,.jpeg,.pdf"
                        >
                    </div>
                    <div class="file-preview-container" >
                        <img class="file-preview"  src="" />
                        <p class="fileName">Your Document Preview will display here.</p>
                    </div>
                </div>

                <div class="form-actions">
                    <button type="button" class="btn btn-cancel">Cancel</button>
                    <button type="button" class="btn btn-submit">Submit Deposit</button>
                </div>
            </form>
        </div>
    </div>
    `;

  form.addEventListener('input', handleFieldValidationLogic);

  return form;
})();

export default loanApplicantDeposit;
