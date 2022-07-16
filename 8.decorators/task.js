function cachingDecoratorNew(func) {
  let cache = [];

  function add(...args) {
    const hash = args.toString();
    const findCache = cache.find(item => item.hash === hash);
    if (findCache) {
      console.log("Из кэша: " + findCache.value);
      return "Из кэша: " + findCache.value;
    }
    if (cache.length > 5) {
      cache.shift();
    }
    let result = func(...args);
    cache.push(
      {
        hash: hash,
        value: result
      }
    );
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;    
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
