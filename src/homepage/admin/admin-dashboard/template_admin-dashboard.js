/* eslint-disable object-shorthand */
/* eslint-disable no-new */
import './template_admin-dashboard.css';
import '../../assets/reset.css';
import '../../assets/font.css';
import '../../assets/common_variable.css';
import '../../assets/common_general.css';
import Navigation from '../../component/navigation/navigation';

const headerBottomSection = document.querySelector('.header_bottom-section');
const contentSection = document.querySelector('.content-section');

new Navigation({ btnSection: headerBottomSection, contentSection: contentSection, activeIndex: 0 });
