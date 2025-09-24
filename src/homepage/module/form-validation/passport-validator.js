import FormUtility from './form-utility';

export default class PassportValidator {
  constructor({ passport, passportMessage }) {
    this.passport = passport;
    this.passportMessage = passportMessage;
    this.bindEvent();
  }

  bindEvent() {
    this.passport.addEventListener('change', this.validatePassport.bind(this));
  }

  validatePassport() {
    FormUtility.hasUserInteract({
      field: this.passport,
    });

    const pattern = /^.+\.(png|jpe?g)$/;

    const isPassportValid = pattern.test(this.passport.value);

    FormUtility.validateClientAndServerState({
      field: this.passport,
      isFieldValid: isPassportValid,
      fieldMessage: this.passportMessage,
      msg: 'Unsupported Picture Format',
    });
  }
}
