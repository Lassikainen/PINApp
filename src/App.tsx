import React from "react";
import "./App.css";
import GeneratorPage from "./components/generator/GeneratorPage";
import SavePage from "./components/saved/SavePage";
import Header from "./components/header/Header";

import { useSelector } from "react-redux";

function App() {
  const currentPage = useSelector(
    (state: any) => state.headerReducer.currentPage
  );

  return (
    <div className="App">
      <h1> PIN GENERATOR APP</h1>
      <div className="outer-container">
        <Header />
        {currentPage === "generate" ? <GeneratorPage /> : null}
        {currentPage === "saved" ? <SavePage /> : null}
      </div>
    </div>
  );
}

export default App;
