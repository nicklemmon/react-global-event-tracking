import React from 'react'
import './App.css';

function handleClick(e) {
  if (e.target.tagName.toLowerCase() === 'button') {
    console.log('e.target', e.target)
  }
}

function App() {
  React.useEffect(() => {
    document.addEventListener('click', handleClick, false);
  }, [])

  return (
    <div className="App">
      <h1>Global Click Handling Demo</h1>

      <ClickHandlingDemo />
    </div>
  );
}

function ClickHandlingDemo() {
  const [showButton1, setShowButton1] = React.useState(false);
  const [showButton2, setShowButton2] = React.useState(false);

  return (
    <div>
      <button onClick={() => setShowButton1(!showButton1)}>
        Toggle Button 1
      </button>

      <button onClick={() => setShowButton2(!showButton2)}>
        Toggle Button 2
      </button>

      <hr />

      <h2>Button 1 should be here:</h2>
      {showButton1 && <button>Button 1</button>}

      <h2>Button 2 should be here:</h2>
      {showButton2 && <button>Button 2</button>}
    </div>
  );
}

export default App;
