import MathUtility from '../../module/business-logic/mathUtility';
import eventBus from '../../module/event-bus/event';
import indexDB from '../../module/indexDB/indexDB';

// Dispatching the change custom-change-content refreshes `loan-management` and `deposit-management`

const fail = () => {
  alert('fail');
};

const contentHandler = {
  loan: 'loan-management',
  deposit: 'deposit-management',
  membershipApplicationForm: 'loan-applicant-management',
  withdrawal: 'withdrawal-management',
};

function sendEmail(data) {
  const memberData = data.membershipApplicationForm;

  const message = memberData.status === 'Approve' ? memberData.membershipID : 'decline';

  emailjs
    .send('service_0na6jor', 'template_k8l5l6s', {
      email: memberData.email,
      subject: `Membership Application Status`,
      message: `Your membership application ID is ${message}`,
    })
    .then(() => {
      alert('Email Sent Successfully');
    })
    .catch(() => {
      alert('Failed to send email');
    });
}

function getMember(id) {
  indexDB.interact(
    {
      storeName: 'loan-applicant-list',
      getMethod: 'get',
      keyPathValue: id,
      returnData: sendEmail,
      undefineState: fail,
    },
    'getData',
  );
}

const renderContent = () => {
  const { firstKey, id, withdrawalAmount, depositAmount, depositID, value } =
    getActionDataFromLocalStorage();

  const key = firstKey[0];

  const customContentEvent = new CustomEvent('custom-change-content', {
    detail: {
      contentKey: contentHandler[key],
    },
  });
  eventBus.dispatchEvent(customContentEvent);

  // Create a single withdrawal and deposit action
  const status = value.find((item) => item.status)?.status;

  if (key === 'withdrawal' && status === 'Approve')
    MathUtility.withdrawalApprove({ id, withdrawalAmount });
  if (key === 'deposit' && status === 'Approve')
    MathUtility.depositApprove({ id, depositAmount, depositID });
  if (key === 'membershipApplicationForm') {
    getMember(id);
  }
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

  // renderContent()
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
      trueState: renderContent,
      undefinedState: fail,
    },
    'modifyData',
  );
};

const bindModifyIndexdbEvent = () =>
  eventBus.addEventListener('modify-indexdb', modifyLoanApplicantData);

export default bindModifyIndexdbEvent;
