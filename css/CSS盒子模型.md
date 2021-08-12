所谓盒子模型（Box Model）就是把HTML页面中的元素看作是一个矩形的盒子，也就是一个盛装内容的容器。每个矩形都是由元素的内容（content）、内边距（padding）、边框（border）和外边距（margin）组成。
所有的文档元素（标签）都会生成一个矩形框，我们称为元素框，它描述了一个文档元素在网页布局汇总所占的位置大小。每个盒子除了有自己的大小和位置外，还影响着其他盒子的大小和位置。
css的盒子模型包括**标准盒子模型**和**IE盒子模型（怪异模型）** 

- 标准盒子模型

  width就是content的内容，盒子的宽度是 content + padiing + border

- IE盒子模型

  width是content + padding + border这是三部分的宽度，盒子的宽度就是width

