import handleFieldValidationLogic from '../../module/form-validation/field-validator';

const takeLoan = (function () {
  const form = document.createElement('form');

  form.innerHTML = `
  <fieldset class="field-section">
    <legend>Loan Request</legend>
    
    <div class="withdrawal-amount">
      <label for="withdrawal-amount">
        Withdrawal Amount
        <span class="required-asterisk">*</span>
      </label>
      <input
        type="number"
        id="withdrawal-amount"
        placeholder="e.g 50000"
        min="1000"
        data-set-field-validation-value="setWithdrawalAmountValidationValue"
        required
      />
      <output id="withdrawal-amount-message" class="show-message"></output>
    </div>
   
    <div class="withdrawal-pin">
      <label for="withdrawal-pin">
        Withdrawal Pin
        <span class="required-asterisk">*</span>
      </label>
      <input
        type="number"
        id="withdrawal-pin"
        placeholder="e.g 9182"
        pattern="^.{1,}$"
        data-set-field-validation-value="setPatternForEmptyField"
        required
      />
      <output id="withdrawal-pin-message" class="show-message"></output>
    </div>
  </fieldset>

  <div>
    <button class="btn-submit-withdrawal" type="button">Submit Withdrawal</button>
  </div>
  `;

  form.addEventListener('input', handleFieldValidationLogic);

  return form;
})();

export default takeLoan;
