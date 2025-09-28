import axios from "axios";

const API_BASE = "http://127.0.0.1:8000"; // your deployed FastAPI

export const uploadResume = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const res = await axios.post(`${API_BASE}/resumes/upload`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return res.data;
};
