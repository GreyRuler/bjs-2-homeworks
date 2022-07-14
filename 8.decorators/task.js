function cachingDecoratorNew(func) {
  let cache = [];

  function add(...args) {
    const hash = args.toString();
    if (hash in cache) {
      console.log("Из кэша: " + cache[hash]);
      return "Из кэша: " + cache[hash];
    } else {
      if (cache.length > 5) {
        delete cache[0];
      }
      let result = func(...args);
      cache[hash] = result;
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;
    }
  }

  return add;
}

function debounceDecoratorNew(func, ms) {
  let flag = false
  let timeout;

  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
      console.timeEnd("time");
    }, ms);
    if (flag) {
      return;
    }
    flag = true;
    func(...args);
  };
}

function debounceDecorator2(func, ms) {
  let flag = false;
  let timeout;

  function wrapper(...args) {
    wrapper.count += 1;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, ms);
    if (flag) {
      return;
    }
    flag = true;
    func(...args);
  };

  wrapper.count = 0;
  return wrapper;
}
