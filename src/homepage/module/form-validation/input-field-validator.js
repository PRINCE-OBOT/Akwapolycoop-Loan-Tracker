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
  isFieldValid: null,
  fieldErrorMessage: null,

  setNameValidationValue({ field }) {
    this.isFieldValid = /^[a-zA-Z]{1,}$/.test(field.value);
    this.fieldErrorMessage = 'Incorrect name format';
  },

  setEmailValidationValue({ field }) {
    this.isFieldValid = /^[a-zA-Z0-9.]{4,}@(gmail|yahoo|hotmail).com$/.test(field.value);
    this.fieldErrorMessage = 'Incorrect email format';
  },

  setAddressValidationValue({ field }) {
    this.isFieldValid = /(?=.*\s)(?=.*[a-zA-Z])(?=.*[0-9]).{20,}/.test(field.value);
    this.fieldErrorMessage = 'Address not Descriptive';
  },

  setBusinessNameValidationValue({ field }) {
    this.isFieldValid = /^[a-zA-Z0-9_' -]{5,}$/.test(field.value);
    this.fieldErrorMessage = 'Business Name not Descriptive';
  },

  setNINValidationValue({ field }) {
    this.isFieldValid = /^[0-9]{11}$/.test(field.value);
    this.fieldErrorMessage = 'Invalid NIN';
  },

  setPhoneNumberValidationValue({ field }) {
    this.isFieldValid = /0?[0-9]{10}/.test(field.value);
    this.fieldErrorMessage = 'Incorrect Phone Number';
  },

  setPassportValidationValue({ field }) {
    this.isFieldValid = /^.+\.(png|jpe?g)$/.test(field.value);
    this.fieldErrorMessage = 'Unsupported Image Format';
  },

  setDateOfBirthValidationValue({ field }) {
    this.isFieldValid = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(field.value);
    this.fieldErrorMessage = 'Incorrect Date of Birth';
  },

  setMonthlyIncomeValidationValue({ field }) {
    this.isFieldValid = +field.value >= 20000;
    this.fieldErrorMessage = 'Not within range';
  },

  setCurrentJobDurationValidationValue({ field }) {
    this.isFieldValid = /^([1-9]+ (months?|years?|days?))( [1-9]+ (months?|years?|days?))*$/.test(
      field.value,
      (this.fieldErrorMessage = 'Not within range'),
    );
  },

  setDesiredAmountValidationValue({ field }) {
    this.isFieldValid = +field.value >= 4000;
    this.fieldErrorMessage = 'Not within range';
  },

  validateTenor({ field }) {
    this.isFieldValid = +field.value >= 1;
    this.fieldErrorMessage = 'Not within range';
  },

  setSelectElementValidationValue({ field }) {
    this.isFieldValid = field.value !== 'null';
    this.fieldErrorMessage = "You've not selected an option";
  },

  validateField({ field, fieldMessage }) {
    new FieldValidator({
      field,
      fieldMessage,
      isFieldValid: this.isFieldValid,
      fieldErrorMessage: this.fieldErrorMessage,
    });
  },
};

function handleFieldValidationLogic(e) {
  const setFieldValidationValue = e.target.dataset.setFieldValidationValue;
  if (!setFieldValidationValue) return;

  const field = e.target;

  validation[setFieldValidationValue]({ field });

  const fieldMessage = field.closest('div').querySelector('output.show-message');

  validation.validateField({ field, fieldMessage });
}
export default handleFieldValidationLogic;
