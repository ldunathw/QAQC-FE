import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import { PiShieldCheckFill } from "react-icons/pi";
import { FiLogIn } from "react-icons/fi";
import "./login.css";

export default function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [errorField, setErrorField] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const showError = (field) => {
    setErrorField(field);
    setErrorMessage("");    
    setTimeout(() => setErrorField(null), 1200);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username) return showError("username");
    if (!password) return showError("password");
    if (!otp) return showError("otp");

    const isValid =
      username === "admin" &&
      password === "Klb0123456" &&
      otp === "123456";

    if (!isValid) {
      setErrorMessage("Tên đăng nhập, mật khẩu hoặc mã xác thực không đúng!");
      return;
    }

    setErrorMessage("");
    navigate("/dashboard");
  };

  return (
    <div className="bg-full">

      <div className="header">
        <div className="logo-box">
            <FiLogIn size={38} color="#fff" />
        </div>

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
              <div className="icon"><FaUser size={16} color="#b0b7c3" /></div>

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
              <div className="icon"><FaLock size={16} color="#b0b7c3" /></div>

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
                <div className="icon"><PiShieldCheckFill size={16} color="#b0b7c3" /></div>

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

         <button className="btn">
            <FiLogIn size={18} className="btn-icon" />
            Đăng nhập
        </button>

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
