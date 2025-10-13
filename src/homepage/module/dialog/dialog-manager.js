import pipe from '../composition/pipe';
import eventBus from '../event-bus/event';
import { formOption, question } from './form-Option';
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

const setQuestionText = (detail) => {
  question.textContent = `Are you sure you want to ${detail.text}`;
  appendFormOption();
};

const appendFormStatus = () => {
  dialog.append(formStatus);
};

const setStatus = (detail) => {
  h4.textContent = detail.text;
  appendFormStatus();
};

const dialogContentHandler = {
  question: setQuestionText,
  status: setStatus,
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
        contentKey: 'status',
        closedByValue,
        text,
      },
    }),
  option: ({ text }) =>
    new CustomEvent('dialog-manager', {
      detail: {
        contentKey: 'question',
        closedByValue: 'any',
        text,
      },
    }),
};

const dialogEvent = {
  progressLogin: contentEvent.status({ text: 'Logging in...', closedByValue: 'closerequest' }),
  progressSignUp: contentEvent.status({ text: 'Signing in...', closedByValue: 'closerequest' }),
  fail: contentEvent.status({ text: 'Incorrect Username or Password' }),
  optionLogout: contentEvent.option({ text: 'logout?' }),
  optionApprove: contentEvent.option({ text: 'approve the loan?' }),
  optionDecline: contentEvent.option({ text: 'decline the loan?' }),
};

eventBus.addEventListener('dialog-manager', DialogManager);

export default dialogEvent;
