import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";
import "./dashboard.css";

export default function Dashboard() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <Header />

        <h2 className="title">Dashboard TT.DVKH</h2>
        <p className="subtitle">Tổng quan về hoạt động tổng đài và KPI hàng ngày</p>

        {/* KPI TOP 4 */}
        <div className="kpi-row">
          <div className="kpi-box">
            <p className="kpi-label">Tổng Membership</p>
            <h3>156</h3>
            <p className="kpi-change green">+12% so với tháng trước</p>
          </div>

          <div className="kpi-box">
            <p className="kpi-label">Tổng Doanh số</p>
            <h3>12</h3>
            <p className="kpi-change green">+8% so với tháng trước</p>
          </div>

          <div className="kpi-box">
            <p className="kpi-label">Lượt đăng ký MBS</p>
            <h3>126K</h3>
            <p className="kpi-change green">+15% so với tháng trước</p>
          </div>

          <div className="kpi-box">
            <p className="kpi-label">Doanh thu tháng này</p>
            <h3>128M</h3>
            <p className="kpi-change green">+23% so với tháng trước</p>
          </div>
        </div>

        {/* 2 PIE CHART */}
        <div className="charts-row">
          <div className="card chart">
            <h3>Tỷ lệ thanh toán KPI</h3>
            <PieChart
              labels={["Chat", "Email", "Video", "Điện thoại"]}
              values={[25, 20, 10, 45]}
              colors={["#2ecc71", "#f1c40f", "#e74c3c", "#3498db"]}
            />
          </div>

          <div className="card chart">
            <h3>Trạng thái duyệt</h3>
            <PieChart
              labels={["Chờ xử lý", "Đang xử lý", "Đã xử lý"]}
              values={[5, 10, 85]}
              colors={["#e74c3c", "#f39c12", "#2ecc71"]}
            />
          </div>
        </div>

        {/* KPI 3 */}
        <div className="kpi-row-3">
          <div className="kpi-card">
            <h4>Tỷ lệ thanh toán KPI</h4>
            <h2>96.8%</h2>
            <p className="green">+2.5% so với tháng trước</p>
          </div>

          <div className="kpi-card">
            <h4>Giao dịch</h4>
            <h2>98.2%</h2>
            <p className="green">Trong mục tiêu</p>
          </div>

          <div className="kpi-card">
            <h4>Tỷ lệ thanh toán TKDMS</h4>
            <h2>92.5%</h2>
            <p className="green">+1.2% so với tuần trước</p>
          </div>
        </div>

        {/* TABLE */}
        <div className="card table-card">
          <div className="table-header">
            <h3>Cuộc gọi gần đây</h3>
            <a className="view-all">Xem tất cả →</a>
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
              <tr>
                <td>Nguyễn Văn Anh</td>
                <td>0901234567</td>
                <td>17:30 15/10/2024</td>
                <td>00:05:23</td>
                <td>Trần Thị Bình</td>
                <td className="green">Đã xử lý</td>
              </tr>

              <tr>
                <td>Lê Thị Cúc</td>
                <td>0907654321</td>
                <td>16:15 15/10/2024</td>
                <td>00:03:45</td>
                <td>Lê Văn Cường</td>
                <td className="green">Đã xử lý</td>
              </tr>

              <tr>
                <td>Phạm Văn Đức</td>
                <td>0909876543</td>
                <td>15:45 15/10/2024</td>
                <td>00:08:12</td>
                <td>Phạm Thị Dung</td>
                <td className="green">Đã xử lý</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
