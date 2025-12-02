import React from "react";
import "./dashboard.css";
import {
  FaPhone,
  FaUsers,
  FaDollarSign,
  FaSearch,
  FaBell,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import { MdEmail, MdChat, MdVideoCall } from "react-icons/md";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

export default function Dashboard() {
  const dataKPI = [
    { name: "Chat", value: 25, color: "#2ecc71" },
    { name: "Email", value: 20, color: "#f1c40f" },
    { name: "Video", value: 10, color: "#e74c3c" },
    { name: "Điện thoại", value: 45, color: "#3498db" },
  ];

  const dataStatus = [
    { name: "Chờ xử lý", value: 5, color: "#e74c3c" },
    { name: "Đang xử lý", value: 10, color: "#f39c12" },
    { name: "Đã xử lý", value: 85, color: "#27ae60" },
  ];

  const calls = [
    {
      name: "Nguyễn Văn Anh",
      phone: "0901234567",
      time: "17:30:00 15/10/2024",
      duration: "00:05:23",
      agent: "Trần Thị Bình",
      status: "Đã xử lý",
    },
    {
      name: "Lê Thị Cúc",
      phone: "0907654321",
      time: "16:15:00 15/10/2024",
      duration: "00:03:45",
      agent: "Lê Văn Cường",
      status: "Đã xử lý",
    },
    {
      name: "Phạm Văn Đức",
      phone: "0909876543",
      time: "15:45:00 15/10/2024",
      duration: "00:08:12",
      agent: "Phạm Thị Dung",
      status: "Đã xử lý",
    },
  ];

  return (
    <div className="dashboard">

      <header className="header">
        <div className="header-left">
          <div className="logo-ic">CC</div>

          <div className="logo-text">
            <h3>KienlongBank</h3>
            <p>TT.DVKH</p>
          </div>

          <div className="header-search">
            <FaSearch />
            <input placeholder="Tìm kiếm khách hàng theo CIF, CCCD, SĐT, email..." />
          </div>
        </div>

        <div className="header-right">
          <FaBell className="notif" />
          <span className="online">
            Tư vấn viên đang làm việc: <b>24</b>
          </span>

          <span className="user">
            <FaUserCircle /> admin
          </span>

          <span className="logout">
            <FaSignOutAlt /> Đăng xuất
          </span>
        </div>
      </header>

      {/* SIDEBAR — sát trái, đúng như ảnh */}
      <aside className="sidebar">
        <ul className="menu">
          <li className="active">Dashboard</li>
          <li><MdChat /> Cuộc gọi</li>
          <li>Khách hàng</li>
          <li>Giao dịch</li>
          <li><MdChat /> Chat</li>
          <li><MdEmail /> Email</li>
          <li><MdVideoCall /> Video Call</li>
          <li>CMS</li>
          <li>SLAs</li>
          <li>CRM Demo</li>
          <li>Báo cáo</li>
          <li>QA Scoring</li>
        </ul>

        <div className="user-box">
          <div className="avatar">NV</div>
          <p className="name">Cao Thanh Admin</p>
          <p className="mail">admin@example.com</p>
          <button className="settings">Cài đặt</button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="main-area">
        <h2 className="title">Dashboard TT.DVKH</h2>
        <p className="desc">Tổng quan về hoạt động tổng đài và KPI hằng ngày</p>

        {/* TOP KPI */}
        <div className="kpi-top">
          <div className="kpi-item">
            <FaUsers />
            <div>
              <p className="kpi-title">Tổng Membership</p>
              <h4>156</h4>
              <span className="kpi-green">+12% so với tháng trước</span>
            </div>
          </div>

          <div className="kpi-item">
            <FaPhone />
            <div>
              <p className="kpi-title">Tổng Doanh số</p>
              <h4>12</h4>
              <span className="kpi-green">+8% so với tháng trước</span>
            </div>
          </div>

          <div className="kpi-item">
            <FaUsers />
            <div>
              <p className="kpi-title">Lượt đăng ký MBS</p>
              <h4>126K</h4>
              <span className="kpi-green">+15% so với tháng trước</span>
            </div>
          </div>

          <div className="kpi-item">
            <FaDollarSign />
            <div>
              <p className="kpi-title">Doanh thu tháng này</p>
              <h4>128M</h4>
              <span className="kpi-green">+23% so với tháng trước</span>
            </div>
          </div>
        </div>

        {/* CHARTS */}
        <div className="charts-row">
          <div className="chart-card">
            <div className="chart-header">
              <h3>Tỷ lệ thanh toán KPI</h3>
              <select><option>Online + Offline</option></select>
            </div>

            <PieChart width={380} height={300}>
              <Pie
                data={dataKPI}
                cx="50%"
                cy="50%"
                outerRadius={110}
                label
                dataKey="value"
              >
                {dataKPI.map((d, i) => (
                  <Cell key={i} fill={d.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>

          <div className="chart-card">
            <div className="chart-header">
              <h3>Trạng thái Duyệt</h3>
              <select><option>Tất cả</option></select>
            </div>

            <PieChart width={380} height={300}>
              <Pie
                data={dataStatus}
                cx="50%"
                cy="50%"
                outerRadius={110}
                label
                dataKey="value"
              >
                {dataStatus.map((d, i) => (
                  <Cell key={i} fill={d.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>
        </div>

        {/* Recent Calls */}
        <div className="table-card">
          <div className="table-head">
            <h3>Cuộc gọi gần đây</h3>
            <a href="#">Xem tất cả →</a>
          </div>

          <table>
            <thead>
              <tr>
                <th>Khách hàng</th>
                <th>Số điện thoại</th>
                <th>Thời gian</th>
                <th>Thời lượng</th>
                <th>Agent</th>
                <th>Trạng thái</th>
              </tr>
            </thead>

            <tbody>
              {calls.map((row, i) => (
                <tr key={i}>
                  <td>{row.name}</td>
                  <td>{row.phone}</td>
                  <td>{row.time}</td>
                  <td>{row.duration}</td>
                  <td>{row.agent}</td>
                  <td className="status-done">{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </main>
    </div>
  );
}
