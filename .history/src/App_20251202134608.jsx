import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route path="/login" element={<Login onLoginSuccess={() => {
          window.location.href = "/dashboard";
        }} />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Default route */}
        <Route path="*" element={<Login onLoginSuccess={() => {
          window.location.href = "/dashboard";
        }} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
