import { useEffect } from "react";
import Chart from "chart.js";
import { useState } from "react";
import Button from "antd/lib/button";

export const LineChart = () => {
  useEffect(() => {
    let ctx = document.getElementById("myLineChart").getContext("2d");
    let myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "1-р сар",
          "2-р сар",
          "3-р сар",
          "4-р сар",
          "5-р сар",
          "6-р сар",
          "7-р сар",
          "8-р сар",
          "9-р сар",
          "10-р сар",
          "11-р сар",
          "12-р сар",
        ],
        datasets: [
          {
            data: [34, 45, 56, 67, 78, 89, 90, 98, 87, 76, 65, 54],
            label: "Applied",

            borderColor: "#3e95cd",
            backgroundColor: "#7bb6dd",
            fill: false,
            lineTension: 0.1,
          },
          {
            data: [70, 78, 90, 79, 65, 60, 50, 70, 80, 100, 90, 80],
            label: "Accepted",
            borderColor: "#3cba9f",
            backgroundColor: "#71d1bd",
            fill: false,
            lineTension: 0.1,
          },
          {
            data: [10, 25, 45, 56, 35, 20, 30, 55, 70, 55, 40, 60],
            label: "Pending",
            borderColor: "#ffa500",
            backgroundColor: "#ffc04d",
            fill: false,
            lineTension: 0.1,
          },
          {
            data: [6, 3, 10, 20, 7, 15, 10, 25, 17, 35, 30, 40],
            label: "Rejected",
            borderColor: "#c45850",
            backgroundColor: "#d78f89",
            fill: false,
            lineTension: 0.1,
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        tooltips: {
          callbacks: {
            label: function (tooltipItem) {
              return tooltipItem.yLabel;
            },
          },
        },
      },
    });
  }, []);

  const [mainChart, setMainChart] = useState();

  return (
    <>
      <div className="w-2/3 h-full flex mx-auto flex-col mb-10">
        <div className="w-full h-10 flex justify-between items-center flex-row">
          <div className="w-40 h-8 text-xl ml-8 font-bold cursor-default text-black/70">
            Мэдэхгүй
          </div>
          <div className="w-fit h-full space-x-1 mr-7 flex flex-row">
            <Button
              className="w-16 h-6 rounded-md bg-white border-2 border-gray-300 hover:bg-gray-100 hover:border-main hover:shadow-sm transition-all duration-100 flex justify-center items-center font-semibold text-xs text-black/70 hover:text-black"
              type="dashed"
            >
              7 Хоног
            </Button>
            <Button
              className="w-16 h-6 rounded-md bg-white border-2 border-gray-300 hover:bg-gray-100 hover:border-main hover:shadow-sm transition-all duration-100 flex justify-center items-center font-semibold text-xs text-black/70 hover:text-black"
              type="dashed"
            >
              Сар
            </Button>
            <Button
              className="w-16 h-6 rounded-md bg-white border-2 border-gray-300 hover:bg-gray-100 hover:border-main hover:shadow-sm transition-all duration-100 flex justify-center items-center font-semibold text-xs text-black/70 hover:text-black"
              type="dashed"
            >
              Жил
            </Button>
          </div>
        </div>
        <div className="  w-full h-auto my-auto">
          <canvas height={200} width={400} id="myLineChart"></canvas>
        </div>
      </div>
    </>
  );
};
export const PieChart = () => {
  useEffect(() => {
    let ctx = document.getElementById("myPieChart").getContext("2d");
    let myChart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [
          {
            data: [300, 50, 100],
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          },
        ],
      },
    });
  }, []);
  return (
    <>
      <div className="w-1/3 h-full">
        <div className="w-full h-full flex mb-20">
          <div className=" pt-0 rounded-xl w-full h-auto ">
            <canvas id="myPieChart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
};

