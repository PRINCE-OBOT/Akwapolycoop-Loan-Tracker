import eventBus from '../../../module/event-bus/event';
import depositPreferenceForm from './deposit-preference-form';

const form = depositPreferenceForm.querySelector('form');
const depositPreference = depositPreferenceForm.querySelector('#deposit-preference');
const btnSubmitDepositPreference = depositPreferenceForm.querySelector(
  '.btn-submit-deposit-preference',
);

function resetForm() {
  form.reset();
}

const getRecentLoanApplicantIDInLocalStorage = () => {
  const data = localStorage.getData({ key: 'recent-loan-applicant' });
  return data?.id;
};

function getDepositPreferenceAction() {
  const id = getRecentLoanApplicantIDInLocalStorage();

  const obj = {
    key: 'action',
    data: {
      action: 'modifyData',
      id,
      value: [{ depositPreference: +depositPreference.value }, { isMemberNew: false }],
      firstKey: ['depositPreference', 'isMemberNew'],
    },
  };
  return obj;
}

const storeActionToLocalStorage = (obj) => {
  localStorage.setData(obj);
};

function handleActionStorage() {
  const depositPreferenceAction = getDepositPreferenceAction();
  storeActionToLocalStorage(depositPreferenceAction);
  resetForm();
}

const Event = ({ text }) =>
  new CustomEvent('dialog-manager', {
    detail: {
      contentKey: 'question',
      closedByValue: 'any',
      text,
    },
  });

const events = {
  depositPreferenceQuestion: Event({ text: 'use the amount as your monthly deposit preference?' }),
};

function handleOptionContent() {
  eventBus.dispatchEvent(events.depositPreferenceQuestion);
}

function processDepositPreferenceForStoring() {
  handleActionStorage();
  handleOptionContent();
}

const submitDepositPreferenceFormEvent = new CustomEvent('all-field-valid', {
  detail: {
    form: depositPreferenceForm,
    functionToGetDataInIndexBD: processDepositPreferenceForStoring,
  },
});

const bindSubmitDepositPreference = () =>
  btnSubmitDepositPreference.addEventListener('click', () =>
    eventBus.dispatchEvent(submitDepositPreferenceFormEvent),
  );

export default bindSubmitDepositPreference;
