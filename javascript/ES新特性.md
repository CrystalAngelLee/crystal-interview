https://flaviocopes.com/ecmascript/

https://juejin.cn/post/6844903959283367950#heading-49

https://ecmascriptfeatures.online/#es9

https://dev.to/carlillo/es2018-features-with-simple-examples-5eef

http://caibaojian.com/es6
https://www.ecma-international.org/

# [ES2021-5](https://dev.to/carlillo/es2021-features-with-simple-examples-27d3)

##  [String.prototype.replaceAll](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll)

`'abababa'.replaceAll('a', 'x');`

## [Promise.any](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/any)

> 接收一个[`Promise`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)可迭代对象，只要其中的一个 `promise` 成功，就返回那个已经成功的 `promise`

`Promise.any([promise1, promise2...]).then((value) => ...`

## [WeakRef](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakRef)

```js
this.weakReference = new WeakRef(targetObject);
this.weakReference.deref();
```

## [Logical Assignment Operators](https://byexample.xyz/javascript/ECMAScript2021/logicalAssignment/)

### &&=

```js
a &&= b
// Equivalent to:
a && (a = b);

if (a) {
    a = b;
}
```

### ||=

```js
a ||= b
// Equivalent to:
a || (a = b);

if (!a) {
    a = b;
}
```

### ??=

```js
a ??= b;
// Equivalent to:
if (a == null) {
    a = b;
}
```

## [数值分隔符Numeric separators](https://v8.dev/features/numeric-separators)

> Visual separation between groups of digits

# [ES2020-8](https://dev.to/carlillo/es2020-features-in-simple-examples-1513)

## [String.prototype.matchAll](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll)

> 返回一个包含所有匹配正则表达式的结果及分组捕获组的迭代器

## [Dynamic import](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import)

```js
import('/module.js').then(...
```

## [BigInt](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

> 可以表示任意大的整数

不能用于 [`Math`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math) 对象中的方法；

不能和任何 [`Number`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number) 实例混合运算，两者必须转换成同一种类型。

在两种类型来回转换时要小心，因为 `BigInt` 变量在转换成 [`Number`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number) 变量时可能会丢失精度。

## [Promise.allSettled](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled)

> 返回一个在所有给定的promise都已经`fulfilled`或`rejected`后的promise，并带有一个对象数组，每个对象表示对应的promise结果

## [globalThis](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/globalThis)

> 全局作用域中的 `this` 就是 `globalThis`

## [for-in mechanics](https://stackoverflow.com/questions/30076219/does-es6-introduce-a-well-defined-order-of-enumeration-for-object-properties/30919039#30919039)

不同的引擎已就如何迭代属性达成一致，从而使行为标准化

## [Optional Chaining](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

```js

const dogName = adventurer.dog?.name;
console.log(dogName);
// expected output: undefined
```

## [Nullish coalescing Operator](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)

