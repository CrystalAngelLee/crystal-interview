# js中有哪些对象是可迭代的

- Set
- Map
- String
- Array
- Arguments
- NodeList

# 扩展问题

## 如何判断一个对象是可迭代的

判断数据是否具有 `Symbol.iterator`属性

> `Array.prototype[Symbol.iterator]`是一个函数，执行完函数返回的一个对象，对象拥有`next`方法

```js
console.log(Array.prototype.hasOwnProperty(Symbol.iterator));
console.log(Set.prototype.hasOwnProperty(Symbol.iterator));
```

