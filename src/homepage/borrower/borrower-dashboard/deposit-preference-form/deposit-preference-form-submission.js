import eventBus from '../../../module/event-bus/event';
import FieldValidationUtility from '../../../module/form-validation/field-utility';
import Password from '../../../module/form-validation/password-validator';
import fixedDepositAmountForm from './deposit-preference-form';

const form = fixedDepositAmountForm.querySelector('form');
const withdrawalPin = fixedDepositAmountForm.querySelector('#withdrawal-pin');
const withdrawalPinMsg = fixedDepositAmountForm.querySelector('#withdrawal-pin-message');
const confirmWithdrawalPinMsg = fixedDepositAmountForm.querySelector(
  '#confirm-withdrawal-pin-message',
);
const confirmWithdrawalPin = fixedDepositAmountForm.querySelector('#confirm-withdrawal-pin');

const btnSubmitSetPin = fixedDepositAmountForm.querySelector('.btn-submit-deposit-preference');

function resetForm() {
  form.reset();
  FieldValidationUtility.resetFieldValidity(form);
}

const getRecentLoanApplicantIDInLocalStorage = () => {
  const data = localStorage.getData({ key: 'recent-loan-applicant' });
  return data?.id;
};

function getSetWithdrawalPinAction() {
  const id = getRecentLoanApplicantIDInLocalStorage();

  const obj = {
    key: 'action',
    data: {
      action: 'modifyData',
      id,
      value: [{ withdrawalPin: withdrawalPin.value }, { isMemberNew: false }],
      firstKey: ['withdrawalPin', 'isMemberNew'],
    },
  };
  return obj;
}

const storeActionToLocalStorage = (obj) => {
  localStorage.setData(obj);
};

function handleActionStorage() {
  const setWithdrawalPinAction = getSetWithdrawalPinAction();
  storeActionToLocalStorage(setWithdrawalPinAction);
  resetForm();
}

const Event = ({ text, contentKey = 'question' }) =>
  new CustomEvent('dialog-manager', {
    detail: {
      contentKey,
      closedByValue: 'any',
      text,
    },
  });

const events = {
  fixedDepositAmountQuestion: Event({
    text: 'use the pin?',
  }),
};

function handleOptionContent() {
  eventBus.dispatchEvent(events.fixedDepositAmountQuestion);
}

function processSetWithdrawalPinForStoring() {
  handleActionStorage();
  handleOptionContent();
}

const submitWithdrawalPinEvent = new CustomEvent('all-field-valid', {
  detail: {
    form: fixedDepositAmountForm,
    functionToGetDataInIndexBD: processSetWithdrawalPinForStoring,
  },
});

const bindSubmitWithdrawalPin = () =>
  btnSubmitSetPin.addEventListener('click', () => eventBus.dispatchEvent(submitWithdrawalPinEvent));

new Password({
  password: withdrawalPin,
  passwordMessage: withdrawalPinMsg,
  confirmPassword: confirmWithdrawalPin,
  confirmPasswordMessage: confirmWithdrawalPinMsg,
});

export default bindSubmitWithdrawalPin;
