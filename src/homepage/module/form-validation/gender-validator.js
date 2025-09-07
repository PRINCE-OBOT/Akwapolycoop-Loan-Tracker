import FormUtility from './form-utility';

export default class GenderValidator {
  constructor({ gender, genderMessage }) {
    this.gender = gender;
    this.genderMessage = genderMessage;
    this.bindEvent = this.bindEvent();
  }

  bindEvent() {
    this.gender.addEventListener('change', () =>
      this.validateName({
        gender: this.gender,
        genderMessage: this.genderMessage,
      }),
    );
  }

  validateName({ gender, genderMessage }) {
    FormUtility.hasUserInteract({
      field: this.gender,
    });

    FormUtility.removeInvalidHighlightFromInput({
      field: this.gender,
    });

    const genderField = FormUtility.resetFieldStyle({
      field: gender,
      fieldMessage: genderMessage,
    });
    if (genderField.empty) return;

    const pattern = /^(male|female)$/;

    const isGenderValid = pattern.test(gender.value);

    FormUtility.validateClientAndServerState({
      field: gender,
      isFieldValid: isGenderValid,
      fieldMessage: genderMessage,
      msg: 'You have not selected a gender',
    });
  }
}
