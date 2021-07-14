# var let const 的理解

|                | var   | let   | const |
| -------------- | ----- | ----- | ----- |
| 允许重复声明   | true  | false | false |
| 存在变量提升   | true  | false | false |
| 存在暂时性死区 | false | true  | true  |
| 声明后允许改变 | true  | true  | false |
| 声明需要初始值 | false | false | true  |
| 作用域指向     | 全局  | 块级  | 块级  |

**其他说明：**

1. let ｜ const 声明的变量只有在它所在的区域里面有效【形成块级作用域】
2. const 声明的变量不允许改变其指向地址

**举例说明：**

```js
// 1. 允许重复声明
var a = "var A";
var a = "var A+";

let b = "let B";
let b = "let B+"; // 报错

const c = "const C";
const c = "const C+"; // 报错

// 2. 存在变量提升 & 作用域指向
{
  console.log(a_var); // undefined
  var a_var = "var A";
}

{
  console.log(a_let); // 报错-const同理
  let a_let = "let A";
}

console.log(a_var); // var A
console.log(a_let); // a_let is not defined

// 3. 存在暂时性死区
var a = "var A";
if (true) {
  console.log(a); // 报错
  let a = "let A";
}

// 4. 声明后允许改变
{
  const a = 1;
  a = 2; // 报错

  const b = [];
  b.push("constB"); // 允许：因为没有改变内存地址指向
}

// 5. 声明需要初始值
{
  var a;
  let b;
  const c; // 报错
  const d = "const D";
}
```