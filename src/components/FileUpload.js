import React, { useState } from "react";
import axios from "axios";
import Message from "./Message";
import Progress from "./Progress";

import * as tf from "@tensorflow/tfjs";

export default function FileUpload({ cat, dog, setCat, setDog }) {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose file");
  const [uploadedFile, setUploadedFile] = useState({});

  const [message, setMessage] = useState("");
  const [uploadPercent, setUploadPercent] = useState();
  const [model, setModel] = useState();

  function onChangeInput(e) {
    setUploadedFile({});
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
    setCat(false);
    setDog(false);
  }

  async function loadModel() {
    const modelLoad = await tf.loadLayersModel("http://localhost:5000/model", {
      onProgress: (progressEvent) => {
        setUploadPercent(parseInt(Math.round(progressEvent * 100)));

        setTimeout(() => setUploadPercent(0), 5000);
      },
    });
    try {
      setModel(modelLoad);
      setMessage("");
    } catch (err) {
      setMessage("There was problem with loading model");
    }
  }

  async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post("http://localhost:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const { fileName, filePath } = res.data;
      setUploadedFile({ fileName, filePath });
      setMessage("File uploaded.");
    } catch (err) {
      setMessage("There was problem.");
    }
  }

  function predictModel() {
    const image = new Image();
    image.id = "pic";
    image.src = uploadedFile.filePath;
    let photo = tf.browser
      .fromPixels(image)
      .resizeNearestNeighbor([100, 100])
      .toFloat("float32");
    photo = photo.expandDims(0);
    getPrediction(photo);
  }

  async function getPrediction(photo) {
    const prediction = await model.predict(photo).data();
    if (prediction[0] < 0.5) {
      setCat(true);
      setDog(false);
    } else if (prediction[0] > 0.5) {
      setCat(false);
      setDog(true);
    } else {
      setCat(false);
      setDog(false);
    }
  }

  return (
    <>
      {message ? <Message msg={message} /> : null}
      <form
        onSubmit={onSubmit}
        className="d-flex justify-content-center flex-column"
      >
        <div className="custom-file d-flex justify-content-center flex-row">
          <input
            type="file"
            className="custom-file-input"
            id="customFile"
            onChange={onChangeInput}
            name="image"
          />
          <input type="submit" value="Upload" className="btn btn-primary" />
        </div>

        <Progress percentage={uploadPercent} />
      </form>

      {uploadedFile ? (
        <div className="mt-2 d-flex justify-content-center border-none">
          <img
            src={uploadedFile.filePath}
            width={`${uploadedFile}?"200":"0"`}
            height={`${uploadedFile}?"200":"0"`}
            alt=""
          />
        </div>
      ) : null}

      <div className="mt-4 d-flex justify-content-center align-items-center">
        <button className="m-2 btn btn-primary btn-md" onClick={loadModel}>
          Load model
        </button>
        <button className="m-2 btn btn-primary btn-md" onClick={predictModel}>
          Predict
        </button>
      </div>
    </>
  );
}
