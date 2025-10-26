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
                <input type="search" placeholder="Search Applicant by Name" />
                <select name="search-status" class="search-status" id="">
                  <option value=" ">All Status</option>
                  <option value="decline">Decline</option>
                  <option value="approve">Approve</option>
                  <option value="pending">Pending</option>
                </select>
              </div>
            </div>

            <div class="loan-list-section">
              <table>
                <caption>
                  <h4 class="loan-list-heading">
                    Applicant(s)
                    (<span class="number-of-applicant"></span>)
                  </h4>
                  <p class="sub-heading">A comprehensive list of all loan applicant</p>
                </caption>

                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>First Name</th>
                    <th>Last Name</th>
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

// QuerySelector
const searchBar = loanApplicantManagement.querySelector('input[type=search]');
const searchStatus = loanApplicantManagement.querySelector('.search-status');
const tbody = loanApplicantManagement.querySelector('tbody');
const numberOfApplicant = loanApplicantManagement.querySelector('.number-of-applicant');

function getTrs() {
  const trs = tbody.querySelectorAll('tr');
  return trs;
}

function setNumberOfApplicantValue(value) {
  numberOfApplicant.textContent = value;
}

// Inserting loan applicant data to table

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
  tbody.append(tr);
};

const setAttributeToTr = ({ tr, id }) => {
  tr.setAttribute('data-id', id);
};

function insertTakeLoanDataToTable(loanApplicantList) {
  tbody.innerHTML = '';

  loanApplicantList.forEach((data, index) => {
    const tr = createTableTr();
    const serialNumber = getSerialNumber(index);
    const date = getDate(data.dateAndTime);
    const time = getTime(data.dateAndTime);

    tr.innerHTML = `
       <td>${serialNumber}</td>
       <td class="firstName">${data.firstName}</td>
       <td class="lastName">${data.lastName}</td>
       <td class="status"}">${data.status}</td>
       <td>${date}</td>
       <td>${time}</td>
       <td data-db-first-key="loanApplicantForm"><img src="${eyeViewImg}" class="eye-view" alt="eye view"/>View Profile</td>
       
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

    data.loanApplicantFormData.firstName = data.signUpData.firstName;
    data.loanApplicantFormData.lastName = data.signUpData.lastName;
    data.loanApplicantFormData.id = data.id;
    loanApplicantList.push(data.loanApplicantFormData);
  });

  setNumberOfApplicantValue(loanApplicantList.length);
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

// Filtering loan applicant table
function getFullName(tr) {
  const firstName = tr.querySelector('.firstName');
  const lastName = tr.querySelector('.lastName');

  const fullName = `${firstName.textContent} ${lastName.textContent}`;

  return fullName.toLowerCase();
}

function filterLoanApplicantByName(e) {
  const trs = getTrs();
  const searchBarValue = e.target.value.toLowerCase();

  trs.forEach((tr) => {
    const fullName = getFullName(tr);
    fullName.includes(searchBarValue) ? tr.classList.remove('hide') : tr.classList.add('hide');
  });
}

function getStatus(tr) {
  const status = tr.querySelector('.status');
  return `${status.textContent.toLowerCase()} `;
}

function filterLoanApplicantByStatus(e) {
  const trs = getTrs();
  const searchStatusValue = e.target.value.toLowerCase();

  trs.forEach((tr) => {
    const status = getStatus(tr);
    status.includes(searchStatusValue) ? tr.classList.remove('hide') : tr.classList.add('hide');
  });
}

// Eventlistener
searchStatus.addEventListener('change', filterLoanApplicantByStatus);
searchBar.addEventListener('input', filterLoanApplicantByName);
tbody.addEventListener('click', handleActionStorage);

const loanApplicantManagementGetDataInDBBus = new EventTarget();
loanApplicantManagementGetDataInDBBus.addEventListener(
  'render-content',
  getLoanApplicantManagementData,
);

export { loanApplicantManagement, loanApplicantManagementGetDataInDBBus };
