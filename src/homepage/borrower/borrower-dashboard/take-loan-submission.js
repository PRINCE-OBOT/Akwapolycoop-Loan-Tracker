import eventBus from '../../module/event-bus/event';
import indexDB from '../../module/indexDB/indexDB';

import takeLoan from './take-loan';

const form = takeLoan;

const desiredAmount = form.querySelector('#desired-amount');
const tenor = form.querySelector('#tenor');
const loanPurpose = form.querySelector('#loan-purpose');

const btnSubmitLoan = form.querySelector('.btn-submit-loan');

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
};

const checkIfLoanApplicantFormIsFill = (data) => {
  if (data.loanApplicantFormData) {
    data.loanApplicantFormData.status === 'Approve'
      ? insertMoreFormFieldValues(data)
      : eventBus.dispatchEvent(events.unApproveTakeLoan);
  } else {
    eventBus.dispatchEvent(events.failTakeLoan);
  }
};
// const checkIfLoanApplicantFormIsFill = (data) => {
//   if (data.loanApplicantFormData) {
//     insertMoreFormFieldValues(data);
//   } else {
//     eventBus.dispatchEvent(events.failTakeLoan);
//   }
// };

function getLoanApplicantDataIndexedDB() {
  const data = localStorage.getData({ key: 'recent-loan-applicant' });

  indexDB.interact(
    {
      storeName: 'loan-applicant-list',
      keyPathValue: data?.id,
      getMethod: 'get',
      returnData: checkIfLoanApplicantFormIsFill,
      undefinedState: errorGettingData,
    },
    'getData',
  );
}

function insertMoreFormFieldValues(data) {
  if (!data.takeLoan) data.takeLoan = [];

  const loanApplicantTakeLoanLength = data.takeLoan.length + 1;

  const takeLoanData = {
    outstandingBalance: 0,
    status: 'Pending',
    paidStatus: 'Incomplete',
    loanID: `LOAN${data?.id}-00${loanApplicantTakeLoanLength}`,
    dateAndTime: new Date(),
  };

  function setValue(element) {
    takeLoanData[element.id] = element.value;
  }

  const listOfFormField = [tenor, desiredAmount, loanPurpose];

  listOfFormField.forEach((field) => {
    setValue(field);
  });

  data.takeLoan.push(takeLoanData);

  storeDataLoanApplicantList(data);
}

function resetForm() {
  takeLoan.reset();
}

function storeDataLoanApplicantList(data) {
  resetForm();
  indexDB.interact(
    {
      storeName: 'loan-applicant-list',
      data,
      trueState: displayTakeLoanSubmissionStatus,
      undefinedState: loanApplicantDataNotStore,
    },
    'storeData',
  );
}

function displayTakeLoanSubmissionStatus() {
  eventBus.dispatchEvent(events.takeLoanSuccess);
}

function loanApplicantDataNotStore() {
  console.log('loan applicant data not stored');
}

function errorGettingData() {
  console.log('Error while getting data');
}

const submitLoanEvent = new CustomEvent('all-field-valid', {
  detail: {
    form,
    functionToGetDataInIndexBD: getLoanApplicantDataIndexedDB,
  },
});

const bindSubmitLoanButton = () =>
  btnSubmitLoan.addEventListener('click', () => eventBus.dispatchEvent(submitLoanEvent));

export default bindSubmitLoanButton;
