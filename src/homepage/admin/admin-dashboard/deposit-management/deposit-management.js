import './deposit-management.css';

const depositManagement = (function createDepositManagementContent() {
  const div = document.createElement('div');

  div.innerHTML = `
        <div class="page-header">
            <h1>💰 Deposit Management</h1>
            <p>Review and manage all deposit submissions</p>
        </div>

        <div class="table-wrapper">
            <div class="table-header">
                <h2>All Deposits</h2>
                <div class="search-box">
                    <input type="text" id="searchInput" placeholder="Search by serial number...">
                </div>
            </div>

            <div class="table-content">
                <table id="depositsTable">
                    <thead>
                        <tr>
                            <th>Serial Number</th>
                            <th>Amount Paid</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Proof</th>
                            <th>Details</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody id="tableBody">
                        <!-- Rows will be inserted here -->
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- Proof Modal -->
    <div class="modal" id="proofModal">
        <div class="modal-content">
            <div class="modal-header">
                <h2>Proof of Payment</h2>
                <button class="modal-close" onclick="closeProofModal()">✕</button>
            </div>
            <div class="modal-body">
                <img id="proofImage" src="" alt="Proof of Payment" class="proof-image">
                <div class="info-item" style="margin-top: 20px;">
                    <label>Uploaded Date & Time</label>
                    <p id="uploadDateTime">-</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Details Modal -->
    <div class="modal" id="detailsModal">
        <div class="modal-content">
            <div class="modal-header">
                <h2>Applicant Information</h2>
                <button class="modal-close" onclick="closeDetailsModal()">✕</button>
            </div>
            <div class="modal-body">
                <div class="info-item">
                    <label>Full Name</label>
                    <p id="applicantName">-</p>
                </div>
                <div class="info-item">
                    <label>Email Address</label>
                    <p id="applicantEmail">-</p>
                </div>
                <div class="info-item">
                    <label>Phone Number</label>
                    <p id="applicantPhone">-</p>
                </div>
                <div class="info-item">
                    <label>Serial Number</label>
                    <p id="serialNumber">-</p>
                </div>
                <div class="info-item">
                    <label>Deposit Amount</label>
                    <p id="depositAmount">-</p>
                </div>
                <div class="info-item">
                    <label>Loan Amount Requested</label>
                    <p id="loanAmount">-</p>
                </div>
                <div class="info-item">
                    <label>Application Status</label>
                    <p id="appStatus">-</p>
                </div>
                <div class="info-item">
                    <label>Date Submitted</label>
                    <p id="dateSubmitted">-</p>
                </div>
            </div>
            <div class="modal-actions">
                <button class="btn-modal btn-modal-approve" onclick="approveDeposit()">Approve</button>
                <button class="btn-modal btn-modal-decline" onclick="declineDeposit()">Decline</button>
            </div>
        </div>
    `;

  div.classList.add('deposit-container');

  return div;
})();

const demo = () => {};

export { depositManagement, demo };

//             data.forEach(deposit => {
//                 const statusClass = status-${deposit.status};
//                 const statusText = deposit.status.charAt(0).toUpperCase() + deposit.status.slice(1);

//                 const row = document.createElement('tr');
//                 row.innerHTML = `
//                     <td class="serial-cell">${deposit.id}</td>
//                     <td class="amount-cell">$${deposit.amount.toLocaleString()}</td>
//                     <td><span class="status-badge ${statusClass}">${statusText}</span></td>
//                     <td class="date-cell">${deposit.date}</td>
//                     <td class="time-cell">${deposit.time}</td>
//                     <td>
//                         <button class="btn-small btn-view" onclick="viewProof('${deposit.id}')">
//                             👁 View
//                         </button>
//                     </td>
//                     <td>
//                         <button class="btn-small btn-info" onclick="viewDetails('${deposit.id}')">
//                             ℹ Info
//                         </button>
//                     </td>
//                     <td>
//                         <div class="action-buttons">
//                             <button class="btn-small btn-approve" onclick="quickApprove('${deposit.id}')">✓ Approve</button>
//                             <button class="btn-small btn-decline" onclick="quickDecline('${deposit.id}')">✗ Decline</button>
//                         </div>
//                     </td>
//                 `;
//                 tbody.appendChild(row);
//             });
//         }
// `
