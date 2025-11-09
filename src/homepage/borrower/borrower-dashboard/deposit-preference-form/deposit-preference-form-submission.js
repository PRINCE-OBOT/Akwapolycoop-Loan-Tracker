import eventBus from '../../../module/event-bus/event';
import FieldValidationUtility from '../../../module/form-validation/field-utility';
import Password from '../../../module/form-validation/password-validator';
import fixedDepositAmountForm from './deposit-preference-form';

const form = fixedDepositAmountForm.querySelector('form');
const fixedDepositAmount = fixedDepositAmountForm.querySelector('#preferred-deposit-amount');
const withdrawalPin = fixedDepositAmountForm.querySelector('#withdrawal-pin');
const withdrawalPinMsg = fixedDepositAmountForm.querySelector('#withdrawal-pin-message');
const confirmWithdrawalPinMsg = fixedDepositAmountForm.querySelector(
  '#confirm-withdrawal-pin-message',
);
const confirmWithdrawalPin = fixedDepositAmountForm.querySelector('#confirm-withdrawal-pin');

const btnSubmitfixedDepositAmount = fixedDepositAmountForm.querySelector(
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

function getfixedDepositAmountAction() {
  const id = getRecentLoanApplicantIDInLocalStorage();

  const obj = {
    key: 'action',
    data: {
      action: 'modifyData',
      id,
      value: [
        { fixedDepositAmount: +fixedDepositAmount.value },
        { withdrawalPin: withdrawalPin.value },
        { isMemberNew: false },
      ],
      firstKey: ['fixedDepositAmount', 'withdrawalPin', 'isMemberNew'],
    },
  };
  return obj;
}

const storeActionToLocalStorage = (obj) => {
  localStorage.setData(obj);
};

function handleActionStorage() {
  const fixedDepositAmountAction = getfixedDepositAmountAction();
  storeActionToLocalStorage(fixedDepositAmountAction);
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
    text: 'use the amount as your monthly deposit preference?',
  }),
};

function handleOptionContent() {
  eventBus.dispatchEvent(events.fixedDepositAmountQuestion);
}

function processfixedDepositAmountForStoring() {
  handleActionStorage();
  handleOptionContent();
}

const submitfixedDepositAmountFormEvent = new CustomEvent('all-field-valid', {
  detail: {
    form: fixedDepositAmountForm,
    functionToGetDataInIndexBD: processfixedDepositAmountForStoring,
  },
});

const bindSubmitfixedDepositAmount = () =>
  btnSubmitfixedDepositAmount.addEventListener('click', () =>
    eventBus.dispatchEvent(submitfixedDepositAmountFormEvent),
  );

new Password({
  password: withdrawalPin,
  passwordMessage: withdrawalPinMsg,
  confirmPassword: confirmWithdrawalPin,
  confirmPasswordMessage: confirmWithdrawalPinMsg,
});

export default bindSubmitfixedDepositAmount;
