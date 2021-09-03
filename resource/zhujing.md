#### JS

6. class的实现原理

   https://blog.csdn.net/qq_40968685/article/details/114642909

   https://cloud.tencent.com/developer/article/1519844

   https://juejin.cn/post/6954977079502831629

7. 数组的哪些遍历方法可中断

   https://blog.csdn.net/weixin_34228387/article/details/88024376

   https://blog.csdn.net/sinat_35538827/article/details/98896138

8. 字符串反转

   https://www.cnblogs.com/hcxwd/p/9350604.html

9. 原型链和原型对象

   https://juejin.cn/post/6844904146445811720

   https://juejin.cn/post/6844903590474203150

10. 闭包

    [说说闭包](https://github.com/LuckyWinty/fe-weekly-questions/issues/71)

11. 事件冒泡 事件捕获,哪个先

    > 事件捕获

12. 事件委托

    [说说事件委托](https://github.com/LuckyWinty/fe-weekly-questions/issues/72)

13. 代码执行过程中的内存分配

    [理解JavaScript 中的执行上下文和执行栈](https://muyiy.vip/blog/1/1.1.html)

    [JavaScript深入之执行上下文栈和变量对象](https://muyiy.vip/blog/1/1.2.html#执行上下文)

    [JavaScript深入之内存空间详细图解](https://muyiy.vip/blog/1/1.3.html)

    [JavaScript深入之带你走进内存机制](https://muyiy.vip/blog/1/1.4.html)

14. 进程和线程的区别

15. 数组遍历的方式 findIndex找不到返回-1 find 找不到返回undefined

17. 箭头函数和bind(this)的区别,哪个性能好?为什么

    https://juejin.cn/post/6844903892736557064#heading-2

18. this绑定方式,区别?

19. 数组哪些循环是可以中断的

23. setTimeout 0为什么会有延迟

    宏任务 https://www.webhek.com/post/settimeout-sleep-0-second.html

24. 声明一个对象时,怎么让它的某个属性为只读 object.defineProperty

25. const let var的区别

26. 怎么解决js大数字精度丢失问题

    https://blog.csdn.net/qq_35271556/article/details/80137474

27. js大数相加怎么实现

    https://blog.csdn.net/weixin_45727472/article/details/117305306

    https://www.cnblogs.com/vickylinj/p/14437786.html

28. 讲下事件冒泡

    https://juejin.cn/post/6844903834075021326

29. 实现缓存函数memorize

    https://segmentfault.com/a/1190000012505900

    https://juejin.cn/post/6844903494256705543

30. 说说函数柯里化

    https://juejin.cn/post/6844903603266650125

38. forEach map的区别

    https://juejin.cn/post/6844903593816883214

41. 说说aysc await

43. 说说eventLoop 宏任务和微任务的区别

    https://mp.weixin.qq.com/s/qhkQtRFmgfc7Mx0e1nROcw

44. setTimeout和Promise的执行优先级

45. compose了解么

    https://blog.csdn.net/zxl1990_ok/article/details/90049466

    https://segmentfault.com/a/1190000008394749

    ```
    var compose = function(f,g) {
      return function(x) {
        return f(g(x));
      };
    };
    ```

    ```
    var toUpperCase = function(x) { return x.toUpperCase(); };
    var exclaim = function(x) { return x + '!'; };
    var shout = compose(exclaim, toUpperCase);
    
    shout("send in the clowns");
    ```

    ```
    function compose(...args) {
      return (result) => {
        return args.reduceRight((result, fn) => {
          return fn(result)
        }, result)
      }
    }
    ```

46. 为什么js中函数是一等公民

    https://www.cnblogs.com/fundebug/p/javascript-first-class-function.html

    https://www.cnblogs.com/xiaoxiaokun/p/7090902.html

47. 数组打断顺序 去重 扁平化, 不清楚数组层级时用flat去重传什么参数

48. 说说模块化的历史 说说CMD和AMD

    [前端模块化发展史](https://www.jianshu.com/p/6332cb0f3d7f)

50. this绑定有哪些

    https://muyiy.cn/blog/3/3.1.html

51. 实时显示日期时间并格式化

52. 有一个li列表,实现点击打印出当前点击的li序号

54. 项目中用到哪些设计模式 观察者模式和发布订阅模式的区别

    https://juejin.cn/post/6844904032826294286#heading-76

    https://zhuanlan.zhihu.com/p/51357583

    https://blog.csdn.net/qq_36360463/article/details/105622635

    https://blog.csdn.net/hkduan/article/details/105802207

    https://www.jianshu.com/p/594f018b68e7

55. 正则:去掉字符串的前后空格 匹配千分位

    https://tool.oschina.net/uploads/apidocs/jquery/regexp.html

56. trim的作用

57. 分片上传,断点续传怎么做的

    https://juejin.cn/post/6844903860327186445#heading-8

58. class继承的原理

    https://juejin.cn/post/6875972243596247047

    https://www.cnblogs.com/memphis-f/p/12029574.html

59. 为什么会有暂时性死区

60. 实现防抖函数

61. 函数预加载了解么

62. 一个函数直接return this和return一个对象的区别

63. 怎么创建公有属性,私有属性

64. es5和es6的作用域有什么区别

65. 类的构造函数的作用

66. 怎么获取Array.prototype上的方法集合

67. 数组有哪些方法,怎么往数组头部插入一个元素

68. 什么对象没有prototype属性

    https://blog.csdn.net/qq_36711388/article/details/90346459

69. async await怎么捕获异常

70. 实现reduce,map

71. 怎么实现axios的接口超时 用promise.race实现

72. 正则匹配url中的参数(手写题)

73. 怎么实现lodash的分组方法

74. es5,es6监听属性的方式分别是什么

75. arguments和形参的区别,形参是什么时候生成的

#### CSS

1. Positon有哪些,三个不同定位,同样大小的div在页面上的效果,层级?

2. CSS3新特性

3. HTML5新特性

4. 一个页面分左侧菜单,头部,内容区域,具体每块css怎么写

5. 清除浮动有哪些办法

6. 重绘和回流,如何避免

   https://developers.google.com/web/fundamentals/performance/critical-rendering-path/

   [如何理解回流和重绘](https://github.com/LuckyWinty/fe-weekly-questions/issues/13)

8. 水平垂直居中

   https://juejin.cn/post/6844903799446831117


1. css实现右箭头

2. 3个div水平等比例排列

3. 不定宽高的div水平垂直居中

   https://juejin.cn/post/6844903799446831117

4. css选择器的类型,权重,优先级

   https://juejin.cn/post/6844903894313598989#heading-6

5. cssModule是什么

   http://www.ruanyifeng.com/blog/2016/06/css_modules.html

   https://segmentfault.com/a/1190000014686771

   https://juejin.cn/post/6844903665485119496#heading-11

6. position定位有哪些

   https://juejin.cn/post/6844903894313598989#heading-24

7. a标签有哪几种伪类

9. z-index高的元素反而显示在底下,可能是什么原因

10. css层叠上下文了解么

    [层叠上下文](https://juejin.cn/post/6941206439624966152#heading-22)

11. css盒模型

12. margin-top和tranform:tranlate的区别

13. 绝对定位不设置top等属性是什么效果

    https://blog.csdn.net/cherry_vicent/article/details/41778501

14. transform位移和position定位位置有什么区别,性能差异表现在哪里,为什么

    [translate和position的比较](https://www.cnblogs.com/shytong/p/5654142.html)

    [浅谈translate属性与相对定位、绝对定位的区别](https://blog.csdn.net/zhouziyu2011/article/details/71436509)

15. 实现位移动画有哪些方式,css,js

16. Css硬件加速有哪些属性

    [CSS动画原理及硬件加速](https://www.cnblogs.com/shytong/p/5419565.html)

17. 行内块级元素有哪些

    [块级元素，行内元素，行内块级元素都有哪些](https://www.cnblogs.com/zmshare/p/6648038.html)

18. css,多行超出显示点点点

    [CSS多行文字超出隐藏加省略号](https://ailongmiao.com/read/120.html)

19. css动画有哪些

    [css3动画属性有哪些](https://www.cnblogs.com/longhuacong/p/12389422.html)

    [说说你对CSS动画的理解](https://github.com/LuckyWinty/fe-weekly-questions/issues/60)

20. rem和em的区别

21. 获取标签元素中的文本有哪些方式

22. 暗黑模式怎么实现

    [H5 项目如何适配暗黑模式](https://mp.weixin.qq.com/s/Iwuk2z73FB3Zj3cFZC37tA)

23. 主题切换怎么实现

24. 隐藏元素有哪些方式?区别?

    [说说visibility=hidden, opacity=0，display:none的区别](https://github.com/LuckyWinty/fe-weekly-questions/issues/64)

#### REACT

1. useRef

   https://zh-hans.reactjs.org/docs/hooks-reference.html#useref

2. 有没有写过自定义hook

   https://zh-hans.reactjs.org/docs/hooks-custom.html

3. useContext

   https://zh-hans.reactjs.org/docs/hooks-reference.html#usecontext

4. hooks组件和高阶组件的区别

   [https://github.com/LinDaiDai/niubility-coding-js/blob/master/%E6%A1%86%E6%9E%B6-%E5%BA%93/React/HOC%E7%9C%9F%E7%9A%84%E5%B0%B1%E9%82%A3%E4%B9%88%E9%AB%98%E7%BA%A7%E5%90%97.md](https://github.com/LinDaiDai/niubility-coding-js/blob/master/框架-库/React/HOC真的就那么高级吗.md)

5. 用的react版本

   > 16,17

6. react18有哪些新特性

   https://mp.weixin.qq.com/s/FQV9qfSJxzwcGzjbTnEZiA

7. react17和16的区别

   https://www.w3cschool.cn/article/73903cd7e547af.html

8. react和vue的区别,为什么选react

9. useRef用过么，useCallback有什么用，原理分别是什么，有什么区别

11. react的数据绑定怎么实现的

    https://www.cnblogs.com/wzy0526/p/9361228.html

    https://blog.csdn.net/csdnzlcheng/article/details/102373133

12. 怎么处理浅比较导致不渲染的问题

13. Fiber的中断更新机制具体在什么场景下有用到

    https://blog.csdn.net/qq_41903941/article/details/115216864

    https://www.jianshu.com/p/e97e05dbcba3

    https://www.jianshu.com/p/48e06fb4a7a6

13. 高阶组件的实现方式

    

17. 什么时候会触发组件重新render ? State props context forceupdate

    https://blog.csdn.net/qq_36461153/article/details/106566369

    https://cloud.tencent.com/developer/article/1549644

18. react组件怎么减少重复渲染

    https://kaiwu.lagou.com/course/courseInfo.htm?courseId=566#/detail/pc?id=5804

    https://segmentfault.com/a/1190000039219500

    https://juejin.cn/post/6885162791632633870

    https://blog.csdn.net/qq_39207948/article/details/113815277

20. react高阶组件和hooks组件有什么区别

    https://juejin.cn/post/6844903993072697352#heading-6

21. 什么情况下会触发useEffect return执行

22. hooks的执行顺序是存在什么地方的

    https://zh-hans.reactjs.org/docs/hooks-faq.html#how-does-react-associate-hook-calls-with-components

23. constructor中super(props)的作用

    https://www.jianshu.com/p/b55949fa20a2

24. 不在同一个父元素内的2个兄弟元素怎么通信,除了context和第3方状态库呢

    https://segmentfault.com/a/1190000012361461?utm_source=tag-newest#articleHeader6

25. react怎么做keep-alive

    https://mp.weixin.qq.com/s?__biz=MzkwODIwMDY2OQ==&mid=2247488224&idx=1&sn=780a585cea8507c4922de895be16bd60&source=41#wechat_redirect

    https://www.npmjs.com/package/react-keepalive-router

26. 常用哪些hooks,useEffect,useMemo,useCallback的区别

27. useEffect的第2个参数用来做什么的

28. React.memo怎么用

29. 类组件和函数组件的区别

30. Fiber和之前的diff的区别 Fiber的中断更新用在哪些场景

    Fiber Reconciler 在阶段一进行 Diff 计算的时候，会生成一棵 Fiber 树。这棵树是在 Virtual DOM 树的基础上增加额外的信息来生成的，它本质来说是一个链表。

    [![img](https://camo.githubusercontent.com/d47c945b6ca1c452485bdd3c8c737bbf28d32195730713623f6b9e8bc9145b1d/68747470733a2f2f696d67323032302e636e626c6f67732e636f6d2f626c6f672f313135383931302f3230323130332f313135383931302d32303231303333313138353933343938352d313935393832373039392e706e67)](https://camo.githubusercontent.com/d47c945b6ca1c452485bdd3c8c737bbf28d32195730713623f6b9e8bc9145b1d/68747470733a2f2f696d67323032302e636e626c6f67732e636f6d2f626c6f672f313135383931302f3230323130332f313135383931302d32303231303333313138353933343938352d313935393832373039392e706e67)

    [![img](https://camo.githubusercontent.com/a1398e2b875716cc9028ef79e55bcac2b17fd131e115c13ce75c4916cabeb556/68747470733a2f2f696d67323032302e636e626c6f67732e636f6d2f626c6f672f313135383931302f3230323130332f313135383931302d32303231303333313138353934353839372d3230333530363331322e706e67)](https://camo.githubusercontent.com/a1398e2b875716cc9028ef79e55bcac2b17fd131e115c13ce75c4916cabeb556/68747470733a2f2f696d67323032302e636e626c6f67732e636f6d2f626c6f672f313135383931302f3230323130332f313135383931302d32303231303333313138353934353839372d3230333530363331322e706e67)

    　　Fiber 树在首次渲染的时候会一次生成。在后续需要 Diff 的时候，会根据已有树和最新 Virtual DOM 的信息，生成一棵新的树。

    　　这颗新树每生成一个新的节点，都会将控制权交回给主线程，去检查有没有优先级更高的任务需要执行。如果没有，则继续构建树的过程：

    [![img](https://camo.githubusercontent.com/e4d04c09cedf81044702ac6b84c3ccd484c9e870920cb02eb9f8a42be9db7120/68747470733a2f2f696d67323032302e636e626c6f67732e636f6d2f626c6f672f313135383931302f3230323130332f313135383931302d32303231303333313139303032333831372d313437383131313430352e706e67)](https://camo.githubusercontent.com/e4d04c09cedf81044702ac6b84c3ccd484c9e870920cb02eb9f8a42be9db7120/68747470733a2f2f696d67323032302e636e626c6f67732e636f6d2f626c6f672f313135383931302f3230323130332f313135383931302d32303231303333313139303032333831372d313437383131313430352e706e67)

    　　如果过程中有优先级更高的任务需要进行，则 Fiber Reconciler 会丢弃正在生成的树，在空闲的时候再重新执行一遍。

    　　在构造 Fiber 树的过程中，Fiber Reconciler 会将需要更新的节点信息保存在 `Effect List `当中，在阶段二执行的时候，会批量更新相应的节点。

    https://www.cnblogs.com/qianxiaox/p/14120253.html

    https://www.cnblogs.com/leslie1943/articles/13845114.html

33. diff原理 diff具体的比较方式有哪些

    https://blog.csdn.net/qq_43958325/article/details/112315992

    https://www.jianshu.com/p/d9d54d27ff36

    [详解 React 16 的 Diff 策略](https://mp.weixin.qq.com/s/_jAW4Z3VR-uW0AEnjHgAEw)

34. react类组件的生命周期,hooks怎么实现didMount

35. useMemo中能写异步么

36. useEffectLayout中可以获取到dom节点吗

    https://www.jianshu.com/p/5a753e853a19

    https://blog.csdn.net/weixin_45389051/article/details/107701405

37. hooks中多个setState是统一一次更新还是更新多次,有什么办法改成只更新一次

    https://blog.csdn.net/weixin_45416217/article/details/103294738

38. 类组件中有什么办法可以在render前获取到dom节点

    https://blog.csdn.net/dx18520548758/article/details/103855364

39. 要在页面渲染前请求接口获取数据的话,请求应该写在哪

40. willMount中可以写接口请求吗 有什么缺点

    https://mp.weixin.qq.com/s/J0UxE5JKftkpWXcioQAmSQ异步请求可能被触发多次

    https://www.zhihu.com/question/304373773/answer/543646001

    https://www.cnblogs.com/yinhao-jack/p/10571414.html

    > 在React中使用componentWillMount或componentDidMount生命周期函数进行异步请求**实际上，componentDidMount由于两个原因，这是发出调用以获取数据的最佳位置：使用DidMount可以清楚地表明，只有在初始渲染之后才会加载数据。这提醒您正确设置初始状态，以免最终undefined导致出现错误的状态。如果您需要在服务器上呈现您的应用程序，componentWillMount则实际上会被调用两次-一次在服务器上，再一次在客户端上-这可能不是您想要的。放入数据加载代码 componentDidMount将确保仅从客户端获取数据。总结一下不建议在constructor和componentWillMount里写的原因是会阻碍组件的实例化，阻碍组件的渲染如果用setState，在componentWillMount里面触发setState不会重新渲染

41. 说说你觉得react不好用的地方

42. react生命周期方法16版本前后的区别,17版本增加了哪些新特性

    https://mp.weixin.qq.com/s/J0UxE5JKftkpWXcioQAmSQ

43. hooks怎么模拟类组件的生命周期

44. 自定义hooks你们一般怎么用 有用过什么第三方自定义hooks插件么

    https://zh-hans.reactjs.org/docs/hooks-custom.html

    https://blog.csdn.net/weixin_43154931/article/details/105668373

45. 为什么会出现Hooks,相比于类组件的优点,什么场景需要用到Hooks

    https://zh-hans.reactjs.org/docs/hooks-intro.html

    https://mp.weixin.qq.com/s/fF-H3Lr0aP3Ld8jfJrrwQg

46. 类组件和函数组件平时主要用什么

47. hooks为什么不能用在条件循环语句中,有什么办法可以打破这个规则

    https://zh-hans.reactjs.org/docs/hooks-rules.html#explanation

    > 不要在循环，条件或嵌套函数中调用Hook，必须始终在React函数的顶层使用Hook。这是因为React需要利用调用顺序来正确更新相应的状态，以及调用相应的钩子函数。一旦在循环或条件分支语句中调用Hook，就容易导致调用顺序的不一致性，从而产生难以预料到的后果，useRef 存储赋值，可以避免

48. 怎么处理hooks中的闭包问题

    https://mp.weixin.qq.com/s/tl2fhCdU0efaN2j2V1VINQ

49. react高阶组件对应js里哪个特性

    > 高阶函数

50. 实现避免重复请求hook

51. 为什么react16要抛弃willMount,willReceiveProps等生命周期

    > 重复执行

52. 为什么getDerivedStatefromprops是静态方法

    > 导致你无法咋在这个方法内做this.fetch、不合理的this.setState，这类副作用的操作。
    >
    > 意在确保生命周期函数的行为更加可控可预测，从根源上帮开发者避免不合理的编程方式，避免生命周期的滥用

53. Hooks的原理

    [React Hooks 原理与最佳实践](https://mp.weixin.qq.com/s/DS2OjlwWjClboDIgLFuG6A)

54. 项目中有哪些可以封装成自定义hooks

55. 说说react的时间调度

    https://segmentfault.com/a/1190000039101758

    [https://github.com/funfish/blog/blob/master/30.%20react%20%E6%97%B6%E9%97%B4%E8%B0%83%E5%BA%A6.md](https://github.com/funfish/blog/blob/master/30. react 时间调度.md)

56. useEffect依赖空数组和didMount的区别

    > 对于 `useEffect` 来说，执行的时机是完成所有的 DOM 变更并让浏览器渲染页面后，而 `useLayoutEffect` 和 class 组件中 `componentDidMount`, `componentDidUpdate`一致——在 React 完成 DOM 更新后马上同步调用，会阻塞页面渲染。

57. Fiber的中断更新是怎么实现的,怎么判断任务优先级

58. Hooks里边定时器生成,销毁你怎么写,定时器存到哪

59. react和vue怎么选型

    [React还是Vue：你该如何选择](https://blog.csdn.net/u013291076/article/details/53885604)

60. React渲染和更新机制

    https://blog.csdn.net/weixin_45221036/article/details/107341392

61. Vue和React中diff算法的区别

    https://blog.csdn.net/qq_45932447/article/details/110001564

62. react-router的实现原理

    https://www.huaweicloud.com/articles/12603991.html

#### TypeScript

9. ts的Omit Pick的用法

   https://juejin.cn/post/6905928813452984327

   https://juejin.cn/post/6844903977461514254

   https://blog.csdn.net/diwang_718/article/details/109331973

10. Ts：怎么获取一个类型声明的所有key

11. ts相比js多了哪些数据类型

    https://www.136.la/jingpin/show-67608.html

13. 了解继承,多态,重载么

    > 多态：父类定义一个方法不去实现，让继承他的子类去实现，每一个子类有不同的表现
    >
    > 多态属于继承

    [TypeScript（类—继承—多态）](https://www.cnblogs.com/jing-zhe/p/13061749.html)

    https://blog.csdn.net/handsomezhanghui/article/details/107459931

    http://dditblog.com/itshare_695.html

    https://www.cnblogs.com/mengxiangji/p/10399066.html

14. 说说泛型,函数泛型 怎么使用的

    https://juejin.cn/post/6844904184894980104

15. 声明一个Interface把一个联合类型的属性都改为any类型

16. 实现ts的Pick

17. 怎么实现Array

18. interface,type,class的区别

    [typescript 中的 interface 和 type 到底有什么区别](https://github.com/SunshowerC/blog/issues/7)

19. 说说你对泛型的了解

#### 基建

1. 常用的打包工具

2. webpack原理

   [说说webpack打包的原理](https://github.com/LuckyWinty/fe-weekly-questions/issues/5)

3. webpack的loader和plugin的区别,有没有写过,plugin有哪些钩子

   https://blog.csdn.net/jiang7701037/article/details/98887179

   https://cloud.tencent.com/developer/article/1558870

   [超详细webpack的plugin讲解](https://blog.csdn.net/DengZY926/article/details/105827861)

4. loader的原理 loader转换文件过程具体是怎么做的

   https://www.cnblogs.com/lyraLee/p/12050811.html

   https://cloud.tencent.com/developer/article/1584819

   http://www.babyitellyou.com/details?id=6000f38e0c14081073f63056

5. babel的原理和作用

   https://www.qiyuandi.com/zhanzhang/zonghe/13462.html

   https://www.yuque.com/robinson/jser/oaruvo?language=zh-cn

   https://jishuin.proginn.com/p/763bfbd239b6

   - babel的原理了解吗，babel是用来干嘛的。
   - 说一说常见的babel库，你有使用过哪些。
   - 写过 babel 插件吗？用来干啥的？怎么写的 babel 插件
   - 知道怎么转化成 AST 的吗？

6. babel-loader的作用

   https://www.jianshu.com/p/78832d23f176

   https://www.jiangruitao.com/webpack/babel-loader/

7. 怎么提升webpack打包速度

   https://juejin.cn/post/6844904071736852487

   https://cloud.tencent.com/developer/article/1603799

   https://zhuanlan.zhihu.com/p/145012279

8. webpack优化

   [Webpack性能优化你知道哪些](https://github.com/LuckyWinty/fe-weekly-questions/issues/4)

9. babel的原理 jsx到ast的转化具体做了什么,ast了解么

   [回顾 babel 6和7，来预测下 babel 8](https://juejin.cn/post/6956224866312060942)

   [掌握了AST，再也不怕被问babel，vue编译，Prettier等原理](https://juejin.cn/post/6844904019505184776)

   https://juejin.cn/post/6844904035271573511#heading-0

10. babel将less转css具体怎么做的

    https://blog.csdn.net/qq_28473733/article/details/95486122

11. 如果兼容ie10,babel需要怎么配置,

    https://blog.csdn.net/relax_go/article/details/107992133

    https://www.cnblogs.com/chun321/p/13070553.html

    https://www.cnblogs.com/niejunchan/p/10764823.html

12. 组件库怎么兼容各浏览器

13. babel-preset了解么

    https://www.cnblogs.com/dapengFly/p/9876915.html

14. publicPath是什么,用在什么场景

    https://www.cnblogs.com/SamWeb/p/8353367.html

    https://runebook.dev/zh-CN/docs/webpack/guides/public-path

    [https://champyin.com/2019/12/05/webpack%E4%B8%AD%E7%9A%84publicPath/](https://champyin.com/2019/12/05/webpack中的publicPath/)

15. prettier的作用和lint的区别

    https://juejin.cn/post/6844904065319731208

    https://juejin.cn/post/6844903621805473800

    https://segmentfault.com/a/1190000039026362

16. babel-component-plugin是什么

    https://juejin.cn/post/6844904077634060302

17. babel预设和plugin的区别

    https://github.com/LuckyWinty/fe-weekly-questions/issues/85

    https://blog.csdn.net/qq_37506861/article/details/86591623

    https://www.jianshu.com/p/43063a413cd9

18. antd-design的设计原理

19. 你们脚手架的实现方式

20. 怎么实现异步加载

    https://www.jianshu.com/p/3aa3a3e27417

    https://cloud.tencent.com/developer/article/1573508

    https://segmentfault.com/a/1190000038180453

21. 谈谈组件api设计需要考虑哪些方面,目前用的框架有哪些符合开箱即用的思想,比如webpack

    https://www.jianshu.com/p/c8c092cf8f2f

22. 怎么通过ast过滤代码中的某些指定代码

    https://blog.csdn.net/weixin_39408343/article/details/95984062

    https://blog.csdn.net/qq_36571602/article/details/103533029

23. 了解动态polyfill么

    https://blog.csdn.net/liixnhai/article/details/109279138

24. 有独立搭建过脚手架么

25. style-lint了解么

    https://juejin.cn/post/6844903640549818382

26. 说说你们团队的代码规范

    https://www.cnblogs.com/sk-3/p/14214311.html

    https://blog.csdn.net/qq_26003101/article/details/102816915

27. 在线代码编辑器怎么过滤不安全的代码

    https://blog.csdn.net/weixin_33379878/article/details/117870038

28. 主要写ui组件还是业务组件,怎么管理的

29. tree shaking的原理

    [tree shaking 及其工作原理](https://mp.weixin.qq.com/s/yiAbYvTlzsvUqfRzjyk9Rw)

    [Webpack 实现 Tree shaking 的前世今生](https://mp.weixin.qq.com/s/gSPlJ8zjKSqkOKkI7_AXIQ)

30. 组件库打包成umd,业务上怎么通过import引入你的组件呢

    https://www.jqhtml.com/63324.html

31. peerdependency 和devdependency的区别

    https://blog.csdn.net/weixin_43459866/article/details/112392975

32. 用过哪些单元测试工具

33. webpack路由懒加载的原理

    https://juejin.cn/post/6844904180285456398

#### NODEJS

1. 有没有用过nodejs

2. nodejs可以做哪些事情 你做过哪些

   https://mp.weixin.qq.com/s/QtjlRKm6kIb80P36rv4c2Q

3. require引入内置模块,第三方模块,本地模块的原理

   https://mp.weixin.qq.com/s/prbmnVsVxHFDz2dxHsKSrg

4. node中setTimeout setInterval和js中有什么区别 除这2种之外,还有什么方式做异步 nexttick了解么

   > process.nextTick 是一个独立于 eventLoop 的任务队列。在每一个 eventLoop 阶段完成后会去检查 nextTick 队列，如果里面有任务，会让这部分任务优先于微任务执行。是所有异步任务中最快执行的

   > setTimeout：setTimeout()方法是定义一个回调，并且希望这个回调在我们所指定的时间间隔后第一时间去执行。
   >
   > setImmediate：setImmediate()方法从意义上将是立刻执行的意思，但是实际上它却是在一个固定的阶段才会执行回调，即poll阶段之后。

   https://blog.csdn.net/weixin_34351321/article/details/88975764

5. node读取一个json文件怎么读?

6. node了解多少

#### Mobx&Redux

1. reduce的用法

   https://juejin.cn/post/6844903861941993479

   https://mp.weixin.qq.com/s/JFkd_mnuTXkvquFehWwWZw

2. redux和mobx的区别,了解recoil么

   https://blog.csdn.net/michellezhai/article/details/90783020

   https://blog.csdn.net/weixin_44369568/article/details/90713881

3. 开发过程中应该什么时候考虑性能优化,要考虑哪些方面 宏观上的考量? 提前预设? 针对某个具体页面的性能极致优化要做哪些

   https://kaiwu.lagou.com/course/courseInfo.htm?courseId=566#/detail/pc?id=5803

   https://juejin.cn/post/6904517485349830670

   https://segmentfault.com/a/1190000022018051

4. 说说redux用过哪些api

5. redux的原理

   [Redux实现原理解析及应用](https://www.jianshu.com/p/e984206553c2)

6. mobx的原理

   [Mobx 思想的实现原理](https://blog.csdn.net/sinat_17775997/article/details/83998800)

7. mobx的代理模式怎么兼容到ie9

8. redux的reducer用来做什么的

   [Redux介绍之Reducer](https://www.jianshu.com/p/985d01df5918)

9. redux怎么触发渲染

10. 怎么解决mobx的类数组问题

11. mobx相比于state context的优点

12. 使用mobx过程中遇到什么问题,为什么要用toJS

#### 性能

1. 怎么量化性能指标 有哪些工具

   https://mp.weixin.qq.com/s/g5mNfofLjpKjYQarzzrLCw

2. 做过哪些性能优化

3. 性能优化用户体验有哪些维度可以衡量,怎么量化?分别有哪些具体措施,时间维度上怎么统计,文件体积维度上开发时和运行时分别有哪些措施,怎么统计文件加载时间,文件体积?怎么埋点 页面异常的处理,怎么监听js运行异常,保证页面不白屏,有哪些处理方式,怎么监听文件加载异常?

   性能优化 https://www.cnblogs.com/mengff/p/12890771.html

   页面加载时间 https://blog.csdn.net/weixin_45761317/article/details/103440135

   白屏 https://blog.csdn.net/m0_48076809/article/details/109058909

   异常 http://jartto.wang/2018/11/20/js-exception-handling/

4. 给你大量dom节点,你怎么渲染

   https://blog.csdn.net/running987/article/details/81541599?utm_medium=distribute.pc_relevant_download.none-task-blog-baidujs-1.nonecase&depth_1-utm_source=distribute.pc_relevant_download.none-task-blog-baidujs-1.nonecase

5. 虚拟列表的原理

   https://mp.weixin.qq.com/s/OwlLk7-OvT0fEu6eOUlNIQ

6. 怎么判断可视区域内的第一条数组是整个列表的第1条数据

7. immutablejs了解么

   https://mp.weixin.qq.com/s/lCiN8XVlzhLPoMnvK3IjVw

8. 了解PWA么

   https://mp.weixin.qq.com/s/vlAb24qxklbnZoSZk25rSA

9. 了解Service Worker么

   https://juejin.cn/post/6844904198639714311#heading-22

10. 给你一个10万条数据的列表,你怎么处理

    https://blog.csdn.net/running987/article/details/81541599?utm_medium=distribute.pc_relevant_download.none-task-blog-baidujs-1.nonecase&depth_1-utm_source=distribute.pc_relevant_download.none-task-blog-baidujs-1.nonecase

11. 性能问题怎么排查,怎么优化 性能监控

12. 怎么按需异步封装echarts

    https://blog.csdn.net/yh8899abc/article/details/107058688

    https://blog.csdn.net/qq_39075021/article/details/105445991

13. 怎么做持久化存储 immutable的原理 怎么实现的 和mutable的区别 有什么缺陷,为什么没在项目中使用

    https://blog.csdn.net/qq_42941302/article/details/111834035

    [https://blog.csdn.net/ajpr3120/article/details/101553957?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-5.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-5.control](https://blog.csdn.net/ajpr3120/article/details/101553957?utm_medium=distribute.pc_relevant.none-task-blog-2~default~BlogCommendFromMachineLearnPai2~default-5.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2~default~BlogCommendFromMachineLearnPai2~default-5.control)

    https://www.jianshu.com/p/e839d5b9f7cc

    https://cloud.tencent.com/developer/news/7752

    https://www.cnblogs.com/3body/p/6224010.html

    https://www.cnblogs.com/dm428/p/13910473.html

14. 图片压缩有哪些办法,图片格式了解多少

    [前端的图片优化方案你知道多少](https://github.com/LuckyWinty/fe-weekly-questions/issues/34)

15. 按需打包?按需加载?怎么做?区别?

    [Webpack性能优化你知道哪些](https://github.com/LuckyWinty/fe-weekly-questions/issues/4)

    https://blog.csdn.net/qq_45432996/article/details/109599556

    https://github.com/eyasliu/blog/issues/8

#### 路由

1. react-router路由对应的页面渲染有哪些方式?优先级?render component children

   https://blog.csdn.net/achenyuan/article/details/80704641

   https://blog.csdn.net/xiaoqingrong/article/details/101055085

2. React-router:分别配置path='/' path='/a' path='/a/b'访问/a,会渲染哪些

   https://juejin.cn/post/6844903640839225358

3. react-router严格匹配是哪个参数

   https://blog.csdn.net/weixin_41530639/article/details/107324961

4. react-router用户权限怎么处理 有权限正常显示 无权限渲染无权限页面

   https://juejin.cn/post/6854573217445740557

5. react-router原理

   https://segmentfault.com/a/1190000016512437

6. 说说hash和history的区别 原理

   https://mp.weixin.qq.com/s/lTW3NIO7iZYmq75_0-mhRQ

#### 网络

1. 有没有用过cdn,cdn了解么 内容分发网络,cdn的回源策略?

   https://mp.weixin.qq.com/s/8IzDE4blQ_yC6z90q55UhA

2. 强缓存 协商缓存 优先级

   https://mp.weixin.qq.com/s/G5FIrWOtsNROHgEKesJcdg

   https://blog.csdn.net/zouzixuan/article/details/84677548

3. 通过什么禁用html缓存,怎么配置

   https://www.cnblogs.com/waisonlong/p/5199908.html

4. 跨域的几种方式 jsonp的缺点 jsonp的方式前端怎么获取到请求的内容

   > 1.前端定义解析函数（例如 jsonpCallback=function(){....}）
   >
   > 2.通过 params 形式包装请求参数，并且声明执行函数(例如 cb=jsonpCallback)
   >
   > 3.后端获取前端声明的执行函数（jsonpCallback），并以带上参数并调用执行函数的方式传递给前端。

   > JSONP的优缺点
   >
   > - 1.优点
   >   - 1.1它不像XMLHttpRequest对象实现的Ajax请求那样受到同源策略的限制，JSONP可以跨越同源策略；
   >   - 1.2它的兼容性更好，在更加古老的浏览器中都可以运行，不需要XMLHttpRequest或ActiveX的支持
   >   - 1.3在请求完毕后可以通过调用callback的方式回传结果。将回调方法的权限给了调用方。这个就相当于将controller层和view层终于分开了。我提供的jsonp服务只提供纯服务的数据，至于提供服务以 后的页面渲染和后续view操作都由调用者来自己定义就好了。如果有两个页面需要渲染同一份数据，你们只需要有不同的渲染逻辑就可以了，逻辑都可以使用同 一个jsonp服务。
   > - 2.缺点
   >   - 2.1它只支持GET请求而不支持POST等其它类型的HTTP请求
   >   - 2.2它只支持跨域HTTP请求这种情况，不能解决不同域的两个页面之间如何进行JavaScript调用的问题。
   >   - 2.3 jsonp在调用失败的时候不会返回各种HTTP状态码。
   >   - 2.4缺点是安全性。万一假如提供jsonp的服务存在页面注入漏洞，即它返回的javascript的内容被人控制的。那么结果是什么？所有调用这个 jsonp的网站都会存在漏洞。于是无法把危险控制在一个域名下…所以在使用jsonp的时候必须要保证使用的jsonp服务必须是安全可信的。

   https://juejin.cn/post/6844904126246027278

5. get/post的区别

   [GET和POST的区别](https://github.com/LuckyWinty/fe-weekly-questions/issues/67)

6. 为什么要封装请求库

   https://blog.csdn.net/weixin_44348028/article/details/108504471

   https://zhuanlan.zhihu.com/p/87985178

7. http2相比http1有哪些优点

   > **http2的优化点**
   >
   > 1. 头部压缩： 采用HPACK算法，在客户端和服务端两端建立“字典”，用索引号表示重复的字符串， 还采用哈夫曼编码来压缩整数和字符串，可以到达50%-90%的高压缩率。
   > 2. 多路复用： 采用二进制分帧传输，不存在先后关系， 因此也就不会有等待排队，也就没有了HTTP 的对头阻塞问题。 通信双方都可以给对分发送二进制帧， 这种二进制帧的双向传输的序列，也叫做流。 HTTP/2用流来在一个TCP连接上来进行数据帧的通信， 这就是多路复用的概念。
   > 3. 设置请求优先级： 在二进制帧当中还有其它的一些字段， 实现了优先级和流量控制等功能
   > 4. 服务器推送 服务器不再是完全被动地响应请求，也可以新建“流”主动向客户端发送消息。

   https://mp.weixin.qq.com/s/GICbiyJpINrHZ41u_4zT-A?

8. https的原理 相比http有哪些优点,缺点

   https://mp.weixin.qq.com/s/CU9mOxVixaOann9Hu5MlXQ

   https://www.cnblogs.com/miniSimple/p/12296846.html

9. 使用什么请求库 fetch和axios的区别 为什么会从fetch转成用axios axios拦截器怎么使用,拦截器的response分别什么情况下成功回调,什么情况下走失败回调

   https://www.jianshu.com/p/8bc48f8fde75

   https://www.cnblogs.com/xbzhu/p/11810384.html

10. websocket用过么

https://mp.weixin.qq.com/s/OKiVeiAtdZvSG5ZC8jYOzg

https://blog.csdn.net/yexudengzhidao/article/details/92846600

https://blog.csdn.net/resilient/article/details/85613446

1. memorycache和diskcache的区别

2. 为什么要有协商缓存

3. 协商缓存中客户端给服务端通信时,Etag是通过哪个字段传递的

4. 浏览器输入一个url地址后的过程,浏览器是怎么请求,解析资源文件的

   [浏览器输入URL后发生了什么](https://github.com/LuckyWinty/fe-weekly-questions/issues/37)

5. 强缓存命中的状态码是? 200

6. 常见的接口响应状态码

7. 一次http请求过程是怎样的

8. ajax请求过程,原理

9. TCP 连接上面能发多少个 HTTP 请求

   https://zhuanlan.zhihu.com/p/61423830

   https://cloud.tencent.com/developer/article/1518678

#### GIT

1. 怎么做代码版本管理?git svn?

   gitlab + github desk

2. git:怎么回退版本,有哪些方式

   https://blog.csdn.net/yxlshk/article/details/79944535

   https://juejin.cn/post/6844903877138087950

3. git revert了解么

4. git add 的用法

5. 怎么合并分支 git merge --no-ff是做什么的?

6. git回滚

7. rebase和merge的区别

8. 怎么合并多个commit信息

   [Git操作：多个commit合并，并修改提交信息](https://blog.csdn.net/u012586326/article/details/112985496)

#### 移动端适配

1. 移动端兼容性问题处理过哪些

   https://mp.weixin.qq.com/s/BPXd-TNHHzb49fjC60NZFg

2. 移动端适配

   https://mp.weixin.qq.com/s/lM65luoAeV7RZTIYFCpVZw

3. 1px问题，为什么会有这个问题，怎么解决

   https://www.jianshu.com/p/7e63f5a32636

4. iphoneX适配

   https://blog.csdn.net/dx18520548758/article/details/80010358

5. 说说jsBridge 原生怎么捕获到h5页面的事件

   https://juejin.cn/post/6844903585268891662

6. 移动端适配怎么做的 字体像素颜色什么的

7. ios的惯性滚动问题了解么

   [iOS与惯性滚动](https://www.cnblogs.com/chris-oil/p/6164966.html)

#### 数据结构&算法

1. 取链表中间节点最优解

   https://blog.csdn.net/weixin_26738395/article/details/108515443

2. 实现二叉树左右结点交换,除了递归,还有什么方法,用栈,队列怎么实现

3. 链表反转

   https://www.jianshu.com/p/4e8e29bda969

4. 返回字符串不重复字符长度

5. 找到值最大的树节点(手写题)

6. 了解哪些排序方式?快排和冒泡排序的原理

```
假设有一个集合 ['foo', 'bar', 'hello', 'world']，求这个集合里单词组合起来的所有不同的结果，比如：

foobarhelloworld
barfoohelloworld
...


https://leetcode-cn.com/problems/permutation-i-lcci/
// 从 arr 中随机取出数字，插入到 group 的子数组内，让每组尽可能一样多，比如：
// 最终得到 group 值为 [[2, 3, 8], [1, 4], [9, 7], [1, 6]]，每组 2 个数字，其实有一组为 3 个数字

var arr = [1,2,3,4,5,6,7,8,9];
var group = [[],[],[],[]];

function split(arr) {

}
split(arr);
console.log(group);
```

#### 其他

1. 前端项目部署到服务器需要做哪些事情,web服务器用什么 nginx反代具体怎么配

   https://segmentfault.com/a/1190000021530126

   https://blog.csdn.net/sherry_chan/article/details/79055211

2. 前端请求接口容错?

   https://juejin.cn/post/6955610207036801031

3. 接到一个新的需求,你需要做哪些事情? 沟通需求,原型,UI,约定接口规范,开发?具体怎么约定接口规范,要考虑哪些

4. 移动端离线包方案怎么做离线包版本管理,怎么保证下载的离线包是最新的,怎么处理离线包异常情况,这个方案落地后达到的效果

   https://juejin.cn/post/6844904031773523976#heading-6

   https://github.com/mcuking/blog/issues/63

5. 工作状态是怎么样的,遇到问题怎么解决

   看报错，谷歌Stack Overflow找答案，谁能更好的吹牛逼

6. 浏览器怎么去加载相应的js文件的

   https://blog.csdn.net/liupeifeng3514/article/details/78998293

   https://www.zhihu.com/question/263866883

   https://www.jianshu.com/p/9267bb6c6006

   https://www.cnblogs.com/jiasm/p/7683930.html

7. 低代码了解么

   https://juejin.cn/post/6961606343442726925

   https://zhuanlan.zhihu.com/p/267844751

   https://zhuanlan.zhihu.com/p/196228385

8. int 8,32,64分别几个字节

   4

9. 通过什么方式学习

10. 用过哪些抓包工具 前端工具

11. 怎么实现移动端列表无限滚动,scoll监听会有什么问题,安卓ios下分别有什么问题

    https://blog.csdn.net/qq_42740797/article/details/111371301

    https://www.cnblogs.com/caominjie/p/11802501.html

    https://mp.weixin.qq.com/s/oAlkEB4G6I5BokZQ02Pvng

12. 分组列表分组吸顶怎么实现

13. 离线包版本更新同步客户端时,同步失败怎么处理

14. 工作中有哪些事情是你主动去做的

15. 你们组件库是怎么做的

16. 了解Taro么

17. xss和csrf分别是?怎么防御?

18. web安全了解多少

    [谈谈web安全问题及解决方案](https://github.com/LuckyWinty/fe-weekly-questions/issues/1)

19. 遇到页面加载空白和页面中被插入了一段广告,你会怎么处理

20. 作用域,原型链,作用域链,作用域链和原型链的区别

    https://www.cnblogs.com/pssp/p/5204324.html

21. 怎么过滤在线代码管理器中的xss脚本

22. ie上常遇到哪些问题

23. localstorage缓存最大能存多少,存入失败会怎么样,存的东西超出限制大小你怎么处理

24. 服务端是怎么主动给客户端发消息的?通过什么方式?

25. Json和JSONP的区别

26. 

#### 代码执行结果

```
new Promise((rs)=>{
    console.log(1)
    rs()
}).then(()=>{
    console.log(2)
})

setTimeout(()=>{
    new Promise((rs)=>{
        console.log(3)
        rs()
    }).then(()=>{
        console.log(4)
    })
    console.log(5)
})
new Promise((rs)=>{
    console.log(1)
    rs()
}).then(()=>{
    console.log(2)
})
new Promise((rs)=>{
    console.log(3)
    rs()
}).then(()=>{
    console.log(4)
})
setTimeout(()=>{
    console.log(5)
})
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    say() {
      console.log('名字' + this.name + '今年' + this.age);
    }
    run = () => {
      console.log(this.name + '可以run');
    };
    eat() {
      console.log('可以吃');
    }
  }
  
  class CloneMan extends Person {
    say = () => {
      console.log('我叫' + this.name + '今年' + this.age);
    };
    run() {
      console.log(this.name + '真的可以run');
    }
    eat = () => {
      console.log('还可以吃');
    };
  }
  
  const tom = new CloneMan('tom','20')
  tom.say()
  tom.run()
  tom.eat()
console.log('1')

setTimeout(function() {
  console.log('2')

  new Promise(function(resolve) {
    console.log('4')
    resolve()
  }).then(function() {
    console.log('5')
  })
})

async function async1() {
  console.log('6')
  await async2()
  console.log('7')
}

async function async2() {
  console.log('8')
  await async3()
  console.log('9')
}

async function async3() {
  console.log('10')
}

async1()
new Promise(function(resolve) {
  console.log('11')
  resolve()
}).then(function() {
  console.log('12')
})

setTimeout(function() {
  console.log('13')

  new Promise(function(resolve) {
    console.log('14')
    resolve()
  }).then(function() {
    console.log('15')
  })
})
var arr = []
setTimeout(()=>{
    arr.push(1)
})
new Promise((rs)=>{
    rs()
}).then(()=>{
    arr.push(2)
})
new Promise((rs)=>{
    arr.push(3)
    rs()
})
async function a(){
    arr.push(4)
    await b()
    arr.push(5)
}
async function b() {
    arr.push(6)
}
a()
arr.push(7)
setTimeout(()=>{
    arr.push(8)
})
setTimeout(()=>{
    console.log(arr.join(''))
},300)

// 输出结果是什么,描述下这段代码执行过程中的内存分配是什么样的,使用promise实现a函数
if(!('a' in window)){
    var a = 1
}
console.log(a)
/* *
 * 问题 2. 
 * 对象扁平化
 * 说明：请实现 flatten(input) 函数，input 为一个 javascript 对象（Object 或者 Array），返回值为扁平化后的结果。
 * 示例：
 *   var input = {
 *     a: 1,
 *     b: [ 1, 2, { c: true }, [ 3 ] ],
 *     d: { e: 2, f: 3 },
 *     g: null, 
 *   }
 *   var output = flatten(input);
 *   output如下
 *   {
 *     "a": 1,
 *     "b[0]": 1,
 *     "b[1]": 2,
 *     "b[2].c": true,
 *     "b[3][0]": 3,
 *     "d.e": 2,
 *     "d.f": 3,
 *     // "g": null,  值为null或者undefined，丢弃
 *  }
 */
 
 
 function flatten(input, init, re) {

  let res = re || {}

  if (Object.prototype.toString.call(input) === '[object Object]') {
    Object.keys(input).forEach(item => {
      if (typeof input[item] !== 'object' && input[item]) {
        res[`${init}.item`] = input[item]
      } else if (input[item]) {
        flatten(input[item], `${init}.item`, res)
      }

    })
  }

  if (Object.prototype.toString.call(input) === '[object Array]') {
    input.forEach((item, index) => {
      if (typeof item !== 'object' && item) {
        res[`${init}[${index}]`] = item
      } else if (item) {
        flatten(item, `${init}[${index}]`, res)
      }
    })
  }

  return res;
}
```

#### 抄来的

1. react初始化详细过程
2. react在setState的时候做了哪些事
3. react fiber在中断diff算法的后怎么再去重新开始diff算法的
4. webpack打包过后的chunk,懒加载的包是怎么在浏览器上加载的
5. webpack要怎么打包才能实现按需加载
6. 递归和尾递归的区别
7. webpack热更新原理