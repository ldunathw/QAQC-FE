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
  const [errorField, setErrorField] = useState(null);   // tooltip dưới input
  const [errorMessage, setErrorMessage] = useState(""); // ô đỏ như ảnh

  const showFieldError = (field) => {
    setErrorField(field);
    setErrorMessage("");          // khi lỗi thiếu field thì ẩn ô đỏ
    setTimeout(() => setErrorField(null), 1200);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // 1. Thiếu dữ liệu → tooltip dưới input
    if (!username) return showFieldError("username");
    if (!password) return showFieldError("password");
    if (!otp) return showFieldError("otp");

    // 2. Sai thông tin demo → hiện ô cảnh báo đỏ
    const isValid =
      username === "admin" &&
      password === "Klb0123456" &&
      otp === "123456";

    if (!isValid) {
      setErrorMessage("Tên đăng nhập, mật khẩu hoặc mã xác thực không đúng!");
      return;
    }

    // 3. Đúng → clear lỗi & chuyển Dashboard
    setErrorMessage("");
    navigate("/dashboard");
  };

  return (
    <div className="bg-full">
      {/* HEADER */}
      <div className="header">
        <div className="logo-box">
          <FiLogIn size={38} color="#fff" />
        </div>
        <h1 className="title">Hệ Thống Tổng Đài Đa Kênh</h1>
        <p className="subtitle">KienlongBank Contact Center</p>
      </div>

      {/* CARD */}
      <div className="card">
        <h2 className="card-title">Đăng Nhập</h2>

        <form onSubmit={handleLogin} noValidate>
          {/* USERNAME */}
          <div className="field-wrap">
            <label className="label">Tên đăng nhập</label>
            <div className="input-wrap">
              {errorField === "username" && (
                <div className="tooltip">Điền vào trường này</div>
              )}

              <div className="icon">
                <FaUser size={16} color="#b0b7c3" />
              </div>
              <input
                className="input"
                placeholder="Nhập tên đăng nhập"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setErrorMessage("");
                }}
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div className="field-wrap">
            <label className="label">Mật khẩu</label>
            <div className="input-wrap">
              {errorField === "password" && (
                <div className="tooltip">Điền vào trường này</div>
              )}

              <div className="icon">
                <FaLock size={16} color="#b0b7c3" />
              </div>
              <input
                type="password"
                className="input"
                placeholder="Nhập mật khẩu"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrorMessage("");
                }}
              />
            </div>
          </div>

          {/* OTP */}
          <div className="field-wrap">
            <label className="label">Mã xác thực</label>
            <div className="otp-row">
              <div className="input-wrap otp-flex">
                {errorField === "otp" && (
                  <div className="tooltip">Điền vào trường này</div>
                )}

                <div className="icon">
                  <PiShieldCheckFill size={16} color="#b0b7c3" />
                </div>
                <input
                  className="input"
                  placeholder="Nhập mã xác thực"
                  value={otp}
                  onChange={(e) => {
                    setOtp(e.target.value);
                    setErrorMessage("");
                  }}
                />
              </div>

              <div className="otp-box">123456</div>
            </div>
          </div>

          {/* Ô lỗi đỏ như ảnh */}
          {errorMessage && (
            <div className="error-box">
              {errorMessage}
            </div>
          )}

          {/* BUTTON */}
          <button className="btn" type="submit">
            <FiLogIn size={18} className="btn-icon" />
            Đăng nhập
          </button>
        </form>

        {/* Demo info */}
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
