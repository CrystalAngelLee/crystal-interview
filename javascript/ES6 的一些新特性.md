ES6 在变量的声明和定义方面增加了 let、const 声明变量，有局部变量的概念，赋值中 

有比较吸引人的结构赋值，同时 ES6 对字符串、 数组、正则、对象、函数等拓展了一 

些方法，如字符串方面的模板字符串、函数方面的默认参数、对象方面属性的简洁表达 

方式，ES6 也 引入了新的数据类型 symbol，新的数据结构 set 和 map,symbol 可以通过 

typeof 检测出来，为解决异步回调问题，引入了 promise 和 generator，还有最为吸引人 

了实现 Class 和模块，通过 Class 可以更好的面向对象编程，使用模块加载方便模块化编 

程，当然考虑到 浏览器兼容性，我们在实际开发中需要使用 babel 进行编译 

重要的特性： 

块级作用域：ES5 只有全局作用域和函数作用域，块级作用域的好处是不再需要立即执 

行的函数表达式，循环体中的闭包不再有问题 

rest 参数：用于获取函数的多余参数，这样就不需要使用 arguments 对象了， 

promise:一种异步编程的解决方案，比传统的解决方案回调函数和事件更合理强大 

模块化：其模块功能主要有两个命令构成，export 和 import，export 命令用于规定模块的 

对外接口，import 命令用于输入其他模块提供的功能

