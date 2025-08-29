# Navigation

A lightweight navigation component built with **HTML, CSS, and vanilla JavaScript**.  
It allows switching between different content sections using buttons.

---

## 📂 Features

- Simple tab-style navigation.
- Active tab/button highlighted.
- Corresponding content displayed, others hidden.

---

## ⚡ Usage

### 1. HTML Structure

````html
<div class="nav-section">
  <button class="first">First</button>
  <button class="second">Second</button>
</div>

<div class="content">
  <div class="content-one">Content 1</div>
  <div class="content-two">Content 2</div>
</div>

--- ### 2. CSS Styling ```css .nav-section { display: flex; gap: 40px; } .content > * { display:
none; } .content > *.active { display: block; } .nav-section .active { background: lightblue; color:
#333; }
````

---

### 3. JavaScript Logic

```js
const btnSection = document.querySelector('.nav-section');
const contentSection = document.querySelector('.content');

class Navigation {
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
```

---

### 4. Initialization

```javascript
const btnSection = document.querySelector('.nav-section');
const contentSection = document.querySelector('.content');

new Navigation({
  btnSection: btnSection,
  contentSection: contentSection,
  activeIndex: 1, // 0 = first tab, 1 = second tab, etc.
});
```
