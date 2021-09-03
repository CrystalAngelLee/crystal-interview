## 手写bind 函数

```js
Function.prototype.bind = function(context, ...arg) {
  if (typeof this !== 'function') throw new Error('this must be a function')
}
```

