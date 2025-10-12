import eventBus from '../../module/event-bus/event';
import indexDB from '../../module/indexDB/indexDB';

import registerLocalStorageCustomMethod from '../../module/localStorage/localStorage';

registerLocalStorageCustomMethod();

eventBus.addEventListener('get-data-in-indexedDB', getRecentLoanApplicantListOfTakenLoan);

const myLoan = (function createTableHeading() {
  const table = document.createElement('table');

  table.innerHTML = `
   <caption>
     <h4 class="my-loan-table-heading">
       My Loans
     </h4>
   </caption>

   <thead>
     <tr>
       <th>S/N</th>
       <th>Loan ID</th>
       <th>Amount</th>
       <th>Tenor</th>
       <th>Status</th>
       <th>Date</th>
       <th>Time</th>
     </tr>
   </thead>

   <tbody>
   </tbody>`;

  return table;
})();

function getRecentLoanApplicantListOfTakenLoan() {
  const data = localStorage.getData({ key: 'recent-loan-applicant' });

  indexDB.interact(
    {
      storeName: 'loan-applicant-list',
      keyPathValue: data?.id,
      getMethod: 'get',
      returnData: insertLoanApplicantDataToTable,
      undefineState: errorWhileGettingData,
    },
    'getData',
  );
}

const getDate = (dateAndTime) => {
  const date = dateAndTime.slice(0, dateAndTime.lastIndexOf(','));
  return date;
};

const getTime = (dateAndTime) => {
  const time = dateAndTime.slice(dateAndTime.lastIndexOf(',') + 1);
  return time;
};

const getSerialNumber = (index) => {
  const serialNumber = index + 1;
  return serialNumber;
};

function insertLoanApplicantDataToTable(loanApplicantData) {
  const tbody = myLoan.querySelector('tbody');

  if (!loanApplicantData.takeLoan) {
    alert('You have not taken a loan');
    return;
  }

  loanApplicantData.takeLoan.forEach((data, index) => {
    const tr = document.createElement('tr');

    const serialNumber = getSerialNumber(index);
    const date = getDate(data.dateAndTime);
    const time = getTime(data.dateAndTime);

    tr.innerHTML = `
       <td>${serialNumber}</td>
       <td>${data.loanID}</td>
       <td>${data['desired-amount']}</td>
       <td>${data.tenor}</td>
       <td>${data.status}</td>
       <td>${date}</td>
       <td>${time}</td>
      `;

    tbody.append(tr);
  });
}

function errorWhileGettingData() {
  console.log('Error while getting data');
}

export { myLoan, getRecentLoanApplicantListOfTakenLoan };
