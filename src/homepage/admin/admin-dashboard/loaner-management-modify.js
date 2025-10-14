import eventBus from '../../module/event-bus/event';
import indexDB from '../../module/indexDB/indexDB';

const updated = () => {
  alert('Updated');
};
const fail = () => {
  alert('fail');
};
const getActionDataFromLocalStorage = () => {
  const data = localStorage.getData({ key: 'action' });
  return data;
};

const modifyLoanApplicantData = () => {
  const { id, status, targetKey, changeKey, loanID } = getActionDataFromLocalStorage();

  indexDB.interact(
    {
      storeName: 'loan-applicant',
      keyPathValue: id,
      newValue: { status },
      loanID,
      targetKey,
      changeKey,
      trueState: updated,
      undefinedState: fail,
    },
    'modifyData',
  );
};

const bindModifyIndexdbEvent = () =>
  eventBus.addEventListener('modify-indexdb', modifyLoanApplicantData);

export default bindModifyIndexdbEvent;
