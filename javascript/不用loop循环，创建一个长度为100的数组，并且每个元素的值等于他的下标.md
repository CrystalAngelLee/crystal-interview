# 不用loop循环，创建一个长度为100的数组，并且每个元素的值等于他的下标

ES5

```js
Object.keys(Array.apply(null,{length:100}));
```

ES6

```js
Array.from(Array(100).keys()) 
```

```js
[...Array(100).keys()]
```

