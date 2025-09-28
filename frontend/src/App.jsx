import { BrowserRouter, Routes, Route } from "react-router-dom";

import UploadResume from "./pages/UploadResume";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UploadResume />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
