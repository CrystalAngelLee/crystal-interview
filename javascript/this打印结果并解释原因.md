# 请描述打印结果并解释原因

```js
'use strict'
var name = 'Jay'
var person = {
    name: 'Wang',
    pro: {
        name: 'Michael',
        getName: function () {
            return this.name;
        }
    }
}
console.log(person.pro.getName());
var pepole = person.pro.getName;
console.log(pepole());
```

结果：

```js
Michael
throw Error

原因：
"use strict" 声明以严格模式执行

输出：“Michael”
解释：这里是person.pro调用了getName(), getName()里面的this指向了person.pro, 所以这里的this.name == "Michael"

输出：error报错
解释：将person.pro.getName方法赋给了pepole, 然后在全局执行上下文中调用了pepole(),因为是在严格模式下执行，所以pepole()里面的this是指向 undefined, undefined 又获取name 属性，最后导致报错。
```

