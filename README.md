# Crystal 的面试题整理

> 更新说明： 本专题不定期长期更新

[TOC]

## JavaScript部分

1. [什么是函数式编程？ JavaScript的哪些特性使其成为函数式语言的候选语言？](/javascript/什么是函数式编程？%20JavaScript的哪些特性使其成为函数式语言的候选语言？.md)

2. [什么是高阶函数？](/javascript/%E4%BB%80%E4%B9%88%E6%98%AF%E9%AB%98%E9%98%B6%E5%87%BD%E6%95%B0.md)

3. [为什么函数被称为一等公民？](/javascript/为什么函数被称为一等公民.md)

4. [如何检查值是否虚值？](/javascript/如何检查值是否虚值.md)

5. ['use strict' 有什么用？](/javascript/'use%20strict'%20有什么用.md)

6. [说说严格模式的限制 ](./javascript/'use strict' 有什么用.md)

7. [描述一下原型、原型链、作用域、作用域链](/javascript/原型、原型链、作用域、作用域链.md)

8. [谈谈你是如何理解JS异步编程的](/javascript/%E8%B0%88%E8%B0%88%E4%BD%A0%E6%98%AF%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3JS%E5%BC%82%E6%AD%A5%E7%BC%96%E7%A8%8B%E7%9A%84.md)

9. [阅读下面代码，只考虑浏览器环境下的输出结果，写出他们结果打印的先后顺序，并分析出原因](/javascript/08_阅读代码给出结果.md)

   ```js
   const myPromise = () => Promise.resolve('I have resolved')
   function FirstFun() {
   	myPromise().then(res => console.log(res))
   	console.log('first')
   }
   
   async function SecondFun() {
   	console.log('second 1');
   	console.log('second', await myPromise())
   	console.log('second 2');
   }
   
   FirstFun() 
   SecondFun()
   ```

10. [阅读下面代码，我们只考虑浏览器环境下的输出结果，写出它们结果打印的先后顺序，并分析出原因](/javascript/09_阅读代码给出结果.js)

   ```js
   new Promise((resolve, reject) => {
     console.log("A");
     setTimeout(() => {
       console.log("B");
     }, 0);
     console.log("C");
     resolve();
     console.log("D");
   })
     .then(() => {
       console.log("E");
       new Promise((resolve, reject) => {
         console.log("F");
         resolve();
         console.log("G");
       })
         .then(() => {
           setTimeout(() => {
             console.log("H");
           }, 0);
           console.log("I");
         })
         .then(() => {
           console.log("J");
         });
     })
     .then(() => {
       console.log("K");
     });
   
   setTimeout(() => {
     console.log("L");
   }, 0);
   
   new Promise((resolve, reject) => {
     console.log("M");
     resolve();
   }).then(() => {
     setTimeout(() => {
       new Promise((resolve, reject) => {
         console.log("N");
         resolve();
       })
         .then(() => {
           setTimeout(() => {
             console.log("O");
           }, 0);
         })
         .then(() => {
           console.log("P");
         });
     }, 0);
   });
   
   console.log("Q");
   ```

11. [实现节流/防抖函数](./javascript/JS节流与防抖.md)

13. [有赞]将一个json数据的所有key从下划线改为驼峰

    ```js
    function mapKeysToCamelCase(data) {
    
    }
    
    const testData = {
      a_bbb_c: 123,
      a_g: [[1], 2, 3, 4],
      a_d: {
          s: 2,
          s_d: 3
      },
      a_f: [1, 2, 3, {
          a_g: 5
      }],
      a_d_s: 1
    }
    // {"aBbbC":123,"aG":[1,2,3,4],"aD":{"s":2,"sD":3},"aF":[1,2,3,{"aG":5}],"aDS":1}
    // console.log(JSON.stringify(mapKeysToCamelCase(testData)))
    ```

