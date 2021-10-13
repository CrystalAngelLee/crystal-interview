# Crystal 的面试题整理

> 更新说明： 本专题不定期长期更新

[TOC]

## JavaScript部分

1. [什么是函数式编程？ JavaScript的哪些特性使其成为函数式语言的候选语言？](./javascript/什么是函数式编程？%20JavaScript的哪些特性使其成为函数式语言的候选语言？.md)

2. [什么是高阶函数？](/javascript/%E4%BB%80%E4%B9%88%E6%98%AF%E9%AB%98%E9%98%B6%E5%87%BD%E6%95%B0.md)

3. [为什么函数被称为一等公民？](./javascript/为什么函数被称为一等公民.md)

4. [如何检查值是否虚值？](./javascript/如何检查值是否虚值.md)

5. ['use strict' 有什么用？](./javascript/'use%20strict'%20有什么用.md)

6. [说说严格模式的限制 ](./javascript/'use strict' 有什么用.md)

7. [描述一下原型、原型链、作用域、作用域链](/javascript/原型、原型链、作用域、作用域链.md)

8. [谈谈你是如何理解JS异步编程的](./javascript/%E8%B0%88%E8%B0%88%E4%BD%A0%E6%98%AF%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3JS%E5%BC%82%E6%AD%A5%E7%BC%96%E7%A8%8B%E7%9A%84.md)

9. [阅读下面代码，只考虑浏览器环境下的输出结果，写出他们结果打印的先后顺序，并分析出原因](./javascript/08_阅读代码给出结果.md)

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

18. [javascript 继承的 6 种方法 ](./javascript/js继承.md)

13. [说一下js的数据类型，如何判断数据类型](./javascript/数据类型.md)

14. [请介绍一下消息队列和event loop](/javascript/请介绍一下消息队列和event loop.md)

15. [说几个常用的ES6方法](./javascript/ES新特性.md)

16. [Javascript 垃圾回收方法](./javascript/Javascript 垃圾回收.md)

17. [下面代码输出什么](./javascript/31_下面代码输出什么.md)

     ```js
     var foo = function bar() { return 12; }
     typeof bar
     ```

18. [用正则表达式实现分割数字 “12345678901” 每三个以一个逗号 “ ，” 划分](./javascript/用正则表达式实现分割数字 "12345678901" 每三个以一个逗号 " ，" 划分.md)

19. [实现数组去重元素并使元素降序排列](./javascript/实现数组去重元素并使元素降序排列.md)

20. [事件委托（手写例子）事件冒泡和捕获，如何阻止冒泡？如何阻止默认事件](./javascript/事件委托（手写例子）事件冒泡和捕获，如何阻止冒泡？如何阻止默认事件)

21. [ES6中箭头有哪些新特点？并说明箭头函数和普通函数中的this指向](./javascript/ES6中箭头有哪些新特点？并说明箭头函数和普通函数中的this指向.md)

22. [var let const 的理解](./javascript/var let const 的理解.md)

23. [实现一个instanceof](./javascript/instanceof.md)

24. [说一说闭包](./javascript/闭包.md)

25. [创建ajax的过程](./javascript/ajax/创建ajax的过程.md)

26. [ajax 的缺点和在 IE 下的问题](./javascript/ajax/ajax 的缺点和在 IE 下的问题.md)

27. [如何实现 ajax 请求，假如我有多个请求，我需要让这些 ajax 请求按照某种顺序一次执行，有什么办法呢？如何处理 ajax 跨域 ](./javascript/ajax/如何实现 ajax 请求，假如我有多个请求，我需要让这些 ajax 请求按照某种顺序一次执行，有什么办法呢？如何处理 ajax 跨域 .md)

28. [如何实现一个 ajax 请求？如果我想发出两个有顺序的 ajax 需要怎么做](./javascript/ajax/如何实现 ajax 请求，假如我有多个请求，我需要让这些 ajax 请求按照某种顺序一次执行，有什么办法呢？如何处理 ajax 跨域 .md)

29. [Flash、Ajax 各自的优缺点，在使用中如何取舍？](./javascript/ajax/FlashPKAjax.md)

