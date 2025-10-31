import FieldValidationUtility from './field-utility';

export default class Password {
  constructor({ password, passwordMessage, confirmPassword, confirmPasswordMessage }) {
    this.password = password;
    this.passwordMessage = passwordMessage;
    this.confirmPassword = confirmPassword;
    this.confirmPasswordMessage = confirmPasswordMessage;
    this.isPasswordValid = null;
    this.bindEvent();
  }

  bindEvent() {
    this.password.addEventListener('input', this.validatePassword.bind(this));

    this.confirmPassword.addEventListener(
      'input',
      this.confirmPasswordToValidatePassword.bind(this),
    );
  }

  validatePassword() {
    FieldValidationUtility.hasUserInteract({ field: this.password });

    FieldValidationUtility.removeInvalidHighlightFromInput({ field: this.password });

    const passwordField = FieldValidationUtility.resetFieldStyle({
      field: this.password,
      fieldMessage: this.passwordMessage,
    });
    if (passwordField.empty) return;

    // condition for password
    // const lowercase = /[a-z]/.test(this.password.value);
    // const uppercase = /[A-Z]/.test(this.password.value);
    // const number = /[0-9]/.test(this.password.value);
    // const minLength = /.{7,}/.test(this.password.value);

    const exactlyFourDigit = /^.{4}$/.test(this.password.value);

    if (!exactlyFourDigit) this.passwordMessage.value = 'Your pin must match four digit';

    // this.passwordMessage.value = 'Password should contain';

    // if (!lowercase) {
    //   this.passwordMessage.value += ', Lowercase';
    // }
    // if (!uppercase) {
    //   this.passwordMessage.value += ', Uppercase';
    // }
    // if (!number) {
    //   this.passwordMessage.value += ', Number';
    // }
    // if (!minLength) {
    //   this.passwordMessage.value += ', Minimum of 7 characters';
    // }

    // this.isPasswordValid = lowercase && uppercase && number && minLength;

    this.isPasswordValid = exactlyFourDigit;

    FieldValidationUtility.validateClientAndServerState({
      field: this.password,
      isFieldValid: this.isPasswordValid,
      fieldMessage: this.passwordMessage,
    });

    if (this.confirmPassword.value !== '') {
      this.confirmPasswordToValidatePassword();
    }
  }

  confirmPasswordToValidatePassword() {
    FieldValidationUtility.hasUserInteract({ field: this.confirmPassword });

    FieldValidationUtility.removeInvalidHighlightFromInput({
      field: this.confirmPassword,
    });

    const confirmPasswordField = FieldValidationUtility.resetFieldStyle({
      field: this.confirmPassword,
      fieldMessage: this.confirmPasswordMessage,
    });
    if (confirmPasswordField.empty) return;

    const passwordStatus = FieldValidationUtility.validateClientAndServerState({
      field: this.password,
      isFieldValid: this.isPasswordValid,
      fieldMessage: this.confirmPasswordMessage,
      field2: this.confirmPassword,
      // msg: 'Your password is weak',
      msg: 'Your pin does not match',
      isConfirmPassword: true,
    });

    if (passwordStatus.weak) return;

    let validityState;

    if (this.password.value === this.confirmPassword.value) {
      this.confirmPasswordMessage.value = '✓';
      validityState = 'valid';
    } else if (this.password.value !== this.confirmPassword.value) {
      validityState = 'invalid';
      // this.confirmPasswordMessage.value = 'Password Mismatch';
      this.confirmPasswordMessage.value = 'Pin Mismatch';
    }

    FieldValidationUtility.colorCustomMessage({
      msgToColor: this.confirmPasswordMessage,
      validityState,
      field: this.confirmPassword,
    });
  }
}