> 当左侧的操作数为 [`null`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null) 或者 [`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined) 时，返回其右侧操作数，否则返回左侧操作数。

```js
const foo = null ?? 'default string';
console.log(foo);
// expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// expected output: 0
```

# [ES2019-11](https://dev.to/carlillo/12-es10-features-in-12-simple-examples-2cbn)

## [Array.prototype.flat()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)

> 数组拍平

`var newArray = arr.flat([depth])`


## [Array.prototype.flatMap()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)

映射且扁平化数组，返回新数组(只能展开一层数组)

## [Stable Array.prototype.sort()](https://medium.com/@fsufitch/is-javascript-array-sort-stable-46b90822543f)

`[{...}, {...}].sort((v1, v2) => {...`

## [Object.fromEntries()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries)

```js
const entries = new Map([
  ['foo', 'bar'],
  ['baz', 42]
]);

const obj = Object.fromEntries(entries);

console.log(obj);
// expected output: Object { foo: "bar", baz: 42 }
```

## [String.prototype.trimStart()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart)

从字符串的开头删除空格

 ```js
 str.trimStart();
 str.trimLeft();
 ```

## [String.prototype.trimEnd()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd)

从一个字符串的末端移除空白字符

```js
str.trimEnd();
str.trimRight();
```

## [Symbol.Description](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description)

返回 [`Symbol`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol) 对象的可选描述的字符串

`Symbol('abc').description === 'abc';`

## [catch without argument](https://2ality.com/2017/08/optional-catch-binding.html)

`try {doSomething()}
catch {doSomethingElse()};`

## [直接输入U+2028(paragraph separator)和U+2029(line separator)](https://v8.dev/features/subsume-json)

`JSON.stringify({a: '\u2028'});`

## [ JSON.stringify() supports UTF-8/UTF-16](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)

```js
JSON.stringify('a\u20ACb')
```

## [New Function.toString()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/toString)

返回一个表示当前函数源代码的字符串

# [ES2018](https://dev.to/carlillo/es2018-features-with-simple-examples-5eef)



# [ES2015](https://ecmascriptfeatures.online/#es6)

> https://es6.ruanyifeng.com/

## [const](https://www.w3schools.com/js/js_const.asp)

## [let](https://www.w3schools.com/js/js_let.asp)

## [block-level function declaration](https://stackoverflow.com/questions/35909072/in-es6-what-is-new-spec-block-level-function-declaration-mean)

## [default function parameters](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Default_parameters)

`function doSomething(a, b = 'b') {...`

## [rest parameter](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/rest_parameters)

> 剩余参数

`function f(a, b, ...rest) {...`

## [spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

> 展开语法

`let arr = [1, 2]; console.log(...arr);`

## [解构](https://exploringjs.com/es6/ch_destructuring.html)

**字符串解构**

`const [a, b] = 'hi'`

**数值解构**

`const {toString: s} = 123`

**布尔解构**

`const {toString: b} = true`

**对象解构**

- 形式  `const {a, b} = {a: 1, b: 2}`
- 默认 `const {a, b = 2} = {a: 1}`
- 改名 `const {a, b: x} = {a: 1, b: 2}`

**数组解构**

- 规则：数据结构具有`Iterator接口`可采用数组形式的解构赋值
- 形式：`const [x, y] = [1, 2]`
- 默认：`const [x, y = 2] = [1]`

**函数参数解构**

- 数组解构：`function Func([x = 0, y = 1]) {}`
- 对象解构：`function Func({ x = 0, y = 1 } = {}) {}`

## [enhanced object literals](https://www.sitepoint.com/es6-enhanced-object-literals/)

`let o = {a: 1, ['b' + 1]: 3};`

## [for...of](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of)

`for (const value of [3, 2, 1]) {...`

## 二进制和八进制字面量

`let bin = 0b110; let oct = 0o77;`

## 模版字符串

模板字符串为构造字符串提供了语法糖。

```js
// 创建基本的字符串
`This is a pretty little template string.`

// 多行字符串
`In ES5 this is
 not legal.`

// 插入变量绑定的值
var name = "Bob", time = "today";
`Hello ${name}, how are you ${time}?`

// Unescaped template strings
String.raw`In ES5 "\n" is a line-feed.`

// Construct an HTTP request prefix is used to interpret the replacements and construction
GET`http://foo.org/bar?a=${a}&b=${b}
    Content-Type: application/json
    X-Credentials: ${credentials}
    { "foo": ${foo},
      "bar": ${bar}}`(myOnReadyStateChangeHandler);
```

## [regexp sticky (y) and unicode (u) flags](https://ponyfoo.com/articles/regular-expressions-post-es6)

`/ab/y.exec('ab ab');`

## 字符串扩展

 **Unicode表示法**：`大括号包含`表示Unicode字符(`\u{0xXX}`或`\u{0XXX}`)

 **字符串遍历**：可通过`for-of`遍历字符串

 **字符串模板**：可单行可多行可插入变量的增强版字符串

 **标签模板**：函数参数的特殊调用

 **String.raw()**：返回把字符串所有变量替换且对斜杠进行转义的结果

 **String.fromCodePoint()**：返回码点对应字符

 **codePointAt()**：返回字符对应码点(`String.fromCodePoint()`的逆操作)

 **normalize()**：把字符的不同表示方法统一为同样形式，返回`新字符串`(Unicode正规化)

 **repeat()**：把字符串重复n次，返回`新字符串`

 **matchAll()**：返回正则表达式在字符串的所有匹配

 **includes()**：是否存在指定字符串

 **startsWith()**：是否存在字符串头部指定字符串

 **endsWith()**：是否存在字符串尾部指定字符串

## 数值扩展

**二进制表示法**：`0b或0B开头`表示二进制(`0bXX`或`0BXX`)

 **八进制表示法**：`0o或0O开头`表示二进制(`0oXX`或`0OXX`)

 **Number.EPSILON**：数值最小精度

 **Number.MIN_SAFE_INTEGER**：最小安全数值(`-2^53`)

 **Number.MAX_SAFE_INTEGER**：最大安全数值(`2^53`)

 **Number.parseInt()**：返回转换值的整数部分

 **Number.parseFloat()**：返回转换值的浮点数部分

 **Number.isFinite()**：是否为有限数值

 **Number.isNaN()**：是否为NaN

 **Number.isInteger()**：是否为整数

 **Number.isSafeInteger()**：是否在数值安全范围内

 **Math.trunc()**：返回数值整数部分

 **Math.sign()**：返回数值类型(`正数1`、`负数-1`、`零0`)

 **Math.cbrt()**：返回数值立方根

 **Math.clz32()**：返回数值的32位无符号整数形式

 **Math.imul()**：返回两个数值相乘

 **Math.fround()**：返回数值的32位单精度浮点数形式

 **Math.hypot()**：返回所有数值平方和的平方根

 **Math.expm1()**：返回`e^n - 1`

 **Math.log1p()**：返回`1 + n`的自然对数(`Math.log(1 + n)`)

 **Math.log10()**：返回以10为底的n的对数

 **Math.log2()**：返回以2为底的n的对数

 **Math.sinh()**：返回n的双曲正弦

 **Math.cosh()**：返回n的双曲余弦

 **Math.tanh()**：返回n的双曲正切

 **Math.asinh()**：返回n的反双曲正弦

 **Math.acosh()**：返回n的反双曲余弦

 **Math.atanh()**：返回n的反双曲正切


## 函数参数的改变

1. 可以传递参数默认值
2. 解构剩余参数

## [箭头函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

1. 不会改变this指向
2. 不能作为构造函数

## 对象扩展

### 对象字面量

1. 属性名和变量名相同的话可以省略变量名
2. 可以使用表达式的返回值作为属性名

### Object.assign

> 浅拷贝目标对象

### Object.is

> 比较两个对象是否相等

## Promise

> 异步解决方案

## [类 class](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes)

ES2015 中的类（class）是在基于原型的面向对象模式上简单包装的语法糖。拥有一个 单一且方便的声明形式将更易于使用，并且 鼓励混合使用。类（class）支持基于原型的继承、super 调用、 实例和静态方法以及构造函数。

## [super](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/super)



## [generators](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Generator)

`function* generator(){yield 1; yield 2};`

## [typed arrays](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Typed_arrays)

## [type Map](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map)

