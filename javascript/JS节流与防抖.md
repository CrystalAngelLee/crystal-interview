## 节流（throttle）

> 用来实现阻止在短时间内重复多次触发同一个函数。主要用途：防止使用脚本循环触发网络请求的函数的恶意行为，确保请求的真实性（当然也包括其他阻止高频触发行为的应用）；

实现思路：

使用高阶函数（传入要执行的函数和可控时间），缓存最后执行操作的时间，返回一个函数，如果当前时间于最后执行时间的时间差大于可控时间，则可以继续执行函数，否则最后执行时间等于当前时间，并且函数不可执行

```js
function throttle (handler, time) {
  var lastDate = 0;
  return function() {
    var date = new Date().getTime();
    if (date - lastDate > time) {
      handler.apply(this, arguments);
    }
    lastDate = date;
  }
}
```

```js
function throttle (handler, time) {
  var timer = null;
  return function() {
    var _this = this;
    var args = arguments
    timer && return
    timer = setTimeout(function() {
      handler.apply(this, args)
      timer = null
    },time)
  }
}
```



## 防抖（debounce）

> 当持续触发事件时，一定时间段内没有再触发事件，事件处理函数才会执行一次，如果设定的时间到来之前，又一次触发了事件，就重新开始延时
>
> 用途：
> 1.用于可能出现高频触发修改，导致页面高频重排重绘，严重影响性能，同时也导致操作的DOM闪烁抖动，体验效果差

实现思路：

使用高阶函数（传入要执行的函数和延迟时间），返回一个函数，定义一个延迟执行函数用来执行要执行的函数，在执行延迟函数之前先清理定时器，保证每次执行都是新的定时器

```js
function debounce (handler, time) {
  var timer;
  return function() {
    var _this = this;
    var args = arguments;
    timer !== 'undefined' && clearTimeout(timer);
    timer = setTimeout(function () {
      handler.apply(_this, args)
    }, time)
  }
}
```

## 	区别

### 相同点

目的都是降低回调执行频率，节省计算资源

### 不同点

防抖：在一段连续的操作结束后处理回调（使用clearTimeout和setTimeout），关注在**最后一次**

节流：在一段连续的操作中，每一段时间只执行一次，频率较高的时间中用来提升性能，关注在**一段时间内执行一次**

## 应用场景

**防抖**

搜索框输入【只需要用户最后一次输入完再发送请求】

手机号、邮箱验证输入检测

窗口大小resize【只需要窗口调整完成后计算窗口大小，防止重复渲染】

**节流**

滚动加载，加载更多或滚动到底部监听

谷歌搜索框，搜索联想功能

高频点击提交，表单重复提交