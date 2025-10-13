// import eventBus from "../event-bus/event";

// const DialogManager = () => {
//   const dialog = document.createElement('dialog');
//   document.body.append(dialog);

//   const formWithOptions = createOptionsForm();
//   const { formForStatus, status } = createStatusForm();

//   const FormState = {
//     formWithOptions: () => dialog.append(formWithOptions),
//     formForStatus: () => dialog.append(formForStatus),
//     statusText: (detail) => {
//       status.textContent = detail.text;
//       FormState.formForStatus();
//     },
//   };

//   // set content inside the dialog
//   const bindAddContentToDialogEvent = () =>
//     eventBus.addEventListener('add-content-to-dialog', appendFormToDialog);

//   const appendFormToDialog = (e) => {
//     const detail = e.detail;

//     dialog.innerHTML = '';
//     dialog.setAttribute('closedby', detail.closedByValue);

//     FormState[detail.formState](detail);
//   };

//   // handle dialog display
//   const bindShowModalEvent = () => eventBus.addEventListener('show-modal', showModal);

//   const showModal = () => {
//     dialog.showModal();
//   };

//   return { bindAddContentToDialogEvent, bindShowModalEvent };
// };

// const formForStatusEvent = new CustomEvent('add-content-to-dialog', {
//   detail: {
//     formState: 'formForStatus',
//     closedByValue: 'any',
//   },
// });

// const formWithOptionsEvent = new CustomEvent('add-content-to-dialog', {
//   detail: {
//     formState: 'formWithOptions',
//     closedByValue: 'closerequest',
//   },
// });

// const showModalEvent = new CustomEvent('show-modal');

// export { formForStatusEvent, formWithOptionsEvent, showModalEvent, DialogManager };
