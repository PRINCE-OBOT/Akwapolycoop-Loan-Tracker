import eventBus from '../event-bus/event';
import pipe from '../composition/pipe';

// form
const createFormElement = (document) => {
  const form = document.createElement('form');
  return form;
};

const setAttributeToFormElement = (form) => {
  form.setAttribute('method', 'dialog');
  return form;
};

const addClassToFormElement = (form) => {
  form.classList.add('dialog-logout-section');
  return form;
};

// h4
const createH4Element = (document) => {
  const h4 = document.createElement('h4');
  return h4;
};

const question = createH4Element(document);

// button
const createButtonElement = (document) => {
  const button = document.createElement('button');
  return button;
};

const addClassBtnCancelToButton = (button) => {
  button.classList.add('btn-cancel');
  return button;
};

const addClassBtnYesToButton = (button) => {
  button.classList.add('btn-yes');
  return button;
};

const addTextContentToBtnYes = (button) => {
  button.textContent = 'Yes';
  return button;
};

const addTextContentToBtnCancel = (button) => {
  button.textContent = 'Cancel';
  return button;
};

const addEventToBtnYes = (button) => {
  button.addEventListener('click', dispatchLogoutEvent);
  return button;
};
const logoutEvent = new CustomEvent('logout');

function dispatchLogoutEvent() {
  eventBus.dispatchEvent(logoutEvent);
}

const processBtnCancel = pipe(
  createButtonElement,
  addClassBtnCancelToButton,
  addTextContentToBtnCancel,
);
const processBtnYes = pipe(
  createButtonElement,
  addClassBtnYesToButton,
  addEventToBtnYes,
  addTextContentToBtnYes,
);

const btnCancel = processBtnCancel(document);
const btnYes = processBtnYes(document);

// form appending
const appendH4ToForm = (form) => {
  form.append(question);
  return form;
};

const appendBtnYesToForm = (form) => {
  form.append(btnYes);
  console.log(form);
  return form;
};

const appendBtnCancelToForm = (form) => {
  form.append(btnCancel);
  return form;
};

const processForm = pipe(
  createFormElement,
  setAttributeToFormElement,
  addClassToFormElement,
  appendH4ToForm,
  appendBtnYesToForm,
  appendBtnCancelToForm,
);

const formOption = processForm(document);

export { formOption, question };
