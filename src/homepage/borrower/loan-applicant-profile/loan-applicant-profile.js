import './loan-applicant-profile.css';
import { format } from 'date-fns';
import pipe from '../../module/composition/pipe';
import eventBus from '../../module/event-bus/event';
import indexDB from '../../module/indexDB/indexDB';

const createDiv = (document) => {
  const div = document.createElement('div');
  return div;
};

const addClassToDiv = (div) => {
  div.classList.add('profile-container');
  return div;
};

const addTextContentToDiv = (div) => {
  div.innerHTML = `
    <!-- Header -->
    <div class="header">
        <div class="header-content">
            <div>
                <h1>Member Profile</h1>
                <p>MEMBERSHIP ID: <span class="membershipID"></span></p> 
                <p>FIXED MONTHLY DEPOSIT AMOUNT: <span class="fixMonthlyDepositAmount"></span></p> 
            </div>
            <div class="date-box">
                <p class="date-box-label">Application Date/Time</p>
                <p class="date-box-value" id="application-date"></p>
                <p class="date-box-value" id="application-time"></p>
            </div>
        </div>
    </div>

    <div class="profile-picture-box">
        <img class="passport"  alt="Profile Picture"/>
    </div>
    
    <!-- Content -->
    <div class="content">
        <!-- Applicant Information -->
        <div class="section">
            <div class="section-header">
                <div class="icon-box blue">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                    </svg>
                </div>
                <h2>Member Information</h2>
            </div>
    
                <div class="grid">
                <div class="field">
                    <label>Staff ID</label>
                    <div class="field-value staffId"></div>
                </div>
                <div class="field">
                    <label>First Name</label>
                    <div class="field-value first-name">Chukwudi</div>
                </div>
                <div class="field">
                    <label>Last Name</label>
                    <div class="field-value last-name">Okonkwo</div>
                </div>
                <div class="field">
                    <label>Email Address</label>
                    <div class="field-value email">
                        <svg class="field-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                        chukwudi.okonkwo@email.com
                    </div>
                </div>
                <div class="field">
                    <label>Phone Number</label>
                    <div class="field-value phone-number">+234 803 456 7890</div>
                </div>
                <div class="field">
                    <label>Date of Birth</label>
                    <div class="field-value date-of-birth">
                        <svg class="field-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                        3/15/1985
                    </div>
                </div>
            
                <div class="field">
                    <label>State</label>
                    <div class="field-value state">
                        <svg class="field-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                        Lagos
                    </div>
                </div>
                <div class="field">
                    <label>LGA</label>
                    <div class="field-value lga"></div>
                </div>
                <div class="field ">
                    <label>Department</label>
                    <div class="field-value department"></div>
                </div>
                <div class="field ">
                    <label>Employment Date</label>
                    <div class="field-value employmentDate"></div>
                </div>
                <div class="field ">
                    <label>Employment Type</label>
                    <div class="field-value employmentType"></div>
                </div>
                <div class="field ">
                    <label>Salary Range</label>
                    <div class="field-value salaryRange"></div>
                </div>
                 <div class="field full-width">
                    <label>Residential Address</label>
                    <div class="field-value resident-address"></div>
                </div>
            </div>
        </div>
    
        <!-- Bank Details -->
        <div class="section">
            <div class="section-header">
                <div class="icon-box green">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                    </svg>
                </div>
                <h2>Bank Details</h2>
            </div>
    
            <div class="grid">
                <div class="field">
                    <label>Bank Name</label>
                    <div class="field-value bank-name">First Bank of Nigeria</div>
                </div>
                <div class="field">
                    <label>Account Number</label>
                    <div class="field-value account-number">
                        <svg class="field-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
                        </svg>
                        0123456789
                    </div>
                </div>
                <div class="field ">
                    <label>Account Name</label>
                    <div class="field-value account-name">Chukwudi Okonkwo</div>
                </div>
                <div class="field">
                    <label>RNumber</label>
                    <div class="field-value RNumber"></div>
                </div>
            </div>
            <div>
              <details>
               <summary>Application Letter</summary>
               <img class="application-letter" src="" alt="Application Letter" />
              </details>
            </div>
        </div>
    
        <!-- Guarantor Information (first) -->
          <div class="section">
            
            <div class="section-header">
                <div class="icon-box purple">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                    </svg>
                </div>
                <h2>Guarantor (First)</h2>
            </div>
    
            <div class="grid">
              <div class="field">
                  <label>Staff ID</label>
                  <div class="field-value guarantor1StaffId"></div>
              </div>
              
              <div class="field">
                  <label>Full Name</label>
                  <div class="field-value guarantor1Name"></div>
              </div>
              
              <div class="field">
                  <label>Email</label>
                  <div class="field-value guarantor1Email"></div>
              </div>
              
              <div class="field">
                  <label>Phone Number</label>
                  <div class="field-value guarantor1Phone"></div>
              </div>
              
              <div class="field">
                  <label>Department</label>
                  <div class="field-value guarantor1Department"></div>
              </div>
              
              <div class="field">
                  <label>Position</label>
                  <div class="field-value guarantor1Position"></div>
              </div>
              
              <div class="field">
                  <label>Relationship</label>
                  <div class="field-value guarantor1Relationship"></div>
              </div>
    
            </div>
        </div>
          
        <!-- Guarantor Information (second) -->
        <div class="section">
            
            <div class="section-header">
                <div class="icon-box purple">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                    </svg>
                </div>
                <h2>Guarantor (Second)</h2>
            </div>
    
            <div class="grid">
              <div class="field">
                  <label>Staff ID</label>
                  <div class="field-value guarantor2StaffId"></div>
              </div>
              
              <div class="field">
                  <label>Full Name</label>
                  <div class="field-value guarantor2Name"></div>
              </div>
              
              <div class="field">
                  <label>Email</label>
                  <div class="field-value guarantor2Email"></div>
              </div>
              
              <div class="field">
                  <label>Phone Number</label>
                  <div class="field-value guarantor2Phone"></div>
              </div>
              
              <div class="field">
                  <label>Department</label>
                  <div class="field-value guarantor2Department"></div>
              </div>
              
              <div class="field">
                  <label>Position</label>
                  <div class="field-value guarantor2Position"></div>
              </div>
              
              <div class="field">
                  <label>Relationship</label>
                  <div class="field-value guarantor2Relationship"></div>
              </div>
    
            </div>
        </div>
    </div>
    
    <!-- Footer -->
    <div class="footer">
        
        <div>
            <h3 class="status-title">Status:</h3>
            <span class="status"></span>
        </div>
        </div>
        `;
  return div;
};

