# DOM 操作——怎样添加、移除、移动、复制、创建和查找节点

## 创建新节点

```js
createDocumentFragment() //创建一个DOM片段
createElement() //创建一个具体的元素
createTextNode() //创建一个文本节点
```



## 添加、移除、替换、插入

```js
appendChild() //添加
insertAfter() //添加
removeChild() //移除
replaceChild() //替换
insertBefore() //插入
```



## 查找

```js
getElementsByTagName() //通过标签名称
getElementsByName() //通过元素的Name属性的值
getElementById() //通过元素Id，唯一性
getElementsByClassName() //通过元素class
querySelector() //获取指定元素
querySelectorAll() //获取所有元素
```



## 复制

```js
Node.cloneNode() //浅克隆，只复制标签本身
Node.cloneNode(true) //深克隆，复制标签本身以及所有后代
```


