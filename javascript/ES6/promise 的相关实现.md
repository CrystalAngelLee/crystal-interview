# Promise 的相关实现

## 实现promise.then, .catch



### 怎么实现promise.allsettled

[Promise.allSettled 的作用，如何自己实现 Promise.allSettled](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/480)

https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/130

**Promise.all 的特点**

1. Promise.all()接受一个 Array 类型的参数
2. 只有数组中全部的 Promise 都变为 resolve 的时候
3. 返回一个新的 Promise 实例
4. 只要有一个失败，状态就变成 rejected



[**Promise.all 的实现**](https://juejin.cn/post/6844904064820461576)

```js
class MyPromise {
  static all(arr) {
    const res = [];
    return new Promise((resolve, reject) => {
      const addData = (key, val) => {
        res[key] = val;
        if (res.length === arr.length) {
          resolve(res);
        }
      };
      for (let i = 0; i < arr.length; i++) {
        const cur = arr[i];
        if (cur instanceof Promise) {
          cur.then(
            (val) => addData(i, val),
            (err) => reject(err)
          );
        } else {
          addData(i, cur);
        }
      }
    });
  }
}
```

test

```js
const test_1 = new Promise((resolve) => {
  resolve("test_1");
});
const test_2 = new Promise((resolve, reject) => {
  resolve("test_2");
});
const test_3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("test_3");
  }, 100);
});
const test_4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("test_4");
  }, 100);
});

MyPromise.all([test_1, test_2, test_3, test_4]).then(
  (res) => {
    console.log("res", res);
  },
  (err) => {
    console.log(err);
  }
);
```

