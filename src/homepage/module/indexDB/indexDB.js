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
    { username, password, storeName, getMethod, keyPathValue, undefinedState, trueState },
    db,
  ) {
    function returnData(data) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].username === username.value && data[i].password === password.value) {
          trueState();
          return;
        }
      }
      undefinedState();
    }
    this.getData(
      {
        storeName,
        getMethod,
        keyPathValue,
        returnData,
      },
      db,
    );
  },

  checkIfThereIsRecentData({ storeName, getMethod, keyPathValue, undefinedState, trueState }, db) {
    function returnData(data) {
      if (data !== undefined) {
        if (data.id) {
          trueState();
          return;
        }
      }
      undefinedState();
    }

    this.getData(
      {
        storeName,
        keyPathValue,
        getMethod,
        returnData,
      },
      db,
    );
  },
  checkStateOfData({ storeName, key, getMethod, keyPathValue, undefinedState, trueState }, db) {
    function returnData(data) {
      if (data !== undefined) {
        if (data[key]) {
          trueState();
          return;
        }
        undefinedState();
      }
      undefinedState();
    }

    this.getData(
      {
        storeName,
        keyPathValue,
        getMethod,
        returnData,
      },
      db,
    );
  },

  checkIfUserAlreadyHaveAccount(
    { storeName, getMethod, firstName, lastName, email, trueState, falseState },
    db,
  ) {
    function returnData(data) {
      for (let i = 0; i < data.length; i++) {
        if (
          (data[i].firstName.toLowerCase() === firstName.value.toLowerCase() &&
            data[i].lastName.toLowerCase() === lastName.value.toLowerCase()) ||
          data[i].email.toLowerCase() === email.value.toLowerCase()
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
      if (data === undefined) {
        undefinedState();
        return;
      }

      keys.forEach((key) => {
        data[key] = newValue[key];
      });
      indexDB.storeData({ storeName, data, trueState, undefinedState }, db);
    }

    this.getData({ storeName, keyPathValue, getMethod, returnData }, db);
  },
  getData({ storeName, keyPathValue, getMethod, returnData, undefinedState }, db) {
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

    request.onerror = () => {
      undefinedState();
    };
  },

  deleteKey({ storeName, keyPathValue, trueState, undefinedState }, db) {
    const storeHas = this.checkIfStoreHasName({ storeName }, db);

    if (!storeHas.name) return;
    const transaction = db.transaction(storeName, 'readwrite');

    const store = transaction.objectStore(storeName);

    const deleteRequest = store.delete(keyPathValue);

    deleteRequest.onsuccess = () => {
      trueState();
    };

    deleteRequest.onerror = () => {
      undefinedState();
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
