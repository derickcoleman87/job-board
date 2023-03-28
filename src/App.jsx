import "./App.css";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  return (
    <div className="App">
      <Header mode={mode} setMode={setMode} />
      <Main mode={mode} />
    </div>
  );
}

export default App;
