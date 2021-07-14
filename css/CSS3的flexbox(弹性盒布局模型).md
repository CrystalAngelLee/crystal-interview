## CSS3的flexbox(弹性盒布局模型)

flexbox是一种一维的布局模型。它给 flexbox 的子元素之间提供了强大的空间分布和对齐能力。

### 主要特性

#### 容器的特性（6个）

flex-direction：主轴方向【row/row-reverse/column/column-reverse】

flex-wrap: 换行【nowrap/wrap(换行，第一行在上方)/wrap-reverse(换行，第一行在下方)】

flex-flow: `flex-direction` `flex-wrap`

justify-content：对齐方式【flex-start | flex-end | center | space-between | space-around】

align-items：交叉轴上如何对齐【flex-start | flex-end | center | baseline(项目的第一行文字的基线对齐) | stretch(如果项目未设置高度或设为auto，将占满整个容器的高度)】

align-content：多根轴线的对齐方式【flex-start | flex-end | center | space-between | space-around | stretch】

#### 项目的属性（6个）

order：排列顺序

flex-grow: 放大比例【默认为`0`，即如果存在剩余空间，也不放大】

flex-shrink：缩小比例【默认为1，即如果空间不足，该项目将缩小】

flex-basis：flex 元素在主轴方向上的初始大小

flex: `flex-grow` `flex-shrink` `flex-basis` 【0 1 auto】

align-self：单个项目的对齐方式，可覆盖`align-items`属性【auto | flex-start | flex-end | center | baseline | stretch】

### 应用场景

1. 布局
2. 居中

### 参考

http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html

https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox
