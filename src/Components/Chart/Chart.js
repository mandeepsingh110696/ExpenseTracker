import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (prop) => {
  const datapointsvalue = prop.dataPoints.map((datapoint) => datapoint.value);
  const maximumvalue = Math.max(...datapointsvalue);

  return (
    <div className="chart">
      {prop.dataPoints.map((datapoint) => (
        <ChartBar
          id={datapoint.label}
          value={datapoint.value}
          maxvalue={maximumvalue}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
