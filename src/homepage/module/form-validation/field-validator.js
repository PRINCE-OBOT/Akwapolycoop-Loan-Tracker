import FieldValidationUtility from './field-utility';

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
    FieldValidationUtility.hasUserInteract({
      field: this.field,
    });

    FieldValidationUtility.removeInvalidHighlightFromInput({
      field: this.field,
    });

    const nameField = FieldValidationUtility.resetFieldStyle({
      field: this.field,
      fieldMessage: this.fieldMessage,
    });
    if (nameField.empty) return;

    FieldValidationUtility.validateClientAndServerState({
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
    this.isFieldValid = /(?=.*\s)(?=.*[a-zA-Z])(?=.*[0-9]).{20,}/i.test(field.value);
    this.fieldErrorMessage = 'Address not Descriptive';
  },

  setBusinessNameValidationValue({ field }) {
    this.isFieldValid = /^[a-zA-Z0-9_' -]{5,}$/i.test(field.value);
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

  setAccountNumberValidationValue({ field }) {
    this.isFieldValid = /^[0-9]{10}$/.test(field.value);
    this.fieldErrorMessage = 'Invalid Account Number';
  },

  setValidatePurposeOfLoan({ field }) {
    this.isFieldValid = /^[a-z ]{8,}$/i.test(field.value);
    this.fieldErrorMessage = 'Purpose of Loan not descriptive';
  },

  setCurrentJobDurationValidationValue({ field }) {
    this.isFieldValid = /^([1-9]+ (months?|years?|days?))( [1-9]+ (months?|years?|days?))*$/.test(
      field.value,
      (this.fieldErrorMessage = 'Not within range'),
    );
  },

  setEmptyFieldValidationValue({ field }) {
    this.isFieldValid = /.+/.test(field.value);
  },

  setDesiredAmountValidationValue({ field }) {
    this.isFieldValid = +field.value >= 100;
    this.fieldErrorMessage = 'Not within range';
  },

  setValidateTenorValue({ field }) {
    this.isFieldValid = +field.value >= 1;
    this.fieldErrorMessage = 'Not within range';
  },

  setPatternForEmptyField({ field }) {
    this.isFieldValid = field.value.trim() !== '';
  },

  setSelectElementValidationValue({ field }) {
    this.isFieldValid = field.value !== 'null';
    this.fieldErrorMessage = "You've not selected an option";
  },

  setAccountNameValidationValue({ field }) {
    this.isFieldValid = /[a-z]+ ([a-z]+ ?)+/i.test(field.value);
    this.fieldErrorMessage = 'Invalid Account Name';
  },

  setBankNameValidationValue({ field }) {
    this.setPatternForEmptyField({ field });
    this.fieldErrorMessage = 'No Bank name';
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
