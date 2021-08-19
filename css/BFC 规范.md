[**什么是BFC？**](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)

BFC 全称为 块级格式化上下文（Block Fromatting Context），是Web页面的可视化CSS渲染出的一部分。它是块级盒布局出现的区域，也是浮动层元素进行交互的区域。简单的来说，**它就是一种会影响元素与元素之间的位置、间距的属性**。

 

**BFC 的特性**

1.内部的box会在垂直方向，从顶部一个接一个的放置

2.box垂直方向的距离由margin决定，属于同一个BFC的两个相邻box的margin会发生叠加

3.每个元素的margin box的左边，与包含块border box的左边相接触

4.BFC的区域不会与float box叠加

5.BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然

6.计算BFC的高度时，浮动元素也会参与计算

 

**形成BFC的条件**

1.float：给元素添加浮动（left，right）

2.position：给元添加定位（absolute，fixed）

3.display：给元素添加display（inline-block，table-cells，table-captions）

4.overflow：给元素添加overflow（hidden，auto，scroll）

 

**BFC形成后出现的常见问题**

1.margin重叠问题

2.浮动相关问题

 

**BFC可以解决的问题**

1.margin叠加的问题，要阻止margin重叠，只要将两个元素别放在一个BFC中即可

2.对于左右布局的元素，我们可以给右侧的元素添加overflow :hidden或auto，左侧的是float：left

3.可以清除浮动，计算BFC高度，浮动元素不会撑开父元素的高度，我们可以让父元素触发BFC，即：使用overflow:hidden;