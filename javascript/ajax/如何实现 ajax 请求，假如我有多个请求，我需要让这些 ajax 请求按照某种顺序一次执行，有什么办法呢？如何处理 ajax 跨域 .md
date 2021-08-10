【如何实现 ajax 请求，假如我有多个请求，我需要让这些 ajax 请求按照某种顺序一次执行，有什么办法呢？如何处理 ajax 跨域 】

## [实现ajax请求](./创建ajax的过程.md)

## 执行ajax

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
