Counter.tsx

```tsx
import React, { FC, useCallback, useState, useEffect } from "react";

interface CounterProps {
  value?: number;
  onChange?: Function;
}

const Counter: FC<CounterProps> = ({ value, onChange }) => {
  const [count, setCount] = useState(value || 0);
  useEffect(() => {
    if (value !== undefined && value !== count) {
      setCount(value);
    }
  });
  const handelClick = useCallback(() => {
    if (onChange) return onChange(count + 1);
    setCount(count + 1);
  }, [count]);

  return <div onClick={handelClick}>{count}</div>;
};

export default Counter;
```

Main.tsx

```tsx
import Counter from "./pages/Counter";
import { useState } from "react";

const App = () => {
  const [value, setValue] = useState(10);
  function onHandleCounter(counter: number): void {
    setValue(counter);
  }
  return (
    <Counter value={value} onChange={onHandleCounter} />
  );
};

export default App;

```

