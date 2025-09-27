export default class Modal {
  constructor({ btnShowModal, dialog }) {
    this.btnShowModal = btnShowModal;
    this.dialog = dialog;

    this.bindEvent();
  }

  bindEvent() {
    if (!this.btnShowModal) return;
    this.btnShowModal.addEventListener('click', this.showModal.bind(this));
  }

  showModal() {
    this.dialog.showModal();
  }
}
