## Map

类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键

### 特点

只要内存地址不一样，就视为两个键

只要两个值严格相等，Map 将其视为一个键

`NaN`不严格相等于自身，Map 将其视为同一个键

`undefined`和`null`也是两个不同的键

如果对同一个键多次赋值，后面的值将覆盖前面的值

如果读取一个未知的键，则返回`undefined`

### 实例属性

- .size: 返回 Map 结构的成员总数

### 实例方法

- .set(key, value)
  设置键名`key`对应的键值为`value`，然后返回整个 Map 结构

- .get(key)
  读取`key`对应的键值，如果找不到`key`，返回`undefined`

- .has(key)

  `has`方法返回一个布尔值，表示某个键是否在当前 Map 对象之中

- .delete(key)

  删除某个键，返回`true`。如果删除失败，返回`false`

- .clear()

  清除所有成员，没有返回值

### 遍历方法

- `Map.prototype.keys()`：返回键名的遍历器。
- `Map.prototype.values()`：返回键值的遍历器。
- `Map.prototype.entries()`：返回所有成员的遍历器。
- `Map.prototype.forEach()`：遍历 Map 的所有成员。

### 与其他数据结构的互相转换

- Map 转为数组
  `[...new Map()]`

- 数组转为Map

  `new Map(arr)`

- Map 转为对象
  如果有非字符串的键名，那么这个键名会被转成字符串，再作为对象的键名

  ```js
  function strMapToObj(strMap) {
    let obj = Object.create(null);
    for (let [k,v] of strMap) {
      obj[k] = v;
    }
    return obj;
  }
  
  const myMap = new Map()
    .set('yes', true)
    .set('no', false);
  strMapToObj(myMap)
  // { yes: true, no: false }
  ```

- 对象转为 Map对象转为 Map 可以通过`Object.entries()`。

  ```javascript
  let obj = {"a":1, "b":2};
  let map = new Map(Object.entries(obj));
  ```

  此外，也可以自己实现一个转换函数。

  ```javascript
  function objToStrMap(obj) {
    let strMap = new Map();
    for (let k of Object.keys(obj)) {
      strMap.set(k, obj[k]);
    }
    return strMap;
  }
  
  objToStrMap({yes: true, no: false})
  // Map {"yes" => true, "no" => false}
  ```

- Map 转为 JSON

  Map 转为 JSON 要区分两种情况。一种情况是，Map 的键名都是字符串，这时可以选择转为对象 JSON。

  ```javascript
  function strMapToJson(strMap) {
    return JSON.stringify(strMapToObj(strMap));
  }
  
  let myMap = new Map().set('yes', true).set('no', false);
  strMapToJson(myMap)
  // '{"yes":true,"no":false}'
  ```

  另一种情况是，Map 的键名有非字符串，这时可以选择转为数组 JSON。

  ```javascript
  function mapToArrayJson(map) {
    return JSON.stringify([...map]);
  }
  
  let myMap = new Map().set(true, 7).set({foo: 3}, ['abc']);
  mapToArrayJson(myMap)
  // '[[true,7],[{"foo":3},["abc"]]]'
  ```


- JSON 转为 Map

  JSON 转为 Map，正常情况下，所有键名都是字符串。

  ```javascript
  function jsonToStrMap(jsonStr) {
    return objToStrMap(JSON.parse(jsonStr));
  }
  
  jsonToStrMap('{"yes": true, "no": false}')
  // Map {'yes' => true, 'no' => false}
  ```

  但是，有一种特殊情况，整个 JSON 就是一个数组，且每个数组成员本身，又是一个有两个成员的数组。这时，它可以一一对应地转为 Map。这往往是 Map 转为数组 JSON 的逆操作。

  ```javascript
  function jsonToMap(jsonStr) {
    return new Map(JSON.parse(jsonStr));
  }
  
  jsonToMap('[[true,7],[{"foo":3},["abc"]]]')
  // Map {true => 7, Object {foo: 3} => ['abc']}
  ```

## Set

类似于数组，但是成员的值都是唯一的，没有重复的值

`Array.from`方法可以将 Set 结构转为数组

### 特性

- 两个对象总是不相等的

### 属性

- `Set.prototype.constructor`：构造函数，默认就是`Set`函数。
- `Set.prototype.size`：返回`Set`实例的成员总数

### 方法

Set 实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）

**操作方法**

- `Set.prototype.add(value)`：添加某个值，返回 Set 结构本身。
- `Set.prototype.delete(value)`：删除某个值，返回一个布尔值，表示删除是否成功。
- `Set.prototype.has(value)`：返回一个布尔值，表示该值是否为`Set`的成员。
- `Set.prototype.clear()`：清除所有成员，没有返回值。

**遍历方法**

- `Set.prototype.keys()`：返回键名的遍历器
- `Set.prototype.values()`：返回键值的遍历器
- `Set.prototype.entries()`：返回键值对的遍历器
- `Set.prototype.forEach()`：使用回调函数遍历每个成员

## Map 和 Set 的相同点

1. `Set`和`Map`都可以用来生成新的 Map

