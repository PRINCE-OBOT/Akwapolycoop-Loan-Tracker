import adminLoginPlainColorImage from '../../assets/images/admin-login_plain-color.svg';
import adminSignupPlainColorImage from '../../assets/images/admin-sign-up_plain-color.svg';

const adminProfileSection = document.createElement('div');
const adminLoginAndSignupSection = document.createElement('div');

adminLoginAndSignupSection.innerHTML = `
<a class="admin-login" href="./admin-login.html">
   <img
     class="img_admin-login"
     src="${adminLoginPlainColorImage}"
     alt="admin plain color login icon"
   />
   Admin Login
 </a>
 <a class="admin-sign-up" href="./admin-sign-up.html">
   <img
     class="img_admin-sign-up"
     src="${adminSignupPlainColorImage}"
     alt="admin plain color sign-up icon"
   />
   Admin Sign up
 </a>
`;
adminLoginAndSignupSection.classList.add('adminLoginAndSignupSection');

adminProfileSection.innerHTML = `
<button type="button" class="logout-button">Logout</button>
<div class="admin-profile">P</div>
`;

adminProfileSection.classList.add('adminProfileSection');

export { adminLoginAndSignupSection, adminProfileSection };
