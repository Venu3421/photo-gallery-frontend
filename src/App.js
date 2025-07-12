import React from "react";
import UploadPhoto from "./UploadPhoto";
import PhotoGallery from "./PhotoGallery";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>📸 My Photo Gallery</h1>
      <UploadPhoto />
      <PhotoGallery />
    </div>
  );
}

export default App;
