## Hooks 的优缺点

## 优点

### 1. 代码可读性更强

类组件同一功能代码逻辑需要拆分在不同生命周期函数中，而在hooks中可以聚合到一个useEffect 中，方便阅读维护

### 2. 组件数层级变浅

类组件中我们想要复用组件状态需要使用hoc/render props 等方式，增加了组件数层级及渲染，在hooks中可以使用自定义hook来实现

### 3. 无需考虑this指向问题



## 缺点

### 1. 响应式useEffect

需要很清楚`useEffect`和`useCallback`的“依赖项数组”的改变时机。

有时候，你的useEffect依赖某个函数的不可变性，这个函数的不可变性又依赖于另一个函数的不可变性，这样便形成了一条依赖链。一旦这条依赖链的某个节点意外地被改变了，你的useEffect就被意外地触发了，如果你的useEffect是幂等的操作，可能带来的是性能层次的问题，如果是非幂等，那就糟糕了。

### 2. 状态不同步

函数的运行是独立的，每个函数都有一份独立的作用域。函数的变量是保存在运行时的作用域里面，当我们有异步操作的时候，经常会碰到异步回调的变量引用是之前的。



## 如何避免react hooks的常见问题

1. 不要在`useEffect`里面写太多的依赖项，划分这些依赖项成多个单一功能的`useEffect`。其实这点是遵循了软件设计的“单一职责模式”。
2. 如果你碰到状态不同步的问题，可以考虑下手动传递参数到函数。如：

    ```jsx
       // showCount的count来自父级作用域 
       const [count,setCount] = useState(xxx); 
       function showCount(){ console.log(count) } 
    
       // showCount的count来自参数 
       const [count,setCount] = useState(xxx); 
       function showCount(c){ console.log(c) }
    ```
    
    但这个也只能解决一部分问题，很多时候你不得不使用上述的`useRef`方案。

3. 重视`eslint-plugin-react-hooks`插件的警告。

4. 复杂业务的时候，使用Component代替hooks
