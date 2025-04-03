import "./App.css";
import FileUpload from "./components/FileUpload";
import Predict from "./components/Predict";
import React, { useState } from "react";

function App() {
  const [cat, setCat] = useState(false);
  const [dog, setDog] = useState(false);

  return (
    <div className="d-flex justify-content-around flex-row container mt-4">
      <div className="d-flex justify-content-center flex-column mt-4">
        <FileUpload cat={cat} setCat={setCat} dog={dog} setDog={setDog} />
      </div>
      <div className="d-flex justify-content-center flex-column mt-4">
        <Predict cat={cat} dog={dog} />
      </div>
    </div>
  );
}

export default App;
