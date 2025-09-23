import FormUtility from './form-utility';

export default class NINValidator {
  constructor({ nin, ninMessage }) {
    this.nin = nin;
    this.ninMessage = ninMessage;
    this.bindEvent = this.bindEvent();
  }

  bindEvent() {
    this.nin.addEventListener('input', this.validateName.bind(this));
  }

  validateName() {
    FormUtility.hasUserInteract({
      field: this.nin,
    });

    FormUtility.removeInvalidHighlightFromInput({
      field: this.nin,
    });

    const nameField = FormUtility.resetFieldStyle({
      field: this.nin,
      fieldMessage: this.ninMessage,
    });
    if (nameField.empty) return;

    const pattern = /^[0-9]{11}$/;

    const isNINValid = pattern.test(this.nin.value);

    FormUtility.validateClientAndServerState({
      field: this.nin,
      isFieldValid: isNINValid,
      fieldMessage: this.ninMessage,
      msg: 'Invalid NIN',
    });
  }
}