function addOptionElementToDiv(div) {
  div.innerHTML = `
    <div class="option-key-section">
        <button data-db-first-key="membershipApplicationForm" data-option-key="approveOption" data-status="Approve">Approve</button>
        <button data-db-first-key="membershipApplicationForm" data-option-key="declineOption" data-status="Decline">Decline</button>
    </div>
    `;
  return div;
}

const buildLoanApplicantProfile = pipe(createDiv, addClassToDiv, addTextContentToDiv);
const processOptionKeySection = pipe(createDiv, addOptionElementToDiv);

const loanApplicantProfile = buildLoanApplicantProfile(document);
const optionKeySection = processOptionKeySection(document);

const footer = loanApplicantProfile.querySelector('.footer');

const getAttributeFromTarget = (e) => {
  const target = e.target;

  const status = target.getAttribute('data-status');
  const firstKey = target.getAttribute('data-db-first-key');

  return { status, firstKey };
};

const getActionIDFromLocalStorage = () => {
  const data = localStorage.getData({ key: 'action' });
  return data?.id;
};

function generateMembershipID(id) {
  return `MEM${new Date().getFullYear()}0000${id}`;
}

function isStatusApprove(obj, status, membershipID) {
  if (status === 'Approve') {
    obj.data.firstKey.push('membershipApplicationForm', 'isMemberNew');
    obj.data.secondKey.push('membershipID');
    obj.data.value.push({ membershipID }, { isMemberNew: true });
  }
}

const getModifyActionData = (e) => {
  const id = getActionIDFromLocalStorage();
  const { status } = getAttributeFromTarget(e);
  const membershipID = generateMembershipID(id);

  const obj = {
    key: 'action',
    data: {
      action: 'modifyData',
      id,
      value: [{ status }],
      firstKey: ['membershipApplicationForm'],
      secondKey: ['status'],
    },
  };

  isStatusApprove(obj, status, membershipID);

  return obj;
};

const storeActionToLocalStorage = (obj) => {
  localStorage.setData(obj);
};

