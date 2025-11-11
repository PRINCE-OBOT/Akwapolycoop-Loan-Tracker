import eventBus from '../../module/event-bus/event';
import indexDB from '../../module/indexDB/indexDB';

function error() {
  alert('error !!!');
}

const contentHandler = {
  withdrawal: 'withdrawal-management',
};

const getActionDataFromLocalStorage = () => {
  const data = localStorage.getData({ key: 'action' });
  return data;
};

function renderContent() {
  const { firstKey } = getActionDataFromLocalStorage();

  const key = firstKey[0];

  const customContentEvent = new CustomEvent('custom-change-content', {
    detail: {
      contentKey: contentHandler[key],
    },
  });

  eventBus.dispatchEvent(customContentEvent);
}

let i = 0;
function setDividendToZero(data) {
  if (i >= data.length) {
    i = 0;
    renderContent();
    return;
  }

  const obj = data[i];

  const isMemberApprove = obj.membershipApplicationForm.status === 'Approve';

  if (!isMemberApprove) {
    i += 1;
    getAllMember();
    return;
  }

  if (obj.loan) {
    for (let j = 0; j < obj.loan.length; j++) {
      const loan = obj.loan[j];

      if (loan.status === 'Approve') {
        loan.dividendAmountDynamic = 0;
      }
    }
  }
  if (obj.withdrawal) {
    for (let j = 0; j < obj.withdrawal.length; j++) {
      const withdrawal = obj.withdrawal[j];

      if (withdrawal.status === 'Approve') {
        withdrawal.dividendAmountDynamic = 0;
      }
    }
  }

  i += 1;
  storeDeposit(obj);
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
      returnData: setDividendToZero,
      undefineState: error,
    },
    'getData',
  );
}

function bindMassDividend() {
  eventBus.addEventListener('mass-dividend', getAllMember);
}

export default bindMassDividend;
