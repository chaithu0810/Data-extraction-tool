fileupload
import React, { useState } from 'react';

const FileUpload = ({ onResult }) => {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      onResult(result);
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };
export default function FileUpload({ onFileSelect }) {
  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      onFileSelect(e.target.files[0]);
    }
  };

  return (
    <div className="file-upload">
      <label htmlFor="file-upload">Upload PDF/Image (max 10MB): </label>
      <input
        id="file-upload"
        type="file"
        accept=".pdf,.png,.jpg"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button onClick={handleUpload}>Upload & Extract</button>
    </div>
  );
}

export default FileUpload;