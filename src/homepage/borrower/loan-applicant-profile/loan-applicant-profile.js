import './loan-applicant-profile.css';
import pipe from '../../module/composition/pipe';
import eventBus from '../../module/event-bus/event';
import indexDB from '../../module/indexDB/indexDB';
// import { dialogEvent } from '../../module/dialog/dialog-manager';
// import { dialogEvent } from '../../module/dialog/dialog-manager';

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
                <h1>Loan Application Profile</h1>
                <!-- <p class="header-id">Application ID: LA-2025-<span id="appId"></span></p> -->
            </div>
            <div class="date-box">
                <p class="date-box-label">Application Date</p>
                <p class="date-box-value" id="application-date"></p>
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
                <h2>Applicant Information</h2>
            </div>
    
            <div class="grid">
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
                    <div class="field-value">Ikeja</div>
                </div>
                <div class="field full-width resident-address">
                    <label>Residential Address</label>
                    <div class="field-value">45 Allen Avenue, Ikeja, Lagos State</div>
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
                <div class="field full-width">
                    <label>Account Name</label>
                    <div class="field-value account-name">Chukwudi Okonkwo</div>
                </div>
            </div>
        </div>
    
        <!-- Guarantor Information -->
        <div class="section">
            <div class="section-header">
                <div class="icon-box purple">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                    </svg>
                </div>
                <h2>Guarantor Information</h2>
            </div>
    
            <div class="grid">
                <div class="field">
                    <label>First Name</label>
                    <div class="field-value guarantor-first-name">Adebayo</div>
                </div>
                <div class="field">
                    <label>Last Name</label>
                    <div class="field-value guarantor-last-name">Williams</div>
                </div>
                <div class="field">
                    <label>Phone Number</label>
                    <div class="field-value guarantor-phone-number">+234 805 123 4567</div>
                </div>
                <div class="field">
                    <label>Date of Birth</label>
                    <div class="field-value">
                        <svg class="field-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                        7/22/1978
                    </div>
                </div>
                <div class="field full-width">
                    <label>Residential Address</label>
                    <div class="field-value guarantor-resident-address">12 Victoria Island Road, Victoria Island, Lagos State</div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Footer -->
    <div class="footer">
        <div>
            <h4>Status</h4><span class="status">Under Review</span>
        </div>
        <p class="footer-date">Generated on <span id="genDate"></span></p>
    </div>
    `;
  return div;
};

const buildLoanApplicantProfile = pipe(createDiv, addClassToDiv, addTextContentToDiv);

const loanApplicantProfile = buildLoanApplicantProfile(document);

const getActionDataFromLocalStorage = () => {
  const data = localStorage.getData({ key: 'action' });
  return data;
};

const dispatchEventProfileEvent = () => {
  //   eventBus.dispatchEvent(dialogEvent.profile);
};

const applicationDate = loanApplicantProfile.querySelector('#application-date');
const passport = loanApplicantProfile.querySelector('.passport');
const firstName = loanApplicantProfile.querySelector('.first-name');
const lastName = loanApplicantProfile.querySelector('.last-name');
const email = loanApplicantProfile.querySelector('.email');
const phoneNumber = loanApplicantProfile.querySelector('.phone-number');
const dateOfBirth = loanApplicantProfile.querySelector('.date-of-birth');
const residentAddress = loanApplicantProfile.querySelector('.resident-address');
const bankName = loanApplicantProfile.querySelector('.bank-name');
const accountNumber = loanApplicantProfile.querySelector('.account-number');
const accountName = loanApplicantProfile.querySelector('.account-name');
const status = loanApplicantProfile.querySelector('.status');
// const state = loanApplicantProfile.querySelector('.state')

const guarantorFirstName = loanApplicantProfile.querySelector('.guarantor-first-name');
const guarantorLastName = loanApplicantProfile.querySelector('.guarantor-last-name');
const guarantorPhoneNumber = loanApplicantProfile.querySelector('.guarantor-phone-number');
const guarantorResidentAddress = loanApplicantProfile.querySelector('.guarantor-resident-address');

const errorGettingData = () => {
  console.log('Error getting data');
};

function insertLoanApplicantDataToProfile(data) {
  const loanApplicantFormData = data.loanApplicantFormData;
  const signUpData = data.signUpData;

  applicationDate.textContent = loanApplicantFormData.date;
  passport.src = loanApplicantFormData.passport;

  firstName.textContent = signUpData.firstName;
  lastName.textContent = signUpData.lastName;
  email.textContent = signUpData.email;
  phoneNumber.textContent = loanApplicantFormData['phone-number'];
  dateOfBirth.textContent = loanApplicantFormData['date-of-birth'];
  residentAddress.textContent = loanApplicantFormData['resident-address'];
  accountNumber.textContent = loanApplicantFormData['account-number'];
  accountName.textContent = loanApplicantFormData['account-name'];
  bankName.textContent = loanApplicantFormData['bank-name'];
  status.textContent = loanApplicantFormData.status;
  // add state and local government area later
  //   state.textContent = loanApplicantFormData.state

  guarantorFirstName.textContent = loanApplicantFormData['guarantor-first-name'];
  guarantorLastName.textContent = loanApplicantFormData['guarantor-last-name'];
  guarantorPhoneNumber.textContent = loanApplicantFormData['guarantor-phone-number'];
  guarantorResidentAddress.textContent = loanApplicantFormData['guarantor-resident-address'];

  dispatchEventProfileEvent();
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

export default loanApplicantProfile;
