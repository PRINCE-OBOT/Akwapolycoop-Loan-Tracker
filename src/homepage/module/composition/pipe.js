function pipe(...args) {
  return (value) => args.reduce((returnValue, method) => method(returnValue), value);
}

export default pipe;
