import eventBus from '../../module/event-bus/event';
import FieldValidationUtility from '../../module/form-validation/field-utility';

const bindAllFieldValidEvent = () =>
  eventBus.addEventListener('all-field-valid', checkIfAllFieldFillIsValid);

let functionToGetDataInIndexBD;
function checkIfAllFieldFillIsValid(e) {
  const detail = e.detail;

  const form = detail.form;
  functionToGetDataInIndexBD = detail.functionToGetDataInIndexBD;

  const messages = form.querySelectorAll('output.show-message');
  const inputs = form.querySelectorAll('input');

  new FieldValidationUtility({
    messages,
    inputs,
    runWhenAllFieldFillIsValid: getLoanApplicantIdInLocalStorage,
  });
}

function getLoanApplicantIdInLocalStorage() {
  const data = localStorage.getData({ key: 'recent-loan-applicant' });

  functionToGetDataInIndexBD(data);
}

export default bindAllFieldValidEvent;
