# 说说你对 AMD 和 Commonjs 的理解

- CommonJS是服务器端模块的规范，Node.js采用了这个规范。
- CommonJS规范加载模块是同步的，也就是说，只有加载完成，才能执行后面的操作。
- AMD规范则是非同步加载模块，允许指定回调函数。

- AMD推荐的风格通过返回一个对象做为模块对象，
- CommonJS的风格通过对module.exports或exports的属性赋值来达到暴露模块对象的目的。

