const companyBusinessName = document.createElement('div');
const monthlyIncome = document.createElement('div');
const currentJobYear = document.createElement('div');

companyBusinessName.innerHTML = `
<label for="company-or-business-name">
  Business Name
  <span class="required-asterisk">*</span>
</label>
<input
  type="text"
  id="company-or-business-name"
  placeholder="Company or Business Name"
  pattern="^[a-zA-Z0-9]{1,}$"
  required
/>
<output id="company-or-business-name-message" class="show-message"></output>
`;

monthlyIncome.innerHTML = `
<label for="monthly-income">
  Monthly Income
  <span class="required-asterisk">*</span>
</label>
<input
  type="text"
  id="monthly-income"
  placeholder="e.g 20000"
  pattern="^[0-9]{5,}$"
  required
/>
<output id="monthly-income-message" class="show-message"></output>
`;
currentJobYear.innerHTML = `
<label for="current-job-year">
  Year at Current Job
  <span class="required-asterisk">*</span>
</label>
<input
  type="text"
  id="current-job-year"
  placeholder="e.g 2"
  pattern="^[0-9]{5,}$"
  required
/>
<output id="current-job-year-message" class="show-message"></output>
`;

export { companyBusinessName, monthlyIncome, currentJobYear };
