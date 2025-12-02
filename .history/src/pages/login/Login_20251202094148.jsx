import React, { useState } from "react";
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
    <div className="login-background">

      {/* HEADER */}
      <div className="login-header">
        <div className="login-logo-box">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fff" viewBox="0 0 24 24">
            <path d="M12 2a1 1 0 0 1 1 1v7h7a1 1 0 1 1 0 2h-7v7a1 1 0 1 1-2 0v-7H4a1 1 0 1 1 0-2h7V3a1 1 0 0 1 1-1z" />
          </svg>
        </div>

        <h1 className="login-title">Hệ Thống Tổng Đài Đa Kênh</h1>
        <p className="login-subtitle">KienlongBank Contact Center</p>
      </div>

      {/* CARD */}
      <div className="login-card">

        <h2 className="card-title">Đăng Nhập</h2>

        <form onSubmit={handleLogin}>

          {/* USERNAME */}
          <label className="form-label">Tên đăng nhập</label>
          <div className="form-group">
            <div className="input-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#b0b7c3" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              </svg>
            </div>
            <input
              className="input-field"
              placeholder="Nhập tên đăng nhập"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* PASSWORD */}
          <label className="form-label">Mật khẩu</label>
          <div className="form-group">
            <div className="input-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#b0b7c3" viewBox="0 0 16 16">
                <path d="M8 1a4 4 0 0 0-4 4v2H3a1 1 0 0 0-1 1v6a1 
                 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8a1 
                 1 0 0 0-1-1h-1V5a4 4 0 0 
                 0-4-4z"/>
              </svg>
            </div>
            <input
              type="password"
              className="input-field"
              placeholder="Nhập mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* OTP */}
          <label className="form-label">Mã xác thực</label>
          <div className="otp-row">
            <div className="form-group otp-input">
              <div className="input-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#b0b7c3" viewBox="0 0 16 16">
                  <path d="M8 15a7 7 0 1 1 0-14 
                  7 7 0 0 1 0 14zm0-7a2 2 0 1 0 0-4 
                  2 2 0 0 0 0 4zm0 1c-1.5 0-4 1-4 
                  3v1h8v-1c0-2-2.5-3-4-3z"/>
                </svg>
              </div>
              <input
                className="input-field"
                placeholder="Nhập mã xác thực"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>

            <div className="otp-box">123456</div>
          </div>

          <button className="login-button" type="submit">
            → Đăng nhập
          </button>
        </form>

        {/* DEMO INFO */}
        <div className="demo-box">
          <p><b>Thông tin đăng nhập demo:</b></p>
          <p>• Tên đăng nhập: <strong>admin</strong></p>
          <p>• Mật khẩu: <strong>Klb0123456</strong></p>
          <p>• Mã xác thực: <strong>123456</strong></p>
        </div>
      </div>

      <p className="login-footer">© 2025 KienlongBank. All rights reserved.</p>
    </div>
  );
}
