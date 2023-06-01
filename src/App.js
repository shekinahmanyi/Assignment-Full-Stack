import React from "react";
//import { useState, useRef, useEffect } from "react";
import Header from "./Header";
import List from "./List";

function App() {
  const title = "Class Follow Up"
  
  return (
    <div className="App">
      <Header title={title}/>
      <List/>
    </div>
  );
}

export default App;
