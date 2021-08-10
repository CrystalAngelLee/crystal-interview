# 'use strict' 有什么用？

`use strict` 是ES5 的特性，让我们的代码在函数或者整个脚本中处于严格模式下。严格模式帮助我们在代码的早期避免BUG，并为其添加限制。

## 严格模式的一些限制

1. **变量必须声明后再使用**

2. **函数的参数不能有同名属性，否则报错**

3. **不能使用`with`语句**

4. **不能对只读属性赋值，否则报错**

5. 不能使用前缀0表示八进制数，否则报错

6. 不能删除不可删除的属性，会报错

7. **不能删除变量`delete prop`,会报错，只能删除属性`delete global[prop]`**

8. `eval` 不能在他的外层作用域引入变量

9. `eval` 和 `arguments` 不能被重新赋值

10.  `arguments` 不会自动反应函数参数的变化

11. 不能使用`arguments.callee`，`arguments.caller`

12. **禁止`this`指向全局对象**

13. 不能使用`fn.caller`和`fn.arguments` 获取函数调用的堆栈

14. 增加了保留字

## 设立严格模式的目的

1. 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;
2. 消除代码运行的一些不安全之处，保证代码运行的安全；
3. 提高编译器效率，增加运行速度；
4. 为未来新版本的Javascript做好铺垫。

​    

[参考文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)

