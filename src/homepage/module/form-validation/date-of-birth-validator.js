import FormUtility from './form-utility';

export default class DateOfBirthValidator {
  constructor({ dateOfBirth, dateOfBirthMessage }) {
    this.dateOfBirth = dateOfBirth;
    this.dateOfBirthMessage = dateOfBirthMessage;

    this.bindEvent();
  }

  bindEvent() {
    this.dateOfBirth.addEventListener('change', () =>
      this.validateDateOfBirth({
        dateOfBirth: this.dateOfBirth,
        dateOfBirthMessage: this.dateOfBirthMessage,
      }),
    );
  }

  validateDateOfBirth({ dateOfBirth, dateOfBirthMessage }) {
    FormUtility.hasUserInteract({
      field: dateOfBirth,
    });

    FormUtility.removeInvalidHighlightFromInput({
      field: dateOfBirth,
    });

    const dateField = FormUtility.resetFieldStyle({
      field: dateOfBirth,
      fieldMessage: dateOfBirthMessage,
    });

    if (dateField.empty) return;

    const pattern = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;

    const isDateOfBirthValid = pattern.test(dateOfBirth.value);
    FormUtility.validateClientAndServerState({
      field: dateOfBirth,
      isFieldValid: isDateOfBirthValid,
      fieldMessage: dateOfBirthMessage,
      msg: 'Incorrect Date of Birth',
    });
  }
}
