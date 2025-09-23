import FormUtility from './form-utility';

export default class AddressValidator {
  constructor({ address, addressMessage }) {
    this.address = address;
    this.addressMessage = addressMessage;
    this.bindEvent();
  }

  bindEvent() {
    this.address.addEventListener('input', this.validateAddress.bind(this));
  }

  validateAddress() {
    FormUtility.hasUserInteract({
      field: this.address,
    });

    FormUtility.removeInvalidHighlightFromInput({
      field: this.address,
    });

    const nameField = FormUtility.resetFieldStyle({
      field: this.address,
      fieldMessage: this.addressMessage,
    });
    if (nameField.empty) return;

    const pattern = /(?=.*\s)(?=.*[a-zA-Z])(?=.*[0-9]).{20,}/;

    const isAddressValid = pattern.test(this.address.value);

    FormUtility.validateClientAndServerState({
      field: this.address,
      isFieldValid: isAddressValid,
      fieldMessage: this.addressMessage,
      msg: 'Address not Descriptive',
    });
  }
}
