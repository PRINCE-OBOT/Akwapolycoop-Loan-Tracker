import eventBus from '../../module/event-bus/event';
import indexDB from '../../module/indexDB/indexDB';

function error() {
  alert('error !!!');
}

function displayStoreMsg() {
  alert('store');
}

// Iterate through every member that has set a preferred deposit amount
// If they don't have a loan, the preferred deposit amount get stored as his/her deposit amount
// If they have a loan, check if their is any loan that is approve and not paid completely
// If their is none, move on, else update the `loanAmount` to be `loanAmount` - `monthlyDepositAmount`

let i = 0;
function insertDepositData(data) {
  console.log('insertDepositData');

  if (i >= data.length) {
    displayStoreMsg();
    return;
  }

  const obj = data[i];

  const preferredDepositAmount = obj.preferredDepositAmount;
  if (!preferredDepositAmount) {
    getAllMember();
    return;
  }

  if (!obj.loan) {
    addDeposit({
      obj,
      depositAmount: preferredDepositAmount,
    });
  } else {
    let monthlyWithdrawalAmountSum = 0;

    for (let j = 0; j < obj.loan.length; j++) {
      const loan = obj.loan[j];

      if (loan.status === 'Approve' && loan.loanAmountDynamic !== 0) {
        const newLoanAmountDynamic = loan.loanAmountDynamic - loan.monthlyWithdrawalAmount;

        if (newLoanAmountDynamic >= 0) {
          // This prevent case when the deposited amount is smaller than the monthlyWithdrawalAmount
          // e.g Member deposit 500, and the next expression is loanAmountDynamic (1000) - monthlyWithdrawalAmount (600)
          // In the above case the loanAmount get subtract for what the member did'nt pay for.

          monthlyWithdrawalAmountSum += loan.monthlyWithdrawalAmount;

          if (monthlyWithdrawalAmountSum > preferredDepositAmount) {
            const owingBalance = loan.loanAmountDynamic - loan.monthlyWithdrawalAmount;
            loan.loanAmountDynamic =
              owingBalance + (monthlyWithdrawalAmountSum - preferredDepositAmount);
            break;
          }

          loan.loanAmountDynamic = newLoanAmountDynamic;
        } else {
          loan.loanAmountDynamic = 0;
        }
      }
    }

    const amount = preferredDepositAmount - monthlyWithdrawalAmountSum;
    const depositAmountDynamic = amount <= 0 ? 0 : amount;
    addDeposit({ obj, depositAmount: preferredDepositAmount, depositAmountDynamic });
  }

  i += 1;
  storeDeposit(obj);
}

function addDeposit({ obj, depositAmount, depositAmountDynamic }) {
  if (!obj.deposit) obj.deposit = [];

  const depositLength = obj.deposit.length;

  const deposit = {
    dateAndTime: new Date(),
    status: 'Approve',
    depositAmount,
    depositAmountDynamic,
    depositID: `DEP${obj?.id}-00${depositLength}`,
    massDeposit: true,
  };

  obj.deposit.push(deposit);
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
