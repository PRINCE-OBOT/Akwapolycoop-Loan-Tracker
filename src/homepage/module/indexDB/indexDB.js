const indexDB = {
  storeNameInStore: ['admin-data', 'admin-dashboard-loan-data', 'borrower-data'],

  createDatabase(obj, functionToCall) {
    const openRequest = indexedDB.open('akp-loan-tracker', 19);

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

    db.createObjectStore(storeName, { keyPath: 'id' });
  },

  storeData({ storeName, data, runSuccessStatus, runErrorStatus }, db) {
    const transaction = db.transaction(storeName, 'readwrite');

    const store = transaction.objectStore(storeName);

    const putData = store.put(data);

    const previewDataStored = store.get(data.id);

    previewDataStored.onsuccess = () => {
      console.log('Preview Data', previewDataStored.result);
    };

    putData.onsuccess = () => {
      runSuccessStatus();
    };

    putData.onerror = () => {
      runErrorStatus();
    };
  },

  checkIfLoginDetailsMatch(
    { username, password, storeName, keyPathValue, runErrorStatus, runSuccessStatus },
    db,
  ) {
    function returnData(data) {
      if (!data) {
        runErrorStatus();
        return;
      }

      if (data.username === username && data.password === password) {
        runSuccessStatus();
      } else {
        runErrorStatus();
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

  checkIfKeyPathValueExistAndFieldIsTrue(
    { storeName, keys, keyPathValue, runErrorStatus, runSuccessStatus, runFairStatus },
    db,
  ) {
    function returnData(data) {
      if (data !== undefined) {
        if (data[keys]) {
          runSuccessStatus();
          return;
        }
        runFairStatus();
        return;
      }
      runErrorStatus();
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
  modifyData({ storeName, keys, keyPathValue, newValue, runSuccessStatus, runErrorStatus }, db) {
    function returnData(data) {
      keys.forEach((key) => {
        data[key] = newValue[key];
      });
      indexDB.storeData({ storeName, data, runSuccessStatus, runErrorStatus }, db);
    }

    this.getData({ storeName, keyPathValue, returnData }, db);
  },
  getData({ storeName, keyPathValue, returnData }, db) {
    const storeHas = this.checkIfStoreHasName({ storeName }, db);

    if (!storeHas.name) return;

    const transaction = db.transaction(storeName, 'readwrite');

    const store = transaction.objectStore(storeName);

    const request = store.get(keyPathValue);

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
