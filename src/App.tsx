import React from "react";
import "./App.css";
import GeneratorPage from './components/generator/GeneratorPage'
import SavePage from './components/saved/SavePage'

function App() {
  return (
    <div className="App">
      <h1> PIN GENERATOR APP</h1>

      <GeneratorPage/>
      <SavePage/>
    </div>
  );
}

export default App;
