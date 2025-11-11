import eventBus from '../../module/event-bus/event';
import FieldValidationUtility from '../../module/form-validation/field-utility';
import handleFieldValidationLogic from '../../module/form-validation/field-validator';
import indexDB from '../../module/indexDB/indexDB';

const adminVerificationForm = (function createAdminVerificationForm() {
  const div = document.createElement('div');
  div.classList.add('deposit-preference-form');

  div.innerHTML = `
        <div class="form-header">
            <h1>Verify you are Admin</h1>
            <p>Please enter your login pin</p>
        </div>

        <form class="preferred-deposit-form" id="depositForm" novalidate>

            <div class="password">
              <label for="password">
                Password
                <span class="required-asterisk">*</span>
              </label>
              <input
                type="password"
                id="password"
                placeholder="xxxxxx"
                pattern="^.{1,}$"
                data-set-field-validation-value="setEmptyFieldValidationValue"
                required
              />
              <output id="password-message" class="show-message"></output>
            </div>

            <button type="button" class="btn-verify-admin">Verify</button>
        </form>`;

  return div;
})();

const form = adminVerificationForm.querySelector('form');
const btnVerifyAdmin = adminVerificationForm.querySelector('.btn-verify-admin');
const password = adminVerificationForm.querySelector('#password');

const submitAdminVerificationForm = new CustomEvent('all-field-valid', {
  detail: {
    form: adminVerificationForm,
    functionToGetDataInIndexBD: getAdminData,
  },
});

const Event = ({ contentKey = 'question', text }) =>
  new CustomEvent('dialog-manager', {
    detail: {
      contentKey,
      closedByValue: 'any',
      text,
    },
  });

const events = {
  pinSuccess: Event({ text: 'approve the mass deposit' }),
  pinFail: Event({ contentKey: 'status', text: 'Incorrect Password' }),
};

function getAdminData() {
  indexDB.interact(
    {
      storeName: 'admin',
      keyPathValue: 1,
      getMethod: 'get',
      returnData: isPasswordCorrect,
      undefineState: errorWhileGettingData,
    },
    'getData',
  );
}

function resetForm() {
  form.reset();
  FieldValidationUtility.resetFieldValidity(form);
}

function isPasswordCorrect(data) {
  if (data.signUpData.password === password.value) {
    resetForm();
    eventBus.dispatchEvent(events.pinSuccess);
  } else {
    // Do not reset form when password is incorrect so you can see your mistake in password
    eventBus.dispatchEvent(events.pinFail);
  }
}

function errorWhileGettingData() {
  console.log('Error while getting data');
}

btnVerifyAdmin.addEventListener('click', () => eventBus.dispatchEvent(submitAdminVerificationForm));

adminVerificationForm.addEventListener('input', handleFieldValidationLogic);

// show form
// is pin correct
// if yes - are you sure you want to continue
// if no - return
// if yes - modify data massively
// if no - return

export default adminVerificationForm;
