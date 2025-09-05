export default class Modal {
  constructor({ btnShowModal, btnCloseModal, dialog }) {
    this.btnShowModal = btnShowModal;
    this.btnCloseModal = btnCloseModal;
    this.dialog = dialog;
    this.bindEvent();
  }

  bindEvent() {
    if (!this.btnShowModal || !this.btnCloseModal) return;

    this.btnShowModal.addEventListener('click', this.showModal.bind(this));

    this.btnCloseModal.addEventListener('click', this.closeModal.bind(this));
  }

  showModal() {
    this.dialog.showModal();
  }

  closeModal() {
    this.dialog.close();
  }
}
