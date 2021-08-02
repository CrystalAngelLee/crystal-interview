# Crystal 的面试题整理

> 更新说明： 本专题不定期长期更新

## JavaScript部分

1. [什么是函数式编程？ JavaScript的哪些特性使其成为函数式语言的候选语言？](/javascript/什么是函数式编程？%20JavaScript的哪些特性使其成为函数式语言的候选语言？.md)

2. [什么是高阶函数？](/javascript/%E4%BB%80%E4%B9%88%E6%98%AF%E9%AB%98%E9%98%B6%E5%87%BD%E6%95%B0.md)

3. [为什么函数被称为一等公民？](/javascript/为什么函数被称为一等公民.md)

4. [如何检查值是否虚值？](/javascript/如何检查值是否虚值.md)

5. ['use strict' 有什么用？](/javascript/'use%20strict'%20有什么用.md)

6. [描述一下原型、原型链、作用域、作用域链](/javascript/原型、原型链、作用域、作用域链.md)

7. [谈谈你是如何理解JS异步编程的](/javascript/%E8%B0%88%E8%B0%88%E4%BD%A0%E6%98%AF%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3JS%E5%BC%82%E6%AD%A5%E7%BC%96%E7%A8%8B%E7%9A%84.md)

8. [阅读下面代码，只考虑浏览器环境下的输出结果，写出他们结果打印的先后顺序，并分析出原因](/javascript/08_阅读代码给出结果.md)

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

9. [阅读下面代码，我们只考虑浏览器环境下的输出结果，写出它们结果打印的先后顺序，并分析出原因](/javascript/09_阅读代码给出结果.js)

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

10. [有赞|B站][实现 debounce](/javascript/实现%20debounce.js)

    ```js
    const a = {
      name: 'test-debounce',
      log: debounce(function (a) {
          console.log('test')
          console.log(this.name)
          console.log(a)
      }, 100)
    }
    
    // a.log()
    // a.log(123) /'test' 'test-debounce' 123
    ```

11. [有赞]将一个json数据的所有key从下划线改为驼峰

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

12. [有赞]将一天24小时按每半时小划分成48段，我们用一个位图表示选中的时间区间，

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

13. 请说一下Promise的内部实现方式

14. [请介绍一下消息队列和event loop](/javascript/请介绍一下消息队列和event loop.md)

15. 如何继承

16. 有哪几种异步解决方案

17. loader中如何写入异步代码

18. 修饰器是什么，是如何工作的

19. [说一下js的数据类型，如何判断数据类型](./javascript/数据类型.md)

20. [滴滴]如何判断一个对象是否属于某个类

21. [滴滴]说一下防抖函数的应用场景，并简单说下实现方式

22. [滴滴]new Promise构造函数的入参是什么？你在什么场景下会使用promise 

23. [小米]手写翻转二叉树 

24. [小米]说下归并排序的思路和应用场景

25. [小米]说说重绘、重排、回流

26. [小米]说一下V8的垃圾回收机制

27. [跟谁学]commonjs esmodule的区别

28. [说几个常用的ES6方法](./javascript/ES6.md)

29. [完美世界]object.defineproperty 和 proxy 的区别 

30. [如何解决跨域问题](./javascript/如何解决跨域问题.md)

31. [下面代码输出什么](./javascript/31_下面代码输出什么.md)

     ```js
     var foo = function bar() { return 12; }
     typeof bar
     ```

32. [用正则表达式实现分割数字 “12345678901” 每三个以一个逗号 “ ，” 划分](./javascript/用正则表达式实现分割数字 "12345678901" 每三个以一个逗号 " ，" 划分.md)

33. [实现数组去重元素并使元素降序排列](./javascript/实现数组去重元素并使元素降序排列.md)

34. [事件委托（手写例子）事件冒泡和捕获，如何阻止冒泡？如何阻止默认事件](./javascript/事件委托（手写例子）事件冒泡和捕获，如何阻止冒泡？如何阻止默认事件)

35. [ES6中箭头有哪些新特点？并说明箭头函数和普通函数中的this指向](./javascript/ES6中箭头有哪些新特点？并说明箭头函数和普通函数中的this指向.md)

36. [var let const 的理解](./javascript/var let const 的理解.md)

37. [实现一个instanceof](./javascript/instanceof.md)

