export default class SelectSwitchDisplay {
  constructor({ select, inputs }) {
    this.select = select;
    this.inputs = inputs;

    this.render();
  }

  render() {
    this.bindEvent();
    this.switchDisplayLogic();
  }

  bindEvent() {
    this.select.addEventListener('change', this.switchDisplayLogic.bind(this));
  }

  switchDisplayLogic() {
    const selectedOption = this.select.options[this.select.selectedIndex];

    const switcher = selectedOption.dataset.switch;

    if (!switcher) return;

    this[switcher]();
  }

  hideElement() {
    this.inputs.forEach((input) => {
      input.classList.add('hide');
    });
  }

  showElement() {
    this.inputs.forEach((input) => {
      input.classList.remove('hide');
    });
  }
}
