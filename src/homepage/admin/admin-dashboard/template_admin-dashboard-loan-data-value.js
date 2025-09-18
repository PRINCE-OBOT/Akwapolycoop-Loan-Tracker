import indexDB from '../../module/indexDB/indexDB';

const totalLoanValue = document.querySelector('.total-loan-value');
const revenueValue = document.querySelector('.revenue-value');
const approvedLoanValue = document.querySelector('.approved-loan-value');
const pendingLoanValue = document.querySelector('.pending-loan-value');
const declineLoanValue = document.querySelector('.decline-loan-value');

function storeAdminLoanDataToDatabase() {
  const adminLoanData = getAdminDashboardLoanData();

  indexDB.createDatabase(
    {
      storeName: 'admin-dashboard-loan-data',
      data: adminLoanData,
      trueState: adminDashboardLoanDataIsStored,
      undefinedState: adminDashboardLoanDataNotStored,
    },
    'storeData',
  );
}
storeAdminLoanDataToDatabase();

function getAdminDashboardLoanData() {
  const adminLoanData = {
    id: 'admin-loan-data',
    totalLoanApplicant: '128459',
    revenue: '1092',
    approvedLoan: '1234',
    pendingLoan: '23',
    declineLoan: '453',
  };

  return adminLoanData;
}

function setTotalLoanTextContent(textContent) {
  totalLoanValue.textContent = textContent;
}

function setApproveLoanTextContent(textContent) {
  approvedLoanValue.textContent = textContent;
}

function setPendingLoanTextContent(textContent) {
  pendingLoanValue.textContent = textContent;
}

function setRevenueTextContent(textContent) {
  revenueValue.textContent = textContent;
}

function setDeclineLoanTextContent(textContent) {
  declineLoanValue.textContent = textContent;
}

function adminDashboardLoanDataIsStored() {
  console.log('Admin default loan data successfully stored');
}

function adminDashboardLoanDataNotStored() {
  console.log('admin default loan data not successfully stored');
}

function getAdminLoanDataFromDatabase() {
  function returnData(data) {
    if (data === undefined) {
      console.log('No loan data');
      return;
    }

    setTotalLoanTextContent(data.totalLoanApplicant);
    setRevenueTextContent(data.revenue);
    setApproveLoanTextContent(data.approvedLoan);
    setPendingLoanTextContent(data.pendingLoan);
    setDeclineLoanTextContent(data.declineLoan);
  }

  indexDB.createDatabase(
    {
      storeName: 'admin-dashboard-loan-data',
      keyPathValue: 'admin-loan-data',
      getMethod: 'get',
      returnData,
    },
    'getData',
  );
}

function checkIfAdminLoanDataExist() {
  indexDB.createDatabase(
    {
      storeName: 'admin-dashboard-loan-data',
      keyPathValue: 'admin-loan-data',
      getMethod: 'get',
      trueState: getAdminLoanDataFromDatabase,
      falseState: useDefaultAdminLoanData,
      undefinedState: useDefaultAdminLoanData,
    },
    'checkIfThereIsRecentData',
  );
}

function useDefaultAdminLoanData() {
  const defaultLoanValue = '0000';
  setTotalLoanTextContent(defaultLoanValue);
  setApproveLoanTextContent(defaultLoanValue);
  setPendingLoanTextContent(defaultLoanValue);
  setRevenueTextContent(defaultLoanValue);
  setDeclineLoanTextContent(defaultLoanValue);
}

export { useDefaultAdminLoanData, checkIfAdminLoanDataExist };
