import MathUtility from '../../module/business-logic/mathUtility';
import eventBus from '../../module/event-bus/event';
import FieldValidationUtility from '../../module/form-validation/field-utility';
import indexDB from '../../module/indexDB/indexDB';

import takeLoan from './take-loan';

const form = takeLoan;

const loanPurposeSection = (function createLoanPurpose() {
  const div = document.createElement('div');
  div.classList.add('loan-purpose');

  div.innerHTML = `
  <label for="loan-purpose">
  Purpose of Loan
  <span class="required-asterisk">*</span>
    </label>
    <input
      type="text"
      id="loan-purpose"
      placeholder="e.g Business"
      pattern="[a-zA-Z ]{8,}$"
      data-set-field-validation-value="setValidatePurposeOfLoan"
      required
    />
    <output id="loan-purpose-message" class="show-message"></output>
  `;
  return div;
})();

const monthlyWithdrawalTimesSection = (function createmonthlyWithdrawalTimes() {
  const div = document.createElement('div');
  div.classList.add('monthly-withdrawal-times');

  div.innerHTML = `
    <label for="monthly-withdrawal-times">
    Monthly Withdrawal Times
    <span class="required-asterisk">*</span>
    </label>
    <input
      type="number"
      id="monthly-withdrawal-times"
      placeholder="e.g 2"
      pattern="^.{1,}$"
      data-set-field-validation-value="setPatternForEmptyField"
      required
    />
    <output class="show-message"></output>
    `;

  return div;
})();

const fieldset = form.querySelector('fieldset');
const withdrawalAmount = form.querySelector('#withdrawal-amount');
const withdrawalPin = form.querySelector('#withdraw-pin');
const withdrawalMsg = form.querySelector('.withdrawal-message');
const percentageMsg = form.querySelector('.percentage-msg');
const btnSubmitWithdrawal = form.querySelector('.btn-submit-withdrawal');
const monthWithdrawalTimes = monthlyWithdrawalTimesSection.querySelector(
  '#monthly-withdrawal-times',
);
const loanPurpose = loanPurposeSection.querySelector('#loan-purpose');

const btnTakeLoan = document.createElement('button');
btnTakeLoan.type = 'button';
btnTakeLoan.textContent = 'Toggle Take loan';

const MINIMUM_MONTH_DEPOSIT = 1;
const PERCENTAGE = 2 / 100;

const Event = ({ text, closedByValue = 'any' }) =>
  new CustomEvent('dialog-manager', {
    detail: {
      contentKey: 'status',
      closedByValue,
      text,
    },
  });

const events = {
  failTakeLoan: Event({ text: 'Your loan application form has not been submitted' }),
  unApproveTakeLoan: Event({ text: 'Your loan application form has not been Approve' }),
  takeLoanSuccess: Event({
    text: 'You have successfully taken a loan. Under Review',
  }),
  failWithdrawal: Event({ text: 'Your withdrawal pin is incorrect' }),
  depositNotConsistent: Event({ text: 'You have not deposited six (6) month completely' }),
  noDeposit: Event({ text: 'You have not made any deposit' }),
  withdrawalSuccess: Event({ text: 'Your withdrawal request is under review' }),
};

function displayPercentageMsg() {
  percentageMsg.textContent = `You will receive ${withdrawalAmount.value - PERCENTAGE * +withdrawalAmount.value}`;
}

let isExtraField = false;
function toggleFieldToTakeLoan() {
  if (!isExtraField) {
    fieldset.append(loanPurposeSection, monthlyWithdrawalTimesSection);
    isExtraField = true;
  } else {
    loanPurposeSection.remove();
    monthlyWithdrawalTimesSection.remove();
    isExtraField = false;
  }
}

function hasExceedMaxWithdrawalAmount(value) {
  withdrawalMsg.textContent = `
    Your withdrawal amount has exceed your balance and maximum loan amount. 
    An addition of ${value}`;
}

function hasExceedBalance() {
  withdrawalMsg.textContent = `
  Your withdrawal amount has exceeded your balance. You will be taken a loan of ${loan}. 
  Click toggle take Loan to continue`;
  appendButtonToTakenLoan();
}

function isLoanFieldInForm() {
  const isLoanPurposeInform = form.querySelector('#loan-purpose');
  if (isLoanPurposeInform) {
    getRecentMemberData(isWithdrawalAndLoan);
  }
}

function appendButtonToTakenLoan() {
  withdrawalMsg.after(btnTakeLoan);
}

function clearMessage() {
  withdrawalMsg.textContent = '';
  btnTakeLoan.remove();
}

function isOnlyWithdrawal(data) {
  const result = addFieldValueToData(data);
  storeDataLoanApplicantList(result);
}

