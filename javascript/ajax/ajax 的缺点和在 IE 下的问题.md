## 缺点

1. 不支持浏览器back按钮
2. 暴露了与服务器交互的细节
3. 对搜索引擎的支持比较弱
4. 破坏了程序的异常机制
5. 不容易调试

## IE下的问题

如果在ie浏览器下，请求方式是get，并且请求的url不变，那么这个请求的结果就会被缓存。

解决这个办法可以实时改变请求的URL，URL改变了就不会被缓存：在URL末尾加一些随机的时间戳参数或者随机数参数

## Ajax请求的页面历史记录状态问题

1. 通过锚点来记录状态，location.hash。让浏览器记录Ajax请求时页面状态的变化。

2. 通过HTML5的history.pushState，来实现浏览器地址栏的无刷新改变