function handleActionStorage(e) {
  const key = e.target.dataset.dbFirstKey;

  if (!key) return;

  const processActionStoring = pipe(getModifyActionData, storeActionToLocalStorage);

  processActionStoring(e);
}

const question = (text) =>
  new CustomEvent('dialog-manager', {
    detail: {
      contentKey: 'question',
      closedByValue: 'any',
      text,
    },
  });

const questionEvent = {
  approve: question('approve the Applicant Form?'),
  decline: question('decline the Applicant Form?'),
};

const showApproveOption = () => {
  eventBus.dispatchEvent(questionEvent.approve);
};

const showDeclineOption = () => {
  eventBus.dispatchEvent(questionEvent.decline);
};

const OptionHandler = {
  approveOption: showApproveOption,
  declineOption: showDeclineOption,
};

function handleOptionContent(e) {
  const optionKey = e.target.dataset.optionKey;

  if (!optionKey) return;

  OptionHandler[optionKey]();
}

const getActionDataFromLocalStorage = () => {
  const data = localStorage.getData({ key: 'action' });
  return data;
};

const Event = () =>
  new CustomEvent('dialog-manager', {
    detail: {
      contentKey: 'profile',
      closedByValue: 'any',
      size: 'big',
    },
  });

const events = {
  profile: Event(),
};

const dispatchProfileEvent = () => {
  eventBus.dispatchEvent(events.profile);
};

const applicationDate = loanApplicantProfile.querySelector('#application-date');
const applicationTime = loanApplicantProfile.querySelector('#application-time');
const passport = loanApplicantProfile.querySelector('.passport');
const staffId = loanApplicantProfile.querySelector('.staffId');
const firstName = loanApplicantProfile.querySelector('.first-name');
const lastName = loanApplicantProfile.querySelector('.last-name');
const email = loanApplicantProfile.querySelector('.email');
const phoneNumber = loanApplicantProfile.querySelector('.phone-number');
const dateOfBirth = loanApplicantProfile.querySelector('.date-of-birth');
const residentAddress = loanApplicantProfile.querySelector('.resident-address');
const bankName = loanApplicantProfile.querySelector('.bank-name');
const accountNumber = loanApplicantProfile.querySelector('.account-number');
const accountName = loanApplicantProfile.querySelector('.account-name');
const RNumber = loanApplicantProfile.querySelector('.RNumber');
const applicationLetter = loanApplicantProfile.querySelector('.application-letter');
const department = loanApplicantProfile.querySelector('.department');
const employmentDate = loanApplicantProfile.querySelector('.employmentDate');
const employmentType = loanApplicantProfile.querySelector('.employmentType');
const salaryRange = loanApplicantProfile.querySelector('.salaryRange');
const status = loanApplicantProfile.querySelector('.status');
const state = loanApplicantProfile.querySelector('.state');
const lga = loanApplicantProfile.querySelector('.lga');
const membershipID = loanApplicantProfile.querySelector('.membershipID');
const fixMonthlyDepositAmount = loanApplicantProfile.querySelector('.fixMonthlyDepositAmount');

const guarantor1StaffId = loanApplicantProfile.querySelector('.guarantor1StaffId');
const guarantor1Name = loanApplicantProfile.querySelector('.guarantor1Name');
const guarantor1Email = loanApplicantProfile.querySelector('.guarantor1Email');
const guarantor1Phone = loanApplicantProfile.querySelector('.guarantor1Phone');
const guarantor1Department = loanApplicantProfile.querySelector('.guarantor1Department');
const guarantor1Position = loanApplicantProfile.querySelector('.guarantor1Position');
const guarantor1Relationship = loanApplicantProfile.querySelector('.guarantor1Relationship');

const guarantor2StaffId = loanApplicantProfile.querySelector('.guarantor2StaffId');
const guarantor2Name = loanApplicantProfile.querySelector('.guarantor2Name');
const guarantor2Email = loanApplicantProfile.querySelector('.guarantor2Email');
const guarantor2Phone = loanApplicantProfile.querySelector('.guarantor2Phone');
const guarantor2Position = loanApplicantProfile.querySelector('.guarantor2Position');
const guarantor2Department = loanApplicantProfile.querySelector('.guarantor2Department');
const guarantor2Relationship = loanApplicantProfile.querySelector('.guarantor2Relationship');

