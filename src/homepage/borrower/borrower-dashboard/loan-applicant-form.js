import handleFieldValidationLogic from '../../module/form-validation/field-validator';

const loanApplicantForm = (function () {
  const div = document.createElement('div');
  div.classList.add('form-content>');

  div.innerHTML = `
    
              
              <fieldset class="field-section">
                
                
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
                    rows="3"
                    pattern="(?=.* )(?=.*[a-zA-Z])(?=.*[0-9]).{20,}"
                    data-set-field-validation-value="setAddressValidationValue"
                    required
                  ></textarea>

                  <output id="guarantor-resident-address-message" class="show-message"></output>
                </div>
              </fieldset>
    
              <div>
                <button class="btn-submit-application" type="button">Submit Application</button>
              </div>

              ////

      
        <form id="applicationForm" novalidate>
          <!-- Personal Information Section -->
          <div class="section">
            <div class="section-title">
              <span class="section-icon">👤</span>
              Personal Information
            </div>
            <p class="section-description">
              Please provide your accurate personal details as a staff member of Akwa Ibom State
              Polytechnic
            </p>

            <div class="form-row">
              <div class="form-group">
                <label>First Name <span class="required">*</span></label>
                <input type="text" name="firstName" required placeholder="Enter your first name" pattern="^[a-zA-Z]{1,}$"
                data-set-field-validation-value="setNameValidationValue" />
                <output id="first-name-message" class="show-message"></output>
              </div>

              <div class="form-group">
                <label>Last Name <span class="required">*</span></label>
                <input type="text" name="lastName" required placeholder="Enter your last name" pattern="^[a-zA-Z]{1,}$"
                data-set-field-validation-value="setNameValidationValue" />
                <output id="last-name-message" class="show-message"></output>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label>Date of Birth <span class="required">*</span></label>
                <input type="date" name="dateOfBirth" id="date-of-birth"
                pattern="^[0-9]{4}-[0-9]{2}-[0-9]{2}$"
                data-set-field-validation-value="setDateOfBirthValidationValue"
                required />
              </div>
              <output id="date-of-birth-message" class="show-message"></output>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label>Gender <span class="required">*</span></label>
                <select name="gender" id="gender" required data-set-field-validation-value="setSelectElementValidationValue"
                  >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <output id="gender-message" class="show-message"></output>
              </div>

              <div class="form-group">
                <label>Marital Status <span class="required">*</span></label>
                <select name="maritalStatus" required>
                  <option value="">Select Status</option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                  <option value="divorced">Divorced</option>
                  <option value="widowed">Widowed</option>
                </select>
              </div>
            </div>

            <div class="form-group full-width">
              <label>Home Address <span class="required">*</span></label>
              <textarea
                name="address"
                required
                placeholder="Enter your complete home address"
                id="resident-address"
                pattern="(?=.* )(?=.*[a-zA-Z])(?=.*[0-9]).{20,}"
                data-set-field-validation-value="setAddressValidationValue"
                ></textarea>
              <output id="resident-address-message" class="show-message"></output>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label>Phone Number <span class="required">*</span></label>
                <input type="tel" name="phone" required placeholder="+234 XXX XXX XXXX" id="phone-number"
                    placeholder="08153555726"
                    pattern="^0?[0-9]{10}$"
                    data-set-field-validation-value="setPhoneNumberValidationValue"
                 />
                 <output id="phone-number-message" class="show-message"></output>
              </div>

              <div class="form-group">
                <label>Email Address <span class="required">*</span></label>
                <input type="email" name="email" required placeholder="your.email@example.com"
                 data-set-field-validation-value="setEmailValidationValue"
                pattern="^[a-zA-Z0-9.]{4,}@(gmail|yahoo|hotmail).com$"
               />
               <output id="email-message" class="show-message"></output>
              </div>
            </div>
            
            <div class="form-row">
              <div class="form-group">
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
            </div>
          </div>

          <!-- Staff Information Section -->
          <div class="section">

            <div class="section-title">
              <span class="section-icon">💼</span>
              Staff Information
            </div>
            <p class="section-description">
              Provide your employment details at Akwa Ibom State Polytechnic
            </p>

            <div class="form-row">
              <div class="form-group">
                <label>Staff ID Number <span class="required">*</span></label>
                <input type="text" name="staffId" required placeholder="Enter your staff ID" />
              </div>
              <div class="form-group">
                <label>Department <span class="required">*</span></label>
                <input type="text" name="department" required placeholder="Enter your department" />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label>Designation/Position <span class="required">*</span></label>
                <input
                  type="text"
                  name="position"
                  required
                  placeholder="e.g., Lecturer, Admin Officer"
                />
              </div>
              <div class="form-group">
                <label>Date of Employment <span class="required">*</span></label>
                <input type="date" name="employmentDate" required />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label>Employment Type <span class="required">*</span></label>
                <select name="employmentType" required>
                  <option value="">Select Type</option>
                  <option value="permanent">Permanent</option>
                  <option value="contract">Contract</option>
                  <option value="temporary">Temporary</option>
                </select>
              </div>
              <div class="form-group">
                <label>Monthly Salary Range <span class="required">*</span></label>
                <select name="salaryRange" required>
                  <option value="">Select Range</option>
                  <option value="50-100k">₦50,000 - ₦100,000</option>
                  <option value="100-200k">₦100,000 - ₦200,000</option>
                  <option value="200-300k">₦200,000 - ₦300,000</option>
                  <option value="300k+">₦300,000 and above</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Passport Upload Section -->
          <div class="section">
            <div class="section-title">
              <span class="section-icon">📸</span>
              Passport Photograph
            </div>
            <p class="section-description">
              Upload a recent passport-sized photograph (Maximum file size: 2MB, Format: JPG, PNG)
            </p>

            <div class="form-group">
              <div class="file-upload-wrapper">
                <input type="file" id="passport" name="passport" accept="image/*" id="passport"
                  accept=".png,.jpg,.jpeg"
                  data-set-field-validation-value="setPassportValidationValue"
                required />
                <label for="passport" class="file-upload-label">
                  <div class="upload-icon">📷</div>
                  <div class="upload-text">Click to upload your passport photograph</div>
                  <div class="upload-hint">or drag and drop your image here</div>
                </label>
                <output id="passport-message" class="show-message"></output>
              </div>
            </div>
          </div>

          <!-- Application Letter Section -->
          <div class="section">
            <div class="section-title">
              <span class="section-icon">📄</span>
              Application Letter
            </div>
            <p class="section-description">
              Upload your signed application letter (Maximum file size: 5MB, Format: PDF, DOC, DOCX)
            </p>

            <div class="info-box">
              <p>
                <strong>Note:</strong> Your application letter should be formally written and
                addressed to the Chairman, AKWAPOLYCO, stating your intention to join the
                cooperative society.
              </p>
            </div>

            <div class="form-group">
            <div class="file-upload-wrapper">
            <input
            type="file"
            id="applicationLetter"
            name="applicationLetter"
                  accept=".pdf,.doc,.docx"
                  required
                />
                <label for="applicationLetter" class="file-upload-label">
                  <div class="upload-icon">📝</div>
                  <div class="upload-text">Click to upload your application letter</div>
                  <div class="upload-hint">Accepted formats: PDF, DOC, DOCX</div>
                  </label>
                  </div>
                </div>
                </div>


                <div class="section">
                    <div class="section-title">
                      <span class="section-icon">✍️</span>
                      Account Details
                    </div>

                    <div class="form-row">
                      <div class="form-group">
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

                      <div class="form-group">
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
                    </div>

                    <div class="form-row">
                      
                      <div class="form-group">
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

                    </div>
                </div>
                  
          <!-- Guarantors Section -->
          <div class="section">
            <div class="section-title">
              <span class="section-icon">✍️</span>
              Guarantor Information
            </div>
            <p class="section-description">
              Provide details of two guarantors who are staff members of Akwa Ibom State Polytechnic
            </p>

            <div class="info-box">
              <p>
                <strong>Important:</strong> Both guarantors must be verified staff members of Akwa
                Ibom State Polytechnic. They will be contacted to confirm their willingness to stand
                as your guarantor.
              </p>
            </div>

            <!-- First Guarantor -->
            <div class="guarantor-card">
              <div class="guarantor-header">First Guarantor</div>

              <div class="form-row">
                <div class="form-group">
                  <label>Full Name <span class="required">*</span></label>
                  <input
                    type="text"
                    name="guarantor1Name"
                    required
                    pattern="^[a-zA-Z]{1,}$"
                    data-set-field-validation-value="setNameValidationValue" 
                    placeholder="Enter guarantor's full name"
                    />
                  <output id="first-name-message" class="show-message"></output>
                </div>

                <div class="form-group">
                  <label>Staff ID <span class="required">*</span></label>
                  <input
                    type="text"
                    name="guarantor1StaffId"
                    required
                    placeholder="Enter staff ID"
                  />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label>Department <span class="required">*</span></label>
                  <input
                    type="text"
                    name="guarantor1Department"
                    required
                    placeholder="Enter department"
                  />
                </div>
                <div class="form-group">
                  <label>Position <span class="required">*</span></label>
                  <input
                    type="text"
                    name="guarantor1Position"
                    required
                    placeholder="Enter position"
                  />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label>Phone Number <span class="required">*</span></label>
                  <input
                    type="tel"
                    name="guarantor1Phone"
                    required
                    placeholder="+234 XXX XXX XXXX"
                  />
                </div>
                <div class="form-group">
                  <label>Email Address <span class="required">*</span></label>
                  <input
                    type="email"
                    name="guarantor1Email"
                    required
                    placeholder="guarantor@example.com"
                  />
                </div>
              </div>

              <div class="form-group">
                <label>Relationship to Applicant <span class="required">*</span></label>
                <input
                  type="text"
                  name="guarantor1Relationship"
                  required
                  placeholder="e.g., Colleague, Friend"
                />
              </div>
            </div>

            <!-- Second Guarantor -->
            <div class="guarantor-card">
              <div class="guarantor-header">Second Guarantor</div>

              <div class="form-row">
                <div class="form-group">
                  <label>Full Name <span class="required">*</span></label>
                  <input
                    type="text"
                    name="guarantor2Name"
                    required
                    placeholder="Enter guarantor's full name"
                  />
                </div>
                <div class="form-group">
                  <label>Staff ID <span class="required">*</span></label>
                  <input
                    type="text"
                    name="guarantor2StaffId"
                    required
                    placeholder="Enter staff ID"
                  />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label>Department <span class="required">*</span></label>
                  <input
                    type="text"
                    name="guarantor2Department"
                    required
                    placeholder="Enter department"
                  />
                </div>
                <div class="form-group">
                  <label>Position <span class="required">*</span></label>
                  <input
                    type="text"
                    name="guarantor2Position"
                    required
                    placeholder="Enter position"
                  />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label>Phone Number <span class="required">*</span></label>
                  <input
                    type="tel"
                    name="guarantor2Phone"
                    required
                    placeholder="+234 XXX XXX XXXX"
                  />
                </div>
                <div class="form-group">
                  <label>Email Address <span class="required">*</span></label>
                  <input
                    type="email"
                    name="guarantor2Email"
                    required
                    placeholder="guarantor@example.com"
                  />
                </div>
              </div>

              <div class="form-group">
                <label>Relationship to Applicant <span class="required">*</span></label>
                <input
                  type="text"
                  name="guarantor2Relationship"
                  required
                  placeholder="e.g., Colleague, Friend"
                />
              </div>
            </div>
          </div>

          <!-- Declaration Section -->
          <div class="section">
            <div class="section-title">
              <span class="section-icon">📋</span>
              Declaration
            </div>

            <div class="checkbox-group">
              <input type="checkbox" id="declaration" name="declaration" required />
              <label for="declaration">
                I hereby declare that all information provided in this application form is true and
                accurate to the best of my knowledge. I understand that providing false information
                may lead to the rejection of my application or termination of membership.
                <span class="required">*</span>
              </label>
            </div>
            <div class="checkbox-group">
              <input type="checkbox" id="terms" name="terms" required />
              <label for="terms">
                I agree to abide by the rules, regulations, and bylaws of the Akwa Ibom State
                Polytechnic Staff Cooperative Society (AKWAPOLYCO). <span class="required">*</span>
              </label>
            </div>
          </div>

          <!-- Submit Section -->
          <div class="submit-section">
            <button type="submit" class="submit-button btn-submit-application">Submit Application</button>
            <p style="color: #666; margin-top: 1rem; font-size: 0.9rem">
              By submitting this form, you agree to our terms and conditions
            </p>
          </div>
        </form>
    `;

  return div;
})();

loanApplicantForm.addEventListener('input', handleFieldValidationLogic);

export default loanApplicantForm;
