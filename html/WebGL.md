# 什么是 WebGL,它有什么优点? 

## [WebGL](https://developer.mozilla.org/zh-CN/docs/Web/API/WebGL_API)

WebGL（全写 Web Graphics Library ）是一种 3D 绘图标准，这种绘图技术标准允许把 JavaScript 和 OpenGL ES 2.0 结合在一起，通过增加OpenGL ES 2.0 的一个JavaScript 绑定， WebGL 可以为 HTML5 Canvas 提供硬件 3D 加速渲染，这样 Web 开发人员就可以借助系统显卡来在浏览器里更流畅地展示 3D 场景和模型了，还能创建复杂的导航和数据视觉化。显然， WebGL 技术标准免去了开发网页专用渲染插件的麻烦，可被用于创建具有复杂 3D 结构的网站页面，甚至可以用来设计 3D 网页游戏等等。

## 优点

WebGL完美地解决了现有的 Web 交互式三维动画的两个问题：

1. 它通过HTML脚本本身实现 Web 交互式三维动画的制作，无需任何浏览器插件支持 ;

2. 它利用底层的图形硬件加速功能进行的图形渲染，是通过统一的、标准的、跨平台的OpenGL接口实现的。

通俗说WebGL中 canvas 绘图中的 3D 版本。因为原生的 WebGL 很复杂，我们经常会使用一些三方的库，如 three.js 等，这些库多数用于HTML5 游戏开发