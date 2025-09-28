import { useState } from "react";
import { uploadResume } from "../api/resumeApi";

function UploadResume() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    console.log("Selected file:", selected);
    setFile(selected);
  };

  const handleUpload = async () => {
    if (!file) {
      setStatus("⚠️ Please select a PDF first");
      return;
    }
    console.log("Uploading file:", file);
    try {
      const data = await uploadResume(file);
      console.log("Response:", data);
      setStatus(`✅ Uploaded: ${data.filename} (ID: ${data.resume_id})`);
    } catch (err) {
      console.error(err);
      setStatus(`❌ Upload failed: ${err.response?.data?.detail || err.message}`);
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "auto" }}>
      <h2>Upload Resume</h2>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      <br /><br />
      <button onClick={handleUpload}>Upload</button>
      <p>{status}</p>
    </div>
  );
}

export default UploadResume;
