import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import { PiShieldCheckFill } from "react-icons/pi";
import "./login.css";

export default function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [errorField, setErrorField] = useState(null);

  const showError = (field) => {
    setErrorField(field);
    setTimeout(() => setErrorField(null), 1200);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username) return showError("username");
    if (!password) return showError("password");
    if (!otp) return showError("otp");

    navigate("/dashboard");
  };

  return (
    <div className="bg-full">

      <div className="header">
        <div className="icon"><FaUser size={16} color="#b0b7c3" /></div>

        <h1 className="title">Hệ Thống Tổng Đài Đa Kênh</h1>
        <p className="subtitle">KienlongBank Contact Center</p>
      </div>

      <div className="card">
        <h2 className="card-title">Đăng Nhập</h2>

        <form onSubmit={handleLogin} noValidate>

          <div className="field-wrap">
            {errorField === "username" && <div className="tooltip">Điền vào trường này</div>}

            <label className="label">Tên đăng nhập</label>
            <div className="input-wrap">
              <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="#b0b7c3" viewBox="0 0 16 16">
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 
                  0 0-6 3 3 0 0 0 0 6z"/>
                </svg>
              </div>
              <input
                className="input"
                placeholder="Nhập tên đăng nhập"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div className="field-wrap">
            {errorField === "password" && <div className="tooltip">Điền vào trường này</div>}

            <label className="label">Mật khẩu</label>
            <div className="input-wrap">
              <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="#b0b7c3" viewBox="0 0 16 16">
                  <path d="M8 1a4 4 0 0 0-4 4v2H3a1 
                  1 0 0 0-1 1v6a1 
                  1 0 0 0 1 1h10a1 
                  1 0 0 0 1-1V8a1 1 0 0 0-1-1h-1V5a4 
                  4 0 0 0-4-4z"/>
                </svg>
              </div>
              <input
                type="password"
                className="input"
                placeholder="Nhập mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="field-wrap">
            {errorField === "otp" && <div className="tooltip">Điền vào trường này</div>}

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
          </div>

          <button className="btn">→ Đăng nhập</button>
        </form>

        <div className="demo">
          <p><b>Thông tin đăng nhập demo:</b></p>
          <p>• Tên đăng nhập: <strong>admin</strong></p>
          <p>• Mật khẩu: <strong>Klb@123456</strong></p>
          <p>• Mã xác thực: <strong>123456</strong></p>
        </div>
      </div>

      <p className="footer">© 2025 KienlongBank. All rights reserved.</p>
    </div>
  );
}
