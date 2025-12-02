import React, { useState } from "react";
import "./login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [errorField, setErrorField] = useState(null);

  const handleLogin = (e) => {
  e.preventDefault();

  if (!username || !password || !otp) {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return;
  }

  alert("Đăng nhập thành công");
};


  return (
    <div className="bg-full">

   
      <div className="header">
        <div className="logo-box">
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="#fff" viewBox="0 0 24 24">
            <path d="M12 2a1 1 0 0 1 1 1v7h7a1 1 0 1 1 0 2h-7v7a1 1 0 1 1-2 0v-7H4a1 1 0 1 1 0-2h7V3a1 1 0 0 1 1-1z" />
          </svg>
        </div>

        <h1 className="title">Hệ Thống Tổng Đài Đa Kênh</h1>
        <p className="subtitle">KienlongBank Contact Center</p>
      </div>

 
      <div className="card">

        <h2 className="card-title">Đăng Nhập</h2>

        <form onSubmit={handleLogin}>
  
          <label className="label">Tên đăng nhập</label>
          <div className="input-wrap">
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="#b0b7c3" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              </svg>
            </div>
            <input
              className="input"
              placeholder="Nhập tên đăng nhập"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <label className="label">Mật khẩu</label>
          <div className="input-wrap">
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="#b0b7c3" viewBox="0 0 16 16">
                <path d="M8 1a4 4 0 0 0-4 4v2H3a1 
                1 0 0 0-1 1v6a1 1 0 0 0 1 1h10a1 
                1 0 0 0 1-1V8a1 1 0 0 0-1-1h-1V5a4 
                4 0 0 0-4-4z"/>
              </svg>
            </div>
            <input
              className="input"
              type="password"
              placeholder="Nhập mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <label className="label">Mã xác thực</label>
          <div className="otp-row">
            <div className="input-wrap otp-flex">
              <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="#b0b7c3" viewBox="0 0 16 16">
                  <path d="M8 15a7 7 0 1 1 0-14 
                  7 7 0 0 1 0 14zm0-7a2 2 0 1 
                  0 0-4 2 2 0 0 0 0 4zm0 1c-1.5 
                  0-4 1-4 3v1h8v-1c0-2-2.5-3-4-3z"/>
                </svg>
              </div>
              <input
                className="input"
                placeholder="Nhập mã xác thực"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>

            <div className="otp-box">123456</div>
          </div>

          <button className="btn">→ Đăng nhập</button>
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
