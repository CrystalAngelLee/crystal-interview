# HTML5 有哪些新特性

**语义化标签**

1. 结构元素：article、aside、header、hgroup、footer、figure、section、nav

2. 其他元素：video、audio、canvas、embed、mark、progress、meter、time、command、details、datagrid、keygen、output、source、menu、ruby、wbr、bdi、dialog

**拖拽释放(Drag and drop) API**

**音频、视频API(audio,video)**

**画布(Canvas) API**

**地理(Geolocation) API**

**表单控件，calendar、date、time、email、url、search**

**新的技术webworker, websocket**



# HTML5 移除了那些元素

1. 纯表现元素：basefont、big、center、font、s、strike、tt、u 用css代替
2. 部分浏览器支持的元素：applet、bgsound、blink、marquee
3. 对可用性产生负面影响的元素：frameset、frame、noframes,在html5中不支持frame框架，只支持iframe框架



# 如何处理 HTML5 新标签的浏览器兼容问题

方案一：使用javascript新增元素的方法解决

```
document.createElement(“header”);
document.createElement(“footer”);
…
```

由于创建出来的元素是内联元素，所以需要转换成块级，宽度和高度才能生效。

```
header,footer{ display:block;}
```

方案二：使用封装好的插件html5shiv.js解决兼容性问题。

```
<!--[if lt IE 9]>
<script type="text/javascript"  src="./html5shiv.js"></script>
<![endif]-->
```

上面这段代码仅会在IE浏览器下运行。



# 如何区分 HTML 和 HTML5

1）在文档类型声明上不同：
HTML是很长的一段代码，很难记住，而HTML5却只有简简单单的声明，方便记忆。
2）在结构语义上不同：
HTML：没有体现结构语义化的标签，通常都是这样来命名的<div id="header"></div>，这样表示网站的头部。
HTML5：在语义上却有很大的优势。提供了一些新的标签，比如：<header><article><footer>

