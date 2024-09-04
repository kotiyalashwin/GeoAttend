import { Routes, BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Admin from "./pages/Admin";
import StatusPage from "./pages/StatusPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Admin />} />
          <Route path="/status/:name" element={<StatusPage />} />
          {/* // <Route path="/employee" element={<Employee />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