38. 如果有一个大的数组，都是整型，怎么找出最大的前10个数

39. 创建ajax的过程

40. 渐进增强和优雅降级

41. [如何将字符串转化为数字？](./javascript/字符串转数字.md)

42. 拷贝一个很多嵌套的对象怎么实现？

43. [写一个function,清除字符串前后的空格](./javascript/清除字符串前后的空格.js)

44. [不用loop循环，创建一个长度为100的数组，并且每个元素的值等于他的下标](./javascript/不用loop循环，创建一个长度为100的数组，并且每个元素的值等于他的下标.md)

45. 实现数组拍平

46. 数组的去重，尽可能多方法

47. [闭包实现加法器](./javascript/闭包实现加法器.js)

48. 字符串反转实现

49. [说出数组的方法不改变原数组、改变原数组](./javascript/数组的方法.md)

50. 描述一下map、set方法的特点以及区别

51. set 实现去重的原理

52. map和object的区别

## CSS 部分

1. [小米]说一下css的三个特性并展开说一下应用场景
2. [小米]说一下CSS七层层叠顺序
3. [阿里]z-index的层级关系及css中的层叠上下文
4. [阿里]尽量多的水平垂直居中，分是否已知道父子dom宽高的情况
5. [阿里]如何触发BFC，以及用法和IFC区别
6. [阿里]简单介绍下box-sizing属性 
7. [[阿里]css优先级如何计算](/css/css优先级如何计算.md)
8. [阿里]top、left是相对于padding还是border
9. [阿里]flex布局的使用及在平时中哪些时候会用到 
10. [阿里]display:none和visibility:hidden的区别 
11. [清除浮动的方法有哪些](./css/清除浮动的方法.md)
12. [阿里] ::before和:after中双冒号和单冒号有什么区别 
13. [阿里]1像素边框在移动端的实现
14. [阿里]rem和em区别及使用方法 
15. [阿里]CSS中哪些属性可以继承？ 
16. [阿里]CSS3动画的实现步骤 
17. [请解释一下CSS3的flexbox(弹性盒布局模型)，以及应用场景](./css/CSS3的flexbox(弹性盒布局模型))
18. [用CSS3布局的伪类选择器实现下图效果](./css/用CSS3布局的伪类选择器实现下图效果.md)
    ![效果实现](./css/效果实现.png)
19. [position的值，relative和absolute分别是相对于谁进行定位的？](./css/relative和absolute分别是相对于谁进行定位的.md)
20. [实现元素水平垂直居中](./css/实现元素水平垂直居中.md)
21. 如何用css 实现一个三角形
22. [什么是外边距合并？](./css/外边距合并.md)
23. 实现一个带边框的扇形
24. 居中为什么用transform而不用其他的呢
25. 做一个进度条：为什么用动画比直接改变长宽更好呢
26. [如何绘制一个球](./css/绘制一个球.md)

## HTML

1. [浏览器是如何渲染页面的](./html/浏览器是如何渲染页面的.md)
2. [对h5的理解](./html/对h5的理解.md)
3. [回流与重绘](./html/回流与重绘.md)
4. [左边宽度固定，右边自适应](./html/左边宽度固定，右边自适应.html)
5. [label 的作用是什么？是怎么用的?](./html/label.md)
6. [已知ID的input输入框，希望获取这个输入框的输入值，怎么做?](./html/已知ID的input输入框，希望获取这个输入框的输入值.md)
7. [为什么最好把 CSS 的 `<link>` 标签放在 `<head></head>` 之间？为什么最好把 JS 的 `<script>` 标签恰好放在 `</body>` 之前，有例外情况吗？](./html/为什么最好把CSS的link标签放在head之间？为什么最好把JS的script标签最好放在body之后，有例外的情况吗.md)
8. [简述一下你对 HTML 语义化的理解？](./html/对语义化标签的理解.md)
9. [什么是渐进式渲染（progressive rendering）](./interview/html/渐进式渲染.md)

## HTTP

1. [说下你知道的HTTP状态码并说出它们的出现场景](./http/HTTP状态码.md)
2. [腾讯视频]http2.0的优势
3. [http和https的区别](./http/http和https的区别.md)
4. [说一下协商缓存和强制缓存](./http/协商缓存和强制缓存.md)

## Webpack 部分

