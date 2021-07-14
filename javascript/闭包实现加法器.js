function add(...args) {
  const getSum = (a, b, c) => a + b + c;
  if (args.length === getSum.length) return getSum(...args);

  return function addFun() {
    return add(...args.concat(Array.from(arguments)));
  };
}

console.log(add(1, 2, 3));
console.log(add(1, 2)(3));
console.log(add(1)(2)(3));
