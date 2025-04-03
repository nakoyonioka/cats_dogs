# Cats & Dogs Classification App

## Overview
This project is a React-based web application that allows users to upload an image of a cat or a dog and receive a prediction of whether the uploaded image is a cat or a dog. It utilizes TensorFlow.js to load a pre-trained model for classification.

## Features
- Upload an image for classification
- Load a TensorFlow.js model for prediction
- Display the classification result (Cat or Dog)
- Progress bar for upload status
- User-friendly interface with Bootstrap styling

## Technologies Used
- **React**: Frontend framework
- **TensorFlow.js**: Machine learning library for model loading and predictions
- **Axios**: HTTP client for handling image uploads
- **Bootstrap**: UI styling
- **Node.js & Express** (for backend, assumed but not provided here)

## Installation & Setup
### Prerequisites
Ensure you have the following installed:
- Node.js (>= 14.x recommended)
- npm or yarn

### Steps to Run
1. Clone the repository:
   ```sh
   git clone https://github.com/nakoyonioka/cats_dogs.git
   cd cats_dogs
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React app:
   ```sh
   npm start
   ```
4. Backend Setup (Assumed):
   - Ensure you have a backend running at `http://localhost:5000` for image uploads and model serving.
   - The model should be accessible at `http://localhost:5000/model`.

## Usage
1. Click "Choose file" and select an image.
2. Click "Upload" to send the image to the backend.
3. Load the model by clicking "Load Model".
4. Click "Predict" to get a classification result.

## Project Structure
```
├── src
│   ├── components
│   │   ├── FileUpload.js  # Handles file selection and upload
│   │   ├── Predict.js     # Displays prediction result
│   │   ├── Message.js     # Displays alert messages
│   │   ├── Progress.js    # Shows upload progress
│   ├── App.js            # Main application component
│   ├── index.js          # Entry point
│   ├── App.css           # Styling
│── public
│   ├── index.html        # Main HTML file
│   ├── uploads           # Example images
│── package.json          # Dependencies and scripts
```

## API Endpoints (Backend Assumed)
- `POST /upload` - Handles image uploads
- `GET /model` - Serves the trained ML model

## Future Improvements
- Add support for more animal classifications
- Improve UI with animations and better styling
- Allow users to upload multiple images at once
- Deploy the model on a cloud service instead of localhost

