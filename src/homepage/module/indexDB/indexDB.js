const indexDB = {
  openRequest: null,

  createDatabase() {
    this.openRequest = indexedDB.open('akp-loan-tracker', 3);
  },

  createObjectStore({ storeName }) {
    const isIndexDB = this.checkIfIndexedDBIsOpen();

    if (!isIndexDB.open) return;

    this.openRequest.onupgradeneeded = (e) => {
      const storeHas = this.checkIfStoreHasName(storeName);

      if (storeHas.name) return;

      const result = e.target.result;

      result.createObjectStore(storeName, { keyPath: 'id' });
      console.log('Run create store', this.openRequest);
    };
  },

  storeData({ storeName, data, runSuccessStatus, runErrorStatus }) {
    const isIndexDB = this.checkIfIndexedDBIsOpen();

    if (!isIndexDB.open) return;

    this.openRequest.onsuccess = (e) => {
      const result = e.target.result;

      const storeHas = this.checkIfStoreHasName(storeName);

      if (!storeHas.name) return;

      const transaction = result.transaction(storeName, 'readwrite');

      const store = transaction.objectStore(storeName);

      const putData = store.put(data);

      const previewDataStored = store.get(data.id);

      previewDataStored.onsuccess = () => {
        console.log(previewDataStored.result);
      };

      putData.onsuccess = () => {
        runSuccessStatus();
      };

      putData.onerror = () => {
        runErrorStatus();
      };
    };
  },

  checkIfDataMatch({
    username,
    password,
    storeName,
    keyPathValue,
    runErrorStatus,
    runSuccessStatus,
  }) {
    function returnData(data) {
      if (data.username === username && data.password === password) {
        runSuccessStatus();
        console.log(data);
      } else {
        runErrorStatus();
      }
    }

    this.getData({
      storeName,
      keyPathValue,
      returnData,
    });
  },

  checkIfKeyValueExist({ storeName, keyPathValue, runErrorStatus, runSuccessStatus }) {
    function returnData(data) {
      if (data === undefined) {
        runErrorStatus();
        return;
      }
      runSuccessStatus();
    }

    this.getData({
      storeName,
      keyPathValue,
      returnData,
    });
  },
  getData({ storeName, keyPathValue, returnData }) {
    this.openRequest.onsuccess = (e) => {
      const result = e.target.result;

      const storeHas = this.checkIfStoreHasName(storeName);

      if (!storeHas.name) return;

      const transaction = result.transaction(storeName, 'readwrite');

      const store = transaction.objectStore(storeName);

      const request = store.get(keyPathValue);

      request.onsuccess = (event) => {
        const data = event.target.result;

        returnData(data);
      };
    };
  },

  checkIfIndexedDBIsOpen() {
    if (!this.openRequest) {
      alert('Database not open');
      return {
        open: false,
      };
    }

    return {
      open: true,
    };
  },

  checkIfStoreHasName(storeName) {
    const result = this.openRequest.result;

    if (result.objectStoreNames.contains(storeName))
      return {
        name: true,
      };
    return {
      name: false,
    };
  },
};

export default indexDB;
