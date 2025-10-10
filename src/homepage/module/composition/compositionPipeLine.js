function compositionPipeLine(...args) {
  args.reduce(
    (returnValue, method) =>
      method({ returnValue, returnData: compositionPipeLine.prototype.firstCallback }),
    {},
  );
}

export default compositionPipeLine;
