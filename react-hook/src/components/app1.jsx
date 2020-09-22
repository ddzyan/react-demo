import React, { useState, useEffect } from 'react';

// 不编写类的情况下，使用state以及react的其他属性
// 类组件不能使用hook
function App() {
  // 0为初始的state值，这里表示count初始为0
  const [count, setCount] = useState(0);

  // 相当于 componentDidMount 和 componentDidUpdate:完成对 DOM 的更改后运行你的“副作用”函数
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>count {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        add
      </button>
    </div>
  );
}

export default App;
