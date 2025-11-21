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
                <h5>📊 FINANCIAL CONSULTANCY</h5>
                <details class="consultancy-section basic-info">
                  <summary>BASIC INFO</summary>
                  <p>MEMBER ID: <span class="membershipID"></span></p> 
                  <p>FIXED MONTHLY DEPOSIT AMOUNT: ₦<span class="fixed-deposit-amount"></span></p> 
                  <p>TOTAL DEPOSIT: ₦<span class="total-deposit"></span></p> 
                  <p style="display: none;">TOTAL DISBURSE: ₦<span class="total-disburse"></span></p> 
                  <p style="display: none;">TOTAL DIVIDEND: ₦<span class="dividend-amount"></span> <span class="dividend-msg"></span> <input type="checkbox" class="dividend-marker hide" data-db-first-key="isDividendPaid" /></p> 
                </details>

                <details class="consultancy-section">
                  <summary>DETAIL INFO</summary>
                  <div class="detail-info">
                  </div>
                </details>

            </div>
            </div>
            
                        <div class="date-box">
                            <p class="date-box-label">Application Date/Time</p>
                            <p class="date-box-value" id="application-date"></p>
                            <p class="date-box-value" id="application-time"></p>
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
           
            <div>
              <details>
               <summary>Form Payment Proof</summary>
               <img class="form-payment-proof" src="" alt="Form Payment Proof" />
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

