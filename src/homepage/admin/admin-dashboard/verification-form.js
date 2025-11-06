// import eventBus from '../../module/event-bus/event';
import handleFieldValidationLogic from '../../module/form-validation/field-validator';

const adminVerificationForm = (function createAdminVerificationForm() {
  const div = document.createElement('div');
  div.classList.add('deposit-preference-form');

  div.innerHTML = `
        <div class="form-header">
            <h1>Verify you Admin</h1>
            <p>Please enter your login pin</p>
        </div>

        <form class="preferred-deposit-form" id="depositForm" novalidate>

            <div class="withdrawal-pin">
              <label for="withdrawal-pin">
                Withdrawal Pin
                <span class="required-asterisk">*</span>
              </label>
              <input
                type="number"
                id="withdrawal-pin"
                placeholder="e.g 9182"
                pattern="^.{4}$"
                data-set-field-validation-value
                required
              />
              <output id="withdrawal-pin-message" class="show-message"></output>
            </div>

            <button type="button" class="btn-verify-admin">Verify</button>
        </form>`;

  return div;
})();

// const btnVerifyAdmin = adminVerificationForm.querySelector('.btn-verify-admin');

// const Event = ({contentKey = ''}) =>
//   new CustomEvent('dialog-manager', {
//       detail: {
//       contentKey,
//       closedByValue: 'any',
//     },
//   });

// const events = {
//     adminVerificationForm: Event({}),
// };

// btnVerifyAdmin.addEventListener('click', )

adminVerificationForm.addEventListener('input', handleFieldValidationLogic);

// show form
// is pin correct
// if yes - are you sure you want to continue
// if no - return
// if yes - modify data massively
// if no - return

export default adminVerificationForm;
