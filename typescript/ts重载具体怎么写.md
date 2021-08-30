## TS 重载

> 参考： https://cloud.tencent.com/developer/article/1599888

**实现**

```js
function attr(name: string): string
function attr(age: number): number

function attr(nameorage: any):any {
  if (nameorage && typeof nameorage === 'string') {
    alert('name')
  } else {
    alert('age')
  }
}

attr('he')
attr(10)
```



