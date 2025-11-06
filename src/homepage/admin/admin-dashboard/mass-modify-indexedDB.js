import eventBus from '../../module/event-bus/event';
import indexDB from '../../module/indexDB/indexDB';

function error() {
  alert('error !!!');
}

function displayStoreMsg() {
  alert('store');
}

function storeDeposit(deposit) {
  indexDB.interact(
    {
      storeName: 'loan-applicant-list',
      data: deposit,
      trueState: getAllMember,
      undefinedState: error,
    },
    'storeData',
  );
}

function addDeposit({ obj, depositAmount }) {
  if (!obj.deposit) obj.deposit = [];

  const depositLength = obj.deposit.length;

  const deposit = {
    dateAndTime: new Date(),
    status: 'Approve',
    depositAmount,
    depositAmountDynamic: depositAmount,
    depositID: `DEP${obj?.id}-00${depositLength}`,
    massDeposit: true,
  };

  obj.deposit.push(deposit);
}

let i = 0;
function insertDepositData(data) {
  if (i >= data.length) {
    console.log(i, data.length);
    displayStoreMsg();
    return;
  }

  const preferredDepositAmount = data[i].preferredDepositAmount;
  if (!preferredDepositAmount) {
    getAllMember();
    return;
  }

  const obj = data[i];
  const loan = data[i].loan;

  if (!loan) {
    addDeposit({
      obj,
      depositAmount: preferredDepositAmount,
    });
  } else {
    for (let j = 0; j < loan.length; j++) {
      if (loan[j].status === 'Approve' && loan[j].loanAmountDynamicDynamic !== 0) {
        const balance = +loan[i].loanAmountDynamic - loan[j].monthlyWithdrawalAmount;

        // Else condition rarely happen since the subtracting of monthly withdrawal amount is calculated evenly base on the loan amount
        // e.g loan amount 2000, monthly withdrawal times 2, monthly withdrawal amount 2000 / 2 = 1000
        // So 1000 will be subtracted from the loan amount 2 times leaving no value less than 0
        // But still leave the else in case of rare cases where balance is insignificant decimal, like 0.9999

        if (balance >= 0) {
          loan[i].loanAmountDynamic = balance;
          addDeposit({ obj, depositAmount: preferredDepositAmount });
        } else {
          loan[i].loanAmountDynamic = 0;
          addDeposit({ obj, depositAmount: preferredDepositAmount });
        }
        break;
      }
    }
  }

  i += 1;
  storeDeposit(obj);
}

function getAllMember() {
  indexDB.interact(
    {
      storeName: 'loan-applicant-list',
      getMethod: 'getAll',
      returnData: insertDepositData,
      undefineState: error,
    },
    'getData',
  );
}

function bindMassModifyIndexedDB() {
  eventBus.addEventListener('mass-modify-indexdb', getAllMember);
}

export default bindMassModifyIndexedDB;
