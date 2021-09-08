# react中的setState是同步还是异步

> https://kaiwu.lagou.com/course/courseInfo.htm?courseId=510#/detail/pc?id=4860

setState 并不是单纯同步/异步的，它的表现会因调用场景的不同而不同：在 React 钩子函数及合成事件中，它表现为异步；而在 setTimeout、setInterval 等函数中，包括在 DOM 原生事件中，它都表现为同步。这种差异，本质上是由 React 事务机制和批量更新机制的工作方式来决定的。

> - 合成事件：就是react 在组件中的onClick等都是属于它自定义的合成事件
>
> - 原生事件：比如通过addeventListener添加的，dom中的原生事件

setState的“异步”并不是说内部由异步代码实现，其实本身执行的过程和代码都是同步的，只是合成事件和钩子函数的调用顺序在更新之前，导致在合成事件和钩子函数中没法立马拿到更新后的值，形式了所谓的“异步”，当然可以通过第二个参数 setState(partialState, callback) 中的callback拿到更新后的结果。

setState 的批量更新优化也是建立在“异步”（合成事件、钩子函数）之上的，在原生事件和setTimeout 中不会批量更新，在“异步”中如果对同一个值进行多次 setState ， setState 的批量更新策略会对其进行覆盖，取最后一次的执行，如果是同时 setState 多个不同的值，在更新时会对其进行合并批量更新。

# 扩展题

## 1⃣️ 如下有一个组件，若从左到右依次点击每个按钮，控制台的输出会是怎么样的？

```jsx
import React from "react";
import "./styles.css";
export default class App extends React.Component{
  state = {
    count: 0
  }
  increment = () => {
    console.log('increment setState前的count', this.state.count)
    this.setState({
      count: this.state.count + 1
    });
    console.log('increment setState后的count', this.state.count)
  }
  triple = () => {
    console.log('triple setState前的count', this.state.count)
    this.setState({
      count: this.state.count + 1
    });
    this.setState({
      count: this.state.count + 1
    });
    this.setState({
      count: this.state.count + 1
    });
    console.log('triple setState后的count', this.state.count)
  }
  reduce = () => {
    setTimeout(() => {
      console.log('reduce setState前的count', this.state.count)
      this.setState({
        count: this.state.count - 1
      });
      console.log('reduce setState后的count', this.state.count)
    },0);
  }
  render(){
    return <div>
      <button onClick={this.increment}>点我增加</button>
      <button onClick={this.triple}>点我增加三倍</button>
      <button onClick={this.reduce}>点我减少</button>
    </div>
  }
}
```

答案：

```
increment setState前的count  0
increment setState后的count  0
triple setState前的count  1
triple setState后的count  1
reduce setState前的count  2
reduce setState后的count  1
```

## 2⃣️ setState 调用之后，都发生了哪些事情？

React 在调用 setstate 后，react 会将传入的参数对象和组件当前的状态合并，触发调和过程，在调和过程中，react 会根据新的状态构建 react 元素树重新渲染整个 UI 界面，在得到元素树之后，react 会自动计算新老节点的差异，根据差异对界面进行最小化重新渲染

## 3⃣️ 为什么建议传递给 setState 的参数是一个 callback 而不是一个对象？

因为 this.props 和 this.state 的更新可能是异步的，不能依赖它们的值去计算下一个state。
