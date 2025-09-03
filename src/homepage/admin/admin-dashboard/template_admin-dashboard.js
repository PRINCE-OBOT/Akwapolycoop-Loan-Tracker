import './template_admin-dashboard.css';
import '../../assets/reset.css';
import '../../assets/font.css';
import '../../assets/common_general.css';
import Navigation from '../../module/navigation/navigation';

import indexDB from '../../module/indexDB/indexDB';

const headerBottomSection = document.querySelector('.header_bottom-section');
const contentSection = document.querySelector('.content-section');
const adminProfileSection = document.createElement('div');
const navigationSection = document.querySelector('.navigation-section');

new Navigation({ btnSection: headerBottomSection, contentSection, activeIndex: 0 });

indexDB.createDatabase();

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

function runWhenKeyValueExist() {
  removeLoginAndSignUpLink();
  appendAdminSection();
  console.log('Key value exist from dashboard');
}

function runWhenKeyValueDoesNotExist() {
  alert('Key value does not exist');
}
indexDB.checkIfKeyValueExist({
  storeName: 'admin-data',
  keyPathValue: 'admin',
  runSuccessStatus: runWhenKeyValueExist,
  runErrorStatus: runWhenKeyValueDoesNotExist,
});
