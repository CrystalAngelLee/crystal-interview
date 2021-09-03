# 说一下Promise.all

1. `Promise.all()`方法用于将多个 Promise 实例，包装成一个新的 Promise 实例
2. 接受一个数组作为参数, 如果不是 Promise 实例，就会先调用Promise.resolve()方法，将参数转为 Promise 实例，再进一步处理
3. 只要任何一个输入的promise的reject回调执行或者输入不合法的promise就会立即抛出错误，并且reject的是第一个抛出的错误信息

## 扩展问题

### **说一下 Promise.allSettled()**

1. 接受一个数组作为参数，数组的每个成员都是一个 Promise 对象，并返回一个新的 Promise 对象。
2. 只有等到参数数组的所有 Promise 对象都发生状态变更（不管是`fulfilled`还是`rejected`），返回的 Promise 对象才会发生状态变更。

### **说一下 Promise.race()**

1. `Promise.all()`方法用于将多个 Promise 实例，包装成一个新的 Promise 实例
2. 接受一个数组作为参数, 如果不是 Promise 实例，就会先调用Promise.resolve()方法，将参数转为 Promise 实例，再进一步处理
3. 一旦迭代器中的某个promise解决或拒绝，返回的 promise就会解决或拒绝

### **说一下 Promise.any()**

1. 只要参数实例有一个变成`fulfilled`状态，包装实例就会变成`fulfilled`状态；如果所有参数实例都变成`rejected`状态，包装实例就会变成`rejected`状态
2. `Promise.any()`跟`Promise.race()`方法很像，只有一点不同，就是`Promise.any()`不会因为某个 Promise 变成`rejected`状态而结束，必须等到所有参数 Promise 变成`rejected`状态才会结束

### **说一下 Promise.resolve()**

1. `Promise.resolve(value)`方法返回一个以给定值解析后的[`Promise`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 对象。
2. 如果这个值是一个 promise ，那么将返回这个 promise ；
3. 如果这个值是thenable（即带有[`"then" `](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)方法），返回的promise会“跟随”这个thenable的对象，采用它的最终状态；
4. 否则返回的promise将以此值完成。

### **他们几个的区别是什么**



### 怎么捕获异常

.catch

### Promise.all 遇到异常最后返回结果是什么

https://blog.csdn.net/Elanenrich123/article/details/88410933
