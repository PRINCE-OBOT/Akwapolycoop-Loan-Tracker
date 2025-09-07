import FormUtility from './form-utility';

export default class TelValidator {
  constructor({ tel, telMessage }) {
    this.tel = tel;
    this.telMessage = telMessage;
    this.bindEvent = this.bindEvent();
  }

  bindEvent() {
    this.tel.addEventListener('input', () =>
      this.validateName({
        tel: this.tel,
        telMessage: this.telMessage,
      }),
    );
  }

  validateName({ tel, telMessage }) {
    FormUtility.hasUserInteract({
      field: this.tel,
    });

    FormUtility.removeInvalidHighlightFromInput({
      field: this.tel,
    });

    const nameField = FormUtility.resetFieldStyle({
      field: tel,
      fieldMessage: telMessage,
    });
    if (nameField.empty) return;

    const pattern = /^[0-9]{10,11}$/;

    const isNameValid = pattern.test(tel.value);

    FormUtility.validateClientAndServerState({
      field: tel,
      isFieldValid: isNameValid,
      fieldMessage: telMessage,
      msg: 'Incorrect Phone Number',
    });
  }
}
