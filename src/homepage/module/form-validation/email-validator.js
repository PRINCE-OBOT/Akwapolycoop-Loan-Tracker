import FormUtility from './form-utility';

export default class Email {
  constructor({ email, emailMessage }) {
    this.email = email;
    this.emailMessage = emailMessage;
    this.bindEvent();
  }

  bindEvent() {
    this.email.addEventListener('input', this.validateEmail.bind(this));
  }

  validateEmail() {
    FormUtility.hasUserInteract({ field: this.email });

    FormUtility.removeInvalidHighlightFromInput({ field: this.email });

    const emailField = FormUtility.resetFieldStyle({
      field: this.email,
      fieldMessage: this.emailMessage,
    });
    if (emailField.empty) return;

    const emailPattern = /^[a-zA-Z0-9.]{4,}@(gmail|yahoo|hotmail).com$/;

    const isEmailValid = emailPattern.test(this.email.value);

    FormUtility.validateClientAndServerState({
      field: this.email,
      isFieldValid: isEmailValid,
      fieldMessage: this.emailMessage,
      msg: 'Incorrect email',
    });
  }
}
