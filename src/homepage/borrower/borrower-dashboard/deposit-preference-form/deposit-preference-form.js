import './deposit-preference-form.css';

import handleFieldValidationLogic from '../../../module/form-validation/field-validator';

const depositPreferenceForm = (function createDepositPreferenceForm() {
  const div = document.createElement('div');
  div.classList.add('deposit-preference-form');

  div.innerHTML = `
        <div class="form-header">
            <h1>Withdrawal Pin</h1>
            <p>Please set your withdrawal pin</p>
        </div>

        <form class="preferred-deposit-form" id="depositForm" novalidate>

            <div class="withdrawal-pin">
              <label for="withdrawal-pin">
                Withdrawal Pin
                <span class="required-asterisk">*</span>
              </label>
              <input
                type="password"
                id="withdrawal-pin"
                placeholder="e.g 9182"
                pattern="^.{4}$"
                data-set-field-validation-value
                required
              />
              <output id="withdrawal-pin-message" class="show-message"></output>
            </div>

           
            <div class="confirm-withdrawal-pin">
              <label for="confirm-withdrawal-pin">
                Confirm Withdrawal Pin
                <span class="required-asterisk">*</span>
              </label>
              <input
                type="password"
                id="confirm-withdrawal-pin"
                placeholder="e.g 9182"
                pattern="^.{4}$"
                data-set-field-validation-value
                required
              />
              <output id="confirm-withdrawal-pin-message" class="show-message"></output>
            </div>

            <button type="button" class="btn-submit-deposit-preference">Set Pin</button>
        </form>`;

  return div;
})();

depositPreferenceForm.addEventListener('input', handleFieldValidationLogic);

export default depositPreferenceForm;
