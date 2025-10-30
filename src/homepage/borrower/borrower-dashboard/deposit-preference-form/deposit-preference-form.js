import './deposit-preference-form.css';

import handleFieldValidationLogic from '../../../module/form-validation/field-validator';

const depositPreferenceForm = (function createdepositPreferenceForm() {
  const div = document.createElement('div');
  div.classList.add('form-container');

  div.innerHTML = `
        <div class="form-header">
            <h1>Monthly Deposit Preference</h1>
            <p>Please provide your preferred monthly deposit amount</p>
        </div>

        <form class="preferred-deposit-form" id="depositForm" novalidate>

            <div class="form-group">
                <label for="depositAmount">Preferred Monthly Deposit Amount *</label>
                <div class="amount-input-group">
                    <span class="currency-symbol">N</span>
                    <input type="number" id="deposit-preference" name="depositAmount" min="0" step="0.01" data-set-field-validation-value="setPatternForEmptyField" required>
                    <output id="preferred-deposit-message" class="show-message"></output>
                </div>
            </div>

            <button type="button" class="btn-submit-deposit-preference">Submit Preference</button>
        </form>`;

  return div;
})();

depositPreferenceForm.addEventListener('input', handleFieldValidationLogic);

export default depositPreferenceForm;