14. [有赞]将一天24小时按每半时小划分成48段，我们用一个位图表示选中的时间区间，

    例如110000000000000000000000000000000000000000000000

    表示第一个半小时和第二个半小时被选中了，其余时间段都没有被选中，也就是对应00:00~01:00这个时间区间。

    一个位图中可能有个不连续的时间区间被选中，例如110010000000000000000000000000000000000000000000，

    表示00:00~01:00和02:00~02:30这两个时间区间被选中了。

    写一个timeBitmapToRanges,将上述规则描述的时间位图转挨成一个选中时间区间的数组。

    ```js
    function timeBitmapToRanges(str) {
    
    }
    
    // ['00:00~01:30', '02:00~02:30', '17:30~18:30', '23:30~24:00']
    console.log(timeBitmapToRanges('111010000000000000000000000000000001100000000001'))
    ```

15. 请说一下Promise的内部实现方式

16. [请介绍一下消息队列和event loop](/javascript/请介绍一下消息队列和event loop.md)

17. [js继承有哪些方式？es6和es5的继承的区别？]

18. [javascript 继承的 6 种方法 ]((./javascript/js继承.md))

19. 有哪几种异步解决方案

20. loader中如何写入异步代码

21. 修饰器是什么，是如何工作的

22. [说一下js的数据类型，如何判断数据类型](./javascript/数据类型.md)

23. [滴滴]如何判断一个对象是否属于某个类

24. [滴滴]new Promise构造函数的入参是什么？你在什么场景下会使用promise 

27. [小米]说说重绘、重排、回流

29. [跟谁学]commonjs esmodule的区别

30. [说几个常用的ES6方法](./javascript/ES新特性.md)

31. [完美世界]object.defineproperty 和 proxy 的区别 

32. [Javascript 垃圾回收方法](./javascript/Javascript 垃圾回收.md)

29. 说一下V8的垃圾回收机制

30. [下面代码输出什么](./javascript/31_下面代码输出什么.md)

     ```js
     var foo = function bar() { return 12; }
     typeof bar
     ```

31. [用正则表达式实现分割数字 “12345678901” 每三个以一个逗号 “ ，” 划分](./javascript/用正则表达式实现分割数字 "12345678901" 每三个以一个逗号 " ，" 划分.md)

32. [实现数组去重元素并使元素降序排列](./javascript/实现数组去重元素并使元素降序排列.md)

33. [事件委托（手写例子）事件冒泡和捕获，如何阻止冒泡？如何阻止默认事件](./javascript/事件委托（手写例子）事件冒泡和捕获，如何阻止冒泡？如何阻止默认事件)

34. [ES6中箭头有哪些新特点？并说明箭头函数和普通函数中的this指向](./javascript/ES6中箭头有哪些新特点？并说明箭头函数和普通函数中的this指向.md)

35. [var let const 的理解](./javascript/var let const 的理解.md)

36. [实现一个instanceof](./javascript/instanceof.md)

37. [说一说闭包](./javascript/闭包.md)

38. 代码执行过程中的内存分配

39. [创建ajax的过程](./javascript/ajax/创建ajax的过程.md)

40. [ajax 的缺点和在 IE 下的问题](./javascript/ajax/ajax 的缺点和在 IE 下的问题.md)

41. [如何实现 ajax 请求，假如我有多个请求，我需要让这些 ajax 请求按照某种顺序一次执行，有什么办法呢？如何处理 ajax 跨域 ](./javascript/ajax/如何实现 ajax 请求，假如我有多个请求，我需要让这些 ajax 请求按照某种顺序一次执行，有什么办法呢？如何处理 ajax 跨域 .md)

42. [如何实现一个 ajax 请求？如果我想发出两个有顺序的 ajax 需要怎么做](./javascript/ajax/如何实现 ajax 请求，假如我有多个请求，我需要让这些 ajax 请求按照某种顺序一次执行，有什么办法呢？如何处理 ajax 跨域 .md)

43. [Flash、Ajax 各自的优缺点，在使用中如何取舍？](./javascript/ajax/FlashPKAjax.md)

44. [如何将字符串转化为数字？](./javascript/字符串转数字.md)

45. 拷贝一个很多嵌套的对象怎么实现？

46. [写一个function,清除字符串前后的空格](./javascript/清除字符串前后的空格.js)

47. [不用loop循环，创建一个长度为100的数组，并且每个元素的值等于他的下标](./javascript/不用loop循环，创建一个长度为100的数组，并且每个元素的值等于他的下标.md)

48. [如何实现数组扁平化](./javascript/数组扁平化.md)

