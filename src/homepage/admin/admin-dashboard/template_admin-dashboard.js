import './template_admin-dashboard.css';
import '../../assets/reset.css';
import '../../assets/font.css';
import '../../assets/common_general.css';
import Navigation from '../../module/navigation/navigation';

import indexDB from '../../module/indexDB/indexDB';

import Modal from '../../module/modal/modal';

const headerBottomSection = document.querySelector('.header_bottom-section');
const contentSection = document.querySelector('.content-section');
const adminProfileSection = document.createElement('div');
const navigationSection = document.querySelector('.navigation-section');
const dialog = document.querySelector('dialog');
const btnCancel = dialog.querySelector('.btn-cancel');
const btnYes = dialog.querySelector('.btn-yes');

new Navigation({ btnSection: headerBottomSection, contentSection, activeIndex: 0 });

adminProfileSection.classList.add('adminProfileSection');

adminProfileSection.innerHTML = `
<button type="button" class="logout-button">Logout</button>
<div class="admin-profile">P</div>
`;

function removeLoginAndSignUpLink() {
  [...navigationSection.children].forEach((link) => {
    if (link.classList.contains('home')) return;

    link.classList.add('hide');
  });
}

function appendAdminSection() {
  navigationSection.append(adminProfileSection);
}

function insertAdminProfileSection() {
  removeLoginAndSignUpLink();
  appendAdminSection();
  console.log('Key value exist from dashboard');
}

function runWhenKeyValueDoesNotExist() {
  alert('Key value does not exist');
}

const btnLogout = adminProfileSection.querySelector('.logout-button');
new Modal({
  btnShowModal: btnLogout,
  btnCloseModal: btnCancel,
  dialog,
});

function render() {
  console.log('one');
  indexDB.createDatabase(
    {
      storeName: 'admin-data',
      keyPathValue: 'admin',
      runSuccessStatus: insertAdminProfileSection,
      runErrorStatus: runWhenKeyValueDoesNotExist,
    },
    'checkIfKeyValueExistAndIsAdminLogin',
  );
}
render();

function notDeleted() {
  alert('not deleted');
}

btnYes.addEventListener('click', () => {
  indexDB.createDatabase(
    {
      storeName: 'admin-data',
      keyPathValue: 'admin',
      newValue: false,
      key: 'isAdminLogin',
      runSuccessStatus: render,
      runErrorStatus: notDeleted,
    },
    'modifyExistingData',
  );
});
