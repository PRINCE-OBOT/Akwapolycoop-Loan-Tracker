import handleFieldValidationLogic from '../../module/form-validation/field-validator';
import SelectSwitchDisplay from '../../module/switchDisplay/select-switch-display';

import {
  businessNameContainer,
  monthlyIncomeContainer,
  currentJobDurationContainer,
} from './employment-and-income-content';

const loanApplicantForm = (function () {
  const form = document.createElement('form');
  form.classList.add('loan-application-form');
  form.novalidate;

  form.innerHTML = `
    <h3 class="heading">Loan Applicant Form</h3>
    
              <fieldset class="field-section personal-information">
                <legend>Personal Information</legend>
    
                <div class="gender">
                  <label for="gender">
                    Select Gender
                    <span class="required-asterisk">*</span>
                  </label>
                  <select
                    name="gender"
                    id="gender"
                    data-set-field-validation-value="setSelectElementValidationValue"
                  >
                    <option value="null">-- Select gender --</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  <output id="gender-message" class="show-message"></output>
                </div>
    
                <div class="phone-number">
                  <label for="phone-number">
                    Phone Number
                    <span class="required-asterisk">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone-number"
                    placeholder="08153555726"
                    pattern="^0?[0-9]{10}$"
                    data-set-field-validation-value="setPhoneNumberValidationValue"
                    required
                  />
                  <output id="phone-number-message" class="show-message"></output>
                </div>
    
                <div class="date-of-birth">
                  <label for="date-of-birth">
                    Date of Birth
                    <span class="required-asterisk">*</span>
                  </label>
                  <input
                    type="date"
                    id="date-of-birth"
                    pattern="^[0-9]{4}-[0-9]{2}-[0-9]{2}$"
                    data-set-field-validation-value="setDateOfBirthValidationValue"
                  />
                  <output id="date-of-birth-message" class="show-message"></output>
                </div>
    
                <div class="resident-address">
                  <label for="resident-address">
                    Resident Address
                    <span class="required-asterisk">*</span>
                  </label>
                  <textarea
                    name=""
                    placeholder="e.g Plot 45 Circular Road, Opp. Clan Avenue, Ikot Ekpene, Akwa Ibom State"
                    id="resident-address"
                    pattern="(?=.* )(?=.*[a-zA-Z])(?=.*[0-9]).{20,}"
                    data-set-field-validation-value="setAddressValidationValue"
                    rows="3"
                  ></textarea>
                  <output id="resident-address-message" class="show-message"></output>
                </div>
              </fieldset>
    
              
    
              <fieldset class="field-section employment-and-income">
                <legend>Employment & Income</legend>
    
                <div class="employment-status">
                  <label for="employment-status">
                    Employment Status
                    <span class="required-asterisk">*</span>
                  </label>
                  <select
                    id="employment-status"
                    data-set-field-validation-value="setSelectElementValidationValue"
                  >
                    // data-switch showElement and hideElement are function name in switchDisplay to switch the display mode of business-name

                    <option value="null" data-switch="hideElement">
                      -- Select Employment Status --
                    </option>
                    <option value="employed (full-time)" data-switch="showElement">
                      Employed (Full-Time)
                    </option>
                    <option value="employed (part-time)" data-switch="showElement">
                      Employed (Part-Time)
                    </option>
                    <option value="self-employed" data-switch="showElement">Self-Employed</option>
                    <option value="unemployed" data-switch="hideElement">Unemployed</option>
                    <option value="student" data-switch="hideElement">Student</option>
                    <option value="retired" data-switch="hideElement">Retired</option>
                  </select>
                  <output id="employment-status-message" class="show-message"></output>
                </div>
              </fieldset>



              <fieldset class="field-section">
                <legend>Identity</legend>
    
                <div class="nin">
                  <label for="nin">
                    NIN
                    <span class="required-asterisk">*</span>
                  </label>
                  <input
                    type="tel"
                    id="nin"
                    placeholder="43474898980"
                    pattern="^[0-9]{11}$"
                    data-set-field-validation-value="setNINValidationValue"
                    required
                  />
                  <output id="nin-message" class="show-message"></output>
                </div>
    
                <div class="passport">
                  <label for="passport">
                    Passport
                    <span class="required-asterisk">*</span>
                  </label>
                  <input
                    type="file"
                    id="passport"
                    accept=".png,.jpg,.jpeg"
                    data-set-field-validation-value="setPassportValidationValue"
                    required
                  />
                  <output id="passport-message" class="show-message"></output>
                </div>
              </fieldset>
              
              <fieldset class="field-section">
                <legend>Account Details</legend>
    
                <div class="account-number">
                  <label for="account-number">
                    Account Number
                    <span class="required-asterisk">*</span>
                  </label>
                  <input
                    type="number"
                    id="account-number"
                    placeholder="8059054434"
                    pattern="^[0-9]{10}$"
                    data-set-field-validation-value="setAccountNumberValidationValue"
                    required
                  />
                  <output id="account-number-message" class="show-message"></output>
                </div>
                
                <div class="account-name">
                  <label for="account-name">
                    Account name
                    <span class="required-asterisk">*</span>
                  </label>
                  <input
                    type="text"
                    id="account-name"
                    placeholder="James Town"
                    pattern="[A-Za-z]+ ([A-Za-z]+ ?)+"
                    data-set-field-validation-value="setAccountNameValidationValue"
                    required
                  />
                  <output id="account-name-message" class="show-message"></output>
                </div>
                
                <div class="bank-name">
                  <label for="bank-name">
                    Bank name
                    <span class="required-asterisk">*</span>
                  </label>
                  <input
                    type="text"
                    id="bank-name"
                    placeholder="Opay"
                    min="1"
                    data-set-field-validation-value="setBankNameValidationValue"
                    required
                  />
                  <output id="bank-name-message" class="show-message"></output>
                </div>
    
                
              </fieldset>
       
              <fieldset class="field-section">
                <legend>Guarantor Information</legend>
    
                <div class="guarantor-first-name">
                  <label for="guarantor-first-name">
                    First Name
                    <span class="required-asterisk">*</span>
                  </label>
                  <input
                    type="text"
                    id="guarantor-first-name"
                    placeholder="Okeoghene"
                    pattern="^[a-zA-Z]{1,}$"
                    data-set-field-validation-value="setNameValidationValue"
                    required
                  />
                  <output id="guarantor-first-name-message" class="show-message"></output>
                </div>
    
                <div class="guarantor-last-name">
                  <label for="guarantor-last-name">
                    Last Name
                    <span class="required-asterisk">*</span>
                  </label>
                  <input
                    type="text"
                    id="guarantor-last-name"
                    placeholder="Wonderful"
                    pattern="^[a-zA-Z]{1,}$"
                    data-set-field-validation-value="setNameValidationValue"
                    required
                  />
                  <output id="guarantor-last-name-message" class="show-message"></output>
                </div>
    
                <div class="guarantor-email">
                  <label for="guarantor-email">
                    Email
                    <span class="required-asterisk">*</span>
                  </label>
                  <input
                    type="email"
                    id="guarantor-email"
                    placeholder="okeowonderfult38@gmaill.com"
                    pattern="^[a-zA-Z0-9.]{4,}@(gmail|yahoo|hotmail).com$"
                    data-set-field-validation-value="setEmailValidationValue"
                    required
                  />
                  <output id="guarantor-email-message" class="show-message"></output>
                </div>
    
                <div class="guarantor-gender">
                  <label for="guarantor-gender">
                    Select Gender
                    <span class="required-asterisk">*</span>
                  </label>
                  <select
                    name="guarantor-gender"
                    id="guarantor-gender"
                    data-set-field-validation-value="setSelectElementValidationValue"
                  >
                    <option value="null">-- Select gender --</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  <output id="guarantor-gender-message" class="show-message"></output>
                </div>
    
                <div class="guarantor-phone-number">
                  <label for="guarantor-phone-number">
                    Phone Number
                    <span class="required-asterisk">*</span>
                  </label>
                  <input
                    type="tel"
                    id="guarantor-phone-number"
                    placeholder="08153555726"
                    pattern="^[0-9]{10,11}$"
                    data-set-field-validation-value="setPhoneNumberValidationValue"
                    required
                  />
                  <output id="guarantor-phone-number-message" class="show-message"></output>
                </div>
    
                <div class="guarantor-date-of-birth">
                  <label for="guarantor-date-of-birth">
                    Date of Birth
                    <span class="required-asterisk">*</span>
                  </label>
                  <input
                    type="date"
                    id="guarantor-date-of-birth"
                    pattern="^[0-9]{4}-[0-9]{2}-[0-9]{2}$"
                    data-set-field-validation-value="setDateOfBirthValidationValue"
                    required
                  />
                  <output id="guarantor-date-of-birth-message" class="show-message"></output>
                </div>
    
                <div class="guarantor-resident-address">
                  <label for="guarantor-resident-address">
                    Resident Address
                    <span class="required-asterisk">*</span>
                  </label>
                  <textarea
                    name=""
                    placeholder="e.g Plot 45 Circular Road, Opp. Clan Avenue, Ikot Ekpene, Akwa Ibom State"
                    id="guarantor-resident-address"
                    pattern="(?=.* )(?=.*[a-zA-Z])(?=.*[0-9]).{20,}"
                    rows="3"
                    data-set-field-validation-value="setAddressValidationValue"
                    required
                  ></textarea>
                  <output id="guarantor-resident-address-message" class="show-message"></output>
                </div>
              </fieldset>
    
              <div>
                <button class="btn-submit-application" type="button">Submit Application</button>
              </div>
    `;

  return form;
})();

const employmentStatus = loanApplicantForm.querySelector('#employment-status');
const employmentAndIncome = loanApplicantForm.querySelector('.employment-and-income');

loanApplicantForm.addEventListener('input', handleFieldValidationLogic);

new SelectSwitchDisplay({
  select: employmentStatus,
  inputs: [businessNameContainer, monthlyIncomeContainer, currentJobDurationContainer],
  container: employmentAndIncome,
});

export default loanApplicantForm;
