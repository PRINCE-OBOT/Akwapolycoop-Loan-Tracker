import FormUtility from './form-utility';

export default class SelectFieldValidator {
  constructor({ field, fieldMessage, fieldErrorMessage }) {
    this.field = field;
    this.fieldMessage = fieldMessage;
    this.fieldErrorMessage = fieldErrorMessage;

    this.bindEvent();
  }

  bindEvent() {
    this.field.addEventListener('change', this.validateName.bind(this));
  }

  validateName() {
    FormUtility.hasUserInteract({
      field: this.field,
    });

    FormUtility.removeInvalidHighlightFromInput({
      field: this.field,
    });

    const isFieldValid = this.field.value !== '';

    FormUtility.validateClientAndServerState({
      field: this.field,
      fieldMessage: this.fieldMessage,
      isFieldValid,
      msg: this.fieldErrorMessage,
    });
  }
}
