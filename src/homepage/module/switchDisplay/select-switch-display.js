export default class SelectSwitchDisplay {
  constructor({ select, input }) {
    this.select = select;
    this.input = input;

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
    this.input.classList.add('hide');
  }

  showElement() {
    this.input.classList.remove('hide');
  }
}