1. [请说明webpack打包的原理](./engineering/请说明webpack%20打包的原理.md)
2. webpack的打包流程，ast是什么
3. webpack如何提升打包后的页面性能
4. webpack如何打包多端项目
5. [跟谁学]webpack常用配置项
6. [跟谁学]webpack css-loader 的作用 commonChunk/splitChunk作用点 区别
7. [跟谁学]webpack dll优化效果
8. [Webpack 如何优化性能](./webpack/性能优化.md)

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

8. [将React中的10个生命周期函数，分别按照前后调用顺序写出来，并且将参数罗列出来，以及通常所做的优化](./react/将React中的10个生命周期函数，分别按照前后调用顺序写出来，并且将参数罗列出来，以及通常所做的优化)

9. 如何避免组件重新渲染

10. [hooks 的缺点有哪些](./react/hooks的优缺点.md)

11. [使用hooks实现自定义hooks, 一个计算组件从挂载到卸载的时间](./react/挂载到卸载的时间.md)

12. 为什么说虚拟dom可以提高性能

13. purecomponent 和 hooks 有啥区别

14. [react性能优化方案](./react/react性能优化.md)

15. 如何自己实现一个mini 的react-redux

16. https://www.icode9.com/content-4-1048139.html

17. [useState和setState区别](./react/useState和setState区别.md)

18. [hook如何模拟组件生命周期](./react/hook模拟生命周期.md)

19. [说一下常用的hook](./react/常用的hook.md)

    

## TypeScript

1. 说一下你对泛型的理解

2. TypeScript支持哪些面向对象术语

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

1. [小米]如何进行前端性能优化
2. [完美世界]首屏白屏的优化方案
3. [完美世界]瀑布屏如何实现，以及如何优化
4. [完美世界]当页面数据非常多，比如一直上拉加载，加载了很多的数据，页面性能会变差，如何优化
5. 十万条数据一次性渲染到页面上应该怎么处理
6. 前端项目如何找出性能瓶颈

## 算法

1. heap排序方法的原理？复杂度？
2. 手写几种常见的排序算法

## 未分类

1. Jsbridge是如何工作的
2. [滴滴]APP内嵌H5页面如何和APP本身进行通信
3. [滴滴]H5的开发和PC端的开发有什么本质的不同 
4. [滴滴]如何针对H5页面进行远程调试？
5. [滴滴]如何进行手机的页面或者应用的抓包
6. [滴滴]已知公司附近有两个加油站，和一条主干道，要求在24小时内尽可能准确的统计全市有多少台车， 说出你的思路 
7. [小米]说一下从浏览器输入网址到页面渲染中间发生了什么
8. [小米]如何实现一个简单的单点登录
9. [小米]说一下关系数据库和非关系数据库的区别，并说下使用场景
10. [小米]说一下关系数据库外键的使用
11. [小米]说下你知道的设计模式及应用场景
12. [小米]如何用缓存进行前端优化；说下浏览器缓存、DNS缓存、nginx缓存、服务端缓存的区别；强缓存和协商缓存的应用
13. [小米]如何开启GPU加速，GPU加速的作用是什么
14. [小米]是否了解浏览器内核相关技术
15. [小米]说一下jsbridge是如何实现的  
16. [完美世界]题目：两个玻璃小球，从一到一百层中间的某一层落下会碎，不考虑小球的磨损情况，比如说一层落下不会碎，小球不会受到任何伤害，如何最快找出小球破碎的最低层
17. [完美世界]扩展，有很多的小球，题目类似，然后把一到一百层放到一个数组中，数组是乱序，如果最快找出破碎的最低层 
18. [完美世界]题目：一个函数，没有入参，如何实现每次调用返回1到200中的任意一个数，且每次返回的数不重复，如果1到200都被返回过了，就不在返回任何数字
19. [完美世界]百度网盘的下载功能如何实现，浏览器环境，不使用浏览器自带的下载功能，可以暂停，可以继续
20. [完美世界]给定一个整数 N，写一个程序判断是否存在 2 个整数 a、b（a < b），使得 a^2 + b^2 = N，如果存在返回所有的结果



# 资料

- https://www.kancloud.cn/pillys/qianduan/2049476
- https://juejin.cn/post/6940945178899251230#heading-1
- https://github.com/yisainan/web-interview