49. [数组的去重，尽可能多方法](./javascript/数组去重.md)

50. [闭包实现加法器](./javascript/闭包实现加法器.js)

51. 字符串反转实现

52. [说出数组的方法不改变原数组、改变原数组](./javascript/数组的方法.md)

53. 描述一下map、set方法的特点以及区别

54. set 实现去重的原理

55. map和object的区别

56. class的实现原理

57. 数组的哪些遍历方法可中断

58. [null 和 undefined 的区别 ](./javascript/null 和 undefined 的区别 .md)

59. [javascript 对象的几种创建方式 ](./javascript/javascript 对象的几种创建方式 .md)

60. [new 操作符具体干了什么呢? ](./javascript/new操作符具体干了什么呢.md)

61. [call()和 apply() 的区别和作用](./javascript/call_apply_bind区别和作用.md)

62. [说说你对 Promise 的理解](./javascript/Promise 的理解.md)

63. [说说你对 AMD 和 Commonjs 的理解](./javascript/AMD 和 Commonjs 的理解.md)

64. [请解释什么是事件代理](./javascript/事件代理.md)

65. [事件、IE与火狐的事件机制有什么区别？ 如何阻止冒泡？ ](./javascript/事件、IE与火狐的事件机制有什么区别？ 如何阻止冒泡？.md)

66. [异步加载和延迟加载](./javascript/异步加载和延迟加载.md)

67. [defer 和 async ](./javascript/defer和async.md)

68. [js 延迟加载的方式有哪些？]((./javascript/异步加载和延迟加载.md))

69. [栈和堆的区别](./javascript/栈和堆的区别.md)

## CSS 部分

2. [小米]说一下CSS七层层叠顺序
3. [阿里]z-index的层级关系及css中的层叠上下文
4. [尽量多的水平垂直居中，分是否已知道父子dom宽高的情况](./css/实现元素水平垂直居中.md)
4. [如何居中 div, 如何居中一个浮动元素](./css/如何居中 div, 如何居中一个浮动元素.md)
5. [top、left是相对于padding还是border](./css/top、left是相对于padding还是border.md)
6. [列出 display 的值并说明他们的作用](./css/列出 display 的值并说明他们的作用.md)
7. [对 BFC 规范的理解](./css/BFC 规范.md)
8. [阿里]如何触发BFC，以及用法和IFC区别
9. [block，inline 和 inlinke-block 细节对比？](./css/block，inline 和 inlinke-block 细节对比.md)
10. [请解释一下CSS3的flexbox(弹性盒布局模型)，以及应用场景](./css/CSS3的flexbox(弹性盒布局模型))
11. [display:none和visibility:hidden的区别 ](./css/display:none和visibility:hidden的区别.md)
12. [清除浮动的方法有哪些](./css/浮动.md)
13. [解释下浮动和它的工作原理？清除浮动的技巧](./css/浮动.md)
14. [阿里] ::before和:after中双冒号和单冒号有什么区别 
15. [阿里]1像素边框在移动端的实现
16. [阿里]rem和em区别及使用方法 
17. [阿里]CSS3动画的实现步骤 
18. [用CSS3布局的伪类选择器实现下图效果](./css/用CSS3布局的伪类选择器实现下图效果.md)
    ![效果实现](./css/效果实现.png)
19. [position的值，relative和absolute分别是相对于谁进行定位的？](./css/relative和absolute分别是相对于谁进行定位的.md)
20. 如何用css 实现一个三角形
21. [什么是外边距合并？](./css/外边距合并.md)
22. 实现一个带边框的扇形
23. 居中为什么用transform而不用其他的呢
24. 做一个进度条：为什么用动画比直接改变长宽更好呢
25. [如何绘制一个球](./css/绘制一个球.md)
26. [渐进增强和优雅降级](./css/渐进增强和优雅降级.md)
27. [CSS3 新增伪类有那些？ ](./css/CSS3 新增伪类.md)
28. [CSS3 有哪些新特性？ ](/css/CSS3新特性.md)
29. [小米]说一下css的三个特性并展开说一下应用场景
30. [CSS 有哪些基本选择器？他们的权重是如何表示的？](./css/CSS 有哪些基本选择器？他们的权重是如何表示的.md)
31. [请你说说 CSS 选择器的类型有哪些，并举几个例子说明其用法？](./css/CSS 选择器.md)
32. [选择符有哪些？哪些属性可以继承？](./css/选择符有哪些？哪些属性可以继承？.md)
33. [请你说说 CSS 有什么特殊性?（优先级、计算特殊值）](./css/CSS 有什么特殊性?（优先级、计算特殊值）.md)
34. [优先级算法如何计算？](./css/优先级算法如何计算.md)
35. [解释一下 CSS 的盒子模型？ ](./css/CSS盒子模型.md)
36. [简单介绍下box-sizing属性](./css/box-sizing.md)
37. [CSS 中 link 和@import 的区别是](./css/CSS 中 link 和@import 的区别是.md)
38. [position:absolute 和 float 属性的异同 ](./css/position:absolute 和 float 属性的异同 .md)

