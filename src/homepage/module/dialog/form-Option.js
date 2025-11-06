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
  form.classList.add('form-option');
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
  button.type = 'button';
  return button;
};

const addEventToBtnYes = (button) => {
  button.addEventListener('click', handleActionDirection);
  return button;
};

const events = {
  modifyIndexdb: new CustomEvent('modify-indexdb'),
  logout: new CustomEvent('logout'),
  previousContentEvent: new CustomEvent('dialog-manager', {
    detail: { contentKey: 'previousContent', closedByValue: 'any' },
  }),
  manualCloseDialog: new CustomEvent('manual-close-dialog'),
  displayPreferredDepForm: new CustomEvent('dialog-manager', {
    detail: {
      contentKey: 'depositPreferenceForm',
      closedByValue: 'closerequest',
    },
  }),
};

function isActionPreferredDepositAmount() {
  const action = getActionFromLocalStorage();

  if (action?.firstKey[0] === 'preferredDepositAmount')
    eventBus.dispatchEvent(events.displayPreferredDepForm);
}

const addEventToBtnCancel = (button) => {
  button.addEventListener('click', () => {
    eventBus.dispatchEvent(events.manualCloseDialog);

    isActionPreferredDepositAmount();
    // eventBus.dispatchEvent(events.previousContentEvent);
  });
  return button;
};

const dispatchModifyDataEvent = () => {
  eventBus.dispatchEvent(events.modifyIndexdb);
};

const dispatchLogoutEvent = () => {
  eventBus.dispatchEvent(events.logout);
};

const Actions = {
  logout: dispatchLogoutEvent,
  modifyData: dispatchModifyDataEvent,
};

// get action like `modifyData` in localStorage
// if logout - logout user
// if pending or approve - modify data
// if view - get loan applicant data and modify data

function getActionFromLocalStorage() {
  const data = localStorage.getData({ key: 'action' });
  return data;
}

function handleActionDirection() {
  const data = getActionFromLocalStorage();

  Actions[data?.action]();
}

const processBtnCancel = pipe(
  createButtonElement,
  addClassBtnCancelToButton,
  addEventToBtnCancel,
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