const errorGettingData = () => {
  console.log('Error getting data');
};

const getDate = (dateAndTime) => {
  const date = format(dateAndTime, 'yyyy-MM-dd');
  return date;
};

const getTime = (dateAndTime) => {
  const time = format(dateAndTime, 'HH:mm:ss');
  return time;
};

const applicationStatus = {
  Pending: () => footer.append(optionKeySection),
  Approve: (data) => {
    fixMonthlyDepositAmount.textContent = data.preferredDepositAmount;
    membershipID.textContent = data.membershipApplicationForm.membershipID;
  },
  Decline: () => {
    membershipID.textContent = 'Decline';
    fixMonthlyDepositAmount.textContent = 'Decline';
  },
};

function insertLoanApplicantDataToProfile(data) {
  const membershipApplicationForm = data.membershipApplicationForm;

  const date = getDate(membershipApplicationForm.dateAndTime);
  const time = getTime(membershipApplicationForm.dateAndTime);

  applicationDate.textContent = date;
  applicationTime.textContent = time;
  passport.src = membershipApplicationForm.passport;

  staffId.textContent = membershipApplicationForm.staffId;
  firstName.textContent = membershipApplicationForm['first-name'];
  lastName.textContent = membershipApplicationForm['last-name'];
  email.textContent = membershipApplicationForm.email;
  state.textContent = membershipApplicationForm.state;
  lga.textContent = membershipApplicationForm.lga;
  phoneNumber.textContent = membershipApplicationForm['phone-number'];
  dateOfBirth.textContent = membershipApplicationForm['date-of-birth'];
  residentAddress.textContent = membershipApplicationForm['resident-address'];
  accountNumber.textContent = membershipApplicationForm['account-number'];
  accountName.textContent = membershipApplicationForm['account-name'];
  bankName.textContent = membershipApplicationForm['bank-name'];
  RNumber.textContent = membershipApplicationForm.RNumber;
  applicationLetter.src = membershipApplicationForm.applicationLetter;
  department.textContent = membershipApplicationForm.department;
  employmentDate.textContent = membershipApplicationForm.employmentDate;
  employmentType.textContent = membershipApplicationForm.employmentType;
  salaryRange.textContent = membershipApplicationForm.salaryRange;
  status.textContent = membershipApplicationForm.status;

  // First guarantor information
  guarantor1StaffId.textContent = membershipApplicationForm.guarantor1StaffId;
  guarantor1Name.textContent = membershipApplicationForm.guarantor1Name;
  guarantor1Email.textContent = membershipApplicationForm.guarantor1Email;
  guarantor1Phone.textContent = membershipApplicationForm.guarantor1Phone;
  guarantor1Department.textContent = membershipApplicationForm.guarantor1Department;
  guarantor1Position.textContent = membershipApplicationForm.guarantor1Position;
  guarantor1Relationship.textContent = membershipApplicationForm.guarantor1Relationship;

  // Second guarantor information
  guarantor2StaffId.textContent = membershipApplicationForm.guarantor2StaffId;
  guarantor2Name.textContent = membershipApplicationForm.guarantor2Name;
  guarantor2Email.textContent = membershipApplicationForm.guarantor2Email;
  guarantor2Phone.textContent = membershipApplicationForm.guarantor2Phone;
  guarantor2Position.textContent = membershipApplicationForm.guarantor2Position;
  guarantor2Department.textContent = membershipApplicationForm.guarantor2Department;
  guarantor2Relationship.textContent = membershipApplicationForm.guarantor2Relationship;

  profileReset();

  applicationStatus[membershipApplicationForm.status](data);

  dispatchProfileEvent();
}

function profileReset() {
  optionKeySection.remove();
  membershipID.textContent = 'Pending';
  fixMonthlyDepositAmount.textContent = 'Pending';
}

function getLoanApplicantData() {
  const { id } = getActionDataFromLocalStorage();

  indexDB.interact(
    {
      storeName: 'loan-applicant-list',
      getMethod: 'get',
      keyPathValue: +id,
      returnData: insertLoanApplicantDataToProfile,
      undefineState: errorGettingData,
    },
    'getData',
  );
}

eventBus.addEventListener('profile', getLoanApplicantData);

optionKeySection.addEventListener('click', handleActionStorage);

optionKeySection.addEventListener('click', handleOptionContent);

export default loanApplicantProfile;