let loan;
function addTakeLoanFieldValue(data) {
  if (!data.loan) data.loan = [];

  const loanLength = data.loan.length;
  const withdrawalTimes = +monthWithdrawalTimes.value;
  const monthlyWithdrawalAmount = loan / withdrawalTimes;
  const dividendAmount = PERCENTAGE * loan;
  const amountDisburse = loan - dividendAmount;

  const loanFieldValue = {
    dateAndTime: new Date(),
    status: 'Pending',
    loanAmount: loan,
    loanAmountDynamic: 0,
    amountDisburse,
    loanID: `LOAN${data?.id}-00${loanLength}`,
    loanPurpose: loanPurpose.value,
    monthlyWithdrawalTimes: withdrawalTimes,
    monthlyWithdrawalAmount,
    dividendAmount,
    dividendAmountDynamic: dividendAmount,
  };

  data.loan.push(loanFieldValue);

  storeDataLoanApplicantList(data);
}

let withdrawalAmountValue = 0;
function isWithdrawalAndLoan(data) {
  const result = addFieldValueToData(data);

  const withdrawalLength = result.withdrawal.length - 1;

  const withdrawal = data.withdrawal[withdrawalLength];

  withdrawal.withdrawalAmount = withdrawalAmountValue;

  addTakeLoanFieldValue(result);
}

function addFieldValueToData(data) {
  if (!data.withdrawal) data.withdrawal = [];

  const withdrawalLength = data.withdrawal.length;
  const dividendAmount = PERCENTAGE * withdrawalAmountValue;
  const amountDisburse = withdrawalAmountValue - dividendAmount;

  const withdrawalFieldValue = {
    dateAndTime: new Date(),
    status: 'Pending',
    withdrawalAmount: withdrawalAmountValue,
    amountDisburse,
    withdrawalID: `WTD${data?.id}-00${withdrawalLength}`,
    dividendAmount,
    dividendAmountDynamic: dividendAmount,
  };

  data.withdrawal.push(withdrawalFieldValue);

  return data;
}

function isWithdrawalAmountGreaterThanBalance(balance, data) {
  const amount = +withdrawalAmount.value;
  let maxWithdrawalAmount = balance * 2;

  clearMessage();

  if (amount > maxWithdrawalAmount) {
    hasExceedMaxWithdrawalAmount(amount - maxWithdrawalAmount);
  } else if (balance > 0 && amount > balance && amount <= balance * 2) {
    loan = amount - balance;
    withdrawalAmountValue = balance;
    hasExceedBalance();
    isLoanFieldInForm();
  } else if (balance > 0 && amount <= balance) {
    withdrawalAmountValue = +withdrawalAmount.value;
    getRecentMemberData(isOnlyWithdrawal);
  } else if (balance <= 0) {
    maxWithdrawalAmount = data.fixedDepositAmount - Math.abs(balance);

    if (amount > maxWithdrawalAmount) {
      hasExceedMaxWithdrawalAmount(amount - maxWithdrawalAmount);
      return;
    }

    loan = amount;
    hasExceedBalance();
    isLoanFieldInForm();
  }
}

function isMemberActiveForSixMonth(data) {
  if (data.deposit) {
    data.deposit.length >= MINIMUM_MONTH_DEPOSIT
      ? MathUtility.balance({
          data,
          callback: isWithdrawalAmountGreaterThanBalance,
        })
      : eventBus.dispatchEvent(events.depositNotConsistent);

    return;
  }
  eventBus.dispatchEvent(events.noDeposit);
}

function isWithDrawalPinCorrect(data) {
  if (withdrawalPin.value === data.withdrawalPin) {
    isMemberActiveForSixMonth(data);
  } else {
    resetForm();
    eventBus.dispatchEvent(events.failWithdrawal);
  }
}

function getLoanApplicantDataIndexedDB() {
  const data = localStorage.getData({ key: 'recent-loan-applicant' });

  indexDB.interact(
    {
      storeName: 'loan-applicant-list',
      keyPathValue: data?.id,
      getMethod: 'get',
      returnData: isWithDrawalPinCorrect,
      undefinedState: errorGettingData,
    },
    'getData',
  );
}
function getRecentMemberData(callback) {
  const data = localStorage.getData({ key: 'recent-loan-applicant' });

  indexDB.interact(
    {
      storeName: 'loan-applicant-list',
      keyPathValue: data?.id,
      getMethod: 'get',
      returnData: callback,
      undefinedState: errorGettingData,
    },
    'getData',
  );
}
function resetForm() {
  takeLoan.reset();
  FieldValidationUtility.resetFieldValidity(form);
}

function withdrawalSuccessful() {
  eventBus.dispatchEvent(events.withdrawalSuccess);
}

function storeDataLoanApplicantList(data) {
  resetForm();

  indexDB.interact(
    {
      storeName: 'loan-applicant-list',
      data,
      trueState: withdrawalSuccessful,
      undefinedState: errorGettingData,
    },
    'storeData',
  );
}

function errorGettingData() {
  console.log('Error while getting data');
}

const submitWithdrawalEvent = new CustomEvent('all-field-valid', {
  detail: {
    form,
    functionToGetDataInIndexBD: getLoanApplicantDataIndexedDB,
  },
});

const bindSubmitWithdrawalButton = () =>
  btnSubmitWithdrawal.addEventListener('click', () =>
    eventBus.dispatchEvent(submitWithdrawalEvent),
  );

withdrawalAmount.addEventListener('input', displayPercentageMsg);
btnTakeLoan.addEventListener('click', toggleFieldToTakeLoan);

export default bindSubmitWithdrawalButton;
