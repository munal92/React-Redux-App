import React from "react";
import LineChart from "chart.js";
import { Line } from "react-chartjs-2";
import { connect } from "react-redux";

import { fetchCurrentCurrencyData, fetchChangesByDate } from "../actions";

function Charts(props) {
  let a = Object.values(props.data).map((item) => item.USD);
  let b = Object.keys(props.data);

  console.log("currency", a);
  console.log("date", b);

  const data = {
    labels: b,
    datasets: [
      {
        label: "Dollar Currency Last 10 Days Based on Euro",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: a,
        // data: [65, 59, 80, 81, 56, 55, 40]
      },
    ],
  };

  return (
    <div className="chartGraph">
      <h2>currency $/€</h2>
      <Line
        data={data}
        width={100}
        height={50}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.fetchChangesByDateRed.dataTenDay,

    isLoading: state.fetchChangesByDateRed.isLoading,
    error: state.fetchChangesByDateRed.error,
  };
};
export default connect(mapStateToProps, {
  fetchCurrentCurrencyData,
  fetchChangesByDate,
})(Charts);
