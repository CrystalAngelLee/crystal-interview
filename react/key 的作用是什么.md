## react的key的作用

Keys 会有助于 React 识别哪些 items 改变了，被添加了或者被移除了。Keys 应该被赋予数组内的元素以赋予(DOM)元素一个稳定的标识，选择一个 key 的最佳方法是使用一个字符串，该字符串能惟一地标识一个列表项。很多时候你会使用数据中的 IDs 作为keys，当你没有稳定的 IDs 用于被渲染的 items 时，可以使用项目索引作为渲染项的key，但这种方式并不推荐，如果 items 可以重新排序，就会导致 re-render 变慢 

> key是给每一个vnode的唯一id,可以`依靠key`,更`准确`, 更`快`的拿到oldVnode中对应的vnode节点。

##### 1. 更准确

因为带key就不是`就地复用`了，在sameNode函数 `a.key === b.key`对比中可以避免就地复用的情况。所以会更加准确。

##### 2. 更快

利用key的唯一性生成map对象来获取对应节点，比遍历方式更快。(这个观点，就是我最初的那个观点。从这个角度看，map会比遍历更快。)

## 扩展问题

### [不写key会怎样](https://zh-hans.reactjs.org/docs/reconciliation.html#recursing-on-children)

### [key可以写索引吗](https://blog.csdn.net/weixin_33836223/article/details/88216949)

不可以，除非index是固定的

