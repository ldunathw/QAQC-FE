import React from "react";
import "./KPIBox.css";

export default function KPIBox({ icon, label, value, percent, color }) {
  return (
    <div className="kpi-box">
      <div className="kpi-icon" style={{ background: color + "20" }}>
        {icon}
      </div>

      <p className="kpi-label">{label}</p>

      <h2 className="kpi-value">{value}</h2>

      {percent && (
        <p className="kpi-percent" style={{ color }}>
          {percent}
        </p>
      )}
    </div>
  );
}
