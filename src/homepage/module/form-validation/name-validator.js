import FormUtility from './form-utility';

export default class NameValidator {
  constructor({ name, nameMessage }) {
    this.name = name;
    this.nameMessage = nameMessage;

    this.bindEvent();
  }

  bindEvent() {
    this.name.addEventListener('input', this.validateName.bind(this));
  }

  validateName() {
    FormUtility.hasUserInteract({
      field: this.name,
    });

    FormUtility.removeInvalidHighlightFromInput({
      field: this.name,
    });

    const nameField = FormUtility.resetFieldStyle({
      field: this.name,
      fieldMessage: this.nameMessage,
    });

    if (nameField.empty) return;

    const pattern = /^[a-zA-Z]{1,}$/;

    const isNameValid = pattern.test(this.name.value);

    FormUtility.validateClientAndServerState({
      field: this.name,
      isFieldValid: isNameValid,
      fieldMessage: this.nameMessage,
      msg: 'Incorrect name',
    });
  }
}
