import React from "react";
import "./App.css";
import CatImage from "./components/CatImage.js";

function App() {
  return (
    <div className="App container">
      <h1>Pictures of Cats</h1>
      <div className="PicCell">
        <CatImage />
      </div>
    </div>
  );
}

export default App;
