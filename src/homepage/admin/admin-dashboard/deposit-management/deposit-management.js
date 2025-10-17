import { compareAsc, parse } from 'date-fns';

import eyeViewImg from '../../../assets/images/eye-view.svg';

import { dialogEvent } from '../../../module/dialog/dialog-manager';
import eventBus from '../../../module/event-bus/event';
import indexDB from '../../../module/indexDB/indexDB';
import './deposit-management.css';

const depositManagement = (function createDepositManagementContent() {
  const div = document.createElement('div');

  div.innerHTML = `
      <div class="table-wrapper">
      <div class="table-header">
        <h2>All Deposits</h2>
        <div class="search-box">
          <input type="text" id="searchInput" placeholder="Search by serial number..." />
        </div>
      </div>

      <div class="table-content">
        <table id="depositsTable">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Amount Paid</th>
              <th>Status</th>
              <th>Date</th>
              <th>Time</th>
              <th>Proof</th>
              <th>Details</th>
              <th colspan="3">Actions</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
    `;

  div.classList.add('deposit-container');

  return div;
})();

const getTbody = () => {
  const tbody = depositManagement.querySelector('tbody');
  return tbody;
};

const showDepositApproveOption = () => {
  eventBus.dispatchEvent(dialogEvent.depositApprove);
};

const showDepositDeclineOption = () => {
  eventBus.dispatchEvent(dialogEvent.depositDecline);
};

const OptionHandler = {
  depositApproveOption: showDepositApproveOption,
  depositDeclineOption: showDepositDeclineOption,
};

function handleOptionContent(e) {
  const optionKey = e.target.dataset.optionKey;

  if (!optionKey) return;

  OptionHandler[optionKey]();
}

(function addEventToTbody() {
  const tbody = getTbody();
  tbody.addEventListener('click', handleOptionContent);
  //   tbody.addEventListener('click', handleActionStorage);
})();

const errorWhileGettingData = () => {
  console.log('Error while getting data');
};

const createTableTr = () => {
  const tr = document.createElement('tr');
  return tr;
};

const getSerialNumber = (index) => {
  const serialNumber = index + 1;
  return serialNumber;
};

const getDate = (dateAndTime) => {
  const date = dateAndTime.slice(0, dateAndTime.lastIndexOf(','));
  return date;
};

const getTime = (dateAndTime) => {
  const time = dateAndTime.slice(dateAndTime.lastIndexOf(',') + 1);
  return time;
};

const setAttributeToTr = ({ tr, id }) => {
  tr.setAttribute('data-id', id);
};

const appendTrToTbody = (tr) => {
  const tbody = getTbody();
  tbody.append(tr);
};

function insertTakeLoanDataToTable(depositList, id) {
  depositList.forEach((data, index) => {
    const tr = createTableTr();
    const serialNumber = getSerialNumber(index);
    const date = getDate(data.dateAndTime);
    const time = getTime(data.dateAndTime);

    tr.innerHTML = `
       <td>${serialNumber}</td>
       <td>${data.depositAmount}</td>
       <td>${data.status}</td>
       <td>${date}</td>
       <td>${time}</td>
       <td><img src="${eyeViewImg}" class="eye-view" alt="eye view"/>Proof of Payment</td>
       <td data-db-first-key="deposit"><img src="${eyeViewImg}" class="eye-view" alt="eye view"/>View Profile</td>
       <td><button data-option-key="depositApproveOption" data-db-first-key="deposit" data-status="Approve" class="btn-approve-loan">Approve</button></td>
       <td><button data-option-key="depositDeclineOption" data-db-first-key="deposit" data-status="Decline" class="btn-decline-loan">Decline</button></td>
      `;
    setAttributeToTr({ tr, id });
    appendTrToTbody(tr);
  });
}

const sortTakenLoan = (depositList, id) => {
  const format = 'EEEE dd, MMMM, yyyy, hh:mm:ss a';

  depositList.sort((prev, next) => {
    const prevDateAndTime = parse(prev.dateAndTime, format, new Date());
    const nextDataAndTime = parse(next.dateAndTime, format, new Date());
    return compareAsc(nextDataAndTime, prevDateAndTime);
  });

  insertTakeLoanDataToTable(depositList, id);
};

const getDeposit = (loanApplicantListData) => {
  const id = loanApplicantListData.id;
  const depositList = [];

  loanApplicantListData.forEach((data) => {
    if (!data.deposit) return;
    data.deposit.forEach((deposit) => depositList.push(deposit));
  });

  sortTakenLoan(depositList, id);
};

const getLoanApplicant = () => {
  indexDB.interact(
    {
      storeName: 'loan-applicant-list',
      getMethod: 'getAll',
      returnData: getDeposit,
      undefineState: errorWhileGettingData,
    },
    'getData',
  );
};

const depositManagementGetDataInDBBus = new EventTarget();
depositManagementGetDataInDBBus.addEventListener('get-data-in-indexedDB', getLoanApplicant);

export { depositManagement, depositManagementGetDataInDBBus };

//             data.forEach(deposit => {
//                 const statusClass = status-${deposit.status};
//                 const statusText = deposit.status.charAt(0).toUpperCase() + deposit.status.slice(1);

//                 const row = document.createElement('tr');
//                 row.innerHTML = `
//                     <td class="serial-cell">${deposit.id}</td>
//                     <td class="amount-cell">$${deposit.amount.toLocaleString()}</td>
//                     <td><span class="status-badge ${statusClass}">${statusText}</span></td>
//                     <td class="date-cell">${deposit.date}</td>
//                     <td class="time-cell">${deposit.time}</td>
//                     <td>
//                         <button class="btn-small btn-view" onclick="viewProof('${deposit.id}')">
//                             👁 View
//                         </button>
//                     </td>
//                     <td>
//                         <button class="btn-small btn-info" onclick="viewDetails('${deposit.id}')">
//                             ℹ Info
//                         </button>
//                     </td>
//                     <td>
//                         <div class="action-buttons">
//                             <button class="btn-small btn-approve" onclick="quickApprove('${deposit.id}')">✓ Approve</button>
//                             <button class="btn-small btn-decline" onclick="quickDecline('${deposit.id}')">✗ Decline</button>
//                         </div>
//                     </td>
//                 `;
//                 tbody.appendChild(row);
//             });
//         }
// `
