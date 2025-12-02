import { FaPhone, FaUserFriends, FaHome, FaChartPie, FaComments, FaEnvelope, FaVideo, FaCogs, FaFileAlt } from "react-icons/fa";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo-area">
        <div className="logo-circle">CC</div>
        <div className="logo-text">
          <h3>KienlongBank</h3>
          <p>TT.DVKH</p>
        </div>
      </div>

      <ul className="menu">
        <li className="active"><FaHome /> Dashboard</li>
        <li><FaPhone /> Cuộc gọi</li>
        <li><FaUserFriends /> Khách hàng</li>
        <li><FaChartPie /> Giao dịch</li>
        <li><FaComments /> Chat</li>
        <li><FaEnvelope /> Email</li>
        <li><FaVideo /> Video Call</li>
        <li><FaCogs /> CMS</li>
        <li><FaCogs /> SLAs</li>
        <li><FaCogs /> CRM Demo</li>
        <li><FaFileAlt /> Báo cáo</li>
        <li><FaFileAlt /> QA Scoring</li>
      </ul>

      <div className="user-box">
        <div className="avatar">NV</div>
        <p className="name">Cao Thanh Admin</p>
        <p className="email">admin@example.com</p>
        <button className="settings-btn">Cài đặt</button>
      </div>
    </div>
  );
}
