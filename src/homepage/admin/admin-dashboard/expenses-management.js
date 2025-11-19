// import eventBus from '../../module/event-bus/event';
import './expenses-management.css';

const expensesManagement = (function createExpensesManagementContent() {
  const div = document.createElement('div');

  div.innerHTML = `
     <div id="message" class="message"></div>
        
        <div class="rent-input-section">
            <h3>💰 Shop Rent Income</h3>
            <div class="rent-input-group">
                <label for="shopRentAmount">Gross Rent Amount (₦):</label>
                <input type="number" id="shopRentAmount" placeholder="Enter monthly shop rent" step="0.01" min="0">
                <button class="btn btn-save" onclick="saveShopRent()">Save Rent</button>
            </div>
        </div>

        
        <div class="expense-section">
            <h3>Office Expenses</h3>
            <button class="btn btn-add btn-add-new-office-expenses-row" data-expenses-row="office">+ Add New Expense</button>
            
            <table id="officeExpensesTable">
                <thead>
                    <tr>
                        <th style="width: 60px;">S/N</th>
                        <th style="width: 35%;">Description</th>
                        <th style="width: 18%;">Amount (₦)</th>
                        <th style="width: 18%;">Date</th>
                        <th style="width: 150px;">Action</th>
                    </tr>
                </thead>
                <tbody id="officeExpensesBody"></tbody>
            </table>
            
            <button class="btn btn-save btn-save-office-expense">Save Office Expenses</button>
        </div>

        <div class="expense-section">
            <h3>Shop Expenses</h3>
            <button class="btn btn-add btn-add-shop-expenses-row" data-expenses-row="shop">+ Add New Expense</button>
            
            <table id="shopExpensesTable">
                <thead>
                    <tr>
                        <th style="width: 60px;">S/N</th>
                        <th style="width: 35%;">Description</th>
                        <th style="width: 18%;">Amount (₦)</th>
                        <th style="width: 18%;">Date</th>
                        <th style="width: 150px;">Action</th>
                    </tr>
                </thead>
                <tbody id="shopExpensesBody"></tbody>
            </table>
            
            <button class="btn btn-save" onclick="saveShopExpenses()">Save Shop Expenses</button>

    `;

  return div;
})();

const tbodyOfficeExpenses = expensesManagement.querySelector('#officeExpensesBody');
const tbodyShopExpenses = expensesManagement.querySelector('#shopExpensesBody');
const btnAddOfficeExpenseRow = expensesManagement.querySelector('.btn-add-new-office-expenses-row');
const btnAddShopExpensesRow = expensesManagement.querySelector('.btn-add-shop-expenses-row');
const btnSaveOfficeExpense = expensesManagement.querySelector('.btn-save-office-expense');

// const Event = ({ eventName, contentKey = '' }) =>
//   new CustomEvent(eventName, {
//     detail: {
//       contentKey,
//     },
//   });

// const events = {
// };

// ============= y
function storeExpenses(expenses, firstKey) {
  const obj = {
    key: firstKey,
    data: expenses,
  };
  localStorage.setData(obj);
}

function saveOfficeExpenses() {
  const expenses = [];

  const rows = tbodyOfficeExpenses.querySelectorAll('tr');

  rows.forEach((row) => {
    const description = row.querySelector('input[name="description"]');
    const amount = row.querySelector('input[name="amount"]');
    const date = row.querySelector('input[name="date"]');

    const descriptionValue = description.value;
    const amountValue = parseFloat(amount.value);
    const dateValue = date.value;

    if (descriptionValue && amountValue > 0 && dateValue)
      expenses.push({ description: descriptionValue, amount: amountValue, date: dateValue });
  });

  storeExpenses(expenses, 'office-expenses');
}
// ============= y
function addExpenses(tbodyExpenses) {
  const sn = tbodyExpenses.rows.length + 1;
  const row = tbodyExpenses.insertRow();
  row.innerHTML = `
                <td class="serial-number">${sn}</td>
                <td><input type="text" name="description" placeholder="e.g., Stationery, Office supplies"></td>
                <td><input type="number" name="amount" placeholder="0.00" step="0.01" min="0"></td>
                <td><input type="date" name="date"></td>
                <td><div class="action-cell">
                    <button class="btn btn-edit" data-action="edit">✏️</button>
                    <button class="btn btn-delete" data-action="delete">Delete</button>
                </div></td>
            `;
}

// ==== e
let isTrReadonly = true;

function editRow(target) {
  const row = target.closest('tr');
  const inputs = row.querySelectorAll('input');

  if (isTrReadonly) {
    inputs.forEach((input) => input.removeAttribute('readonly'));
    isTrReadonly = false;
    target.textContent = '✅';
  } else {
    inputs.forEach((input) => {
      input.readOnly = true;
      target.textContent = '✏️';
    });
    isTrReadonly = true;
  }
}
// ==== e

// ====== x
function updateSerialNumber() {
  const trs = tbodyOfficeExpenses.querySelectorAll('tr');

  trs.forEach((tr, index) => {
    const serialNumberTd = tr.querySelector('.serial-number');
    serialNumberTd.textContent = index + 1;
  });
}

function deleteRow(target) {
  const row = target.closest('tr');
  row.remove();
  updateSerialNumber();
}

// ========== x
const actionHandler = {
  edit: editRow,
  delete: deleteRow,
};

function handleAction(e) {
  const action = e.target.dataset.action;
  if (!action) return;

  actionHandler[action](e.target);
}

function renderExpenses(tbodyExpenses, key) {
  const expenses = localStorage.getData({ key }) || [];

  tbodyExpenses.innerHTML = '';
  expenses.forEach((obj, serialNumber) => {
    const row = tbodyExpenses.insertRow();
    row.innerHTML = `
        <td class="serial-number">${serialNumber + 1}</td>
        <td><input type="text" name="description" value="${obj.description}" readonly></td>
        <td><input type="number" name="amount" value="${obj.amount}" step="0.01" min="0" readonly></td>
        <td><input type="date" name="date" value="${obj.date}" readonly></td>
        <td><div class="action-cell">
            <button class="btn btn-edit" data-action="edit">✏️</button>
            <button class="btn btn-delete" data-action="delete">Delete</button>
        </div></td>
    `;
  });
}

const expensesRowHandler = {
  office: () => addExpenses(tbodyOfficeExpenses),
  shop: () => addExpenses(tbodyShopExpenses),
};

function handleAddExpenses(e) {
  const expensesRow = e.target.dataset.expensesRow;
  if (!expensesRow) return;

  expensesRowHandler[expensesRow]();
}
const render = () => {
  renderExpenses(tbodyOfficeExpenses, 'office-expenses');
  renderExpenses(tbodyShopExpenses, 'shop-expenses');
};

const renderExpensesBus = new EventTarget();

btnSaveOfficeExpense.addEventListener('click', saveOfficeExpenses);
btnAddOfficeExpenseRow.addEventListener('click', handleAddExpenses);
btnAddShopExpensesRow.addEventListener('click', handleAddExpenses);
tbodyOfficeExpenses.addEventListener('click', handleAction);
tbodyShopExpenses.addEventListener('click', handleAction);

renderExpensesBus.addEventListener('render-content', render);

export { expensesManagement, renderExpensesBus };