30. [如何将字符串转化为数字？](./javascript/字符串转数字.md)

31. [写一个function,清除字符串前后的空格](./javascript/清除字符串前后的空格.js)

32. [不用loop循环，创建一个长度为100的数组，并且每个元素的值等于他的下标](./javascript/不用loop循环，创建一个长度为100的数组，并且每个元素的值等于他的下标.md)

33. [如何实现数组扁平化](./javascript/数组扁平化.md)

34. [数组的去重，尽可能多方法](./javascript/数组去重.md)

35. [闭包实现加法器](./javascript/闭包实现加法器.js)

36. [说出数组的方法不改变原数组、改变原数组](./javascript/数组的方法.md)

37. [null 和 undefined 的区别 ](./javascript/null 和 undefined 的区别 .md)

38. [javascript 对象的几种创建方式 ](./javascript/javascript 对象的几种创建方式 .md)

39. [new 操作符具体干了什么呢? ](./javascript/new操作符具体干了什么呢.md)

40. [call()和 apply() 的区别和作用](./javascript/call_apply_bind区别和作用.md)

41. [说说你对 Promise 的理解](./javascript/ES6/Promise 的理解.md)

42. [介绍一下promise.all 方法](.javascript/ES6/Promis.all.md)

43. [说说你对 AMD 和 Commonjs 的理解](./javascript/AMD 和 Commonjs 的理解.md)

44. [请解释什么是事件代理](./javascript/事件代理.md)

45. [事件、IE与火狐的事件机制有什么区别？ 如何阻止冒泡？ ](./javascript/事件、IE与火狐的事件机制有什么区别？ 如何阻止冒泡？.md)

46. [异步加载和延迟加载](./javascript/异步加载和延迟加载.md)

47. [defer 和 async ](./javascript/defer和async.md)

48. [js 延迟加载的方式有哪些？]((./javascript/异步加载和延迟加载.md))

49. [栈和堆的区别](./javascript/栈和堆的区别.md)

50. [写一个 mySetInterVal(fn, a, b),每间隔 a,a+b,a+2b 的时间，然后写一个myClear，停止上面的mySetInterVal](./javascript/mySetInterVal.md)

51. [如何统计当前网页出现过多少种Html](./javascript/如何统计当前网页出现过多少种Html.md)

52. [请你谈谈Cookie的弊端](./javascript/请你谈谈Cookie的弊端.md)

53. [哪些操作会造成内存泄漏？](./javascript/哪些操作会造成内存泄漏.md)

54. [说一下V8的垃圾回收机制](./javascript/V8的垃圾回收机制.md)

55. [如何删除一个 cookie](./javascript/如何删除一个 cookie.md)

56. [简单讲一讲 ES6 的一些新特性](./javascript/ES6 的一些新特性.md)

57. [希望sdk是全局唯一的，让sdk1 和 sdk2 获得到的实例是同一个，怎么实现这个sdk](./javascript/希望sdk是全局唯一的，让sdk1 和 sdk2 获得到的实例是同一个，怎么实现这个sdk.md)

58. [实现Promise.all](./javascript/实现Promise.all.md)

59. [说一下箭头函数和普通函数之间的区别](./javascript/箭头函数和普通函数之间的区别.md)

60. [描述一下map、set方法的特点以及区别](./javascript/ES6/Map和Set.md)

61. [如何实现深拷贝](./javascript/深浅拷贝.md)

62. [实现一个js函数,满足先开始显示红色3秒、然后显示黄色1秒,最后显示绿色2秒,进行循环](./javascript/实现一个js函数,满足先开始显示红色3秒、然后显示黄色1秒,最后显示绿色2秒,进行循环.md)

63. js中有哪些对象是可迭代的

64. [请描述打印结果并解释原因：](./javascript/this打印结果并解释原因.md)

    ```js
    'use strict'
    var name = 'Jay'
    var person = {
        name: 'Wang',
        pro: {
            name: 'Michael',
            getName: function () {
                return this.name;
            }
        }
    }
    console.log(person.pro.getName());
    var pepole = person.pro.getName;
    console.log(pepole());
    ```

