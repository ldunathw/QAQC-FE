import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login onLoginSuccess={() => { window.location.href = "/dashboard"; }} />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Mặc định mở login */}
        <Route path="*" element={<Login onLoginSuccess={() => { window.location.href = "/dashboard"; }} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
