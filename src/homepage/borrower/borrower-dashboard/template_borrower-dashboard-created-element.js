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
  pattern="^[a-zA-Z0-9_ ' -]{5,}$"
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
  pattern="^[1-9]{1}[0-9]{3,}$"
  required
/>
<output id="monthly-income-message" class="show-message"></output>
`;
currentJobYearContainer.innerHTML = `
<label for="current-job-duration">
  Year at Current Job
  <span class="required-asterisk">*</span>
</label>
<input
  type="text"
  id="current-job-duration"
  placeholder="e.g 1 year 2 months"
  pattern="^([1-9]+ [a-zA-Z]+)( [1-9]+ [a-zA-Z]+)*$"
  required
/>
<output id="current-job-duration-message" class="show-message"></output>
`;

export { businessNameContainer, monthlyIncomeContainer, currentJobYearContainer };
