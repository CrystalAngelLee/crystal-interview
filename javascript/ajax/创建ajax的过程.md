# 创建Ajax的过程

1. 创建 `XMLHttpRequest` 对象,也就是创建一个异步调用对象
2. 创建 `HTTP` 请求：指定请求的方法、url、是否异步
3. 设置响应`HTTP`请求状态变化的回调函数
4. 发送 `HTTP` 请求
5. 获取调用返回的数据（readyState === 4 && sautus === 200）
6. 执行js代码，实现局部刷新

```js
var xhr = new XMLHttpRequest();
xhr.open('GET', 'demo.php', 'true');
xhr.send()
xhr.onreadystatechange = function() {
  // 判断当xhr.readyState 为4 的时候并且xhr.status 为200 的时候才可以正确接收响应数据
  if (xhr.readyState === 4 && xhr.status === 200) {
    // 接收相应回来的数据并处理
  }
}
```



