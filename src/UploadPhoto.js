import React, { useState } from "react";
import axios from "axios";

const UploadPhoto = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!file) return setMessage("Please select a file");

    const formData = new FormData();
    formData.append("photo", file);

    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "https://photo-gallery-i9xr.onrender.com/api/photos/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage(res.data.message || "Photo uploaded!");
    } catch (err) {
      setMessage("Upload failed: " + err.response?.data?.error || err.message);
    }
  };

  return (
    <form onSubmit={handleUpload} style={{ marginBottom: "20px" }}>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button type="submit">Upload</button>
      <p>{message}</p>
    </form>
  );
};

export default UploadPhoto;
