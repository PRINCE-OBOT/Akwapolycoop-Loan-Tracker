export default class Navigation {
  constructor({ btnSection, contentSection, activeIndex }) {
    this.btnSection = btnSection;
    this.contentSection = contentSection;
    this.activeIndex = activeIndex;

    this.btns = [...btnSection.children];
    this.contents = [...contentSection.children];

    this.activeBtn = this.btns[activeIndex];
    this.activeContent = this.contents[activeIndex];

    this.render();
  }

  render() {
    this.hightLightActiveBtn();
    this.navigateContent();
    this.bindEvent();
  }

  bindEvent() {
    this.btnSection.addEventListener('click', this.handleNavigationLogic.bind(this));
  }

  navigateContent() {
    this.activeContent.classList.add('active');
  }

  hightLightActiveBtn() {
    this.activeBtn.classList.add('active');
  }

  handleNavigationLogic(e) {
    this.activeIndex = this.btns.indexOf(e.target);

    if (this.activeIndex < 0) return;

    this.updateActiveBtn();
    this.updateActiveContent();

    this.hightLightActiveBtn();
    this.navigateContent();
  }

  updateActiveContent() {
    this.activeContent.classList.remove('active');

    this.activeContent = this.contents[this.activeIndex];
  }

  updateActiveBtn() {
    this.activeBtn.classList.remove('active');

    this.activeBtn = this.btns[this.activeIndex];
  }
}
