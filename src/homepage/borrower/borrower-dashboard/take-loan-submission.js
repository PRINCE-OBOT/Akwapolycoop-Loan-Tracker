import { format } from 'date-fns';
import eventBus from '../../module/event-bus/event';
import indexDB from '../../module/indexDB/indexDB';

import takeLoan from './take-loan';

const form = takeLoan;

const desiredAmount = form.querySelector('#desired-amount');
const tenor = form.querySelector('#tenor');
const loanPurpose = form.querySelector('#loan-purpose');

const btnSubmitLoan = form.querySelector('.btn-submit-loan');

const submitLoanEvent = new CustomEvent('all-field-valid', {
  detail: {
    form,
    functionToGetDataInIndexBD: getLoanApplicantDataIndexedDB,
  },
});

const bindSubmitLoanButton = () =>
  btnSubmitLoan.addEventListener('click', () => eventBus.dispatchEvent(submitLoanEvent));

function getLoanApplicantDataIndexedDB(data) {
  indexDB.interact(
    {
      storeName: 'loan-applicant-list',
      keyPathValue: data.id,
      getMethod: 'get',
      returnData: insertMoreFormFieldValues,
      undefinedState: errorGettingData,
    },
    'getData',
  );
}

function formatDateToISOFormat() {
  return format(new Date(), 'EEEE dd, MMMM, yyyy, hh:mm:ss a');
}

function insertMoreFormFieldValues(data) {
  if (!data.takeLoan) data.takeLoan = [];

  const loanApplicantTakeLoanLength = data.takeLoan.length + 1;

  const takeLoanData = {
    outstandingBalance: 0,
    status: 'pending',
    paidStatus: 'Incomplete',
    loanID: `LOAN${data.id}-00${loanApplicantTakeLoanLength}`,
    dateAndTime: formatDateToISOFormat(),
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

function storeDataLoanApplicantList(data) {
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
  alert('Your taken loan has been submitted, your request will be processed.');
}

function loanApplicantDataNotStore() {
  console.log('loan applicant data not stored');
}

function errorGettingData() {
  console.log('Error while getting data');
}

export default bindSubmitLoanButton;
