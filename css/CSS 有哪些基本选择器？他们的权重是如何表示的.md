# [基本选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Selectors)

- 通用选择器
- 元素选择器
- 类选择器
- ID选择器
- 属性选择器

# [权重计算](https://segmentfault.com/a/1190000012941923)

**基本规则**

行内样式 > 页内样式 > 外部引用样式 > 浏览器默认样式

**计算规则**

1. **内联样式**，如: style="..."，权值为`1000`。
2. **ID选择器**，如：#content，权值为`0100`。
3. **类，伪类、属性选择器**，如.content，权值为`0010`。
4. **类型选择器、伪元素选择器**，如div p，权值为`0001`。
5. **通配符、子选择器、相邻选择器**等。如`* > +`，权值为`0000`。
6. **继承**的样式没有权值

