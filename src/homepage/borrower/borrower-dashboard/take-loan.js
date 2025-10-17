import handleFieldValidationLogic from '../../module/form-validation/field-validator';

const takeLoan = (function () {
  const form = document.createElement('form');

  form.innerHTML = `
  <fieldset class="field-section">
                <legend>Loan Request</legend>
    
                <div class="desired-amount">
                  <label for="desired-amount">
                    Desired Amount
                    <span class="required-asterisk">*</span>
                  </label>
                  <input
                    type="number"
                    id="desired-amount"
                    placeholder="e.g 50000"
                    min="1000"
                    data-set-field-validation-value="setDesiredAmountValidationValue"
                    required
                  />
                  <output id="desired-amount-message" class="show-message"></output>
                </div>
    
                <div class="tenor">
                  <label for="tenor">
                    Tenor (Days)
                    <span class="required-asterisk">*</span>
                  </label>
                  <input
                    type="number"
                    id="tenor"
                    placeholder="e.g 5"
                    min="1"
                    data-set-field-validation-value="setValidateTenorValue"
                    required
                  />
                  <output id="tenor-message" class="show-message"></output>
                </div>
                
                <div class="loan-purpose">
                  <label for="loan-purpose">
                    Purpose of Loan
                    <span class="required-asterisk">*</span>
                  </label>
                  <input
                    type="text"
                    id="loan-purpose"
                    placeholder="e.g Business"
                    pattern="[a-z ]{8,}$"
                    data-set-field-validation-value="setValidatePurposeOfLoan"
                    required
                  />
                  <output id="tenor-message" class="show-message"></output>
                </div>
              </fieldset>

              <div>
                <button class="btn-submit-loan" type="button">Submit Loan</button>
              </div>
  `;

  form.addEventListener('input', handleFieldValidationLogic);

  return form;
})();

export default takeLoan;
