import eventBus from '../../module/event-bus/event';
import indexDB from '../../module/indexDB/indexDB';

const modifyLoanApplicantData = () => {
  indexDB.interact(
    {
      storeName: 'loan-applicant',
    },
    'modifyData',
  );
};

eventBus.addEventListener('modify-indexdb', modifyLoanApplicantData);
