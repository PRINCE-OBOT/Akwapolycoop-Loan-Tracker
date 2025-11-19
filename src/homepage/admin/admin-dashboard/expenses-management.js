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
            <button class="btn btn-add btn-add-new-office-expenses-row">+ Add New Expense</button>
            
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
            
            <button class="btn btn-save" onclick="saveOfficeExpenses()">Save Office Expenses</button>
        </div>

        <div class="expense-section">
            <h3>Shop Expenses</h3>
            <button class="btn btn-add">+ Add New Expense</button>
            
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

const btnAddNewOfficeExpenseRow = expensesManagement.querySelector(
  '.btn-add-new-office-expenses-row',
);

function addOfficeExpenseRow(data = {}, serialNum = null) {
  const tbody = document.getElementById('officeExpensesBody');
  const rowCount = tbody.rows.length + 1;
  const sn = serialNum || rowCount;
  const row = tbody.insertRow();
  row.innerHTML = `
                <td class="serial-number">${sn}</td>
                <td><input type="text" name="description" value="${data.description || ''}" placeholder="e.g., Stationery, Office supplies"></td>
                <td><input type="number" name="amount" value="${data.amount || ''}" placeholder="0.00" step="0.01" min="0"></td>
                <td><input type="date" name="date" value="${data.date || ''}"></td>
                <td><div class="action-cell">
                    <button class="btn btn-edit" onclick="editRow(this)">Edit</button>
                    <button class="btn btn-delete" onclick="deleteOfficeExpenseRow(this, ${data.id})">Delete</button>
                </div></td>
            `;
}

btnAddNewOfficeExpenseRow.addEventListener('click', addOfficeExpenseRow);
const demo = () => {};

export { expensesManagement, demo };
