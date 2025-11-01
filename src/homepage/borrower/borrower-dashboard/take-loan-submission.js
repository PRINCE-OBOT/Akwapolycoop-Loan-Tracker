import MathUtility from '../../module/business-logic/mathUtility';
import eventBus from '../../module/event-bus/event';
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
      pattern="[a-z ]{8,}$"
      data-set-field-validation-value="setValidatePurposeOfLoan"
      required
    />
    <output id="loan-purpose-message" class="show-message"></output>
  `;
  return div;
})();

const monthlyWithdrawalAmountSection = (function createMonthlyWithdrawalAmount() {
  const div = document.createElement('div');
  div.classList.add('monthly-withdrawal-amount');

  div.innerHTML = `
    <label for="monthly-withdrawal-amount">
    Monthly Withdrawal Amount
    <span class="required-asterisk">*</span>
    </label>
    <input
      type="number"
      id="monthly-withdrawal-amount"
      placeholder="e.g 10000"
      pattern="^.{1,}$"
      data-set-field-validation-value="setPatternForEmptyField"
      required
    />
    <output id="monthly-withdrawal-amount-message" class="show-message"></output>
    `;

  return div;
})();

const fieldset = form.querySelector('fieldset');
const withdrawalAmount = form.querySelector('#withdrawal-amount');
const withdrawalPin = form.querySelector('#withdraw-pin');
const withdrawalMsg = form.querySelector('.withdrawal-message');
const percentageMsg = form.querySelector('.percentage-msg');
const btnSubmitWithdrawal = form.querySelector('.btn-submit-withdrawal');
const monthWithdrawalAmount = monthlyWithdrawalAmountSection.querySelector(
  '#monthly-withdrawal-amount',
);
const loanPurpose = loanPurposeSection.querySelector('#loan-purpose');

const btnTakeLoan = document.createElement('button');
btnTakeLoan.type = 'button';
btnTakeLoan.textContent = 'Toggle Take loan';

const MINIMUM_MONTH_DEPOSIT = 1;
const PERCENTAGE = 5 / 100;

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

let extraFieldState = false;
function toggleFieldToTakeLoan() {
  if (!extraFieldState) {
    fieldset.append(loanPurposeSection, monthlyWithdrawalAmountSection);
    extraFieldState = true;
  } else {
    loanPurposeSection.remove();
    monthlyWithdrawalAmountSection.remove();
    extraFieldState = false;
  }
}

function setWithdrawalMsgText(balance, data) {
  const takeLoanAmount = +withdrawalAmount.value - balance;

  if (takeLoanAmount > data.preferredDepositAmount) {
    withdrawalMsg.textContent = `
    Your withdrawal amount has exceed your balance and preferred monthly deposit. 
    An addition of ${takeLoanAmount - data.preferredDepositAmount}`;

    return;
  }

  if (extraFieldState) {
    getRecentMemberData(isWithdrawalAndTakeLoan);
  }

  withdrawalMsg.textContent = `
  Your withdrawal amount has exceeded your balance. You will be taken a loan of ${takeLoanAmount}. 
  Click Take Loan to continue`;
  appendButtonToTakenLoan();
}

function appendButtonToTakenLoan() {
  withdrawalMsg.after(btnTakeLoan);
}

function isOnlyWithdrawal(data) {
  const result = addFieldValueToData(data);
  storeDataLoanApplicantList(result);
}

function addTakeLoanFieldValue(data) {
  if (!data.loan) data.loan = [];

  const loanLength = data.loan.length;

  const loanFieldValue = {
    dateAndTime: new Date(),
    status: 'Pending',
    loanAmount: +withdrawalAmount.value - mainBalance,
    loanAmountDynamic: 0,
    loanID: `LOAN${data?.id}-00${loanLength}`,
    loanPurpose: loanPurpose.value,
    monthlyWithdrawalAmount: monthWithdrawalAmount.value,
  };

  data.loan.push(loanFieldValue);

  storeDataLoanApplicantList(data);
}

let mainBalance = 0;

function isWithdrawalAndTakeLoan(data) {
  const result = addFieldValueToData(data);

  const withdrawalLength = result.withdrawal.length - 1;

  const withdrawal = data.withdrawal[withdrawalLength];

  withdrawal.withdrawalAmount = mainBalance;

  addTakeLoanFieldValue(result);
}

function addFieldValueToData(data) {
  if (!data.withdrawal) data.withdrawal = [];

  const withdrawalLength = data.withdrawal.length;

  const withdrawalFieldValue = {
    dateAndTime: new Date(),
    status: 'Pending',
    withdrawalAmount: +withdrawalAmount.value,
    withdrawalID: `WTD${data?.id}-00${withdrawalLength}`,
  };

  data.withdrawal.push(withdrawalFieldValue);

  return data;
}

function isWithdrawalAmountGreaterThanBalance(balance, data) {
  mainBalance = balance;
  if (+withdrawalAmount.value > balance) {
    setWithdrawalMsgText(balance, data);
  } else {
    getRecentMemberData(isOnlyWithdrawal);
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
