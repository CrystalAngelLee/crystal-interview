# hook模拟生命周期

```react
componentDidMount() {}
useEffect(() => {}, []);

componentDidUpdate() {}
useEffect(() => {});

componentWillUnmount() {}
useEffect(() => () => {});

shouldComponentWillUpdate(){}
memo(Component, (prevProps, nextProps){
 /*
  结果一致则返回 true，
  否则返回 false
 */
})
```

