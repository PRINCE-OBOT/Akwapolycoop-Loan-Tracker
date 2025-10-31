const indexDB = {
  storeNameInStore: ['admin', 'loan-applicant-list'],

  interact(obj, functionToCall) {
    const openRequest = indexedDB.open('akp-loan-tracker', 35);

    openRequest.onupgradeneeded = (e) => {
      const db = e.target.result;

      // insert individual store to be deleted
      // db.deleteObjectStore('loan-applicant-list');
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

    // db.createObjectStore(storeName, { keyPath: 'id' });
    // uncomment bellow for autoIncrement
    db.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true });
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
    {
      storeName,
      keyPathValue,
      newValue,
      firstKey,
      secondKey,
      uniqueID,
      uniqueIDKey,
      getMethod,
      trueState,
      undefinedState,
    },
    db,
  ) {
    function returnData(data) {
      if (data === undefined) {
        undefinedState();
        return;
      }

      modifyDataHandler({ data, firstKey, secondKey, uniqueID, uniqueIDKey, newValue });

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

function modifyDataHandler({ data, firstKey, secondKey, uniqueID, uniqueIDKey, newValue }) {
  const DBKeyHandler = {
    String: (key, index) => {
      data[key] = newValue[index][key];
    },

    Object: (key, index) => {
      data[key][secondKey[index]] = newValue[index][secondKey[index]];
    },

    Array: (key, index) => {
      const result = data[key].find((obj) => obj[uniqueIDKey] === uniqueID);
      result[secondKey[index]] = newValue[index][secondKey[index]];
    },
  };

  firstKey.forEach((key, index) => {
    const firstKeyType = Object.prototype.toString.call(data[key]).slice(8, -1);

    firstKeyType !== 'Object' && firstKeyType !== 'Array'
      ? DBKeyHandler.String(key, index)
      : DBKeyHandler[firstKeyType](key, index);
  });
}

export default indexDB;
