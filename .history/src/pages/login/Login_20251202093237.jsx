import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { PiShieldCheckFill } from "react-icons/pi";
import "./login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Đăng nhập thành công");
  };

  return (
    <div className="login-container">

      {/* Header */}
      <div className="login-header">
        <div className="login-logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="#fff" viewBox="0 0 24 24">
            <path d="M12 2a1 1 0 0 1 1 1v7h7a1 1 0 1 1 0 2h-7v7a1 1 0 1 1-2 0v-7H4a1 1 0 1 1 0-2h7V3a1 1 0 0 1 1-1z" />
          </svg>
        </div>

        <h1 className="login-title">Hệ Thống Tổng Đài Đa Kênh</h1>
        <p className="login-subtitle">KienlongBank Contact Center</p>
      </div>

      {/* Card */}
      <div className="login-card">
        <h2 className="login-card-title">Đăng Nhập</h2>

        <form onSubmit={handleLogin}>

          {/* Username */}
          <div className="form-group">
            <label className="form-label">Tên đăng nhập</label>
            <div className="form-input-wrapper">
              <FaUser className="form-icon" />
              <input
                type="text"
                placeholder="Nhập tên đăng nhập"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="form-input"
              />
            </div>
          </div>

          {/* Password */}
          <div className="form-group">
            <label className="form-label">Mật khẩu</label>
            <div className="form-input-wrapper">
              <FaLock className="form-icon" />
              <input
                type="password"
                placeholder="Nhập mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
              />
            </div>
          </div>

          {/* OTP */}
          <div className="form-group">
            <label className="form-label">Mã xác thực</label>
            <div className="otp-row">
              <div className="form-input-wrapper otp-flex">
                <PiShieldCheckFill className="form-icon" />
                <input
                  type="text"
                  placeholder="Nhập mã xác thực"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="form-input"
                />
              </div>
              <div className="otp-box">123456</div>
            </div>
          </div>

          <button type="submit" className="login-btn">→ Đăng nhập</button>
        </form>

        {/* Demo Info */}
        <div className="demo-box">
          <p>• Tên đăng nhập: <b>admin</b></p>
          <p>• Mật khẩu: <b>Klb0123456</b></p>
          <p>• Mã xác thực: <b>123456</b></p>
        </div>
      </div>

      <p className="login-footer">© 2025 KienlongBank. All rights reserved.</p>
    </div>
  );
}