const detailInfoContent = (function createDetailInfoContent() {
  const div = document.createElement('div');
  div.classList.add('consultancy-container');

  div.innerHTML = `
        <div class="calc-section income-section">
            <h3 class="section-title">💰 Income Sources</h3>
            
            <div class="calc-card">
                <div class="calc-label">Loan Interest Income</div>
                <div class="calc-value">₦<span class="totalLoanInterest"></span></div>
                <div class="calc-note">10% interest on all loans disbursed</div>
            </div>

            <div class="calc-card">
                <div class="calc-label">Shop Gross Rent Income</div>
                <div class="calc-value">₦<span class="shopGrossRent"></span></div>
                <div class="calc-note">Monthly rental from cooperative property</div>
            </div>

            <div class="calc-card total-card">
                <div class="calc-label">Total Income</div>
                <div class="calc-value highlight">₦ <span class="totalIncome"></span></div>
            </div>
        </div>

        
        <div class="calc-section expense-section">
            <h3 class="section-title">💸 Expenses</h3>
            
            <div class="calc-card">
                <div class="calc-label">Office Expenses</div>
                <div class="calc-value red">₦<span class="officeExpenses"></span></div>
                <div class="calc-note">Stationery, supplies, loan processing costs</div>
            </div>

            <div class="calc-card">
                <div class="calc-label">Shop Expenses</div>
                <div class="calc-value red">₦<span class="shopExpenses"></span></div>
                <div class="calc-note">Maintenance, repairs, utilities</div>
            </div>

            <div class="calc-card total-card">
                <div class="calc-label">Total Expenses</div>
                <div class="calc-value red">₦<span class="totalExpenses"></span></div>
            </div>
        </div>

        
        <div class="calc-section profit-section">
            <h3 class="section-title">📈 Profit Breakdown</h3>
            
            <div class="calc-card">
                <div class="calc-label">Loan Profit</div>
                <div class="calc-formula">Loan Interest - Office Expenses</div>
                <div class="calc-value">₦<span class="loanProfit"></span></div>
            </div>

            <div class="calc-card">
                <div class="calc-label">Rent Profit</div>
                <div class="calc-formula">Gross Rent - Shop Expenses</div>
                <div class="calc-value">₦<span class="shopProfit"></span></div>
            </div>

            <div class="calc-card highlight-card">
                <div class="calc-label">Net Surplus (Total Profit)</div>
                <div class="calc-value highlight-big">₦<span class="totalProfit"></span></div>
            </div>
        </div>

        
        <div class="calc-section reserve-section">
            <h3 class="section-title">🏦 Reserve Funds (Savings for Future)</h3>
            
            <div class="calc-card">
                <div class="calc-label">Loan Reserve</div>
                <div class="calc-formula">10% of Loan Profit</div>
                <div class="calc-value">₦<span class="loanReserve"></span></div>
            </div>

            <div class="calc-card">
                <div class="calc-label">Rent Reserve</div>
                <div class="calc-formula">10% of Rent Profit</div>
                <div class="calc-value">₦<span class="rentReserve"></span></div>
            </div>

            <div class="calc-card total-card">
                <div class="calc-label">Total Reserve Fund</div>
                <div class="calc-value">₦<span class="totalReserve"></span></div>
            </div>
        </div>

        
        <div class="calc-section distribute-section">
            <h3 class="section-title">🎁 Funds Available for Dividend</h3>
            
            <div class="calc-card">
                <div class="calc-label">Loan Distribution</div>
                <div class="calc-formula">Loan Profit - Loan Reserve</div>
                <div class="calc-value">₦<span class="loanDistributed"></span></div>
            </div>

            <div class="calc-card">
                <div class="calc-label">Rent Distribution</div>
                <div class="calc-formula">Rent Profit - Rent Reserve</div>
                <div class="calc-value">₦<span class="rentDistributed"></span></div>
            </div>

            <div class="calc-card highlight-card">
                <div class="calc-label">Total Distributable Fund</div>
                <div class="calc-value highlight-big">₦<span class="totalDistributed"></span></div>
            </div>
        </div>

        
        <div class="calc-section pool-section">
            <h3 class="section-title">🎯 Dividend Pool Allocation</h3>
            
            <div class="calc-card pool-card">
                <div class="calc-label">Share Dividend Pool (60%)</div>
                <div class="calc-note">For members who save (based on shares owned)</div>
                <div class="calc-value highlight">₦<span class="sharedDividendPool"></span></div>
            </div>

            <div class="calc-card pool-card">
                <div class="calc-label">Loan Incentive Pool (40%)</div>
                <div class="calc-note">For members who borrow (based on loan amount)</div>
                <div class="calc-value highlight">₦<span class="loanIncentivePool"></span></div>
            </div>
        </div>
        
        <div class="calc-section personal-section">
            <h3 class="section-title">🌟 Your Personal Dividend</h3>
            
            <div class="member-stats">
                <div class="stat-item">
                    <div class="stat-label">Your Shares</div>
                    <div class="stat-value memberShares"></div>
                </div>
                <div class="stat-item">
                    <div class="stat-label">Your Loan Amount</div>
                    <div class="stat-value">₦<span class="loanAmount"></span></div>
                </div>
            </div>
            
            <div class="member-stats">
                <div class="stat-item">
                    <div class="stat-label">Total Shares</div>
                    <div class="stat-value totalShares"></div>
                </div>
                <div class="stat-item">
                    <div class="stat-label">Total Loan Amount</div>
                    <div class="stat-value">₦<span class="totalLoanAmount"></span></div>
                </div>
            </div>

            <div class="calc-card dividend-card">
                <div class="calc-label">Your Share Dividend</div>
                <div class="calc-formula">(Your Shares ÷ Total Shares) × Share Pool</div>
                <div class="calc-value green">₦<span class="memberShareDividend"></span></div>
            </div>

            <div class="calc-card dividend-card">
                <div class="calc-label">Your Loan Incentive</div>
                <div class="calc-formula">(Your Loan ÷ Total Loans) × Loan Pool</div>
                <div class="calc-value green">₦<span class="memberLoanIncentive"></span></div>
            </div>

            <div class="calc-card final-card">
                <div class="calc-label">YOUR TOTAL DIVIDEND</div>
                <div class="calc-value final-value">₦<span class="totalLoanDividend"></span></div>
            </div>
        </div>
    `;
  return div;
})();

function addOptionElementToDiv(div) {
  div.innerHTML = `
    <div class="option-key-section">
        <button data-db-first-key="membershipApplicationForm" data-option-key="approveOption" data-status="Approve">Approve</button>
        <button data-db-first-key="membershipApplicationForm" data-option-key="declineOption" data-status="Decline">Decline</button>
    </div>
    `;
  return div;
}

const ACCOUNT_OPENING_AMOUNT = 4000;
const dividendNotCalculatedText = document.createElement('p');
const buildLoanApplicantProfile = pipe(createDiv, addClassToDiv, addTextContentToDiv);
const processOptionKeySection = pipe(createDiv, addOptionElementToDiv);
let memberData;
//  dividendContent

