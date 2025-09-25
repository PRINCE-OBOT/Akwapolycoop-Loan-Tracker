import FormUtility from './form-utility';

export default class EmploymentStatusValidator {
  constructor({ employmentStatus, employmentStatusMessage }) {
    this.employmentStatus = employmentStatus;
    this.employmentStatusMessage = employmentStatusMessage;
    this.bindEvent();
  }

  bindEvent() {
    this.employmentStatus.addEventListener('change', this.validateName.bind(this));
  }

  validateName() {
    FormUtility.hasUserInteract({
      field: this.employmentStatus,
    });

    FormUtility.removeInvalidHighlightFromInput({
      field: this.employmentStatus,
    });

    const isEmploymentStatusValid = this.employmentStatus.value !== '';

    FormUtility.validateClientAndServerState({
      field: this.employmentStatus,
      fieldMessage: this.employmentStatusMessage,
      isFieldValid: isEmploymentStatusValid,
      msg: "You've not selected an Employment Status",
    });
  }
}
