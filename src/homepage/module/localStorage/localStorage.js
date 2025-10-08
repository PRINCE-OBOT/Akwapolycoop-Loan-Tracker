const registerLocalStorageCustomMethod = () => {
  localStorage.__proto__.setData = function ({ key, data }) {
    const stringifyData = JSON.stringify(data);

    localStorage.setItem(key, stringifyData);
  };

  localStorage.__proto__.getData = function ({ key }) {
    const stringifyData = localStorage.getItem(key);

    return JSON.parse(stringifyData);
  };

  localStorage.__proto__.modifyData = function ({ key, objKeys, newValue }) {
    const data = localStorage.getData({ key });

    if (!data) return;

    objKeys.forEach((objKey) => {
      data[objKey] = newValue[objKey];
    });

    localStorage.setItem({ key, data });
  };
};

export default registerLocalStorageCustomMethod;
