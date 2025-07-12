import React, { useEffect, useState } from "react";
import axios from "axios";
import { Buffer } from "buffer";

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("https://photo-gallery-i9xr.onrender.com/api/photos", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setPhotos(res.data);
      } catch (err) {
        console.error("Error fetching photos:", err.message);
      }
    };
    fetchPhotos();
  }, []);

  return (
    <div>
      <h2 style={{ marginBottom: "20px" }}>📷 My Photo Gallery</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "16px"
      }}>
        {photos.map((photo) => (
          <div key={photo._id} style={{
            background: "#fff",
            padding: "10px",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            overflow: "hidden"
          }}>
            <img
              src={`data:${photo.image.contentType};base64,${Buffer.from(photo.image.data.data).toString("base64")}`}
              alt="Uploaded"
              style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "6px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
