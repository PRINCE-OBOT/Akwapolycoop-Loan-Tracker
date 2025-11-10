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
    // change `some` method to  `every` for production
    const isEveryInputValid = [...this.inputs].some((input) => input.validity.valid);

    const isEveryMessageValid = [...this.messages].some((message) =>
      message.classList.contains('valid'),
    );

    if (isEveryMessageValid && isEveryInputValid) {
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

  static resetFieldValidity(form) {
    const messages = form.querySelectorAll('output.show-message');
    const inputs = form.querySelectorAll('input');
    const textAreas = form.querySelectorAll('textarea');
    const selects = form.querySelectorAll('select');

    messages.forEach((message) => {
      message.classList.remove('valid');
      message.textContent = '';
    });

    const listOfInputElement = [...inputs];

    if (textAreas) listOfInputElement.push(...textAreas);
    if (selects) listOfInputElement.push(...selects);

    listOfInputElement.forEach((input) => {
      input.classList.remove('user-interact');
    });
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

    // if (!field.dataset.setFieldValidationValue) return;
    //  Check back why ✓ keeps been added to withdrawal output textContent after when the form is submitted and clear
    if (field.validity.valid && isFieldValid) {
      message = '&#9864;';
      validityState = 'valid';
    } else {
      message = msg;
      validityState = 'invalid';
    }

    if (message) fieldMessage.innerHTML = message;

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
