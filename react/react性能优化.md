# React 性能优化

1. shouldComponentUpdate避免重复渲染

2. 使用动态引入组件懒加载

   ```js
   import("./math").then(math => {
     console.log(math.add(16, 26));
   });
   
   // 2. 引用react的高阶组件react-loadable进行动态import
   ```

3. 使用不可突变数据结构

   1. 数组使用concat,对象使用Object.assign()
   2. ES6支持数组或对象的spread语法
   3. 使用不可突变数据immutable.js

4. 添加key属性标识组件

5. useCallback() 缓存函数

6. React.memo()



参考资料：

-  https://segmentfault.com/a/1190000016259872

- https://segmentfault.com/a/1190000007811296