export const Card1LineChart = () => {
  useEffect(() => {
    let ctx = document.getElementById("Card1LineChart").getContext("2d");
    let Card1Chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "6 days ago",
          "5 days ago",
          "4 days ago",
          "3 days ago",
          "2 days ago",
          "Yesterday",
          "Today",
        ],
        datasets: [
          {
            label: "",
            data: [5, 7, 9, 13, 12, 10, 11],
            backgroundColor: false,
            borderColor: "#FFFFFF90",
            borderWidth: "1.5",
            fill: false,
            pointBorderColor: "#FFFFFF90",
            pointBorderWidth: 1.5,
            pointBackgroundColor: "#321FDB",
          },
        ],
      },
      options: {
        scales: {
          xAxes: [
            {
              display: false,
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              display: false,
              trick: {
                display: false,
              },
              gridLines: {
                display: false,
              },
            },
          ],
        },
        legend: {
          display: false,
        },
      },
    });
  }, []);
  return (
    <>
      <div className="w-full h-1/2 flex justify-center items-end ">
        <canvas height={100} id="Card1LineChart"></canvas>
      </div>
    </>
  );
};
export const Card2LineChart = () => {
  useEffect(() => {
    let ctx = document.getElementById("Card2LineChart").getContext("2d");
    let Card2Chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "6 days ago",
          "5 days ago",
          "4 days ago",
          "3 days ago",
          "2 days ago",
          "Yesterday",
          "Today",
        ],
        datasets: [
          {
            label: "",
            data: [5, 7, 9, 13, 12, 10, 11],
            backgroundColor: false,
            borderColor: "#FFFFFF90",
            borderWidth: "1.5",
            fill: false,
            pointBorderColor: "#FFFFFF90",
            pointBorderWidth: 1.5,
            pointBackgroundColor: "#3499FE",
            lineTension: 0,
          },
        ],
      },
      options: {
        scales: {
          xAxes: [
            {
              display: false,
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              display: false,
              trick: {
                display: false,
              },
              gridLines: {
                display: false,
              },
            },
          ],
        },
        legend: {
          display: false,
        },
      },
    });
  }, []);
  return (
    <>
      <div className="w-full h-1/2 flex justify-center items-end ">
        <canvas height={100} id="Card2LineChart"></canvas>
      </div>
    </>
  );
};
export const Card3LineChart = () => {
  useEffect(() => {
    let ctx = document.getElementById("Card3LineChart").getContext("2d");
    let Card3Chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "6 days ago",
          "5 days ago",
          "4 days ago",
          "3 days ago",
          "2 days ago",
          "Yesterday",
          "Today",
        ],
        datasets: [
          {
            label: "",
            data: [5, 7, 9, 13, 12, 10, 11],
            backgroundColor: "#FFFFFF50",
            borderColor: "#FFFFFF90",
          },
        ],
      },
      options: {
        scales: {
          xAxes: [
            {
              display: false,
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              display: false,
              trick: {
                display: false,
              },
              gridLines: {
                display: false,
              },
            },
          ],
        },
        legend: {
          display: false,
        },
      },
    });
  }, []);
  return (
    <>
      <div className="w-full h-1/2 flex justify-center items-end ">
        <canvas height={100} id="Card3LineChart"></canvas>
      </div>
    </>
  );
};
export const Card4LineChart = () => {
  useEffect(() => {
    let ctx = document.getElementById("Card4LineChart").getContext("2d");
    let Card4Chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "6 days ago",
          "5 days ago",
          "4 days ago",
          "3 days ago",
          "2 days ago",
          "Yesterday",
          "Today",
        ],
        datasets: [
          {
            label: "",
            data: [5, 7, 9, 13, 12, 10, 11],
            backgroundColor: "#FFFFFF80",
          },
        ],
      },
      options: {
        scales: {
          xAxes: [
            {
              display: false,
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              display: false,
              trick: {
                display: false,
              },
              gridLines: {
                display: false,
              },
            },
          ],
        },
        legend: {
          display: false,
        },
      },
    });
  }, []);
  return (
    <>
      <div className="w-full h-1/2 flex justify-center items-end ">
        <canvas height={100} id="Card4LineChart"></canvas>
      </div>
    </>
  );
};
