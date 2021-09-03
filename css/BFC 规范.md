# [**什么是BFC？**](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)

> [参考](https://mp.weixin.qq.com/s?__biz=MzUyNDYxNDAyMg==&mid=2247484371&idx=1&sn=36f7e8e71c8deaea482b0d28a5ffb882&chksm=fa2be33acd5c6a2c8b83729c196a3488ea48f2702c0032b5bde6d371f6cb836e87e48cccd6e7&mpshare=1&scene=1&srcid=&key=c333a3898be7f86f50b0cbf7cd0288e5a6dbd34eb78a4dff9c5033fb550c242d85448e60a686012d5d51e0745a7dc5e07a3d565c1589f48f46c8b8fabf68e2f65ee569f0defaacfd94f7f8090c139713&ascene=14&uin=MTYxNDYxMzg4&devicetype=Windows+10&version=62060833&lang=zh_CN&pass_ticket=jsgDdvHxcrj0G7BrQGjvAnhF6%2FwjUM%2FgqYs21GA3jAc%3D)

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



#### 作用

自适应两栏布局
可以阻止元素被浮动元素覆盖
可以包含浮动元素——清除内部浮动
分属于不同的BFC时可以阻止margin重叠

**BFC可以解决的问题**

1.margin叠加的问题，要阻止margin重叠，只要将两个元素别放在一个BFC中即可

2.对于左右布局的元素，我们可以给右侧的元素添加overflow :hidden或auto，左侧的是float：left

3.可以清除浮动，计算BFC高度，浮动元素不会撑开父元素的高度，我们可以让父元素触发BFC，即：使用overflow:hidden;

## 同类型问题

BFC了解么,有什么作用,用来解决什么问题,除了BFC之外,还有哪些布局



### 除了BFC外还有哪些布局

### BFC（Block formatting contexts）：

块级格式上下文页面上的一个隔离的渲染区域，那么他是如何产生的呢？可以 触发 BFC 的元素有 float、position、overflow、display：table-cell/ inline-block/table-caption ；BFC 有什么作用呢？比如说实现多栏布局

### IFC（Inline formatting contexts）：

内联格式上下文 IFC 的 line box（线框）高度由其包含行内元素中最高的实际高 度计算而来（不受到竖直方向的 padding/margin 影响)IFC 中的 line box 一般左右 都贴紧整个 IFC，但是会因为 float 元素而扰乱。float 元素会位于 IFC 与与 line box 之间，使得 line box 宽度缩短。 同个 ifc 下的多个 line box 高度会不同 IFC 中时 不可能有块级元素的，当插入块级元素时（如 p 中插入 div）会产生两个匿名块 与 div 分隔开，即产生两个 IFC，每个 IFC 对外表现为块级元素，与 div 垂直排 列。那么 IFC 一般有什么用呢？水平居中：当一个块要在环境中水平居中时， 设置其为 inline-block 则会在外层产生 IFC，通过 text-align 则可以使其水平居中。 垂直居中：创建一个 IFC，用其中一个元素撑开父元素的高度，然后设置其 vertical-align:middle，其他行内元素则可以在此父元素下垂直居中。

### GFC（GrideLayout formatting contexts）：

网格布局格式化上下文当为一个元素设置 display 值为 grid 的时候，此元素将会 获得一个独立的渲染区域，我们可以通过在网格容器（grid container）上定义 网格定义行（grid definition rows）和网格定义列（grid definition columns）属性 各在网格项目（grid item）上定义网格行（grid row）和网格列（grid columns） 为每一个网格项目（grid item）定义位置和空间。那么 GFC 有什么用呢，和 table 又有什么区别呢？首先同样是一个二维的表格，但 GridLayout 会有更加丰富的 属性来控制行列，控制对齐以及更为精细的渲染语义和控制。

### FFC（Flex formatting contexts）:

自适应格式上下文 display 值为 flex 或者 inline-flex 的元素将会生成自适应容器 （flex container），可惜这个牛逼的属性只有谷歌和火狐支持，不过在移动端 也足够了，至少 safari 和 chrome 还是 OK 的，毕竟这俩在移动端才是王道。Flex Box 由伸缩容器和伸缩项目组成。通过设置元素的 display 属性为 flex 或inline-flex 可以得到一个伸缩容器。设置为 flex 的容器被渲染为一个块级元素， 而设置为 inline-flex 的容器则渲染为一个行内元素。伸缩容器中的每一个子元 素都是一个伸缩项目。伸缩项目可以是任意数量的。伸缩容器外和伸缩项目内 的一切元素都不受影响。简单地说，Flexbox 定义了伸缩容器内伸缩项目该如 何布局。