import FormUtility from './form-utility';

export default class NameValidator {
  constructor({ name, nameMessage }) {
    this.name = name;
    this.nameMessage = nameMessage;
    this.bindEvent = this.bindEvent();
  }

  bindEvent() {
    this.name.addEventListener('input', () =>
      this.validateName({
        name: this.name,
        nameMessage: this.nameMessage,
      }),
    );
  }

  validateName({ name, nameMessage }) {
    FormUtility.hasUserInteract({
      field: this.name,
    });

    FormUtility.removeInvalidHighlightFromInput({
      field: this.name,
    });

    const nameField = FormUtility.resetFieldStyle({
      field: name,
      fieldMessage: nameMessage,
    });
    if (nameField.empty) return;

    const pattern = /^[a-zA-Z]{1,}$/;

    const isNameValid = pattern.test(name.value);

    FormUtility.validateClientAndServerState({
      field: name,
      isFieldValid: isNameValid,
      fieldMessage: nameMessage,
      msg: 'Incorrect name',
    });
  }
}
