import { Routes, BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Admin from "./pages/Admin";
import Employee from "./pages/Employee";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Admin />} />
          <Route path="/employee" element={<Employee />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
