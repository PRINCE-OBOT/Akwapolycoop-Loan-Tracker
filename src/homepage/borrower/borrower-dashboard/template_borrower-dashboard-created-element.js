const businessNameContainer = document.createElement('div');
const monthlyIncomeContainer = document.createElement('div');
const currentJobYearContainer = document.createElement('div');

businessNameContainer.innerHTML = `
<label for="company-or-business-name">
  Business Name
  <span class="required-asterisk">*</span>
</label>
<input
  type="text"
  id="business-name"
  placeholder="Company or Business Name"
  pattern="^[a-zA-Z0-9_ ]{5,}$"
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
  type="text"
  id="monthly-income"
  placeholder="e.g 20000"
  pattern="^[0-9]{5,}$"
  required
/>
<output id="monthly-income-message" class="show-message"></output>
`;
currentJobYearContainer.innerHTML = `
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

export { businessNameContainer, monthlyIncomeContainer, currentJobYearContainer };
