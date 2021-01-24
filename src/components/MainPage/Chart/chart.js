import React from "react";
import { Chart } from "react-charts";

function MyChart() {
  const data = React.useMemo(
    () => [
      {
        label: "Series 1",
        data: [
          [0, 1],
          [1, 2],
          [2, 4],
          [3, 2],
          [4, 7],
        ],
      },
    ],
    []
  );
  const axes = React.useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );

  return (
    <div
      style={{
        width: "500px",
        height: "300px",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Historical Price Chart</h2>
      <Chart data={data} axes={axes} />
      <p>Current price: $200</p>
      <p>Lowest price: $120</p>
    </div>
  );
}
export default MyChart;
