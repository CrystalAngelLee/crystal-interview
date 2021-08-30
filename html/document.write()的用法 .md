# [document.write()](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/write)的用法 

> 基本**作用**：就是向文档中写入HTML表达式和JavaScript的代码

## API

`document.write(markup);`

markup: *一个包含要写入文档的文本的字符串。*

**注意**: 因为 `document.write` 需要向文档**流**中写入内容，所以，若在一个已关闭（例如，已完成加载）的文档上调用 `document.write`，就会自动调用 `document.open`，[这将清空该文档的内容 (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/Document/open#notes)。



参考：https://zhuanlan.zhihu.com/p/117536309

## 回答

document.write()方法可以用在两个方面：页面载入过程中用实时脚本创建页面内容，以及用延时脚本创建本窗口或新窗口的内容。

document.write只能重绘整个页面。innerHTML可以重绘页面的一部分编写一个方法求一个字符串的字节长度

假设：一个英文字符占用一个字节，一个中文字符占用两个字节

```js
functionGetBytes(str){ 
  var len = str.length; 
  var bytes = len; 
  for(var i=0; i<len; i++){ 
    if (str.charCodeAt(i) >255) bytes++; 
  }
  return bytes; 
} 
alert(GetBytes("你好,as"));
```

