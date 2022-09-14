// bar chart start

// setup block
const data = {
  labels: [
    "Jan 2018",
    "Feb 2018",
    "Mar 2019",
    "Apr 2019",
    "May 2019",
    "June 2019",
    "July 2019",
  ],
  datasets: [
    {
      label: "# of Votes",
      data: [250, 500, 750, 400, 600, 260, 400],
      backgroundColor: [
        "#49C0FF",
        "#D6D6D6",
        "#49C0FF",
        "#D6D6D6",
        "#49C0FF",
        "#D6D6D6",
      ],
      borderColor: [
        "#49C0FF",
        "#D6D6D6",
        "#49C0FF",
        "#D6D6D6",
        "#49C0FF",
        "#D6D6D6",
      ],
      borderWidth: 1,
      borderRadius: 10,
    },
  ],
};

// // config block
const config = {
  type: "bar",
  data,
  options: {
    // responsive: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
    },
  },
};

// render block
const lasWeekChart = new Chart(document.getElementById("myChart"), config);

// bar chart end

// welcome dashboard file start
// line chart

var ctx = document.getElementById("lineChartMain").getContext("2d");
var gradient = ctx.createLinearGradient(0, 0, 0, 300);
gradient.addColorStop(0, "#147AD6");
gradient.addColorStop(1, "#FFFFFF");
const dataLineChart = {
  labels: ["M", "T", "W", "T", "F", "S", "S"],
  datasets: [
    {
      label: "# of Votes",
      data: [20, 40, 91, 65, 68, 20, 30, 10],
      backgroundColor: gradient,
      pointRadius: 7,
      borderColor: "#147AD6",
      borderWidth: 2,
      tension: 0.5,
      fill: true,

    },
  ],
};

// // config block
let configLineChart = new Chart(ctx, {
  type: "line",
  data: dataLineChart,
  options: {
    // responsive: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
    },
  },
});

// const lineChartMain = new Chart(
//   document.getElementById("lineChartMain"),
//   configLineChart
// );

// const vissionDoughnut = new Chart(
//   document.getElementById("lineChartMain"),
//   configLineChart
// );
// let gradientBg = ctx.createLinearGradient(0,0,0,200);
// gradientBg.addColorStop(1, 'rgba(255,99,132,1');

var ctx = document.getElementById("lineChartMain").getContext("2d");

var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        backgroundColor: gradient,
        label: "Numbers",
        data: [12, 19, 3, 5, 2, 3],
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    tension: 0.3,
  },
});
