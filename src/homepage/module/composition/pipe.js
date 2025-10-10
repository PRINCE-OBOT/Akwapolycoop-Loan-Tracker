function pipe(...args) {
  args.reduce(
    (returnValue, method) => method({ returnValue, firstCallback: pipe.prototype.firstCallback }),
    {},
  );
}

export default pipe;
