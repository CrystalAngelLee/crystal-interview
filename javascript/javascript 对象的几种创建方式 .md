## New

```js
var obj = new Object();
obj.name = 'object'
```

## 对象字面量

```js
var obj = { name: 'object' }
```

## Object.create

> 不会继承任何东西，包括基础方法

```js
var obj = Object.create({ name: 'object' })
```

## 工厂函数

```js
function createobj(name) {
  var o = new Object();
  o.name = name
  o.getName = function() {
    return this.name
  }
  return o
}
```

## 构造函数

```js
function Createobj(name) {
  this.name = name
  this.getName = function() {
    return this.name
  }
}

var obj = new Createobj('obj')
```

**对比工厂模式，我们可以发现以下区别：**

1.没有显示地创建对象

2.直接将属性和方法赋给了this对象

3.没有return语句

4.终于可以识别的对象的类型

**按照惯例，构造函数始终要应该以一个大写字母开头，而非构造函数则应该以一个小写字母开头**

**缺点**

每个对象里面都有公用的函数，意味着每次创建都会穿件这个函数，因此可以这个函数放到外面，但是会污染全局作用域。

就是每个方法都要在每个实例上重新创建一遍，方法指的就是我们在对象里面定义的函数。如果方法的数量很多，就会占用很多不必要的内存

## 原型

```js
function createobj = () {}
createobj.prototype.name = 'object'

var obj = new createobj()
```

## 组合使用构造函数模式和原型模式

```js
function Createobj (name) {
  this.name = name
}
Createobj.prototype = {
  constructor: Createobj,
  getName: function() {
    return this.name
  }
}
var obj = new Createobj('life')
```

