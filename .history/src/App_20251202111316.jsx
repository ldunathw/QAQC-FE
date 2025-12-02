import React, { useState } from "react";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  const [loggedIn, setLoggedIn] = useState(
    !!localStorage.getItem("accessToken")
  );

  return loggedIn ? (
    <Dashboard />
  ) : (
    <Login onLoginSuccess={() => setLoggedIn(true)} />
  );
}

export default App;
