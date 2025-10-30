import './preffered-deposit.css';

import handleFieldValidationLogic from '../../../module/form-validation/field-validator';

const preferredDepositForm = (function createPreferredDepositForm() {
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
                    <input type="number" id="depositAmount" name="depositAmount" min="0" step="0.01" data-set-field-validation-value="setPatternForEmptyField" required>
                    <output id="preferred-deposit-message" class="show-message"></output>
                </div>
            </div>

            <button type="submit" class="submit-btn">Submit Preference</button>
        </form>

        <div class="success-message" id="successMessage">
            ✓ Your preference has been submitted successfully!
        </div>
  `;

  return div;
})();

preferredDepositForm.addEventListener('input', handleFieldValidationLogic);

export default preferredDepositForm;
