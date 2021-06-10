import React from "react";

export default function Predict({ cat, dog }) {
  return (
    <div className="d-flex flex-column justify-content-center">
      <h1>Prediction Result</h1>
      {cat ? (
        <h4 className="display-4 text-center mb-4">IT IS A CAT!!</h4>
      ) : null}
      {dog ? (
        <h4 className="display-4 text-center mb-4">IT IS A DOG!!</h4>
      ) : null}
    </div>
  );
}
