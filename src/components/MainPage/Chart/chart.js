import React, { useState, useEffect } from "react";
import { Chart } from "react-charts";

function MyChart(props) {
  const [product, setProduct] = useState(null);
  const [dataChart, setDataChart] = useState([]);
  const [axes, setAxes] = useState([
    { primary: true, type: "ordinal", position: "bottom" },
    { type: "linear", position: "left" },
  ]);
  const [id, setId] = useState(props.match.params.id);

  useEffect(() => {
    fetch("http://localhost:9000/product/get/" + id)
      .then((res) => res.json())
      .then((json) => {
        console.log(json.histories);
        setProduct(json);
        const data = [];
        json.histories.map(item => {
          data.push([item.date.substring(0, 10), item.price]);
        });
        const newDataChart = [
          {
            label: "Product",
            data: data
          },
        ];
        setDataChart(newDataChart);
        setAxes([
              { primary: true, type: "ordinal", position: "bottom" },
              { type: "linear", position: "left" },
            ],);
      })
      .catch(err => {
        console.log(err)
      })
      ;
  }, [id]);

  // const series = React.useMemo(
  //   () => ({
  //     showPoints: true
  //   }),
  //   []
  // )

  // const axes = React.useMemo(
  //   () => [
  //     { primary: true, type: "ordinal", position: "bottom" },
  //     { type: "linear", position: "left" },
  //   ],
  //   []
  // );

  return (
    <div
      style={{
        width: "900px",
        height: "500px",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Historical Price Chart</h2>
      <Chart data={dataChart} axes={axes}  tooltip  />
    </div>
  );
}
export default MyChart;
