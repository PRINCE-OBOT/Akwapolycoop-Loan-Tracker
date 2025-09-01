/* eslint-disable prefer-destructuring */
const indexDB = {
  openRequest: null,
  version: 0,

  createDatabase({ databaseName, version }) {
    if (version <= this.version) return;

    this.version = version;

    this.openRequest = indexedDB.open(databaseName, this.version);
  },

  createObjectStore({ storeName }) {
    const isIndexDB = this.checkIfIndexedDBIsOpen();

    if (!isIndexDB.open) return;

    console.log('Did not create store', this.openRequest)
    this.openRequest.onupgradeneeded = (e) => {

      const storeHas = this.checkIfStoreHasName(storeName);
      
      if (storeHas.name) return;
      
      // eslint-disable-next-line prefer-destructuring
      const result = e.target.result;
      
      result.createObjectStore(storeName, {keyPath: 'id'});
      console.log('Run create store', this.openRequest)
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

      const previewDataStored = store.get(data.id)

      previewDataStored.onsuccess = ()=>{
        console.log(previewDataStored.result)
      }

      putData.onsuccess = () => {
        runSuccessStatus();
      };

      putData.onerror = () => {
        runErrorStatus();
      };
    };
  },

  checkIfDataExist({
    username,
    password,
    storeName,
    keyPathValue,
    runErrorStatus,
    runSuccessStatus,
  }) {
    function sentData(data) {
      if (data.username === username && data.password === password) {
        runSuccessStatus();
      } else {
        runErrorStatus();
      }
    }

    this.getData({
      storeName,
      keyPathValue,
      sentData,
    });
  },

  getData({ storeName, keyPathValue, sentData }) {
    this.openRequest.onsuccess = (e) => {
      const { result } = e.target;

      const storeHas = this.checkIfStoreHasName(storeName);

      if (!storeHas.name) return;

      const transaction = result.transaction(storeName, 'read');

      const store = transaction.objectStore(storeName);

      const request = store.get(keyPathValue);

      request.onsuccess = (event) => {
        const data = event.target.result;

        sentData(data);
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
