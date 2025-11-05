import handleFieldValidationLogic from '../../module/form-validation/field-validator';

const takeLoan = (function () {
  const form = document.createElement('form');
  form.classList.add('withdrawal-request-form');

  form.innerHTML = `
  <p>We charge 5% of your Withdrawal Amount</p>

  <fieldset class="field-section">
    <legend>Withdrawal Request</legend>
    
    <div class='percentage-msg'></div>

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
   
    <div class="withdraw-pin">
      <label for="withdraw-pin">
        Withdrawal Pin
        <span class="required-asterisk">*</span>
      </label>
      <input
        type="number"
        id="withdraw-pin"
        placeholder="e.g 9182"
        pattern="^.{1,}$"
        data-set-field-validation-value="setPatternForEmptyField"
        required
      />
      <output id="withdraw-pin-message" class="show-message"></output>
    </div>
  </fieldset>

  <div class="withdrawal-message"></div>

  <div>
    <button class="btn-submit-withdrawal" type="button">Submit Withdrawal</button>
  </div>
  `;

  form.addEventListener('input', handleFieldValidationLogic);

  return form;
})();

export default takeLoan;
