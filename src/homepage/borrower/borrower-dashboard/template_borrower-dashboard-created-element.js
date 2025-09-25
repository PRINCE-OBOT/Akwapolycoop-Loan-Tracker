const businessNameContainer = document.createElement('div');
const monthlyIncomeContainer = document.createElement('div');
const currentJobDurationContainer = document.createElement('div');

businessNameContainer.innerHTML = `
<label for="company-or-business-name">
  Business Name
  <span class="required-asterisk">*</span>
</label>
<input
  type="text"
  id="business-name"
  placeholder="Company or Business Name"
  pattern="^[a-zA-Z0-9_ ' -]{5,}$"
  data-validate-field="validateBusinessName"
  required
/>
<output id="business-name-message" class="show-message"></output>
`;

monthlyIncomeContainer.innerHTML = `
<label for="monthly-income">
  Monthly Income
  <span class="required-asterisk">*</span>
</label>
<input
  type="number"
  id="monthly-income"
  placeholder="e.g 20000"
  min="20000"
  data-validate-field="validateMonthlyIncome"
  required
/>
<output id="monthly-income-message" class="show-message"></output>
`;
currentJobDurationContainer.innerHTML = `
<label for="current-job-duration">
  Duration at Current Job
  <span class="required-asterisk">*</span>
</label>
<input
  type="text"
  id="current-job-duration"
  placeholder="e.g 1 year 2 months"
  pattern="^([1-9]+ (months?|years?|days?))( [1-9]+ (months?|years?|days?))*$"
  data-validate-field="validateCurrentJobDuration"
  required
/>
<output id="current-job-duration-message" class="show-message"></output>
`;

export { businessNameContainer, monthlyIncomeContainer, currentJobDurationContainer };
