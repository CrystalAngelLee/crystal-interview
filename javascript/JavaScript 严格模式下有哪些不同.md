- 严格模式对 JavaScript 的语法和行为，都做了一些改变。
  严格模式下，变量必须先声明再使用，严禁删除已经声明变量。
  严格模式下，预编译时 this 为 undefined。
  严格模式下，不支持arguments、caller、callee、with。
  严格模式下，在函数内部对修改参数不会反映到 arguments 中，淘汰了 arguments.callee 和 arguments.caller， 抛弃 with 语句。
  严格模式下，不可在 if 内部声明函数
  严格模式下，拒绝重复的属性和参数。
  严格模式下，局部的this必须被赋值、赋值什么就是什么。

- 严格模式下 this 指向问题
  ① 以前在全局作用域函数中的 this 指向 window 对象。严格模式下全局作用域中函数中的 this 是 undefined。

  ② 以前构造函数不加 new 也可以调用，当普通函数，this 指向全局对象。严格模式下，如果构造函数不加 new 调用， this 指向的是 undefined ，如果给他赋值则会报错 。