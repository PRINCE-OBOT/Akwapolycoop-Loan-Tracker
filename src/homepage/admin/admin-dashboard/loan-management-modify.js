import MathUtility from '../../module/business-logic/mathUtility';
import eventBus from '../../module/event-bus/event';
import indexDB from '../../module/indexDB/indexDB';

// Dispatching the change custom-change-content refreshes `loan-management` and `deposit-management`
const contentHandler = {
  takeLoan: 'loan-management',
  deposit: 'deposit-management',
  loanApplicantFormData: 'loan-applicant-management',
};

const updated = () => {
  const { firstKey, id, depositAmount } = getActionDataFromLocalStorage();

  const key = firstKey[0];

  const customContentEvent = new CustomEvent('custom-change-content', {
    detail: {
      contentKey: contentHandler[key],
    },
  });

  if (key === 'deposit') MathUtility.depositApprove({ id: +id, depositAmount: +depositAmount });

  eventBus.dispatchEvent(customContentEvent);
};

const fail = () => {
  alert('fail');
};

const getActionDataFromLocalStorage = () => {
  const data = localStorage.getData({ key: 'action' });
  return data;
};

const modifyLoanApplicantData = () => {
  const { id, value, firstKey, secondKey, loanID } = getActionDataFromLocalStorage();

  indexDB.interact(
    {
      storeName: 'loan-applicant-list',
      keyPathValue: +id,
      getMethod: 'get',
      newValue: value,
      loanID,
      firstKey,
      secondKey,
      trueState: updated,
      undefinedState: fail,
    },
    'modifyData',
  );
};

const bindModifyIndexdbEvent = () =>
  eventBus.addEventListener('modify-indexdb', modifyLoanApplicantData);

export default bindModifyIndexdbEvent;
