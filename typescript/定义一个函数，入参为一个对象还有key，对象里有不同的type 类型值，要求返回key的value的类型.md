# 定义一个函数，入参为一个对象还有key，对象里有不同的type 类型值，要求返回key的value的类型

```js
function testType<T extends object, K extends keyof T>(obj:T, key: K) {
  return typeof obj[key]
}
interface typeProps {
  a: string;
  b: number;
}

const _objs: typeProps = { a: '123', b: 1 }
const _val = testType(_objs, 'a')
console.log(_val)
```

