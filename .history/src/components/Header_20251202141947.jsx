import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";
import { MdLogout, MdHelpOutline } from "react-icons/md";
import "./header.css";

export default function Header() {
  return (
    <div className="top-header">
      {/* SEARCH BAR */}
      <div className="search-area">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Tìm kiếm khách hàng theo CIF, CCCD, SĐT, email..."
        />
      </div>

      {/* RIGHT SECTION */}
      <div className="header-right">

        {/* Bell + red dot */}
        <div className="icon-box bell-box">
          <FaBell />
          <span className="dot"></span>
        </div>

        {/* Help icon */}
        <div className="icon-box">
          <MdHelpOutline />
        </div>

        {/* Online */}
        <div className="online-status">
          Tư vấn viên đang làm việc: <strong>24</strong>
        </div>

        {/* User */}
        <div className="user-info">
          <FaUserCircle className="user-avatar" />
          <span>admin</span>
        </div>

        {/* Logout */}
        <div className="logout-btn">
          <MdLogout />
          <span>Đăng xuất</span>
        </div>
      </div>
    </div>
  );
}
