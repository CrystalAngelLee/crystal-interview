# 希望sdk是全局唯一的，让sdk1 和 sdk2 获得到的实例是同一个，怎么实现这个sdk

> 考点： 单例模式
>
> 思路：
> function 的话第一次new 实例的时候将实例传到prototype变量里
>
> 类的话使用static 定义一个静态值来存储变量
>
> 在constructor里面去判断当前静态变量是否有值，有的话返回静态变量，没有的话返回新的实例

```js
// 闭包
const sdk = (function () {
    let instance = null;
    return function () {
        if (instance === null) {
            instance = this;
        }
        return instance;
    }
})()

// 类
class sdk {
    static instance = null;
    constructor() {
        if (sdk.instance === null) {
            sdk.instance = this;
        }
        return sdk.instance;
    }
}
```

```js
// test
const sdk1 = new sdk();
const sdk2 = new sdk();
console.log(sdk1, sdk2);
sdk1.name = '1';
console.log(sdk1, sdk2);
```

