import eventBus from '../../../module/event-bus/event';
import FieldValidationUtility from '../../../module/form-validation/field-utility';
import Password from '../../../module/form-validation/password-validator';
import preferredDepositAmountForm from './deposit-preference-form';

const form = preferredDepositAmountForm.querySelector('form');
const preferredDepositAmount = preferredDepositAmountForm.querySelector(
  '#preferred-deposit-amount',
);
const withdrawalPin = preferredDepositAmountForm.querySelector('#withdrawal-pin');
const withdrawalPinMsg = preferredDepositAmountForm.querySelector('#withdrawal-pin-message');
const confirmWithdrawalPinMsg = preferredDepositAmountForm.querySelector(
  '#confirm-withdrawal-pin-message',
);
const confirmWithdrawalPin = preferredDepositAmountForm.querySelector('#confirm-withdrawal-pin');

const btnSubmitPreferredDepositAmount = preferredDepositAmountForm.querySelector(
  '.btn-submit-deposit-preference',
);

function resetForm() {
  form.reset();
  FieldValidationUtility.resetFieldValidity(form);
}

const getRecentLoanApplicantIDInLocalStorage = () => {
  const data = localStorage.getData({ key: 'recent-loan-applicant' });
  return data?.id;
};

function getPreferredDepositAmountAction() {
  const id = getRecentLoanApplicantIDInLocalStorage();

  const obj = {
    key: 'action',
    data: {
      action: 'modifyData',
      id,
      value: [
        { preferredDepositAmount: +preferredDepositAmount.value },
        { withdrawalPin: withdrawalPin.value },
        { isMemberNew: false },
      ],
      firstKey: ['preferredDepositAmount', 'withdrawalPin', 'isMemberNew'],
    },
  };
  return obj;
}

const storeActionToLocalStorage = (obj) => {
  localStorage.setData(obj);
};

function handleActionStorage() {
  const preferredDepositAmountAction = getPreferredDepositAmountAction();
  storeActionToLocalStorage(preferredDepositAmountAction);
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
  preferredDepositAmountQuestion: Event({
    text: 'use the amount as your monthly deposit preference?',
  }),
};

function handleOptionContent() {
  eventBus.dispatchEvent(events.preferredDepositAmountQuestion);
}

function processPreferredDepositAmountForStoring() {
  handleActionStorage();
  handleOptionContent();
}

const submitPreferredDepositAmountFormEvent = new CustomEvent('all-field-valid', {
  detail: {
    form: preferredDepositAmountForm,
    functionToGetDataInIndexBD: processPreferredDepositAmountForStoring,
  },
});

const bindSubmitPreferredDepositAmount = () =>
  btnSubmitPreferredDepositAmount.addEventListener('click', () =>
    eventBus.dispatchEvent(submitPreferredDepositAmountFormEvent),
  );

new Password({
  password: withdrawalPin,
  passwordMessage: withdrawalPinMsg,
  confirmPassword: confirmWithdrawalPin,
  confirmPasswordMessage: confirmWithdrawalPinMsg,
});

export default bindSubmitPreferredDepositAmount;
