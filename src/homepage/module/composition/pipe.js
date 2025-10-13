const pipe =
  (...args) =>
  (value) =>
    args.reduce((returnValue, method) => method(returnValue), value);

export default pipe;
