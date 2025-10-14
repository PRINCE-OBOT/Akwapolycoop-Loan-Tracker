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

const appendFormOptionToDialog = () => {
  dialog.append(formOption);
};

const setQuestionText = (detail) => {
  question.textContent = `Are you sure you want to ${detail.text}`;
  appendFormOptionToDialog();
};

const appendFormStatusToDialog = () => {
  dialog.append(formStatus);
};

const setStatusText = (detail) => {
  h4.textContent = detail.text;
  appendFormStatusToDialog();
};

const dialogContentHandler = {
  question: setQuestionText,
  status: setStatusText,
};

function DialogManager(e) {
  const detail = e.detail;

  dialog.innerHTML = '';

  dialog.setAttribute('closedby', detail.closedByValue);

  dialogContentHandler[detail.contentKey](detail);

  // window.scrollTo({ top: 0 , behavior: 'smooth' });
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
        closedByValue: 'closerequest',
        text,
      },
    }),
};

const dialogEvent = {
  login: contentEvent.status({ text: 'Logging in...', closedByValue: 'closerequest' }),
  signUp: contentEvent.status({ text: 'Signing in...', closedByValue: 'closerequest' }),
  signUpFail: contentEvent.status({ text: 'Account Already Exist', closedByValue: 'any' }),
  fail: contentEvent.status({ text: 'Incorrect Username or Password' }),
  logout: contentEvent.option({ text: 'logout?' }),
  approve: contentEvent.option({ text: 'approve the loan?' }),
  decline: contentEvent.option({ text: 'decline the loan?' }),
};

eventBus.addEventListener('dialog-manager', DialogManager);

export default dialogEvent;