## HTML

1. [浏览器是如何渲染页面的](./html/浏览器是如何渲染页面的.md)
2. [对h5的理解](./html/对h5的理解.md)
3. [说说你对 HTML5 认识?（是什么,为什么）](./html/HTML5的认识.md)
4. [HTML5 的优点与缺点](./html/HTML5 的优点与缺点.md)
5. [回流与重绘](./html/回流与重绘.md)
6. [左边宽度固定，右边自适应](./html/左边宽度固定，右边自适应.html)
7. [label 的作用是什么？是怎么用的?](./html/label.md)
8. [已知ID的input输入框，希望获取这个输入框的输入值，怎么做?](./html/已知ID的input输入框，希望获取这个输入框的输入值.md)
9. [为什么最好把 CSS 的 `<link>` 标签放在 `<head></head>` 之间？为什么最好把 JS 的 `<script>` 标签恰好放在 `</body>` 之前，有例外情况吗？](./html/为什么最好把CSS的link标签放在head之间？为什么最好把JS的script标签最好放在body之后，有例外的情况吗.md)
10. [简述一下你对 HTML 语义化的理解？](./html/语义化的理解.md)
11. [什么是渐进式渲染（progressive rendering）](./interview/html/渐进式渲染.md)
12. [Doctype 作用? 严格模式与混杂模式如何区分？它们有何意义? ](./html/Doctype 作用? 严格模式与混杂模式如何区分？它们有何意义? .md)
13. [你知道多少种 Doctype 文档类型？](./html/Doctype 文档类型.md)
14. [HTML 与 XHTML——二者有什么区别](./html/HTML 与 XHTML——二者有什么区别.md)
15. [DOM 操作——怎样添加、移除、移动、复制、创建和查找节点](./html/DOM 操作.md)
16. [HTML5 行内元素有哪些,块级元素有哪些, 空元素有哪些?](./html/HTML5 行内元素有哪些,块级元素有哪些, 空元素有哪些.md)
17. [几个很实用的 BOM 属性对象方法](./html/BOM 属性对象方法.md)
18. [浏览器页面有哪三层构成，分别是什么，作用是什么?](./html/浏览器页面.md)
19. [attribute 和 property 的区别是什么？ ](./html/attribute 和 property 的区别是什么.md)
20. [html5 有哪些新特性、移除了那些元素？如何处理 HTML5 新标签的浏览器兼容问题？如何区分 HTML 和 HTML5](./html/HTML5 有哪些新特性、移除了那些元素？如何处理 HTML5 新标签的浏览器兼容问题？如何区分 HTML 和 HTML5.md)
21. [说一下 HTML5 drag api ](./html/HTML5 drag api .md)
22. [dom 是什么，你的理解？](./html/DOM的理解.md)
23. [关于 dom 的 api 有什么 ](./html/DOM-API.md)
24. [要动态改变层中内容可以使用的方法？](./html/要动态改变层中内容可以使用的方法.md)
25. [document.write()的用法 ](./html/document.write()的用法 .md)
26. [什么是 WebGL,它有什么优点? ](./html/WebGL.md)

## HTTP

