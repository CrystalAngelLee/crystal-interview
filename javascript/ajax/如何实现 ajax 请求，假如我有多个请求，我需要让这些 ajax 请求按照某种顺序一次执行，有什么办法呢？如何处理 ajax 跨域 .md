# 如何实现 ajax 请求，假如我有多个请求，我需要让这些 ajax 请求按照某种顺序一次执行，有什么办法呢？如何处理 ajax 跨域

## [实现ajax请求](./创建ajax的过程.md)

通过实例化一个 XMLHttpRequest 对象得到一个实例，调用实例的 open 方法为这次 ajax 请求设定相应的 http 方法，相应的地址和是否异步，以异步为例，调用 send 方法，这个方法可以设定需要发送的报文主体，然后通过监听 readystatechange 事件，通过这个实例 的 readyState 属性来判断这个 ajax 请求状态，其中分为 0，1，2，3，4 这四种状态（0 未初始化，1 载入/正在发送请求 2 载入完成/数据接收，3 交互/解析数据，4 接收数据完成），当状态为 4 的时候也就是接受数据完成的时候，这时候可以通过实例的 status 属性判断这个请求是否成功

## 执行ajax

> 使 ajax 请求按照队列顺序执行，通过调用递归函数： 
>
> //按顺序执行多个 ajax 命令，因为数量不定，所以采用递归

```js
function send(action, arg2) {
	//将多个命令按顺序封装成数组对象，递归执行 
  //利用了 deferred 对象控制回调函数的特点 
  $.when(send_action(action[0], arg2)) 
    .done(function () { 
    //前一个 ajax 回调函数完毕之后判断队列长度 
    	if (action.length > 1) { 
        //队列长度大于 1，则弹出第一个，继续递归执行该队列 
        action.shift(); 
        send(action, arg2); }}).fail(function (){ 
    			//队列中元素请求失败后的逻辑 
    			//重试发送 
    			//send(action, arg2); 
    			////忽略错误进行下个 
    			//if (action.length > 1) { 
    			//队列长度大于 1，则弹出第一个，继续递归执行该队列 
    			// action.shift(); 
    			// send(action, arg2); 
    			//} 
  			}); 
			}
			//处理每个命令的 ajax 请求以及回调函数 
			function send_action(command, arg2) { 
        var dtd = $.Deferred();//定义 deferred 对象 
        $.post( "url", {command: command,arg2: arg2 }).done(function (json) { 
          json = $.parseJSON(json); //每次请求回调函数的处理逻辑 
          ////////逻辑结束 
          dtd.resolve(); 
        }).fail(function (){ 
          //ajax 请求失败的逻辑 
          dtd.reject(); 
        }); 
        return dtd.promise();//返回 Deferred 对象的 promise，防止在外部
```



- 使用ajax回调函数执行

  > 容易陷入回调地狱

  ```js
  xhr.onreadystatechange = function() {
    // 判断当xhr.readyState 为4 的时候并且xhr.status 为200 的时候才可以正确接收响应数据
    if (xhr.readyState === 4 && xhr.status === 200) {
      // 接收相应回来的数据并处理
      ...
      // 执行回调
      callback()
    }
  }
  ```

- 使用promise

- 使用generate

- 使用async await

## [处理跨域](../../http/跨域.md)

- 响应头中添加：`Access-Control-Allow-Origin: http://localhost:8080`

- JSONP
- 代理
- ...



### 扩展问题

**如果我想发出两个有顺序的 ajax 需要怎么做？**

发出两个有顺序的 ajax，可以用回调函数，也可以使用 Promise.then 或者 async 等。
