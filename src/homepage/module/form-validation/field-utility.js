export default class FieldValidationUtility {
  constructor({ messages, inputs, runWhenAllFieldFillIsValid }) {
    this.messages = messages;
    this.inputs = inputs;
    this.runWhenAllFieldFillIsValid = runWhenAllFieldFillIsValid;

    this.render();
  }

  render() {
    this.customCheckValidity();
  }

  customCheckValidity() {
    const isEveryInputValid = [...this.inputs].every((input) => input.validity.valid);

    const isEveryMessageValid = [...this.messages].every((message) =>
      message.classList.contains('valid'),
    );

    if (isEveryMessageValid && isEveryInputValid) {
      window.scrollTo(0, 0);
      this.runWhenAllFieldFillIsValid();
    } else {
      const invalidMessages = [...this.messages].filter(
        (message) => !message.classList.contains('valid'),
      );

      invalidMessages.forEach((invalidMessage) => {
        const input = invalidMessage
          .closest('div')
          .querySelector('[data-set-field-validation-value]');
        input.classList.add('invalid');
      });
    }
  }

  static hasUserInteract({ field }) {
    if (field.value !== '' && !field.classList.contains('user-interact')) {
      field.classList.add('user-interact');
    }
  }

  static removeInvalidHighlightFromInput({ field }) {
    if (field.classList.contains('invalid')) {
      field.classList.remove('invalid');
    }
  }

  static colorCustomMessage({ msgToColor, validityState, field }) {
    msgToColor.classList.add(validityState);

    if (field) {
      field.classList.add(validityState);
    }

    validityState = validityState === 'valid' ? 'invalid' : 'valid';

    msgToColor.classList.remove(validityState);

    if (field) {
      field.classList.remove(validityState);
    }
  }

  static resetFieldStyle({ field, fieldMessage }) {
    if (field.value !== '') return { empty: false };

    fieldMessage.value = '';
    fieldMessage.classList.remove('invalid', 'valid');

    return { empty: true };
  }

  static validateClientAndServerState({
    field,
    isFieldValid,
    fieldMessage,
    msg,
    isConfirmPassword,
    field2,
  }) {
    let message;
    let validityState;

    if (!field.validity.valid && !isFieldValid) {
      message = msg;
      validityState = 'invalid';
    } else if (field.validity.valid && isFieldValid) {
      message = '✓';
      validityState = 'valid';
    } else {
      message = msg;
      validityState = 'invalid';
    }

    message ? (fieldMessage.textContent = message) : fieldMessage.textContent;

    this.colorCustomMessage({
      msgToColor: fieldMessage,
      validityState,
      field: field2,
    });

    if (isConfirmPassword) {
      return this.isPasswordWeak({ validityState });
    }
  }

  static isPasswordWeak({ validityState }) {
    if (validityState === 'invalid') {
      return { weak: true };
    }
    return { weak: false };
  }
}
