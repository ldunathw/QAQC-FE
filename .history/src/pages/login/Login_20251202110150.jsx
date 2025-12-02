import React, { useState } from "react";
import "./login.css";
import { FaArrowRight } from "react-icons/fa6";
import { loginApi } from "../../api/auth";

export default function Login({ onLoginSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const [errorField, setErrorField] = useState(null); 
  const [loginError, setLoginError] = useState(""); 

  const showError = (field) => {
    setErrorField(field);
    setTimeout(() => setErrorField(null), 1000);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError("");

    if (!username) return showError("username");
    if (!password) return showError("password");
    if (!otp) return showError("otp");

    setLoading(true);

    try {
      const data = await loginApi(username, password);

      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);

      onLoginSuccess();   // chuyển sang Dashboard
    } 
    catch (error) {
      setLoginError("Tên đăng nhập, mật khẩu hoặc mã xác thực không đúng!");
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-full">
      {/* Logo */}

      <div className="header">
        <div className="logo-box">
          <FaArrowRight size={32} color="#fff" />
        </div>

        <h1 className="title">Hệ Thống Tổng Đài Đa Kênh</h1>
        <p className="subtitle">KienlongBank Contact Center</p>
      </div>

      <div className="card">
        <h2 className="card-title">Đăng Nhập</h2>

        <form onSubmit={handleLogin}>

          {/* Username */}
          <div className="field-wrap">
            {errorField === "username" && (
              <div className="tooltip">Điền vào trường này</div>
            )}

            <label className="label">Tên đăng nhập</label>
            <div className="input-wrap">
              <input
                className="input"
                placeholder="Nhập tên đăng nhập"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          {/* Password */}
          <div className="field-wrap">
            {errorField === "password" && (
              <div className="tooltip">Điền vào trường này</div>
            )}

            <label className="label">Mật khẩu</label>
            <div className="input-wrap">
              <input
                type="password"
                className="input"
                placeholder="Nhập mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {/* OTP */}
          <div className="field-wrap">
            {errorField === "otp" && (
              <div className="tooltip">Điền vào trường này</div>
            )}

            <label className="label">Mã xác thực</label>
            <div className="otp-row">
              <div className="input-wrap otp-flex">
                <input
                  className="input"
                  placeholder="Nhập mã xác thực"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>

              <div className="otp-box">123456</div>
            </div>
          </div>

          {/* ERROR BOX */}
          {loginError && (
            <div className="error-box">{loginError}</div>
          )}

          <button className="btn" disabled={loading}>
            <FaArrowRight style={{ marginRight: 8 }} />
            {loading ? "Đang đăng nhập..." : "Đăng nhập"}
          </button>
        </form>

        <div className="demo">
          <p><b>Thông tin đăng nhập demo:</b></p>
          <p>• Tên đăng nhập: <strong>admin</strong></p>
          <p>• Mật khẩu: <strong>Klb0123456</strong></p>
          <p>• Mã xác thực: <strong>123456</strong></p>
        </div>
      </div>

      <p className="footer">© 2025 KienlongBank. All rights reserved.</p>
    </div>
  );
}
