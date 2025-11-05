import handleFieldValidationLogic from '../../module/form-validation/field-validator';

const loanApplicantForm = (function () {
  const div = document.createElement('div');
  div.classList.add('form-content>');

  div.innerHTML = `
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
              <input type="text" id="first-name" required placeholder="Enter your first name" pattern="^[a-zA-Z]{1,}$"
              data-set-field-validation-value="setNameValidationValue" />
              <output class="show-message"></output>
            </div>

            <div class="form-group">
              <label>Last Name <span class="required">*</span></label>
              <input type="text" id="last-name" required placeholder="Enter your last name" pattern="^[a-zA-Z]{1,}$"
              data-set-field-validation-value="setNameValidationValue" />
              <output class="show-message"></output>
            </div>

          </div>

          <div class="form-row">
            
            <div class="form-group">
              <label>Date of Birth <span class="required">*</span></label>
              <input type="date" id="date-of-birth" id="date-of-birth"
              pattern="^[0-9]{4}-[0-9]{2}-[0-9]{2}$"
              data-set-field-validation-value="setDateOfBirthValidationValue"
              required />
              <output class="show-message"></output>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>Gender <span class="required">*</span></label>
              <select id="gender" required data-set-field-validation-value="setSelectElementValidationValue"
                >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <output class="show-message"></output>
            </div>
              
            <div class="form-group">
              <label>Marital Status <span class="required">*</span></label>
              <select id="maritalStatus" data-set-field-validation-value="setSelectElementValidationValue" required>
                <option value="">Select Status</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="divorced">Divorced</option>
                <option value="widowed">Widowed</option>
                </select>
              <output class="show-message"></output>
            </div>
          </div>

          <div class="form-group full-width">
            <label>Home Address <span class="required">*</span></label>
            <textarea
              required
              placeholder="Enter your complete home address"
              id="resident-address"
              pattern="(?=.* )(?=.*[a-zA-Z])(?=.*[0-9]).{20,}"
              data-set-field-validation-value="setAddressValidationValue"
              ></textarea>
            <output class="show-message"></output>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>Phone Number <span class="required">*</span></label>
              <input type="tel" required placeholder="+234 XXX XXX XXXX" id="phone-number"
              placeholder="08153555726"
              pattern="^0?[0-9]{10}$"
              data-set-field-validation-value="setPhoneNumberValidationValue"
              />
              <output class="show-message"></output>
            </div>

            <div class="form-group">
              <label>Email Address <span class="required">*</span></label>
              <input type="email" id="email" required placeholder="your.email@example.com"
              data-set-field-validation-value="setEmailValidationValue"
              pattern="^[a-zA-Z0-9.]{4,}@(gmail|yahoo|hotmail).com$"
             />
             <output class="show-message"></output>
            </div>
          </div>
          
          <div class="form-row">
            <div class="form-group">
             <label for="nin">
               NIN
               <span class="required-asterisk">*</span>
             </label>
             <input
               type="number"
               id="nin"
               placeholder="xxxxxxxxxxx"
               pattern="^[0-9]{11}$"
               data-set-field-validation-value="setNINValidationValue"
               required
             />
             <output class="show-message"></output>
            </div>  
            
            <div class="form-group">
             <label for="state">
               State
               <span class="required-asterisk">*</span>
             </label>
             <input
               type="text"
               id="state"
               placeholder="Akwa Ibom"
               pattern="^.{1,}$"
               data-set-field-validation-value="setEmptyFieldValidationValue"
               required
             />
             <output class="show-message"></output>
            </div>  
            </div>
            
            <div class="form-row">
              <div class="form-group">
              <label for="lga">
                LGA
                <span class="required-asterisk">*</span>
              </label>
              <input
                type="text"
                id="lga"
                placeholder="Ibeno"
                pattern="^.{1,}$"
                data-set-field-validation-value="setEmptyFieldValidationValue"
                required
              />
              <output class="show-message"></output>
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
              <input type="text" id="staffId" pattern="^.{1,}$"
              data-set-field-validation-value="setEmptyFieldValidationValue"  required placeholder="Enter your staff ID"
              />
              <output class="show-message"></output>
            </div>

            <div class="form-group">
              <label>Department <span class="required">*</span></label>
              <input type="text" id="department" pattern="^.{1,}$"
              data-set-field-validation-value="setEmptyFieldValidationValue" required placeholder="Enter your department" />
              <output class="show-message"></output>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>Designation/Position <span class="required">*</span></label>
              <input
                type="text"
                id="position"
                required
                pattern="^.{1,}$"
                data-set-field-validation-value="setEmptyFieldValidationValue"
                placeholder="e.g., Lecturer, Admin Officer"
              />
              <output class="show-message"></output>
              </div>
              
              <div class="form-group">
              <label>Date of Employment <span class="required">*</span></label>
              <input type="date" id="employmentDate" pattern="^.{1,}$"
              data-set-field-validation-value="setEmptyFieldValidationValue"
              required />
              <output class="show-message"></output>
              </div>
            </div>

          <div class="form-row">
            <div class="form-group">
              <label>Employment Type <span class="required">*</span></label>
              <select id="employmentType" data-set-field-validation-value="setSelectElementValidationValue" required>
                <option value="">Select Type</option>
                <option value="permanent">Permanent</option>
                <option value="contract">Contract</option>
                <option value="temporary">Temporary</option>
                </select>
              <output class="show-message"></output>
              </div>
              
              <div class="form-group">
                <label>Monthly Salary Range <span class="required">*</span></label>
                <select id="salaryRange" data-set-field-validation-value="setSelectElementValidationValue" required>
                <option value="">Select Range</option>
                <option value="50-100k">₦50,000 - ₦100,000</option>
                <option value="100-200k">₦100,000 - ₦200,000</option>
                <option value="200-300k">₦200,000 - ₦300,000</option>
                <option value="300k+">₦300,000 and above</option>
              </select>
              <output class="show-message"></output>
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
            Upload a recent passport-sized photograph (Maximum file size: 2MB, Format: JPEG, JPG, PNG)
          </p>

          <div class="form-group">
            <div class="file-upload-wrapper">
              <input type="file" id="passport" accept="image/*" id="passport"
                accept=".png,.jpg,.jpeg"
                data-set-field-validation-value="setEmptyFieldValidationValue"
              required />
              <label for="passport" class="file-upload-label">
                <div class="upload-icon">📷</div>
                <div class="upload-text">Click to upload your passport photograph</div>
                <div class="upload-hint">or drag and drop your image here</div>
              </label>
              <output class="show-message"></output>
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
            Upload your signed application letter (Maximum file size: 5MB, Format: JPEG, JPG, PNG)
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
          accept="image/*"
          data-set-field-validation-value="setEmptyFieldValidationValue"
          required
          />
          
          <label for="applicationLetter" class="file-upload-label">
          <div class="upload-icon">📝</div>
          <div class="upload-text">Click to upload your application letter</div>
          <div class="upload-hint">Accepted formats: JPEG, JPG, PNG</div>
          </label>
          <output class="show-message"></output>
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
            <output class="show-message"></output>
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
              <output class="show-message"></output>
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
             <output class="show-message"></output>
           </div>
            
           <div class="form-group">
             <label for="r-number">
               R Number
               <span class="required-asterisk">*</span>
             </label>
             <input
               type="text"
               id="RNumber"
               placeholder="R2000xxxxx"
               pattern="^.{1,}$"
               data-set-field-validation-value="setEmptyFieldValidationValue"
               required
             />
             <output class="show-message"></output>
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
                  id="guarantor1Name"
                  required
                  pattern="^.{1,}$"
                  data-set-field-validation-value="setEmptyFieldValidationValue" 
                  placeholder="Enter guarantor's full name"
                  />
                <output class="show-message"></output>
              </div>

              <div class="form-group">
                <label>Staff ID <span class="required">*</span></label>
                <input
                  type="text"
                  id="guarantor1StaffId"
                  required
                  placeholder="Enter staff ID"
                  pattern="^.{1,}$"
                  data-set-field-validation-value="setEmptyFieldValidationValue" 
                  />
                <output class="show-message"></output>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label>Department <span class="required">*</span></label>
                <input
                  type="text"
                  id="guarantor1Department"
                  required
                  placeholder="Enter department"
                  pattern="^.{1,}$"
                  data-set-field-validation-value="setEmptyFieldValidationValue" 
                  />
                <output class="show-message"></output>
              </div>

              <div class="form-group">
                <label>Position <span class="required">*</span></label>
                <input
                  type="text"
                  id="guarantor1Position"
                  required
                  placeholder="Enter position"
                  pattern="^.{1,}$"
                  data-set-field-validation-value="setEmptyFieldValidationValue" 
                  />
                <output class="show-message"></output>
              </div>
             </div>
            
             <div class="form-row">
               <div class="form-group">
                 <label>Phone Number <span class="required">*</span></label>
                 <input
                 type="tel"
                 id="guarantor1Phone"
                 required
                 placeholder="+234 XXX XXX XXXX"
                 pattern="^[0-9]{10,11}$"
                 data-set-field-validation-value="setPhoneNumberValidationValue"
               />
             <output class="show-message"></output>
            </div>
            
            <div class="form-group">
              <label>Email Address <span class="required">*</span></label>
              <input
                type="email"
                id="guarantor1Email"
                required
                pattern="^[a-zA-Z0-9.]{4,}@(gmail|yahoo|hotmail).com$"
                data-set-field-validation-value="setEmailValidationValue"
                placeholder="guarantor@example.com"
                />
              <output class="show-message"></output>
            </div>
          </div>

          <div class="form-group">
            <label>Relationship to Applicant <span class="required">*</span></label>
            <input
              type="text"
              required
              id="guarantor1Relationship"
              placeholder="e.g., Colleague, Friend"
              pattern="^.{1,}$"
              data-set-field-validation-value="setEmptyFieldValidationValue" 
            />
            <output class="show-message"></output>
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
              id="guarantor2Name"
              required
              placeholder="Enter guarantor's full name"
              pattern="^.{1,}$"
              data-set-field-validation-value="setEmptyFieldValidationValue" 
              />
              <output class="show-message"></output>
              </div>
              
            <div class="form-group">
            <label>Staff ID <span class="required">*</span></label>
            <input
              type="text"
              id="guarantor2StaffId"
              required
              placeholder="Enter staff ID"
               pattern="^.{1,}$"
              data-set-field-validation-value="setEmptyFieldValidationValue" 
              />
            <output class="show-message"></output>
            </div>
                
            </div>
            <div class="form-row">
            
              <div class="form-group">
                <label>Department <span class="required">*</span></label>
                <input
                type="text"
                id="guarantor2Department"
                required
                placeholder="Enter department"
                pattern="^.{1,}$"
                data-set-field-validation-value="setEmptyFieldValidationValue" 
                />
                <output class="show-message"></output>
              </div>

              <div class="form-group">
                <label>Position <span class="required">*</span></label>
                <input
                  type="text"
                  id="guarantor2Position"
                  required
                  pattern="^.{1,}$"
                  data-set-field-validation-value="setEmptyFieldValidationValue" 
                  placeholder="Enter position"
                />
                <output class="show-message"></output>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label>Phone Number <span class="required">*</span></label>
                <input
                  type="tel"
                  id="guarantor2Phone"
                  required
                  placeholder="+234 XXX XXX XXXX"
                  pattern="^0?[0-9]{10}$"
                  data-set-field-validation-value="setPhoneNumberValidationValue"
                />
                <output class="show-message"></output>
              </div>

              <div class="form-group">
                <label>Email Address <span class="required">*</span></label>
                <input
                  type="email"
                  id="guarantor2Email"
                  required
                  placeholder="guarantor@example.com"
                  data-set-field-validation-value="setEmailValidationValue"
                  pattern="^[a-zA-Z0-9.]{4,}@(gmail|yahoo|hotmail).com$"
              />
              <output class="show-message"></output>
              </div>
            </div>

            <div class="form-group">
              <label>Relationship to Applicant <span class="required">*</span></label>
              <input
                type="text"
                required
                placeholder="e.g., Colleague, Friend"
                id="guarantor2Relationship"
                pattern="^.{1,}$"
                data-set-field-validation-value="setEmptyFieldValidationValue" 
              />
              <output class="show-message"></output>
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
            <input type="checkbox" id="declaration" data-set-field-validation-value="setCheckElementValidationValue" required />
            <label for="declaration">
              I hereby declare that all information provided in this application form is true and
              accurate to the best of my knowledge. I understand that providing false information
              may lead to the rejection of my application or termination of membership.
              <span class="required">*</span>
            </label>
            <output class="show-message"></output>
            </div>
            
            <div class="checkbox-group">
              <input type="checkbox" id="terms" data-set-field-validation-value="setCheckElementValidationValue" required />
              <label for="terms">
              I agree to abide by the rules, regulations, and bylaws of the Akwa Ibom State
              Polytechnic Staff Cooperative Society (Akwapolycoop). <span class="required">*</span>
              </label>
              <output class="show-message"></output>
           </div>
        </div>
        
        <!-- Submit Section -->
        <div class="submit-section">
          <button type="button" class="submit-button btn-submit-application">Submit Application</button>
          <p style="color: #666;  font-size: 0.9rem">
            By submitting this form, you agree to our terms and conditions
          </p>
        </div>

      </form>
    `;

  return div;
})();

loanApplicantForm.addEventListener('input', handleFieldValidationLogic);

export default loanApplicantForm;
