export default class LoginCheck {
  constructor({ loginButton, inputs, runWhenFormIsFilled }) {
    this.loginButton = loginButton;
    this.inputs = inputs;
    this.runWhenFormIsFilled = runWhenFormIsFilled;
    this.bindEvent();
  }

  bindEvent() {
    this.loginButton.addEventListener('click', this.validateIfAllInputIsFilled.bind(this));
  }

  validateIfAllInputIsFilled() {
    const isEveryInputFill = [...this.inputs].every((input) => input.value !== '');

    if (isEveryInputFill) {
      this.runWhenFormIsFilled();
    } else {
      const unfilledInputs = [...this.inputs].filter((input) => input.value === '');

      unfilledInputs.forEach((invalidInput) => {
        invalidInput.classList.add('invalid');
      });
    }
  }

  static removeInvalidHighlightFromInput({ field }) {
    if (field.classList.contains('invalid')) {
      field.classList.remove('invalid');
    }
  }
}
