import React, { useState } from "react";
import "./dashboard.css";
import { FaPhone, FaSearch, FaBell, FaDollarSign, FaUserCircle, FaSignOutAlt, FaClipboardCheck, FaClipboardList, FaChartPie, FaFileAlt} from "react-icons/fa";
import { TbUsersGroup } from "react-icons/tb";
import { MdTrendingUp, MdEmail, MdChat, MdVideoCall, MdDashboard } from "react-icons/md"; 
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";


function CustomSelect({ options, value, onChange }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="custom-select">
      <button
        className="select-btn"
        onClick={() => setOpen(!open)}
      >
        {value}
        <span className="arrow">▾</span>
      </button>

      {open && (
        <div className="select-menu">
          {options.map((option) => (
            <div
              key={option}
              className={`select-item ${value === option ? "active" : ""}`}
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}



export default function Dashboard() {
  const [kpiFilter, setKpiFilter] = useState("Online + Offline");
  const [statusFilter, setStatusFilter] = useState("Tất cả");

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

  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    outerRadius,
    percent,
    name,
    fill
  }) => {
    const radius = outerRadius + 15;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill={fill}
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        fontSize="16"
      >
        {`${name} ${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard">

     
        <header className="header">
          <div className="header-left">
            <div className="logo-ic">CC</div>

            <div className="logo-text">
              <h3>KienlongBank</h3>
              <p>TT.DVKH</p>
              <a>Contact Center</a>
            </div>

            <div className="header-divider"></div>

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

      
        <aside className="sidebar">
          <ul className="menu">

            <li className="active">
              <MdDashboard /> Dashboard
            </li>

            <li>
              <FaPhone /> Cuộc gọi
            </li>

            <li>
              <TbUsersGroup /> Khách hàng
            </li>

            <li>
              <MdTrendingUp /> Giao dịch
            </li>

            <li>
              <MdChat /> Chat
            </li>

            <li>
              <MdEmail /> Email
            </li>

            <li>
              <MdVideoCall /> Video Call
            </li>

            <li>
              <FaFileAlt /> CMS
            </li>

            <li>
              <FaClipboardCheck /> SLAs
            </li>

            <li>
              <FaUserCircle /> CRM Demo
            </li>

            <li>
              <FaChartPie /> Báo cáo
            </li>

            <li>
              <FaClipboardList /> QA Scoring
            </li>

          </ul>

          <div className="user-box">
            <div className="avatar">NV</div>
            <p className="name">Cao Thanh Admin</p>
            <p className="mail">admin@example.com</p>
            <button className="settings">Cài đặt</button>
          </div>
        </aside>


       
        <main className="main-area">
          <h2 className="title">Dashboard TT.DVKH</h2>
          <p className="desc">Tổng quan về hoạt động tổng đài và KPI hằng ngày</p>

        
          <div className="kpi-raw">
            <div className="kpi-box">
              <div className="kpi-left">
                <p className="kpi-title">Tổng Membership</p>
                <h1 className="kpi-number">156</h1>
                <p className="kpi-sub">+12% so với tháng trước</p>
              </div>
              <FaPhone className="kpi-icon kpi-blue" />
            </div>

            <div className="kpi-box">
              <div className="kpi-left">
                <p className="kpi-title">Tổng Doanh số</p>
                <h1 className="kpi-number">12</h1>
                <p className="kpi-sub">+8% so với tháng trước</p>
              </div>
              <TbUsersGroup className="kpi-icon kpi-green-icon" />
            </div>

            <div className="kpi-box">
              <div className="kpi-left">
                <p className="kpi-title">Lượt đăng ký MBS</p>
                <h1 className="kpi-number">126K</h1>
                <p className="kpi-sub">+15% so với tháng trước</p>
              </div>
              <FaDollarSign className="kpi-icon kpi-orange" />
            </div>

            <div className="kpi-box">
              <div className="kpi-left">
                <p className="kpi-title">Doanh thu tháng này</p>
                <h1 className="kpi-number">128M</h1>
                <p className="kpi-sub">+23% so với tháng trước</p>
              </div>
              <MdTrendingUp className="kpi-icon kpi-purple" />
            </div>
          </div>

  
          <div className="charts-row">

            <div className="chart-card">
              <div className="chart-header">
                <h3>Tỷ lệ thanh toán KPI</h3>

                <CustomSelect
                  options={["Online + Offline", "Online", "Offline"]}
                  value={kpiFilter}
                  onChange={setKpiFilter}
                />
              </div>

              <PieChart width={500} height={300}>
                <Pie
                  data={dataKPI}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={renderCustomizedLabel}
                >
                  {dataKPI.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </div>


            <div className="chart-card">
              <div className="chart-header">
                <h3>Trạng thái Duyệt</h3>

                <CustomSelect
                  options={["Tất cả", "Hôm nay", "Tuần này"]}
                  value={statusFilter}
                  onChange={setStatusFilter}
                />
              </div>

              <PieChart width={500} height={300}>
                <Pie
                  data={dataStatus}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={renderCustomizedLabel}
                >
                  {dataStatus.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </div>
          </div>

          <div className="kpi-summary-row">

          <div className="kpi-summary-card">
            <div className="kpi-summary-icon icon-blue">
              📈
            </div>

            <div>
              <h4 className="kpi-summary-title">Tỷ lệ thanh toán KPI</h4>
              <p className="kpi-summary-number">96.8%</p>
              <p className="kpi-summary-sub green">+2.5% so với tháng trước</p>
            </div>
          </div>


          <div className="kpi-summary-card">
            <div className="kpi-summary-icon icon-orange">
              ⏱️
            </div>

            <div>
              <h4 className="kpi-summary-title">Giao dịch</h4>
              <p className="kpi-summary-number">98.2%</p>
              <p className="kpi-summary-sub green">Trong mục tiêu</p>
            </div>
          </div>

          <div className="kpi-summary-card">
            <div className="kpi-summary-icon icon-green">
              ✔️
            </div>

            <div>
              <h4 className="kpi-summary-title">Tỷ lệ thanh toán TKDMS</h4>
              <p className="kpi-summary-number">92.5%</p>
              <p className="kpi-summary-sub green">+1.2% so với tuần trước</p>
            </div>
          </div>

        </div>
        
      
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
    </div>
  );
}
