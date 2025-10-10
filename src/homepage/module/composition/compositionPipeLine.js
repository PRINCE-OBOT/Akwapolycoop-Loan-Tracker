function compositionPipeLine(...args) {
  args.reduce(
    (returnValue, method) =>
      method({ returnValue, firstCallback: compositionPipeLine.prototype.firstCallback }),
    {},
  );
}

export default compositionPipeLine;
