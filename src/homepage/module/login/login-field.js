import LoginCheck from './login-check';

export default class LoginPassword {
  constructor({ field }) {
    this.field = field;
    this.bindEvent();
  }

  bindEvent() {
    this.field.addEventListener('input', this.checkIfPasswordIsEmpty.bind(this));
  }

  checkIfPasswordIsEmpty() {
    LoginCheck.removeInvalidHighlightFromInput({ field: this.field });
  }
}
