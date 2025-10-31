import MathUtility from '../../module/business-logic/mathUtility';
import eventBus from '../../module/event-bus/event';
import indexDB from '../../module/indexDB/indexDB';

import takeLoan from './take-loan';

const form = takeLoan;

const fieldset = form.querySelector('fieldset');
const withdrawalAmount = form.querySelector('#withdrawal-amount');
const withdrawalPin = form.querySelector('#withdraw-pin');
const withdrawalMsg = form.querySelector('.withdrawal-message');

const btnTakeLoan = document.createElement('button');
btnTakeLoan.type = 'button';
btnTakeLoan.textContent = 'Take loan';

const MINIMUM_MONTH_DEPOSIT = 4;

const loanPurpose = (function createLoanPurpose() {
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
    <output id="tenor-message" class="show-message"></output>
  `;
  return div;
})();

const monthlyWithdrawalAmount = (function createMonthlyWithdrawalAmount() {
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

const btnSubmitWithdrawal = form.querySelector('.btn-submit-withdrawal');

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

let extraFieldState = false;
function toggleFieldToTakeLoan() {
  if (!extraFieldState) {
    fieldset.append(loanPurpose, monthlyWithdrawalAmount);
    extraFieldState = true;
  } else {
    loanPurpose.remove();
    monthlyWithdrawalAmount.remove();
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
  withdrawalMsg.textContent = `
  Your withdrawal amount has exceeded your balance. You will be taken a loan of ${takeLoanAmount}. 
  Click Take Loan to continue`;
  appendButtonToTakenLoan();
}

function appendButtonToTakenLoan() {
  withdrawalMsg.after(btnTakeLoan);
}

function isWithdrawalAmountGreaterThanBalance(balance, data) {
  if (+withdrawalAmount.value > balance) {
    setWithdrawalMsgText(balance, data);
  } else {
    eventBus.dispatchEvent(events.withdrawalSuccess);
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

// function insertMoreFormFieldValues(data) {
//   if (!data.takeLoan) data.takeLoan = [];

//   const loanApplicantTakeLoanLength = data.takeLoan.length + 1;

//   const takeLoanData = {
//     outstandingBalance: 0,
//     status: 'Pending',
//     paidStatus: 'Incomplete',
//     loanID: `LOAN${data?.id}-00${loanApplicantTakeLoanLength}`,
//     dateAndTime: new Date(),
//   };

//   function setValue(element) {
//     takeLoanData[element.id] = element.value;
//   }

//   const listOfFormField = [withdrawalAmount, loanPurpose];

//   listOfFormField.forEach((field) => {
//     setValue(field);
//   });

//   data.takeLoan.push(takeLoanData);

//   storeDataLoanApplicantList(data);
// }

function resetForm() {
  takeLoan.reset();
}

// function storeDataLoanApplicantList(data) {
//   resetForm();
//   indexDB.interact(
//     {
//       storeName: 'loan-applicant-list',
//       data,
//       trueState: displayTakeLoanSubmissionStatus,
//       undefinedState: loanApplicantDataNotStore,
//     },
//     'storeData',
//   );
// }

// function displayTakeLoanSubmissionStatus() {
//   eventBus.dispatchEvent(events.takeLoanSuccess);
// }

// function loanApplicantDataNotStore() {
//   console.log('loan applicant data not stored');
// }

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

btnTakeLoan.addEventListener('click', toggleFieldToTakeLoan);

export default bindSubmitWithdrawalButton;
