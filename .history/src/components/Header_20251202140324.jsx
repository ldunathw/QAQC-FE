import { FaSearch, FaBell, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import "./Header.css";

export default function Header() {
  return (
    <div className="header-container">
      <div className="search-box">
        <FaSearch className="icon" />
        <input type="text" placeholder="Tìm kiếm khách hàng theo CIF, CCCD, SĐT, email..." />
      </div>

      <div className="header-right">
        <div className="notif"><FaBell /></div>
        <div className="online">Tư vấn viên đang làm việc: <b>24</b></div>
        <div className="user"><FaUserCircle /> admin</div>
        <div className="logout"><FaSignOutAlt /> Đăng xuất</div>
      </div>
    </div>
  );
}
