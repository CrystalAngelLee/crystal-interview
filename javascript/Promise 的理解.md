# 说说你对 Promise 的理解

1. Promise是一种异步编程方案，为了解决回调地狱的问题

2. 有三种状态
   pending - 初始状态
   fullfilled - 成功状态
   rejected - 失败状态
3. 状态一旦改变不可更改

4. [涉及到的方法有](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Using_promises)
   .then - 放置回调函数
   .resolve - 成功后的回调函数
   .reject - 失败后的回调函数
   .catch - 捕获异常
   .finally - 无论成功还是失败都会执行的方法...

