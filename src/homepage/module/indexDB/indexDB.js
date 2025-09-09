const indexDB = {
  storeNameInStore: [
    'admin-data',
    'admin-dashboard-loan-data',
    'borrower-loan-applicant-list',
    'borrower-sign-up-list',
    'borrower-recently-sign-up',
    'borrower-recently-loan-applicant',
  ],

  createDatabase(obj, functionToCall) {
    const openRequest = indexedDB.open('akp-loan-tracker', 28);

    openRequest.onupgradeneeded = (e) => {
      const db = e.target.result;

      indexDB.storeNameInStore.forEach((storeName) => {
        this.createObjectStore({ storeName }, db);
      });
    };

    openRequest.onsuccess = (e) => {
      const db = e.target.result;

      this[functionToCall](obj, db);
    };
  },

  createObjectStore({ storeName }, db) {
    const storeHas = this.checkIfStoreHasName({ storeName }, db);
    if (storeHas.name) return;

    db.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true });
  },

  storeData({ storeName, data, trueState, undefinedState }, db) {
    const transaction = db.transaction(storeName, 'readwrite');

    const store = transaction.objectStore(storeName);

    const putData = store.put(data);

    putData.onsuccess = () => {
      trueState();
    };

    putData.onerror = () => {
      undefinedState();
    };
  },

  checkIfLoginDetailsMatch(
    { username, password, storeName, keyPathValue, undefinedState, trueState },
    db,
  ) {
    function returnData(data) {
      if (!data) {
        undefinedState();
        return;
      }

      if (data.username === username && data.password === password) {
        trueState();
      } else {
        undefinedState();
      }
    }

    this.getData(
      {
        storeName,
        keyPathValue,
        returnData,
      },
      db,
    );
  },

  checkKeysValueState(
    { storeName, keys, keyPathValue, undefinedState, trueState, falseState },
    db,
  ) {
    function returnData(data) {
      if (data !== undefined) {
        if (data[keys]) {
          trueState();
          return;
        }
        falseState();
        return;
      }
      undefinedState();
    }

    this.getData(
      {
        storeName,
        keyPathValue,
        returnData,
      },
      db,
    );
  },

  checkIfDataExist(
    { storeName, getMethod, firstName, lastName, email, trueState, falseState },
    db,
  ) {
    function returnData(data) {
      for (let i = 0; i < data.length; i++) {
        if (
          (data[i].firstName === firstName.value && data[i].lastName === lastName.value) ||
          data[i].email === email.value
        ) {
          trueState();
          return;
        }
      }
      falseState();
    }

    this.getData(
      {
        storeName,
        getMethod,
        returnData,
      },
      db,
    );
  },
  modifyData(
    { storeName, keys, keyPathValue, newValue, getMethod, trueState, undefinedState },
    db,
  ) {
    function returnData(data) {
      keys.forEach((key) => {
        data[key] = newValue[key];
      });
      indexDB.storeData({ storeName, data, trueState, undefinedState }, db);
    }

    this.getData({ storeName, keyPathValue, getMethod, returnData }, db);
  },
  getData({ storeName, keyPathValue, getMethod, returnData }, db) {
    const storeHas = this.checkIfStoreHasName({ storeName }, db);

    if (!storeHas.name) return;

    const transaction = db.transaction(storeName, 'readwrite');

    const store = transaction.objectStore(storeName);

    const listOfGetMethod = {
      getAll() {
        return store.getAll();
      },
      get() {
        return store.get(keyPathValue);
      },
    };

    const request = listOfGetMethod[getMethod]();

    request.onsuccess = (event) => {
      const data = event.target.result;

      returnData(data);
    };
  },

  checkIfStoreHasName({ storeName }, db) {
    if (db.objectStoreNames.contains(storeName)) {
      return {
        name: true,
      };
    }
    return {
      name: false,
    };
  },
};

export default indexDB;
