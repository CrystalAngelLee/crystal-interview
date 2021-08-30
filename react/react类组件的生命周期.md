# 将React中的10个生命周期函数，分别按照前后调用顺序写出来，并且将参数罗列出来，以及通常所做的优化

React 16/17

挂载阶段：

constructor -> getDerivedStateFromProps -> render -> componentDidMount

更新阶段：

getDerivedStateFromProps -> sholdComponentUpdate -> render -> getSnapShotBeforeUpdate -> componentDidUpdate

卸载阶段

componentwillUnmount

```react
class Comp extends React.Component {
  constructor(props) {
    super(props)
  }
  
  static getDerivedStateFromProps(props, state) {
    return
  }
  
  componentDidMount() {}
  
  sholdComponentUpdate(nextProps, nextState) {
    // 阻止不必要的更新
    return true
  }
  
  getSnapShotBeforeUpdate(prevProps, prevState){
    // 组件更改之前从DOM中获取信息
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {}
  
  componentwillUnmount() {}
  
  render() {
    return (<></>)
  }
}
```

React 15

```js
class Comp extends React.Component {
  constructor(props) {
    super(props)
  }
  
  componentWillMount() {}
  
  componentDidMount() {}
  
  componentWillReceiveProps(nextProps){}
  
  sholdComponentUpdate(nextProps, nextState) {
    return true
  }
  
  componentWillUpdate(nextProps, nextState){}
  
  componentDidUpdate(prevProps, prevState) {}
  
  componentwillUnmount() {}
  
  render() {
    return (<></>)
  }
}
```

