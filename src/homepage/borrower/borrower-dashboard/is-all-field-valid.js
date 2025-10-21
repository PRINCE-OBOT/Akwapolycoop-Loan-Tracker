import eventBus from '../../module/event-bus/event';
import FieldValidationUtility from '../../module/form-validation/field-utility';

const bindAllFieldValidEvent = () =>
  eventBus.addEventListener('all-field-valid', checkIfAllFieldFillIsValid);

let functionToGetDataInIndexBD;
function checkIfAllFieldFillIsValid(e) {
  const detail = e.detail;

  const form = detail.form;
  functionToGetDataInIndexBD = detail.functionToGetDataInIndexBD;

  const textarea = form.querySelectorAll('textarea');
  const inputs = form.querySelectorAll('input');

  const inputElements = [...textarea, ...inputs];
  const messages = form.querySelectorAll('output.show-message');

  new FieldValidationUtility({
    messages,
    inputs: inputElements,
    runWhenAllFieldFillIsValid: functionToGetDataInIndexBD,
  });
}

export default bindAllFieldValidEvent;
