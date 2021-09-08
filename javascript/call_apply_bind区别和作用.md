## API

```js
func.call(thisArg, param1, param2, ...)
func.apply(thisArg, [param1,param2,...])
func.bind(thisArg, param1, param2, ...)
```

**说明**

- func 是要调用的函数
- thisArg 一般为 this 所指向的对象
- param1、2 为函数 func 的多个参数，如果 func 不需要参数，则后面的 param1、2 可以不写



## 作用

改变函数 func 的 this 指向



## call 和 apply 的区别

传参的写法不同：apply 的第 2 个参数为数组； call 则是从第 2 个至第 N 个都是给 func 的传参



## bind 和 (call、apply) 的区别

bind 虽然改变了 func 的 this 指向，但不是马上执行，而这两个（call、apply）是在改变了函数的 this 指向之后立马执行

# 扩展问题

call 和 apply的区别是什么，那个性能更好一些？

call和apply都是改变this指向的，

call传参是一个一个传进来的，apply是将所有以数组的形式传进来的

Fn.call(obj, 10,20, 30) // 不固定到底有多少参数

Fn.apply(obj, [10, 20, 30]);

都是function上面的实例

类似Bind 没有一开始将函数执行，只是预处理了this 

传3个参数以内，性能差不多，超过三个的话call的性能要比apply好一些



let arr = [10, 20, 30], obj={};

Function fn(x, y, z) {}

fn.apply(obj, arr)  // x=10 y=20 z=30

fn.call(obj, arr);	// x=[10]

fn.call(obj, ...arr); // 基于ES6 的展开运算符
