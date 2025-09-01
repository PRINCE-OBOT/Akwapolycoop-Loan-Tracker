/* eslint-disable no-new */
import './template_admin-login.css'
import '../../assets/reset.css';
import '../../assets/font.css';
import '../../assets/common_general.css';

import LoginCheck from '../../component/login/login-check';
import PasswordLogin from '../../component/login/login-password'

const btnLogin = document.querySelector('.btn-login')
const inputs = document.querySelectorAll('input')
const username = document.querySelector('#username')
const password = document.querySelector('#password')

function running (){
    alert('Runing just login in')
}

new PasswordLogin({field: password})

new PasswordLogin({field: username})

new LoginCheck({
  loginButton: btnLogin,
  inputs,
  runWhenFormIsFilled: running,
});