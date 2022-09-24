import React from 'react';
import Hello from "./Hello/Hello";
import './App.css';

function App() {
  return (
    <div className="App">
      <Hello name="TypeScript" enthusiasmLevel={10}/>
    </div>
  );
}

export default App;
