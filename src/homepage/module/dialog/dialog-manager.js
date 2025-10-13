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

  dialogContentHandler[detail.contentKey](detail);

  dialog.showModal();
}

const contentEvent = {
  status: ({ text, closedByValue = 'any' }) =>
    new CustomEvent('dialog-manager', {
      detail: {
        contentKey: 'h4Text',
        closedByValue,
        text,
      },
    }),
  option: () =>
    new CustomEvent('dialog-manager', {
      detail: {
        contentKey: 'formOption',
        closedByValue: 'any',
      },
    }),
};

const dialogEvent = {
  progress: contentEvent.status({ text: 'Logging in...', closedByValue: 'closerequest' }),
  fail: contentEvent.status({ text: 'Incorrect Username or Password' }),
  option: contentEvent.option(),
};

eventBus.addEventListener('dialog-manager', DialogManager);

export default dialogEvent;
