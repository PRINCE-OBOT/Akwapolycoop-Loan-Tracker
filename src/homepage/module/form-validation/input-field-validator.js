import FormUtility from './form-utility';

class FieldValidator {
  constructor({ field, fieldMessage, isFieldValid, fieldErrorMessage }) {
    this.field = field;
    this.fieldMessage = fieldMessage;
    this.isFieldValid = isFieldValid;
    this.fieldErrorMessage = fieldErrorMessage;

    this.render();
  }

  render() {
    this.validateField();
  }

  validateField() {
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

    FormUtility.validateClientAndServerState({
      field: this.field,
      fieldMessage: this.fieldMessage,
      isFieldValid: this.isFieldValid,
      msg: this.fieldErrorMessage,
    });
  }
}

const validation = {
  validateName({ field, fieldMessage }) {
    const isFieldValid = /^[a-zA-Z]{1,}$/.test(field.value);
    new FieldValidator({
      field,
      fieldMessage,
      isFieldValid,
      fieldErrorMessage: 'Incorrect name format',
    });
  },

  validateEmail({ field, fieldMessage }) {
    const isFieldValid = /^[a-zA-Z0-9.]{4,}@(gmail|yahoo|hotmail).com$/.test(field.value);
    new FieldValidator({
      field,
      fieldMessage,
      isFieldValid,
      fieldErrorMessage: 'Incorrect email format',
    });
  },

  validateAddress({ field, fieldMessage }) {
    const isFieldValid = /(?=.*\s)(?=.*[a-zA-Z])(?=.*[0-9]).{20,}/.test(field.value);
    new FieldValidator({
      field,
      fieldMessage,
      isFieldValid,
      fieldErrorMessage: 'Address not Descriptive',
    });
  },

  validateBusinessName({ field, fieldMessage }) {
    const isFieldValid = /^[a-zA-Z0-9_' -]{5,}$/.test(field.value);
    new FieldValidator({
      field,
      fieldMessage,
      isFieldValid,
      fieldErrorMessage: 'Business Name not Descriptive',
    });
  },

  validateNIN({ field, fieldMessage }) {
    const isFieldValid = /^[0-9]{11}$/.test(field.value);

    new FieldValidator({
      field,
      fieldMessage,
      isFieldValid,
      fieldErrorMessage: 'Invalid NIN',
    });
  },

  validatePhoneNumber({ field, fieldMessage }) {
    const isFieldValid = /0?[0-9]{10}/.test(field.value);

    new FieldValidator({
      field,
      fieldMessage,
      isFieldValid,
      fieldErrorMessage: 'Incorrect Phone Number',
    });
  },

  validatePassport({ field, fieldMessage }) {
    const isFieldValid = /^.+\.(png|jpe?g)$/.test(field.value);
    new FieldValidator({
      field,
      fieldMessage,
      isFieldValid,
      fieldErrorMessage: 'Unsupported Image Format',
    });
  },

  validateDateOfBirth({ field, fieldMessage }) {
    const isFieldValid = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(field.value);
    new FieldValidator({
      field,
      fieldMessage,
      isFieldValid,
      fieldErrorMessage: 'Incorrect Date of Birth',
    });
  },

  validateMonthlyIncome({ field, fieldMessage }) {
    const isFieldValid = +field.value >= 20000;
    new FieldValidator({
      field,
      fieldMessage,
      isFieldValid,
      fieldErrorMessage: 'Not within range',
    });
  },

  validateCurrentJobDuration({ field, fieldMessage }) {
    const isFieldValid = /^([1-9]+ (months?|years?|days?))( [1-9]+ (months?|years?|days?))*$/.test(
      field.value,
    );
    new FieldValidator({
      field,
      fieldMessage,
      isFieldValid,
      fieldErrorMessage: 'Not within range',
    });
  },

  validateDesiredAmount({ field, fieldMessage }) {
    const isFieldValid = +field.value >= 4000;
    new FieldValidator({
      field,
      fieldMessage,
      isFieldValid,
      fieldErrorMessage: 'Not within range',
    });
  },

  validateTenor({ field, fieldMessage }) {
    const isFieldValid = +field.value >= 1;
    new FieldValidator({
      field,
      fieldMessage,
      isFieldValid,
      fieldErrorMessage: 'Not within range',
    });
  },

  validateSelectElement({ field, fieldMessage }) {
    const isFieldValid = field.value !== 'null';
    new FieldValidator({
      field,
      fieldMessage,
      isFieldValid,
      fieldErrorMessage: "You've not selected an option",
    });
  },
};

function handleFieldValidationLogic(e) {
  const validateField = e.target.dataset.validateField;
  if (!validateField) return;

  const field = e.target;
  const fieldMessage = field.closest('div').querySelector('output.show-message');

  validation[validateField]({ field, fieldMessage });
}
export default handleFieldValidationLogic;
