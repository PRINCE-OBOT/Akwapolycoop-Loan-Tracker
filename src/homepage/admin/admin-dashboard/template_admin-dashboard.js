import './template_admin-dashboard.css';
import '../../assets/reset.css';
import '../../assets/font.css';
import '../../assets/common_general.css';
import '../../assets/style-border-button.css';

import Navigation from '../../module/navigation/navigation';

import AdminSessionManager from './template_admin-dashboard-session-manager';

import LoanerManagement from './template_admin-loaner-management';

const headerBottomSection = document.querySelector('.header_bottom-section');
const contentSection = document.querySelector('.content-section');
const navigationSection = document.querySelector('.navigation-section');
const dialog = document.querySelector('dialog');
const btnYes = dialog.querySelector('.btn-yes');
const adminGreeting = document.querySelector('.greeting');
const LoanerManagementTbody = document.querySelector('tbody');

new AdminSessionManager({ btnYes, navigationSection, adminGreeting, dialog });

new Navigation({ btnSection: headerBottomSection, contentSection, activeIndex: 0 });

new LoanerManagement({ tbody: LoanerManagementTbody });
