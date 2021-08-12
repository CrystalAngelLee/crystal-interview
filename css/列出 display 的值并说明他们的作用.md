# [CSS-dispaly](https://developer.mozilla.org/en-US/docs/Web/CSS/display)

> 参考：https://www.w3cplus.com/css/display-contents-is-coming.html

```css
/* legacy values */
display: block; // 此元素将显示为块级元素，此元素前后会带有换行符
display: inline; // 默认。此元素会被显示为内联元素，元素前后没有换行符。
display: inline-block; // 行内块元素
display: flex; // 弹性布局 不会让容器本身取消它的块装的属性，但它的子元素会变成行内块的的属性
display: inline-flex; // 弹性布局 父级是变成行内块元素，他的子元素也是行内块元素，并且自动换行
display: grid; // 网格布局 生成块级网格
display: inline-grid; // 生成内联级网格
display: flow-root; // 创建BFC的属性

/* box generation */
display: none; // 此元素不会被显示
display: contents; // 使div元素不产生任何边界框，因此元素的背景、边框和填充部分都不会渲染。

/* two-value syntax */
display: block flow;
display: inline flow;
display: inline flow-root;
display: block flex;
display: inline flex;
display: block grid;
display: inline grid;
display: block flow-root;

/* other values */
display: table;
display: table-row; /* all table elements have an equivalent CSS display value */
display: list-item;

/* Global values */
display: inherit;
display: initial;
display: revert;
display: unset;
```

