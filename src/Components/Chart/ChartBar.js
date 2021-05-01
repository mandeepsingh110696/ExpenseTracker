import React from "react";
import "./ChartBar.css";

const Chartbar = (prop) => {
  let heightchart = "0%";
  if (prop.maxvalue > 0) {
    heightchart = Math.round((prop.value / prop.maxvalue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: heightchart }}></div>
      </div>
      <div className="chart-bar__label">{prop.label}</div>
    </div>
  );
};
export default Chartbar;
