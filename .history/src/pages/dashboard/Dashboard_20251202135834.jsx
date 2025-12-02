import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";
import ScoreDetailModal from "../../components/ScoreDetailModal";

import "./dashboard.css";

export default function Dashboard() {
  const [records, setRecords] = useState([]);
  const [selected, setSelected] = useState(null);

  // Giả lập dữ liệu
  useEffect(() => {
    const mock = Array.from({ length: 50 }).map((_, i) => ({
      id: i + 1,
      agent: "Agent " + (i + 1),
      channel: ["Chat", "Email", "Call"][i % 3],
      datetime: "2025-12-01 14:2" + (i % 10),
      score: Math.floor(Math.random() * 100),
    }));
    setRecords(mock);
  }, []);

  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <Header />

        <div className="dashboard-wrapper">
          <h2 className="dash-title">Dashboard TT.DVKH</h2>
          <p className="dash-sub">Tổng quan về hoạt động tổng đài và KPI hằng ngày</p>

          {/* KPI TOP */}
          <div className="kpi-row">
            <div className="kpi-box">
              <p className="kpi-label">Tổng Membership</p>
              <p className="kpi-value">156</p>
              <p className="kpi-change up">+12% so với tháng trước</p>
            </div>

            <div className="kpi-box">
              <p className="kpi-label">Tổng Doanh số</p>
              <p className="kpi-value">12</p>
              <p className="kpi-change up">+8% so với tháng trước</p>
            </div>

            <div className="kpi-box">
              <p className="kpi-label">Lượt đăng ký MBS</p>
              <p className="kpi-value">126K</p>
              <p className="kpi-change up">+15% so với tháng trước</p>
            </div>

            <div className="kpi-box">
              <p className="kpi-label">Doanh thu tháng này</p>
              <p className="kpi-value">128M</p>
              <p className="kpi-change up">+23% so với tháng trước</p>
            </div>
          </div>

          {/* CHART ROW */}
          <div className="chart-row">
            <div className="chart-card">
              <div className="chart-header">
                <p>Tỷ lệ thanh toán KPI</p>
                <select>
                  <option>Online + Offline</option>
                </select>
              </div>
              <PieChart
                data={[
                  { name: "Điện thoại", value: 45, color: "#3b83f7" },
                  { name: "Chat", value: 25, color: "#22c55e" },
                  { name: "Email", value: 20, color: "#f59e0b" },
                  { name: "Video", value: 10, color: "#ef4444" },
                ]}
              />
            </div>

            <div className="chart-card">
              <div className="chart-header">
                <p>Trạng thái Duyệt</p>
                <select>
                  <option>Tất cả</option>
                </select>
              </div>
              <PieChart
                data={[
                  { name: "Đã xử lý", value: 85, color: "#22c55e" },
                  { name: "Đang xử lý", value: 10, color: "#f59e0b" },
                  { name: "Chờ xử lý", value: 5, color: "#ef4444" },
                ]}
              />
            </div>
          </div>

          {/* RECORD TABLE */}
          <div className="record-section">
            <h3>Danh sách phiếu chấm điểm (50 gần nhất)</h3>

            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Agent</th>
                  <th>Kênh</th>
                  <th>Ngày giờ</th>
                  <th>Điểm</th>
                </tr>
              </thead>
              <tbody>
                {records.map((r) => (
                  <tr key={r.id} onClick={() => setSelected(r)}>
                    <td>{r.id}</td>
                    <td>{r.agent}</td>
                    <td>{r.channel}</td>
                    <td>{r.datetime}</td>
                    <td>{r.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {selected && <ScoreDetailModal record={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
