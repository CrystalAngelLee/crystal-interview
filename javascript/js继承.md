# JS 继承的实现

## 原型链继承

每一个构造函数都有一个原型对象，原型对象又包含一个指向构造函数的指针，而实例则包含一个原型对象的指针

```js
function Parent1() {
  this.name = 'parent1';
  this.play = [1, 2, 3]
}
function Child1() {
  this.type = 'child2';
}
Child1.prototype = new Parent1();
console.log(new Child1());
```



## 构造函数继承（借助 call）

```js
function Parent1(){
  this.name = 'parent1';
}

Parent1.prototype.getName = function () {
  return this.name;
}

function Child1(){
  Parent1.call(this);
  this.type = 'child1'
}

let child = new Child1();
console.log(child);  // 没问题
console.log(child.getName());  // 会报错
```



## 组合继承（前两种组合）

缺点： Parent3执行了两次

```js
function Parent3 () {
  this.name = 'parent3';
  this.play = [1, 2, 3];
}

Parent3.prototype.getName = function () {
  return this.name;
}
function Child3() {
  // 第二次调用 Parent3()
  Parent3.call(this);
  this.type = 'child3';
}

// 第一次调用 Parent3()
Child3.prototype = new Parent3();
// 手动挂上构造器，指向自己的构造函数
Child3.prototype.constructor = Child3;
var s3 = new Child3();
var s4 = new Child3();
s3.play.push(4);
console.log(s3.play, s4.play);  // 不互相影响
console.log(s3.getName()); // 正常输出'parent3'
console.log(s4.getName()); // 正常输出'parent3'
```



## 原型式继承

 ES5 - Object.create 方法，这个方法接收两个参数：一是用作新对象原型的对象、二是为新对象定义额外属性的对象（可选参数）

缺点：多个实例的引用类型属性指向相同的内存，存在篡改的可能

```js
let parent4 = {
  name: "parent4",
  friends: ["p1", "p2", "p3"],
  getName: function() {
    return this.name;
  }
};

let person4 = Object.create(parent4);
person4.name = "tom";
person4.friends.push("jerry");

let person5 = Object.create(parent4);
person5.friends.push("lucy");

console.log(person4.name);
console.log(person4.name === person4.getName());
console.log(person5.name);
console.log(person4.friends);
console.log(person5.friends);
```



## 寄生式继承

> 使用原型式继承可以获得一份目标对象的浅拷贝，然后利用这个浅拷贝的能力再进行增强，添加一些方法，这样的继承方式就叫作寄生式继承
>
> 虽然其优缺点和原型式继承一样，但是对于普通对象的继承方式来说，寄生式继承相比于原型式继承，还是在父类基础上添加了更多的方法

```js
let parent5 = {
  name: "parent5",
  friends: ["p1", "p2", "p3"],
  getName: function() {
    return this.name;
  }
};

function clone(original) {
  let clone = Object.create(original);
  clone.getFriends = function() {
    return this.friends;
  };
  return clone;
}

let person5 = clone(parent5);

console.log(person5.getName());
console.log(person5.getFriends());
```



## 寄生组合式继承

```js
function clone (parent, child) {
  // 这里改用 Object.create 就可以减少组合继承中多进行一次构造的过程
  child.prototype = Object.create(parent.prototype);
  child.prototype.constructor = child;
}

function Parent6() {
  this.name = 'parent6';
  this.play = [1, 2, 3];
}
Parent6.prototype.getName = function () {
  return this.name;
}
function Child6() {
  Parent6.call(this);
  this.friends = 'child5';
}

clone(Parent6, Child6);

Child6.prototype.getFriends = function () {
  return this.friends;
}

let person6 = new Child6();
console.log(person6);
console.log(person6.getName());
console.log(person6.getFriends());
```



# 优缺点

| 继承方式       | 优点                                                         | 缺点                                                         |
| -------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 原型链继承     | 实现了继承                                                   | 内存空间是共享的，当一个发生变化的时候，另外一个也随之进行了变化 |
| 构造函数继承   | 父类的引用属性不会被共享                                     | 只能继承父类的实例属性和方法，不能继承原型属性或者方法       |
| 组合继承       | 父类的引用属性不会被共享；<br />可以继承原型属性和方法       | 会调用两次父级构造函数                                       |
| 原型式继承     | 实现继承                                                     | 浅拷贝，多个实例的引用类型属性指向相同的内存，存在篡改的可能 |
| 寄生式继承     | 在原型式继承上可以添加额外的属性                             | 同上                                                         |
| 寄生组合式继承 | 父类的引用属性不会被共享；<br />可以继承原型属性和方法<br />不会调用两次父级函数 |                                                              |

