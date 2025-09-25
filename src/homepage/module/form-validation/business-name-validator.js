import FormUtility from './form-utility';

export default class BusinessNameValidator {
  constructor({ businessName, businessNameMessage }) {
    this.businessName = businessName;
    this.businessNameMessage = businessNameMessage;

    this.bindEvent();
  }

  bindEvent() {
    this.businessName.addEventListener('input', this.validateBusinessName.bind(this));
  }

  validateBusinessName() {
    FormUtility.hasUserInteract({
      field: this.businessName,
    });

    FormUtility.removeInvalidHighlightFromInput({
      field: this.businessName,
    });

    const businessNameField = FormUtility.resetFieldStyle({
      field: this.businessName,
      fieldMessage: this.businessNameMessage,
    });

    if (businessNameField.empty) return;

    const pattern = /^\w{5,}$/;

    const isBusinessNameValid = pattern.test(this.businessName.value.trim());

    FormUtility.validateClientAndServerState({
      field: this.businessName,
      isFieldValid: isBusinessNameValid,
      fieldMessage: this.businessNameMessage,
      msg: 'Incorrect businessName',
    });
  }
}
