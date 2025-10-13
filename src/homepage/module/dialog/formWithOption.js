import pipe from '../composition/pipe';
import eventBus from '../event-bus/event';

const createFormElement = (document) => {
  const form = document.createElement('form');
  return form;
};

const setAttributeToFormElement = (form) => {
  form.setAttribute('method', 'dialog');
  return form;
};

const addClassNameToFormElement = (form) => {
  form.classList.add('dialog-logout-section');
  return form;
};

const addMoreElementToFormElement = (form) => {
  form.innerHTML = `
    <h4>Are you sure you want to log out</h4>
    <button class="btn-cancel">Cancel</button>
    <button class="btn-yes">Yes</button>
  `;
  return form;
};

const processForm = pipe(
  createFormElement,
  setAttributeToFormElement,
  addClassNameToFormElement,
  addMoreElementToFormElement,
);

const processedForm = processForm(document);

// process btnYes for logout
const selectBtnYesFromProcessForm = (form) => {
  const btnYes = form.querySelector('.btn-yes');
  return btnYes;
};

const addEventToBtnYes = (btnYes) => {
  btnYes.addEventListener('click', dispatchLogoutEvent);
};

function dispatchLogoutEvent() {
  const logoutEvent = new CustomEvent('logout');
  eventBus.dispatchEvent(logoutEvent);
}

const processBtnYes = pipe(selectBtnYesFromProcessForm, addEventToBtnYes);

processBtnYes(processedForm);

export default processedForm;
