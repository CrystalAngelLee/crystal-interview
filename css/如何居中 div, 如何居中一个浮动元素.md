## [居中div](./实现元素水平垂直居中.md)



## [居中浮动元素](https://www.jianshu.com/p/cd7392862ea4)

```html
<div id='parent'>
  <div>
    child
  </div>
</div>
```

```css
#parent {
  width: 400px;
  height: 300px;
}
#parent > div {
  width: 100px;
  height; 100px;
  float: left;
  margin: 0 auto;
}
```

### 方法一：在浮动元素外面再嵌套一层div

### 方法二：浮动元素水平居中-----宽度不固定的浮动元素

### 方法三：浮动元素水平居中-----宽度固定的互动元素