const totalLoanInterest = detailInfoContent.querySelector('.totalLoanInterest');
const shopGrossRent = detailInfoContent.querySelector('.shopGrossRent');
const totalIncome = detailInfoContent.querySelector('.totalIncome');
const officeExpenses = detailInfoContent.querySelector('.officeExpenses');
const shopExpenses = detailInfoContent.querySelector('.shopExpenses');
const totalExpenses = detailInfoContent.querySelector('.totalExpenses');
const loanProfit = detailInfoContent.querySelector('.loanProfit');
const shopProfit = detailInfoContent.querySelector('.shopProfit');
const totalProfit = detailInfoContent.querySelector('.totalProfit');
const loanReserve = detailInfoContent.querySelector('.loanReserve');
const rentReserve = detailInfoContent.querySelector('.rentReserve');
const totalReserve = detailInfoContent.querySelector('.totalReserve');
const loanDistributed = detailInfoContent.querySelector('.loanDistributed');
const rentDistributed = detailInfoContent.querySelector('.rentDistributed');
const totalDistributed = detailInfoContent.querySelector('.totalDistributed');
const sharedDividendPool = detailInfoContent.querySelector('.sharedDividendPool');
const loanIncentivePool = detailInfoContent.querySelector('.loanIncentivePool');
const memberShares = detailInfoContent.querySelector('.memberShares');
const loanAmount = detailInfoContent.querySelector('.loanAmount');
const totalShares = detailInfoContent.querySelector('.totalShares');
const totalLoanAmount = detailInfoContent.querySelector('.totalLoanAmount');
const memberShareDividend = detailInfoContent.querySelector('.memberShareDividend');
const memberLoanIncentive = detailInfoContent.querySelector('.memberLoanIncentive');
const totalLoanDividend = detailInfoContent.querySelector('.totalLoanDividend');

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

function getDeposit() {
  const depositList = [];
  const id = getActionIDFromLocalStorage();

  const deposit = {
    dateAndTime: new Date(),
    status: 'Approve',
    depositAmount: ACCOUNT_OPENING_AMOUNT,
    depositAmountDynamic: ACCOUNT_OPENING_AMOUNT,
    depositID: `DEP${id}-000`,
    adminDeposit: true,
  };

  depositList.push(deposit);

  return depositList;
}