1. [说下你知道的HTTP状态码并说出它们的出现场景](./http/HTTP状态码.md)
2. [腾讯视频]http2.0的优势
3. 关于 Http 2.0 你知道多少
4. [http和https的区别](./http/http和https.md)
5. [HTTP 请求的方式，HEAD 方式](./http/HTTP 请求的方式，HEAD 方式.md)
6. [GET 和 POST 的区别，何时使用 POST？](./http/GET 和 POST 的区别，何时使用 POST.md)
7. [请求方法 head 特性](./http/请求方法 head 特性.md)
8. [请解释一下 JavaScript 的同源策略](./http/跨域.md)
9. [为什么要有同源限制？ ](./http/跨域.md)
10. [如何实现跨域<问的其实就是如何解决跨域>](./http/跨域.md)
11. [如何解决跨域问题](./http/跨域.md)
12. [JSONP 的缺点](./http/JSONP 的缺点.md)
13. [TCP 和 UDP 的区别](./http/TCP 和 UDP 的区别.md)
14. TCP 建立连接的三次握手过程
15. tcp 三次握手，一句话概括
16. TCP 和 UDP 的区别，为什么三次握手四次挥手 
17. [说一下协商缓存和强制缓存/HTTP 缓存机制](./http/协商缓存和强制缓存.md)
18. [什么是 Etag ？ETag 应用](./http/Etag.md)

## Webpack 部分

1. [请说明webpack打包的原理](./engineering/请说明webpack%20打包的原理.md)
2. webpack的打包流程，ast是什么，详细说明
3. webpack如何提升打包后的页面性能
4. webpack如何打包多端项目
5. [跟谁学]webpack常用配置项
6. [跟谁学]webpack css-loader 的作用 commonChunk/splitChunk作用点 区别
7. [跟谁学]webpack dll优化效果
8. [Webpack 如何优化性能](./webpack/性能优化.md)
9. 做了哪些打包优化，优化成果怎么样的

## Vue部分

1. Vue是如何实现响应式的
2. [滴滴]vue的设计核心思想是什么
3. [滴滴]说下vue的双向数据绑定的实现原理
4. [小米]vue的源码是否看过，说一下比较有收获的几个点
5. [小米]说一下VUE3.0比VUE2.0做了哪些改动
6. [腾讯视频]vue响应式实现$nexttick实现
7. [完美世界]vuex 中的 mutations 和 actions 的区别 
8. [完美世界]vue 中跨组件通信的实现方案
9. [完美世界]vue 中事件总线的实现（发布订阅模式）

## React部分

1. [跟谁学]为什么选择react/vue 及二者差别
2. [跟谁学]react-router实现原理 hash/history 如何跳转不刷新 nginx如何配置跨域
3. [跟谁学]purecomponent优势
4. [腾讯视频]react setState 实现
5. [B站]react fiber算法原理及实现
6. [B站]react 子组件与父组件如何通信
7. [B站]react 怎么根据 state 和 props 的变化去更新 dom 树的
8. [说说react类组件的生命周期](./react/react类组件的生命周期.md)
9. 如何避免组件重新渲染
10. [hooks 的缺点有哪些](./react/hooks的优缺点.md)
11. [使用hooks实现自定义hooks, 一个计算组件从挂载到卸载的时间](./react/挂载到卸载的时间.md)
12. [为什么说虚拟dom可以提高性能](./react/虚拟Dom如何提升性能.md)
13. purecomponent 和 hooks 有啥区别
14. [react性能优化方案](./react/react性能优化.md)
15. 如何自己实现一个mini 的react-redux
16. https://www.icode9.com/content-4-1048139.html
17. [useState和setState区别](./react/useState和setState区别.md)
18. [hook如何模拟组件生命周期](./react/hook模拟生命周期.md)
19. [说一下常用的hook](./react/常用的hook.md)
20. [说一下你理解的虚拟dom](./react/虚拟DOM.md)
21. 说一下react是如何进行diff的

## TypeScript

1. 说一下你对泛型的理解
2. TypeScript支持哪些面向对象术语
3. [怎么获取一个函数的参数的类型](./typescript/获取一个函数的参数的类型.md)

## 小程序

1. 小程序有几个线程，分别是做什么的
2. 有没有考虑过为什么一个小程序页面需要4个文件
3. H5如何拿取小程序登录态
4. [滴滴]微信小程序和传统h5页面相比哪个性能更好一些，为什么

## NodeJS

