import FormUtility from './form-utility';

export default class InputFieldValidator {
  constructor({ field, fieldMessage, pattern, fieldErrorMessage }) {
    this.field = field;
    this.fieldMessage = fieldMessage;
    this.pattern = pattern;
    this.fieldErrorMessage = fieldErrorMessage;
    this.bindEvent();
  }

  bindEvent() {
    this.field.addEventListener('input', this.validateName.bind(this));
  }

  validateName() {
    FormUtility.hasUserInteract({
      field: this.field,
    });

    FormUtility.removeInvalidHighlightFromInput({
      field: this.field,
    });

    const nameField = FormUtility.resetFieldStyle({
      field: this.field,
      fieldMessage: this.fieldMessage,
    });
    if (nameField.empty) return;

    const isFieldValid = this.pattern.test(this.field.value);

    FormUtility.validateClientAndServerState({
      field: this.field,
      fieldMessage: this.fieldMessage,
      msg: this.fieldErrorMessage,
      isFieldValid,
    });
  }
}
