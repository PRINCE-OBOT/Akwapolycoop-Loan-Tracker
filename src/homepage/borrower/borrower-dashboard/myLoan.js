import eventBus from '../../module/event-bus/event';
import indexDB from '../../module/indexDB/indexDB';
import registerLocalStorageCustomMethod from '../../module/localStorage/localStorage';

registerLocalStorageCustomMethod();

eventBus.addEventListener('get-data-in-indexedDB', getRecentLoanApplicantListOfTakenLoan);

const myLoan = (function () {
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
      keyPathValue: data.id,
      getMethod: 'get',
      returnData: insertLoanApplicantDataToTable,
      undefineState: errorWhileGettingData,
    },
    'getData',
  );
}

function insertLoanApplicantDataToTable(loanApplicantData) {
  const tbody = myLoan.querySelector('tbody');

  if (!loanApplicantData.takeLoan) {
    alert('You have not taken a loan');
    return;
  }

  loanApplicantData.takeLoan.forEach((data, index) => {
    const tr = document.createElement('tr');

    const serialNumber = index + 1;

    tr.innerHTML = `
       <td>${serialNumber}</td>
       <td>${data.loanID}</td>
       <td>${data['desired-amount']}</td>
       <td>${data.tenor}</td>
       <td>${data.status}</td>
       <td>${data.date}</td>
      `;

    tbody.append(tr);
  });
}

function errorWhileGettingData() {
  console.log('Error while getting data');
}

export { myLoan, getRecentLoanApplicantListOfTakenLoan };