const getModifyActionData = (e) => {
  const id = getActionIDFromLocalStorage();
  const { status } = getAttributeFromTarget(e);
  const membershipID = generateMembershipID(id);
  const deposit = getDeposit();

  const obj = {
    key: 'action',
    data: {
      action: 'modifyData',
      id,
      value: [{ status }, { deposit }],
      firstKey: ['membershipApplicationForm', 'deposit'],
      secondKey: ['status', 'deposit'],
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

const Event = ({ eventName = 'dialog-manager' }) =>
  new CustomEvent(eventName, {
    detail: {
      contentKey: 'profile',
      closedByValue: 'any',
      size: 'big',
    },
  });

const events = {
  profile: Event({}),
  modifyIndexdb: Event({ eventName: 'modify-indexdb' }),
};

const dispatchProfileEvent = () => {
  eventBus.dispatchEvent(events.profile);
};

const detailInfo = loanApplicantProfile.querySelector('.detail-info');
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
const fixedDepositAmount = loanApplicantProfile.querySelector('.fixed-deposit-amount');
const bankName = loanApplicantProfile.querySelector('.bank-name');
const accountNumber = loanApplicantProfile.querySelector('.account-number');
const accountName = loanApplicantProfile.querySelector('.account-name');
const RNumber = loanApplicantProfile.querySelector('.RNumber');
const applicationLetter = loanApplicantProfile.querySelector('.application-letter');
const formPaymentProof = loanApplicantProfile.querySelector('.form-payment-proof');
const department = loanApplicantProfile.querySelector('.department');
const employmentDate = loanApplicantProfile.querySelector('.employmentDate');
const employmentType = loanApplicantProfile.querySelector('.employmentType');
const salaryRange = loanApplicantProfile.querySelector('.salaryRange');
const status = loanApplicantProfile.querySelector('.status');
const state = loanApplicantProfile.querySelector('.state');
const lga = loanApplicantProfile.querySelector('.lga');
const membershipID = loanApplicantProfile.querySelector('.membershipID');
const dividendAmount = loanApplicantProfile.querySelector('.dividend-amount');
const dividendMsg = loanApplicantProfile.querySelector('.dividend-msg');
const dividendMarker = loanApplicantProfile.querySelector('.dividend-marker');
const totalDisburse = loanApplicantProfile.querySelector('.total-disburse');
const totalDeposit = loanApplicantProfile.querySelector('.total-deposit');

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
  Approve: (membershipApplicationForm) => {
    fixedDepositAmount.textContent = membershipApplicationForm.fixedDepositAmount;
    membershipID.textContent = membershipApplicationForm.membershipID;
  },
  Decline: () => {
    membershipID.textContent = 'Decline';
    fixedDepositAmount.textContent = 'Decline';
  },
};

function getActionFromLocalStorage() {
  const data = localStorage.getData({ key: 'action' });
  return data;
}

function accumulateLoanDividendAmount(data) {
  if (data.loan) {
    return data.loan.reduce(
      (acc, currentObj) =>
        currentObj.status === 'Approve' ? acc + currentObj.dividendAmount : acc,
      0,
    );
  }
}

function accumulateWithdrawalDividendAmount(data) {
  if (data.withdrawal) {
    return data.withdrawal.reduce(
      (acc, currentObj) =>
        currentObj.status === 'Approve' ? acc + currentObj.dividendAmount : acc,
      0,
    );
  }
}

function accumulateLoanDividendAmountDynamic(data) {
  if (data.loan) {
    return data.loan.reduce(
      (acc, currentObj) =>
        currentObj.status === 'Approve' ? acc + (currentObj.dividendAmountDynamic || 0) : acc,
      0,
    );
  }
}

function accumulateWithdrawalDividendAmountDynamic(data) {
  if (data.withdrawal) {
    return data.withdrawal.reduce(
      (acc, currentObj) =>
        currentObj.status === 'Approve' ? acc + (currentObj.dividendAmountDynamic || 0) : acc,
      0,
    );
  }
}

function isMassDividendPerform(data) {
  if (data.withdrawal) {
    const approveWithdrawal = data.withdrawal.filter((obj) => obj.status === 'Approve');
    const isMassDividend = approveWithdrawal.every(
      (obj) => obj.dividendAmount !== obj.dividendAmountDynamic,
    );

    return isMassDividend;
  }
}

function getTotalDeposit(data) {
  if (data.deposit) {
    return data.deposit.reduce(
      (acc, currentObj) => (currentObj.status === 'Approve' ? acc + currentObj.depositAmount : acc),
      0,
    );
  }
}

function getTotalDisburse(data) {
  if (data.withdrawal) {
    const approveWithdrawal = data.withdrawal.filter((obj) => obj.status === 'Approve');
    return approveWithdrawal.reduce((acc, currentObj) => acc + currentObj.amountDisburse, 0);
  }
}

function isWithdrawalManagementAction(data) {
  const dataAction = getActionFromLocalStorage();
  let dividendBalance;

  if (data.membershipApplicationForm.status === 'Pending') return;
  // When the action is a truthy value that means the action comes from the admin
  if (dataAction.action) {
    const dividendWithdrawalAmount = accumulateWithdrawalDividendAmount(data) || 0;
    const dividendLoanAmount = accumulateLoanDividendAmount(data) || 0;
    dividendBalance = dividendWithdrawalAmount + dividendLoanAmount;

    const isMassDividend = isMassDividendPerform(data);
    if (isMassDividend) {
      dividendMarker.checked = data.isDividendPaid;
      dividendMarker.classList.remove('hide');
    }
  } else {
    const dividendDynamicWithdrawalAmount = accumulateWithdrawalDividendAmountDynamic(data) || 0;
    const dividendDynamicLoanAmount = accumulateLoanDividendAmountDynamic(data) || 0;
    dividendBalance = dividendDynamicWithdrawalAmount + dividendDynamicLoanAmount;

    const isMassDividend = isMassDividendPerform(data);
    if (isMassDividend) {
      dividendMsg.textContent = '(You will receive your dividend in 3 working days)';
    }
  }

  dividendAmount.textContent = dividendBalance;
  totalDeposit.textContent = getTotalDeposit(data) || 0;
  totalDisburse.textContent = getTotalDisburse(data) || 0;
}

function insertLoanApplicantDataToProfile(data) {
  memberData = data;
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
  formPaymentProof.src = membershipApplicationForm.formPaymentProof;
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

  applicationStatus[membershipApplicationForm.status](membershipApplicationForm);
  isWithdrawalManagementAction(data);
  isDividendCalculated(data);
  dispatchProfileEvent();
}

function dividendNotCalculated() {
  dividendNotCalculatedText.textContent = 'Your dividend has not been calculated. Until December';
  detailInfo.append(dividendNotCalculatedText);
}

function getDataFromLocalStorage(key) {
  return localStorage.getData({ key });
}

function CalculateDividend(data) {
  const PERCENTAGE_LOAN_RESERVE = 10 / 100;
  const PERCENTAGE_SHARED_DIVIDEND_POOL = 60 / 100;
  const PERCENTAGE_LOAN_INCENTIVE_POOL = 40 / 100;
  const SHARE_UNIT = 100;
  let loanInterest = 0;
  let totalMemberDeposit = 0;
  let memberDeposit = 0;
  let memberSharesValue;
  let totalIncomeValue;
  let totalOfficeExpenses;
  let totalShopExpenses;
  let totalLoanProfit;
  let shopGrossRentValue;
  let totalShopProfit;
  let totalProfitValue;
  let loanReserveValue;
  let rentReserveValue;
  let totalReserveValue;
  let loanDistributedValue;
  let rentDistributedValue;
  let totalDistributedValue;
  let totalSharesValue;
  let sharedDividendPoolValue;
  let loanIncentivePoolValue;
  let memberLoanValue;
  let totalLoanAmountValue = 0;
  let memberShareDividendValue;
  let memberLoanIncentiveValue;
  let totalLoanDividendValue;

  (function calculateLoanInterest() {
    for (let i = 0; i < data.length; i++) {
      const member = data[i];

      const deposit = member.deposit;
      const loan = member.loan;
      if (deposit) {
        for (let k = 0; k < deposit.length; k++) {
          const currentDeposit = deposit[k];
          if (currentDeposit.status === 'Approve') {
            totalMemberDeposit += currentDeposit.depositAmount;
          }
        }
      }

      if (loan) {
        for (let j = 0; j < loan.length; j++) {
          const currentLoan = loan[j];
          if (currentLoan.status === 'Approve') {
            totalLoanAmountValue += currentLoan.loanAmount;

            if (!currentLoan.loanInterest) continue;

            loanInterest += currentLoan.loanInterest;
          }
        }
      }
    }

    totalLoanInterest.textContent = loanInterest;
  })();

  (function insertShopGrossRentValue() {
    shopGrossRentValue = getDataFromLocalStorage('storeGrossRentAmount');

    shopGrossRent.textContent = shopGrossRentValue;

    totalIncomeValue = loanInterest + +shopGrossRentValue;

    totalIncome.textContent = totalIncomeValue;

    detailInfo.append(detailInfoContent);
  })();

  (function insertOfficeExpenses() {
    const officeExpensesData = getDataFromLocalStorage('office-expenses');

    totalOfficeExpenses = officeExpensesData.reduce((acc, current) => acc + +current.amount, 0);

    officeExpenses.textContent = totalOfficeExpenses;
  })();

  (function insertOfficeExpenses() {
    const shopExpensesData = getDataFromLocalStorage('shop-expenses');

    totalShopExpenses = shopExpensesData.reduce((acc, current) => acc + +current.amount, 0);

    shopExpenses.textContent = totalShopExpenses;
  })();

  (function calculateTotalExpense() {
    totalExpenses.textContent = totalOfficeExpenses + totalShopExpenses;
  })();

  (function calculateLoanProfit() {
    totalLoanProfit = Math.round((loanInterest - totalOfficeExpenses) * 100) / 100;
    loanProfit.textContent = totalLoanProfit;
  })();

  (function calculateShopProfit() {
    totalShopProfit = Math.round((shopGrossRentValue - totalShopExpenses) * 100) / 100;
    shopProfit.textContent = totalShopProfit;
  })();

  (function calculateTotalProfit() {
    totalProfitValue = totalLoanProfit + totalShopProfit;
    totalProfit.textContent = totalProfitValue;
  })();

  (function calculateLoanReserve() {
    const result = totalLoanProfit * PERCENTAGE_LOAN_RESERVE;
    loanReserveValue = result <= 0 ? 0 : result;
    loanReserve.textContent = loanReserveValue;
  })();

  (function calculateRentReserve() {
    const result = totalShopProfit * PERCENTAGE_LOAN_RESERVE;
    rentReserveValue = result <= 0 ? 0 : result;
    rentReserve.textContent = rentReserveValue;
  })();

  (function calculateTotalReserve() {
    totalReserveValue = loanReserveValue + rentReserveValue;
    totalReserve.textContent = totalReserveValue <= 0 ? 0 : totalReserveValue;
  })();

  (function calculateLoanDistributed() {
    const result = totalLoanProfit - loanReserveValue;
    loanDistributedValue = result <= 0 ? 0 : result;
    loanDistributed.textContent = loanDistributedValue;
  })();

  (function calculateRentDistributed() {
    const result = totalShopProfit - rentReserveValue;
    rentDistributedValue = result <= 0 ? 0 : result;
    rentDistributed.textContent = rentDistributedValue;
  })();

  (function calculateTotalDistributed() {
    totalDistributedValue = loanDistributedValue + rentDistributedValue;
    totalDistributed.textContent = totalDistributedValue;
  })();

  (function calculateSharedDividendPool() {
    sharedDividendPoolValue = PERCENTAGE_SHARED_DIVIDEND_POOL * totalDistributedValue;
    sharedDividendPool.textContent = sharedDividendPoolValue;
  })();

  (function calculateLoanIncentivePool() {
    loanIncentivePoolValue = PERCENTAGE_LOAN_INCENTIVE_POOL * totalDistributedValue;
    loanIncentivePool.textContent = loanIncentivePoolValue;
  })();

  (function calculateMemberShares() {
    memberDeposit = getTotalDeposit(memberData);
    memberSharesValue = memberDeposit / SHARE_UNIT;
    memberShares.textContent = memberSharesValue;
  })();

  (function calculateLoanAmount() {
    const loan = memberData.loan;

    if (loan) {
      memberLoanValue = loan.reduce(
        (acc, current) => (current.status === 'Approve' ? acc + current.loanAmount : acc),
        0,
      );
    }

    loanAmount.textContent = memberLoanValue;
  })();

  (function calculateTotalMemberShares() {
    totalSharesValue = totalMemberDeposit / SHARE_UNIT;
    totalShares.textContent = totalSharesValue;
  })();

  (function setTotalLoanAmount() {
    totalLoanAmount.textContent = totalLoanAmountValue;
  })();

  (function calculateMemberShareDividend() {
    memberShareDividendValue = (memberSharesValue / totalSharesValue) * sharedDividendPoolValue;
    memberShareDividend.textContent = memberShareDividendValue;
  })();

  (function calculateMemberLoanIncentive() {
    memberLoanIncentiveValue = (memberLoanValue / totalLoanAmountValue) * loanIncentivePoolValue;
    memberLoanIncentive.textContent = memberLoanIncentiveValue;
  })();

  (function calculateTotalDividend() {
    totalLoanDividendValue = memberShareDividendValue + memberLoanIncentiveValue;
    totalLoanDividend.textContent = totalLoanDividendValue;
  })();
}

function error() {
  console.log('Error!!!');
}

function dividendCalculated() {
  indexDB.interact(
    {
      storeName: 'loan-applicant-list',
      getMethod: 'getAll',
      returnData: CalculateDividend,
      undefineState: error,
    },
    'getData',
  );
}

function isDividendCalculated() {
  const isCalculateDividend = localStorage.getData({ key: 'isCalculateDividend' });
  if (!isCalculateDividend) {
    dividendNotCalculated();
  } else {
    dividendCalculated();
  }
}

function profileReset() {
  optionKeySection.remove();
  detailInfo.innerHTML = '';
  membershipID.textContent = 'Pending';
  fixedDepositAmount.textContent = 'Pending';
  dividendAmount.textContent = 'Pending';
  dividendMsg.textContent = '';
  dividendMarker.checked = false;
  dividendMarker.classList.add('hide');
  totalDeposit.textContent = 'Pending';
  totalDisburse.textContent = 'Pending';
}

const getDividendActionData = (e) => {
  const id = getActionIDFromLocalStorage(e);

  const obj = {
    key: 'action',
    data: {
      action: 'modifyData',
      id,
      value: [{ isDividendPaid: dividendMarker.checked }],
      firstKey: ['isDividendPaid'],
    },
  };

  return obj;
};

function handleDividendMarkerAction(e) {
  const key = e.target.dataset.dbFirstKey;

  if (!key) return;

  const processActionStoring = pipe(getDividendActionData, storeActionToLocalStorage);

  processActionStoring(e);

  eventBus.dispatchEvent(events.modifyIndexdb);
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

dividendMarker.addEventListener('click', handleDividendMarkerAction);

export default loanApplicantProfile;
