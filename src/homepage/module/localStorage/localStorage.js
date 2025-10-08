localStorage.__proto__setData = function ({ key, value }) {
  const stringifyValue = JSON.stringify(value);

  localStorage.setItem(key, stringifyValue);
};

localStorage.__proto__getData = function ({ key }) {
  const data = localStorage.getItem(key);

  return JSON.parse(data);
};
