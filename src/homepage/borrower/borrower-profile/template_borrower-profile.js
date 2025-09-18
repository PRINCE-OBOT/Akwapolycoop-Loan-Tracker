// import './template_borrower-profile.css'
// import '../../admin/admin-sign-up/template_admin-sign-up.css';
// import '../../assets/reset.css';
// import '../../assets/font.css';
// import '../../assets/common_general.css';
// import '../../assets/style-border-button.css';

// import indexDB from '../../module/indexDB/indexDB';

// import Modal from '../../module/modal/modal';

// const btnLogout = document.querySelector('.logout-button');
// const dialog = document.querySelector('dialog');
// const btnCancel = dialog.querySelector('.btn-cancel');
// const btnYes = dialog.querySelector('.btn-yes');

// const greeting = document.querySelector(".greeting")

// new Modal({ btnShowModal: btnLogout, btnCloseModal: btnCancel, dialog });
// new Modal({ btnShowModal: btnLogout, btnCloseModal: btnYes, dialog });

// class BorrowerProfileManager {
//   constructor({}) {
//     this.render();
//   }

//   render() {
//     this.getBorrowerDataFromDatabase();
//     this.bindEvent();
//   }

//   bindEvent() {
//     this.btnYes.addEventListener('click', this.logoutBorrower.bind(this));
//   }

//   returnData(data) {
//     if (data === undefined) {
//       this.setGreetingTextContent('You do not have a data');
//       return;
//     }

//     greeting.textContent = data.firstName;
//   }

//   getBorrowerDataFromDatabase() {
//     indexDB.createDatabase(
//       {
//         storeName: 'recent-borrower-data',
//         keyPathValue: 'borrower',
//         returnData: this.returnData.bind(this),
//       },
//       'getData',
//     );
//   }

//   logoutBorrower() {
//     indexDB.createDatabase(
//       {
//         storeName: 'recent-borrower-data',
//         keyPathValue: 'borrower',
//         newValue: { isBorrowerLogin: false },
//         keys: ['isBorrowerLogin'],
//         trueState: this.checkIfBorrowerProfileIsGenerated.bind(this),
//         undefinedState: this.keyValueDoesNotExist.bind(this),
//       },
//       'modifyData',
//     );
//   }
// }

// new BorrowerProfileManager({

// })
