import pipe from '../composition/pipe';
import eventBus from '../event-bus/event';
import formOption from './form-Option';
import { formStatus, h4 } from './form-Status';

const createDialogElement = (document) => {
  const dialog = document.createElement('dialog');
  return dialog;
};

const appendDialogToBody = (dialog) => {
  document.body.append(dialog);
  return dialog;
};

const processDialog = pipe(createDialogElement, appendDialogToBody);

const dialog = processDialog(document);

const appendFormOption = () => {
  dialog.append(formOption);
};

const appendFormStatus = () => {
  dialog.append(formStatus);
};

const setH4Text = (detail) => {
  h4.textContent = detail.text;
  appendFormStatus();
};

const dialogContentHandler = {
  formOption: appendFormOption,
  formStatus: appendFormStatus,
  h4Text: setH4Text,
};

function DialogManager(e) {
  const detail = e.detail;

  dialog.innerHTML = '';

  dialog.setAttribute('closedby', detail.closedByValue);

  dialogContentHandler[detail.dialogContentHandlerKey](detail);

  dialog.showModal();
}

eventBus.addEventListener('add-content-to-dialog', DialogManager);

// const formWithOptionsEvent = new CustomEvent('add-content-to-dialog', {
//   detail: {
//     formState: 'formWithOptions',
//     closedByValue: 'closerequest',
//   },
// });

// const showModalEvent = new CustomEvent('show-modal');

// export { formForStatusEvent, formWithOptionsEvent, showModalEvent, DialogManager };
