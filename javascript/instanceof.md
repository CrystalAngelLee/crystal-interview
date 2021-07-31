自实现一个instanceof

```js
function my_instanceof(instance, Obj) {
  if (typeof instance !== "object" || instance === "null") return false;
  let proto = Object.getPrototypeOf(instance);
  while (true) {
    if (proto === null) return false;
    if (proto === Obj.prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
}
```

