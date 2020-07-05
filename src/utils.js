const throttle = (func, limit, ...rest) => {
  let lastFunc;
  let lastRan;
  return function innerThrottle() {
    const context = this;
    const args = rest;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};

// eslint-disable-next-line import/prefer-default-export
export { throttle };
