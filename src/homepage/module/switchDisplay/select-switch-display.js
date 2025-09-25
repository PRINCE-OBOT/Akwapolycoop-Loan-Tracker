export default class SelectSwitchDisplay {
  constructor({ select, inputs, container }) {
    this.select = select;
    this.inputs = inputs;
    this.container = container;

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
      input.remove();
    });
  }

  showElement() {
    this.inputs.forEach((input) => {
      this.container.append(input);
    });
  }
}
