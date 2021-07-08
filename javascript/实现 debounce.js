/**
 * 创建一个 debounced（防抖动）函数，该函数会从上一次被调用后，延迟 wait 毫秒后调用 func 方法。
 */
function debounce(fn, delay) {
  let timer;
  return function () {
    let context = this;
    let args = arguments;
    timer && clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}

const a = {
  name: "test-debounce",
  log: debounce(function (a) {
    console.log("test");
    console.log(this.name);
    console.log(a);
  }, 100),
};

// a.log();
// a.log(123); //'test' 'test-debounce' 123
