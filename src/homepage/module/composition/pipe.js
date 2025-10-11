function pipe(...args) {
  args.reduce(
    // The parameters are available to every callback function,
    // only function that has it respective `key` uses it
    // `returnValue` is `id`, `firstCallback` is a callback function to call
    (returnValue, method) => method({ returnValue, firstCallback: pipe.prototype.firstCallback }),
    {},
  );
}

export default pipe;
