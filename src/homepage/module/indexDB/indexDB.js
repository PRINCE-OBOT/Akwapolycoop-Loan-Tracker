const indexDB = {
  storeNameInStore: ['admin', 'loan-applicant-list'],

  interact(obj, functionToCall) {
    const openRequest = indexedDB.open('akp-loan-tracker', 33);

    openRequest.onupgradeneeded = (e) => {
      const db = e.target.result;

      // insert individual store to be deleted
      // db.deleteObjectStore('admin');
      indexDB.storeNameInStore.forEach((storeName) => {
        // uncomment bellow to delete all store
        // db.deleteObjectStore(storeName);
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

    db.createObjectStore(storeName, { keyPath: 'id' });
    // uncomment bellow for autoIncrement
    // db.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true });
  },

  storeData({ storeName, data, trueState, undefinedState }, db) {
    const transaction = db.transaction(storeName, 'readwrite');

    const store = transaction.objectStore(storeName);

    const putData = store.put(data);

    putData.onsuccess = (e) => {
      trueState(e.target.result);
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
        if (
          data[i].signUpData.username === username.value &&
          data[i].signUpData.password === password.value
        ) {
          trueState(data[i].id);
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

  checkIfUserAlreadyHaveAccount(
    { storeName, getMethod, firstName, lastName, email, trueState, falseState },
    db,
  ) {
    function returnData(data) {
      for (let i = 0; i < data.length; i++) {
        if (
          (data[i].signUpData.firstName.toLowerCase() === firstName.value.toLowerCase() &&
            data[i].signUpData.lastName.toLowerCase() === lastName.value.toLowerCase()) ||
          data[i].signUpData.email.toLowerCase() === email.value.toLowerCase()
        ) {
          trueState();
          return;
        }
      }
      falseState();
    }

    this.getData({ storeName, getMethod, returnData }, db);
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
