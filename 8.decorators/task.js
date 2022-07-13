function cachingDecoratorNew(func) {
  let cache = {};

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
  let flag = false;

  return function () {
    if (flag) {
      return;
    }
    flag = true;
    setTimeout(() => {
      flag = false;
      func();
    }, ms);
  };
}

function debounceDecorator2(func, ms) {
  let flag = false;

  function wrapper() {
    wrapper.count += 1;
    if (flag) {
      return;
    }
    flag = true;
    setTimeout(() => {
      flag = false;
      func();
    }, ms);
  };

  wrapper.count = 0;
  return wrapper;
}
