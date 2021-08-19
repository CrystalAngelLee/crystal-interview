# [document.write()](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/write)的用法 

> 基本**作用**：就是向文档中写入HTML表达式和JavaScript的代码

## API

`document.write(markup);`

markup: *一个包含要写入文档的文本的字符串。*

**注意**: 因为 `document.write` 需要向文档**流**中写入内容，所以，若在一个已关闭（例如，已完成加载）的文档上调用 `document.write`，就会自动调用 `document.open`，[这将清空该文档的内容 (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/Document/open#notes)。



参考：https://zhuanlan.zhihu.com/p/117536309