65. [JavaScript 严格模式下有哪些不同？](./javascript/JavaScript 严格模式下有哪些不同.md)

66. [请给出下列代码的输出](./javascript/类型输出.md)

    ```js
    null == undefined
    typeof NaN;
    typeof Function;
    typeof Object;
    typeof {};
    'a' + 1;
    'a' - 1;
    Function instanceof Object;
    Object instanceof Function;
    ```

67. [promise 和 async await 的区别，使用场景](./javascript/ES6/promise 和 async await 的区别，使用场景.md)

68. [循环（数组的循环 object的循环）](./javascript/循环（数组的循环 object的循环）.md)

69. 如何判断一个对象为空

70. 手写一个bind 函数

71. class的实现原理

72. 数组的哪些遍历方法可中断

73. 字符串反转实现

74. 代码执行过程中的内存分配

75. [有赞]将一个json数据的所有key从下划线改为驼峰

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

76. [有赞]将一天24小时按每半时小划分成48段，我们用一个位图表示选中的时间区间，

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

77. 请说一下Promise的内部实现方式

78. 有哪几种异步解决方案

79. loader中如何写入异步代码

80. 修饰器是什么，是如何工作的

81. [滴滴]如何判断一个对象是否属于某个类

82. [滴滴]new Promise构造函数的入参是什么？你在什么场景下会使用promise 

83. [跟谁学]commonjs esmodule的区别

84. [完美世界]object.defineproperty 和 proxy 的区别 

    

## TypeScript

