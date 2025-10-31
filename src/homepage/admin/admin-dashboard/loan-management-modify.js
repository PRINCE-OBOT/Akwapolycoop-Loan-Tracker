import MathUtility from '../../module/business-logic/mathUtility';
import eventBus from '../../module/event-bus/event';
import indexDB from '../../module/indexDB/indexDB';

// Dispatching the change custom-change-content refreshes `loan-management` and `deposit-management`
const contentHandler = {
  takeLoan: 'loan-management',
  deposit: 'deposit-management',
  membershipApplicationForm: 'loan-applicant-management',
  withdrawal: 'withdrawal-management',
};

const updated = () => {
  const { firstKey, id, withdrawalAmount, value } = getActionDataFromLocalStorage();

  const key = firstKey[0];

  const customContentEvent = new CustomEvent('custom-change-content', {
    detail: {
      contentKey: contentHandler[key],
    },
  });

  eventBus.dispatchEvent(customContentEvent);

  // run when withdrawal status is approve
  const status = value.find((item) => item.status).status;

  if (key === 'withdrawal' && status === 'Approve')
    MathUtility.withdrawalApprove({ id, withdrawalAmount });
};

const fail = () => {
  alert('fail');
};

const getActionDataFromLocalStorage = () => {
  const data = localStorage.getData({ key: 'action' });
  return data;
};

const modifyLoanApplicantData = () => {
  const { id, value, firstKey, secondKey, loanID, depositID, withdrawalID } =
    getActionDataFromLocalStorage();

  const uniqueID = loanID || depositID || withdrawalID;
  const uniqueIDKey = loanID ? 'loanID' : depositID ? 'depositID' : 'withdrawalID';

  indexDB.interact(
    {
      storeName: 'loan-applicant-list',
      keyPathValue: +id,
      getMethod: 'get',
      newValue: value,
      uniqueIDKey,
      uniqueID,
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
