import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { PiShieldCheckFill } from "react-icons/pi";
import { FiLogIn } from "react-icons/fi";
import "./login.css";
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

      onLoginSuccess();
    } catch (err) {
      setLoginError("Tên đăng nhập hoặc mật khẩu không đúng!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page bg-full">
      
      <div className="login-header">
        <div className="logo-box">
          <FiLogIn size={38} color="#fff" />
        </div>
        <h1 className="login-title">Hệ Thống Tổng Đài Đa Kênh</h1>
        <p className="login-subtitle">KienlongBank Contact Center</p>
      </div>

      <div className="login-card">
        <h2 className="login-card-title">Đăng Nhập</h2>

        <form onSubmit={handleLogin} noValidate>

          {/* username */}
          <div className="field-wrap">
            <label className="login-label">Tên đăng nhập</label>
            <div className="input-wrap">
              {errorField === "username" && (
                <div className="tooltip">Điền vào trường này</div>
              )}

              <div className="icon">
                <FaUser size={16} color="#b0b7c3" />
              </div>

              <input
                className="login-input"
                placeholder="Nhập tên đăng nhập"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setLoginError("");
                }}
              />
            </div>
          </div>

          {/* pass */}
          <div className="field-wrap">
            <label className="login-label">Mật khẩu</label>
            <div className="input-wrap">
              {errorField === "password" && (
                <div className="tooltip">Điền vào trường này</div>
              )}

              <div className="icon">
                <FaLock size={16} color="#b0b7c3" />
              </div>

              <input
                type="password"
                className="login-input"
                placeholder="Nhập mật khẩu"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setLoginError("");
                }}
              />
            </div>
          </div>

          {/* otp */}
          <div className="field-wrap">
            <label className="login-label">Mã xác thực</label>
            <div className="otp-row">
              <div className="input-wrap otp-flex">

                {errorField === "otp" && (
                  <div className="tooltip">Điền vào trường này</div>
                )}

                <div className="icon">
                  <PiShieldCheckFill size={16} color="#b0b7c3" />
                </div>

                <input
                  className="login-input"
                  placeholder="Nhập mã xác thực"
                  value={otp}
                  onChange={(e) => {
                    setOtp(e.target.value);
                    setLoginError("");
                  }}
                />
              </div>

              <div className="otp-box">123456</div>
            </div>
          </div>

    
          {loginError && <div className="error-box">{loginError}</div>}

          <button className="login-btn" type="submit" disabled={loading}>
            <FiLogIn size={18} className="btn-icon" />
            {loading ? "Đang đăng nhập..." : "Đăng nhập"}
          </button>
        </form>

        <div className="demo">
          <p><b>Thông tin đăng nhập demo:</b></p>
          <p>• Tên đăng nhập: <strong>admin</strong></p>
          <p>• Mật khẩu: <strong>Klb@123456</strong></p>
          <p>• Mã xác thực: <strong>123456</strong></p>
        </div>
      </div>

      <p className="login-footer">© 2025 KienlongBank. All rights reserved.</p>
    </div>
  );
}
