import eventBus from '../../../module/event-bus/event';
import depositPreferenceForm from './deposit-preference-form';

const depositPreference = depositPreferenceForm.querySelector('#deposit-preference');
const btnSubmitDepositPreference = depositPreferenceForm.querySelector(
  '.btn-submit-deposit-preference',
);

function resetForm() {
  depositPreferenceForm.reset();
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
      value: [{ depositPreference: depositPreference.value }, { isMemberNew: false }],
      firstKey: ['depositPreference', 'isMemberNew'],
    },
  };
  return obj;
}

function storeFormDataToDatabase() {
  getDepositPreferenceAction();
  resetForm();
}

const submitDepositPreferenceFormEvent = new CustomEvent('all-field-valid', {
  detail: {
    form: depositPreferenceForm,
    functionToGetDataInIndexBD: storeFormDataToDatabase,
  },
});

const bindSubmitDepositPreference = () =>
  btnSubmitDepositPreference.addEventListener('click', () =>
    eventBus.dispatchEvent(submitDepositPreferenceFormEvent),
  );

export default bindSubmitDepositPreference;
