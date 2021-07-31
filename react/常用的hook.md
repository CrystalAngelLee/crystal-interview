| hook              | 说明                          | 特点                                                         |
| ----------------- | ----------------------------- | ------------------------------------------------------------ |
| useState          | 为函数组件提供状态            | `initialState` 参数只会在组件的初始渲染中起作用              |
| useEffect         | 执行副作用代码的函数          | 浏览器绘制后延迟执行，但会保证在任何新的渲染前执行。在开始新的更新前，React 总会先清除上一轮渲染的 effect |
| useContext        | 共享钩子：在组件之间共享状态  | 接受React.createContext()的返回结果作为参数                  |
| useReducer        | 提供状态                      | [可以向子组件传递 `dispatch` 而不是回调函数](https://zh-hans.reactjs.org/docs/hooks-faq.html#how-to-avoid-passing-callbacks-down) |
| useCallback       | 缓存函数的引用                | 1.性能优化<br />2.useCallback(fn, deps)` 相当于 `useMemo(() => fn, deps) |
| useMemo           | 计算并缓存计算值              | 性能优化                                                     |
| useRef            | 获取ref 对象<br />获取DOM对象 | 变更 `.current` 属性不会引发组件重新渲染                     |
| `useLayoutEffect` | 执行副作用代码的函数          | 会在所有的 DOM 变更之后同步调用 effect。可以使用它来读取 DOM 布局并同步触发重渲染。在浏览器执行绘制之前，`useLayoutEffect` 内部的更新计划将被同步刷新 |