1. nodejs如何使用中间件，在不同的网关添加不同的请求内容。
2. [跟谁学]express/koa区别 
3. [您所使用的NodeJS 的功能有哪些](./nodejs/NodeJS 的功能有哪些.md)

## 性能优化

1. 做了哪些前端性能优化，成果怎样
2. [完美世界]首屏白屏的优化方案
3. [完美世界]瀑布屏如何实现，以及如何优化
4. [完美世界]当页面数据非常多，比如一直上拉加载，加载了很多的数据，页面性能会变差，如何优化
5. 十万条数据一次性渲染到页面上应该怎么处理
6. 前端项目如何找出性能瓶颈

## 算法

1. [heap排序方法的原理？复杂度？](./算法/堆排序.md)
2. [手写几种常见的排序算法](./interview/算法/排序算法.md)
3. [如果有一个大的数组，都是整型，怎么找出最大的前10个数](./interview/算法/最大的k个数.md)
4. [栈和队列的区别](./算法/栈和队列的区别.md)
5. [B树的特性，B树和 B+树的区别](./算法/B树的特性，B树和 B+树的区别.md)
6. [二叉树层序遍历](./算法/二叉树层序遍历.md)
7. [尾递归](./算法/尾递归.md)
8. [如何写一个大数阶乘？递归的方法会出现什么问题?](./算法/如何写一个大数阶乘？递归的方法会出现什么问题.md)
9. [小米]手写翻转二叉树 
10. [小米]说下归并排序的思路和应用场景

## 其他

2. [介绍模块化发展历程](./others/模块化发展历程.md)
3. [对前端模块化的认识](./others/对前端模块化的认识.md)
4. [ie 各版本和 chrome 可以并行下载多少个资源](./others/ie 各版本和 chrome 可以并行下载多少个资源.md)
5. [一个页面从输入 URL 到页面加载显示完成，这个过程中都发生了什么](./others/一个页面从输入 URL 到页面加载显示完成，这个过程中都发生了什么.md)
6. [接口文档](./others/接口文档.md)
7. 说下你知道的设计模式及应用场景
8. Jsbridge是如何工作的
9. [滴滴]APP内嵌H5页面如何和APP本身进行通信
10. [滴滴]H5的开发和PC端的开发有什么本质的不同 
11. [滴滴]如何针对H5页面进行远程调试？
12. [滴滴]如何进行手机的页面或者应用的抓包
13. [滴滴]已知公司附近有两个加油站，和一条主干道，要求在24小时内尽可能准确的统计全市有多少台车， 说出你的思路 
14. [小米]如何实现一个简单的单点登录
15. [小米]说一下关系数据库和非关系数据库的区别，并说下使用场景
16. [小米]说一下关系数据库外键的使用
17. [小米]**说下你知道的设计模式及应用场景**
18. [小米]如何用缓存进行前端优化；说下浏览器缓存、DNS缓存、nginx缓存、服务端缓存的区别；强缓存和协商缓存的应用
19. [小米]如何开启GPU加速，GPU加速的作用是什么
20. [小米]是否了解浏览器内核相关技术
21. [小米]说一下jsbridge是如何实现的  
22. [完美世界]题目：两个玻璃小球，从一到一百层中间的某一层落下会碎，不考虑小球的磨损情况，比如说一层落下不会碎，小球不会受到任何伤害，如何最快找出小球破碎的最低层
23. [完美世界]扩展，有很多的小球，题目类似，然后把一到一百层放到一个数组中，数组是乱序，如果最快找出破碎的最低层 
24. [完美世界]题目：一个函数，没有入参，如何实现每次调用返回1到200中的任意一个数，且每次返回的数不重复，如果1到200都被返回过了，就不在返回任何数字
25. [完美世界]百度网盘的下载功能如何实现，浏览器环境，不使用浏览器自带的下载功能，可以暂停，可以继续
26. [完美世界]给定一个整数 N，写一个程序判断是否存在 2 个整数 a、b（a < b），使得 a^2 + b^2 = N，如果存在返回所有的结果



# 资料

- https://www.kancloud.cn/pillys/qianduan/2049476
- https://juejin.cn/post/6940945178899251230#heading-1
- https://github.com/yisainan/web-interview
