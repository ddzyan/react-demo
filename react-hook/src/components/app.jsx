import React, { useContext, useState, useEffect } from 'react';

const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

// 组件之间的状态共享
const ThemeContext = React.createContext(themes.light);

function App() {
  // 替代 class 组件中的 this.setState() 实现状态修改
  const [count, setCount] = useState(0);

  // 在 componentWillmont,componentDidUpdate,componentDidUnmont 触发
  useEffect(() => {
    console.log('useEffect');
    document.title = `You clicked ${count} times`;
  }); // 不传入参数则使用当前组件的 state , props

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
      <ThemeContext.Provider value={themes.dark}>
        <Toolbar />
      </ThemeContext.Provider>
    </div>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  // 使用 useContext 只是让你能够读取context的值，以及订阅 context 的变化（组件会在值变化时重写渲染）
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}

export default App;
