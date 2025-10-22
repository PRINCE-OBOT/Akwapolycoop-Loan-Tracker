import { compareAsc, format } from 'date-fns';
import indexDB from '../../module/indexDB/indexDB';
import eyeViewImg from '../../assets/images/eye-view.svg';
import eventBus from '../../module/event-bus/event';
import bindModifyIndexdbEvent from './loan-management-modify';

bindModifyIndexdbEvent();

const loanApplicantManagement = (function createLoanApplicantManagementContent() {
  const div = document.createElement('div');

  div.innerHTML = `
            <h5 class="brief-text">Oversee and manage all loan applications within the system.</h5>

            <div class="filter-section">
              <h3>Filter Loans</h3>
              <p>Find specific loans by it status</p>

              <div class="search-section">
                <input type="search" placeholder="Search Applicant" />
                <select name="borrower-search-status" id="">
                  <option value="all-status">All Status</option>
                  <option value="decline">Decline</option>
                  <option value="approved">Approved</option>
                  <option value="pending">Pending</option>
                </select>
              </div>
            </div>

            <div class="loan-list-section">
              <table>
                <caption>
                  <h4 class="loan-list-heading">
                    All Loans
                    <span class="number-in-list">18</span>
                  </h4>
                  <p class="sub-heading">A comprehensive list of all loan applicant</p>
                </caption>

                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>View</th>
                  </tr>
                </thead>

                <tbody></tbody>
              </table>
            </div>
          `;

  div.classList.add('loan-applicant-management-content');

  return div;
})();

function errorWhileGettingData() {
  console.log('Error while getting data');
}

const getDate = (dateAndTime) => {
  const date = format(dateAndTime, 'yyyy-MM-dd');
  return date;
};

const getTime = (dateAndTime) => {
  const time = format(dateAndTime, 'HH:mm:ss');
  return time;
};

const getSerialNumber = (index) => {
  const serialNumber = index + 1;
  return serialNumber;
};

const createTableTr = () => {
  const tr = document.createElement('tr');
  return tr;
};

const getTbody = () => {
  const tbody = loanApplicantManagement.querySelector('tbody');
  return tbody;
};

(function addEventToTbody() {
  const tbody = getTbody();
  tbody.addEventListener('click', handleActionStorage);
})();

const getIDFromTr = (tr) => {
  const id = tr.getAttribute('data-id');
  return id;
};

const getAttributeFromTr = (e) => {
  const tr = e.target.closest('tr');
  const id = getIDFromTr(tr);

  return { id };
};

const storeActionToLocalStorage = (obj) => {
  localStorage.setData(obj);
};

const getViewProfileActionData = (e) => {
  const { id } = getAttributeFromTr(e);

  const obj = {
    key: 'action',
    data: {
      id: +id,
      action: 'viewProfile',
    },
  };

  storeActionToLocalStorage(obj);
};

const DBKeyHandler = {
  loanApplicantForm: getViewProfileActionData,
};

const viewProfileEvent = new CustomEvent('profile');

const dispatchGetLoanApplicantData = () => {
  eventBus.dispatchEvent(viewProfileEvent);
};

function handleActionStorage(e) {
  const key = e.target.dataset.dbFirstKey;

  if (!key) return;

  DBKeyHandler[key](e);

  if (key === 'loanApplicantForm') dispatchGetLoanApplicantData();
}

const appendTrToTbody = (tr) => {
  const tbody = getTbody();
  tbody.append(tr);
};

const setAttributeToTr = ({ tr, id }) => {
  tr.setAttribute('data-id', id);
};

function insertTakeLoanDataToTable(loanApplicantList) {
  const tbody = getTbody();
  tbody.innerHTML = '';

  loanApplicantList.forEach((data, index) => {
    const tr = createTableTr();
    const serialNumber = getSerialNumber(index);
    const date = getDate(data.dateAndTime);
    const time = getTime(data.dateAndTime);

    tr.innerHTML = `
       <td>${serialNumber}</td>
       <td>${data.status}</td>
       <td>${date}</td>
       <td>${time}</td>
       <td data-db-first-key="loanApplicantForm"><img src="${eyeViewImg}" class="eye-view" alt="eye view"/>View</td>
       
      `;
    setAttributeToTr({ tr, id: data.id });
    appendTrToTbody(tr);
  });
}

const sortLoanApplicant = (loanApplicant) => {
  loanApplicant.sort((prev, next) => compareAsc(next.dateAndTime, prev.dateAndTime));

  insertTakeLoanDataToTable(loanApplicant);
};

const getLoanApplicant = (loanApplicantListData) => {
  const loanApplicantList = [];

  loanApplicantListData.forEach((data) => {
    if (!data.loanApplicantFormData) return;

    data.loanApplicantFormData.id = data.id;
    loanApplicantList.push(data.loanApplicantFormData);
  });

  sortLoanApplicant(loanApplicantList);
};

const getLoanApplicantManagementData = () => {
  indexDB.interact(
    {
      storeName: 'loan-applicant-list',
      getMethod: 'getAll',
      returnData: getLoanApplicant,
      undefineState: errorWhileGettingData,
    },
    'getData',
  );
};

const loanApplicantManagementGetDataInDBBus = new EventTarget();
loanApplicantManagementGetDataInDBBus.addEventListener(
  'get-data-in-indexedDB',
  getLoanApplicantManagementData,
);

export { loanApplicantManagement, loanApplicantManagementGetDataInDBBus };