1. [说一下你对泛型的理解](https://www.tslang.cn/docs/handbook/generics.html)

2. [TypeScript支持哪些面向对象术语](./typescript/TypeScript支持哪些面向对象术语.md)

3. [怎么将一个type声明的类型转为可选](./typescript/怎么将一个type声明的类型转为可选.md)

4. [怎么获取一个函数的参数的类型](./typescript/获取一个函数的参数的类型.md)

5. [ts重载具体怎么写](./typescript/ts重载具体怎么写.md)

6. [A是什么效果,类型约束达到的是什么效果](https://blog.csdn.net/weixin_43294560/article/details/107464378)

7. [说说类型推断](https://www.tslang.cn/docs/handbook/type-inference.html)

8. [常用的ts特性](./typescript/常用的ts特性.md)

9. [typescript的extends了解么](./typescript/typescript的extends.md)

10. [定义一个函数，入参为一个对象还有key，对象里有不同的type 类型值，要求返回key的value的类型](./typescript/定义一个函数，入参为一个对象还有key，对象里有不同的type 类型值，要求返回key的value的类型.md)

11. [interface 和 type的区别](https://www.jb51.net/article/163299.htm)

12. [泛型的使用](https://blog.csdn.net/yivisir/article/details/109560081)

13. 说说Typescripy和Javascript的区别？

    

## CSS 部分

4. [尽量多的水平垂直居中，分是否已知道父子dom宽高的情况](./css/实现元素水平垂直居中.md)
4. [如何居中 div, 如何居中一个浮动元素](./css/如何居中 div, 如何居中一个浮动元素.md)
5. [top、left是相对于padding还是border](./css/top、left是相对于padding还是border.md)
6. [列出 display 的值并说明他们的作用](./css/列出 display 的值并说明他们的作用.md)
7. [对 BFC 规范的理解](./css/BFC 规范.md)
9. [block，inline 和 inlinke-block 细节对比？](./css/block，inline 和 inlinke-block 细节对比.md)
10. [请解释一下CSS3的flexbox(弹性盒布局模型)，以及应用场景](./css/CSS3的flexbox(弹性盒布局模型))
11. [display:none和visibility:hidden的区别 ](./css/display:none和visibility:hidden的区别.md)
12. [清除浮动的方法有哪些](./css/浮动.md)
13. [解释下浮动和它的工作原理？清除浮动的技巧](./css/浮动.md)
18. [用CSS3布局的伪类选择器实现下图效果](./css/用CSS3布局的伪类选择器实现下图效果.md)
    ![效果实现](./css/效果实现.png)
19. [position的值，relative和absolute分别是相对于谁进行定位的？](./css/relative和absolute分别是相对于谁进行定位的.md)
21. [什么是外边距合并？](./css/外边距合并.md)
25. [如何绘制一个球](./css/绘制一个球.md)
26. [渐进增强和优雅降级](./css/渐进增强和优雅降级.md)
27. [CSS3 新增伪类有那些？ ](./css/CSS3 新增伪类.md)
28. [CSS3 有哪些新特性？ ](/css/CSS3新特性.md)
30. [CSS 有哪些基本选择器？他们的权重是如何表示的？](./css/CSS 有哪些基本选择器？他们的权重是如何表示的.md)
31. [请你说说 CSS 选择器的类型有哪些，并举几个例子说明其用法？](./css/CSS 选择器.md)
32. [选择符有哪些？哪些属性可以继承？](./css/选择符有哪些？哪些属性可以继承？.md)
33. [请你说说 CSS 有什么特殊性?（优先级、计算特殊值）](./css/CSS 有什么特殊性?（优先级、计算特殊值）.md)
34. [优先级算法如何计算？](./css/优先级算法如何计算.md)
35. [解释一下 CSS 的盒子模型？ ](./css/CSS盒子模型.md)
36. [简单介绍下box-sizing属性](./css/box-sizing.md)
37. [CSS 中 link 和@import 的区别是](./css/CSS 中 link 和@import 的区别是.md)
38. [position:absolute 和 float 属性的异同 ](./css/position:absolute 和 float 属性的异同 .md)
30. [less里边mixin和function的用法,区别](./css/less里边mixin和function的用法,区别.md)
31. [画一条 0.5px 的线](./css/画一条 0.5px 的线.md)
32. [rem和em区别及使用方法](./css/rem和em.md)
33. [说一下CSS模块化和CSS-in-js](./css/CSS预处理器和CSS模块化.md)
34. 如何绘制一个半圆
35. [小米]说一下CSS七层层叠顺序
36. [阿里]z-index的层级关系及css中的层叠上下文
37. 实现一个带边框的扇形
38. 居中为什么用transform而不用其他的呢
39. 做一个进度条：为什么用动画比直接改变长宽更好呢
40. [小米]说一下css的三个特性并展开说一下应用场景
41. 如何用css 实现一个三角形
42. [阿里] ::before和:after中双冒号和单冒号有什么区别 
43. [阿里]1像素边框在移动端的实现
44. [阿里]CSS3动画的实现步骤 
45. [阿里]如何触发BFC，以及用法和IFC区别

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
11. [什么是渐进式渲染（progressive rendering）](./html/渐进式渲染.md)
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
27. [web storage 和 cookie 的区别](./html/web storage 和 cookie 的区别.md)
28. [浏览器本地存储](./html/浏览器本地存储.md)
29. [cookie 和 session 的区别 ](./html/cookie 和 session 的区别.md)
30. [移动布局方案](./html/移动布局方案.md)
31. [网络中使用最多的图片格式有哪些](./html/网络中使用最多的图片格式有哪些.md)
32. [小米]说说重绘、重排、回流
33. 浏览器是如何渲染页面的

## HTTP

1. [说下你知道的HTTP状态码并说出它们的出现场景](./http/HTTP状态码.md)

2. [http2.0的优势](./http/Http2.0.md)

3. [关于 Http 2.0 你知道多少](./http/Http2.0.md)

4. [WEB 应用从服务器主动推送 Data 到客户端有那些方式](./http/WEB 应用从服务器主动推送 Data 到客户端有那些方式.md)

5. [OSI 七层模型｜说说网络分层里七层模型是哪七层](./http/OSI 七层模型.md)

6. [TCP/IP 的网络模型 ](http://www.ruanyifeng.com/blog/2009/03/tcp-ip_model.html)

7. [tcp 三次握手，一句话概括](./http/TCP三次握手.md)

8. [说说TCP传输的三次握手四次挥手策略](./http/TCP传输的三次握手四次挥手策略.md)

9. [TCP 建立连接的三次握手过程](./http/TCP三次握手.md)

10. [TCP 和 UDP 的区别，为什么三次握手四次挥手](./http/TCP 和 UDP 的区别，为什么三次握手四次挥手.md) 

11. [http和https的区别](./http/http和https.md)

12. [HTTP 请求的方式，HEAD 方式](./http/HTTP 请求的方式，HEAD 方式.md)

13. [GET 和 POST 的区别，何时使用 POST？](./http/GET 和 POST 的区别，何时使用 POST.md)

14. [请求方法 head 特性](./http/请求方法 head 特性.md)

15. [请解释一下 JavaScript 的同源策略](./http/跨域.md)

16. [为什么要有同源限制？ ](./http/为什么要有同源限制.md)

17. [如何实现跨域<问的其实就是如何解决跨域>](./http/跨域.md)

18. [如何解决跨域问题](./http/跨域.md)

19. [JSONP 的缺点](./http/JSONP 的缺点.md)

20. [说一下协商缓存和强制缓存/HTTP 缓存机制](./http/协商缓存和强制缓存.md)

21. [什么是 Etag ？ETag 应用](./http/Etag.md)

22. [为什么使用Etag请求头?](./http/为什么使用Etag请求头.md)

23. [Expires和Cache-Control](./http/Expires和Cache-Control.md)

24. [ajax 返回的状态](https://www.cnblogs.com/vikeykuo/p/10953555.html)

25. [websocket 和 ajax 的区别是什么，websocket 的应用场景有哪些](https://www.codercto.com/a/33490.html)

26. [cdn 原理](./http/cdn 原理.md)

27. [HTTP 状态码，301 和 302 有什么具体区别，200 和 304 的区别](./http/HTTP 状态码，301 和 302 有什么具体区别，200 和 304 的区别.md)

28. [讲讲304缓存的原理](./http/304缓存的原理.md)

29. [一个图片 url 访问后直接下载怎样实现？](./http/一个图片 url 访问后直接下载怎样实现.md)

30. [简单请求和非简单请求, 如何解决跨域的](./http/简单请求和非简单请求.md)

31. http3的了解

32. WebSocket 的实现和应用 

    

## Webpack 部分

1. [请说明webpack打包的原理](./engineering/请说明webpack%20打包的原理.md)
2. [Webpack 如何优化性能](./webpack/性能优化.md)
3. [Tree-shiking及其工作原理](https://blog.csdn.net/MrWeb/article/details/120037989?utm_medium=distribute.pc_aggpage_search_result.none-task-blog-2~aggregatepage~first_rank_v2~rank_aggregation-8-120037989.pc_agg_rank_aggregation&utm_term=%E5%B0%8F%E7%BA%A2%E4%B9%A6%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95&spm=1000.2123.3001.4430)
4. 谈谈你对 webpack 的看法
5. 介绍一下模块热更新
6. 如何能让编译更快
7. Tree-shiking（怎么做删除的）
8. webpack的打包流程，ast是什么，详细说明
9. webpack如何提升打包后的页面性能
10. webpack如何打包多端项目
11. [跟谁学]webpack常用配置项
12. [跟谁学]webpack css-loader 的作用 commonChunk/splitChunk作用点 区别
13. [跟谁学]webpack dll优化效果
14. 做了哪些打包优化，优化成果怎么样的

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

1. [hooks 的缺点有哪些](./react/hooks的优缺点.md)
2. [使用hooks实现自定义hooks, 一个计算组件从挂载到卸载的时间](./react/挂载到卸载的时间.md)
3. [为什么说虚拟dom可以提高性能](./react/虚拟Dom如何提升性能.md)
4. [说说react类组件的生命周期](./react/react类组件的生命周期.md)
5. [react性能优化方案](./react/react性能优化.md)
6. [useState和setState区别](./react/useState和setState区别.md)
7. [hook如何模拟组件生命周期](./react/hook模拟生命周期.md)
8. [说一下常用的hook](./react/常用的hook.md)
9. [说一下你理解的虚拟dom](./react/虚拟DOM.md)
10. [对react高阶组件的设计模式的了解](./react/高阶组件的设计模式.md)
11. [React 本身哪些是高阶组件](./react/React 本身哪些是高阶组件.md)
12. [和memo类似功能的API](./react/和memo类似功能的API.md)
13. [实现一个counter 函数组件,可受控&可非受控](./react/实现一个counter 函数组件,可受控&可非受控.md)
14. [react中的setState是同步还是异步还是？](./react/react中的setState是同步还是异步还是.md)
15. [讲一下虚拟DOM](./react/虚拟DOM.md)
16. [key 的作用是什么](./react/key 的作用是什么.md)
17. [redux 的数据流](./react/redux 的数据流.md)
18. [fiber解决了什么问题](https://blog.csdn.net/weixin_44475093/article/details/119225148)
19. [useEffect 和类组件的生命周期的类比](https://www.thinbug.com/q/57355814)
20. 类组件和函数组件的区别
21. [跟谁学]为什么选择react/vue 及二者差别
22. [跟谁学]react-router实现原理 hash/history 如何跳转不刷新 nginx如何配置跨域
23. [跟谁学]purecomponent优势
24. [腾讯视频]react setState 实现
25. [B站]react fiber算法原理及实现
26. [B站]react 子组件与父组件如何通信
27. [B站]react 怎么根据 state 和 props 的变化去更新 dom 树的
28. 如何避免组件重新渲染
29. purecomponent 和 hooks 有啥区别
30. 如何自己实现一个mini 的react-redux
31. https://www.icode9.com/content-4-1048139.html
32. 说一下react是如何进行diff的

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

1. [谈谈性能优化问题](./性能优化/性能优化.md)
2. [什么是 FOUC（无样式内容闪烁）？你如何来避免 FOUC？](./性能优化/什么是 FOUC（无样式内容闪烁）？你如何来避免 FOUC？.md)
3. [移动端性能优化相关经验](https://blog.csdn.net/tangxiujiang/article/details/79791545)
5. [完美世界]首屏白屏的优化方案
6. [完美世界]瀑布屏如何实现，以及如何优化
7. [完美世界]当页面数据非常多，比如一直上拉加载，加载了很多的数据，页面性能会变差，如何优化
8. 十万条数据一次性渲染到页面上应该怎么处理
9. 前端项目如何找出性能瓶颈
10. 如何用缓存进行前端优化；说下浏览器缓存、DNS缓存、nginx缓存、服务端缓存的区别；强缓存和协商缓存的应用

## 安全

1. [常见 web 安全及防护原理](./安全/常见 web 安全及防护原理.md)
2. [XSS 原理及防范](./安全/XSS 原理及防范.md)
3. [XSS 与 CSRF 有什么区别吗？](./安全/XSS 与 CSRF 有什么区别.md)

## 算法

1. [heap排序方法的原理？复杂度？](./算法/堆排序.md)
2. [手写几种常见的排序算法](./interview/算法/排序算法.md)
3. [如果有一个大的数组，都是整型，怎么找出最大的前10个数](./interview/算法/最大的k个数.md)
4. [栈和队列的区别](./算法/栈和队列的区别.md)
5. [B树的特性，B树和 B+树的区别](./算法/B树的特性，B树和 B+树的区别.md)
6. [二叉树层序遍历](./算法/二叉树层序遍历.md)
7. [尾递归](./算法/尾递归.md)
8. [如何写一个大数阶乘？递归的方法会出现什么问题?](./算法/如何写一个大数阶乘？递归的方法会出现什么问题.md)
9. [合并二维有序数组成一维有序数组，归并排序的思路](./算法/合并二维有序数组成一维有序数组，归并排序的思路.md)
10. [实现千分位分隔符函数](./算法/千位分隔数.md)
11. [薯队长带着小红薯参加密室逃脱团建游戏，首先遇到了反转游戏，小红薯们根据游戏提示收集了多个单词线索，并将单词按要求加一个空格组 成了句子，最终要求把句子按单词反转解密。 说明：收集的时候单词前后可能会有多个空格，反转后单词不能有多个空格](./算法/反转单词.md)
12. 判断子序列
13. 斐波那契数列
14. [手写翻转二叉树](./算法/树/翻转二叉树.md)
15. [小米]说下归并排序的思路和应用场景
16. 使用 javascript 实现 filterSensitiveWord() 方法：敏感词过滤，将指定字符串中的敏感词替换为星号字符（*），参数有目标字符串input，敏感词列表sensitive，返回过滤后的字符串

## 其他

1. [移动端兼容性](./others/移动端兼容性.md)
2. [介绍模块化发展历程](./others/模块化发展历程.md)
3. [对前端模块化的认识](./others/对前端模块化的认识.md)
4. [ie 各版本和 chrome 可以并行下载多少个资源](./others/ie 各版本和 chrome 可以并行下载多少个资源.md)
5. [一个页面从输入 URL 到页面加载显示完成，这个过程中都发生了什么](./others/一个页面从输入 URL 到页面加载显示完成，这个过程中都发生了什么.md)
6. [接口文档](./others/接口文档.md)
7. [XML 和 JSON 的区别？](./others/XML 和 JSON 的区别.md)
8. [Web Worker 和 webSocket](./others/Web Worker 和 webSocket.md)
9. [你觉得前端工程的价值体现在哪](./others/前端工程的价值体现.md)
10. [常见兼容性问题？](./others/常见兼容性问题.md)
11. [如何实现浏览器内多个标签页之间的通信? ](./others/如何实现浏览器内多个标签页之间的通信.md)
12. [列举 IE 与其他浏览器不一样的特性？](/Users/crystalangel/study-document/interview/others/列举 IE 与其他浏览器不一样的特性.md)
13. [对前端界面工程师这个职位是怎么样理解的？它的前景会怎么样？](./others/对前端界面工程师这个职位是怎么样理解的？它的前景会怎么样.md)
14. [谈谈你对重构的理解](./others/对重构的理解.md)
15. [说说你对前端架构师的理解](./others/对前端架构师的理解.md)
16. [git fetch 和 git pull 的区别](./others/git fetch 和 git pull 的区别.md)
17. [说说你对 MVC 和 MVVM 的理解](./others/对 MVC 和 MVVM 的理解.md)
18. [说说 mongoDB 和 MySQL 的区别](./others/mongoDB 和 MySQL 的区别.md)
19. [什么样的前端代码是好的](./others/什么样的前端代码是好的.md)
20. [知道 PWA 吗](./others/知道 PWA 吗.md)
21. [微前端的了解](./others/微前端的了解.md)
22. 如何实现一个简单的单点登录
23. 说下你知道的设计模式及应用场景
24. Jsbridge是如何工作的
25. [滴滴]APP内嵌H5页面如何和APP本身进行通信
26. [滴滴]H5的开发和PC端的开发有什么本质的不同 
27. [滴滴]如何针对H5页面进行远程调试？
28. [滴滴]如何进行手机的页面或者应用的抓包
29. [滴滴]已知公司附近有两个加油站，和一条主干道，要求在24小时内尽可能准确的统计全市有多少台车， 说出你的思路 
30. [小米]说一下关系数据库和非关系数据库的区别，并说下使用场景
31. [小米]说一下关系数据库外键的使用
32. [小米]如何开启GPU加速，GPU加速的作用是什么
33. [小米]是否了解浏览器内核相关技术
34. [小米]说一下jsbridge是如何实现的  
35. [完美世界]题目：两个玻璃小球，从一到一百层中间的某一层落下会碎，不考虑小球的磨损情况，比如说一层落下不会碎，小球不会受到任何伤害，如何最快找出小球破碎的最低层
36. [完美世界]扩展，有很多的小球，题目类似，然后把一到一百层放到一个数组中，数组是乱序，如果最快找出破碎的最低层 
37. [完美世界]题目：一个函数，没有入参，如何实现每次调用返回1到200中的任意一个数，且每次返回的数不重复，如果1到200都被返回过了，就不在返回任何数字
38. [完美世界]百度网盘的下载功能如何实现，浏览器环境，不使用浏览器自带的下载功能，可以暂停，可以继续
39. [完美世界]给定一个整数 N，写一个程序判断是否存在 2 个整数 a、b（a < b），使得 a^2 + b^2 = N，如果存在返回所有的结果



# hr 问题







# 资料

- https://www.kancloud.cn/pillys/qianduan/2049476
- https://juejin.cn/post/6940945178899251230#heading-1
- https://github.com/yisainan/web-interview



