# promise 和 async await 的区别，使用场景

`async`和`await`是用来处理异步的。即你需要异步像同步一样执行，需要异步返回结果之后，再往下依据结果继续执行。
`async` 是“异步”的简写，而 `await` 可以认为是 `async wait` 的简写。
`async` 用于申明一个 `function` 是异步的，而 `await` 用于等待一个异步方法执行完成。

 

async和promise都是异步方法，区别是async生成的结果是promise对象，async是promise的终结版。

await只能在async中使用，await是阻塞的意思，就是暂停，你一起调用2个接口，第一个执行完，不输出结果，要等最第二个接口执行完，才返回这两个的结果。

