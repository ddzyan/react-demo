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

const ThemeContext = React.createContext(themes.light);

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('useEffect');
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
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}

export default App;
