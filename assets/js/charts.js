const plugin = {
  id: 'custom_canvas_background_color',
  beforeDraw: (chart) => {
    const {ctx} = chart;
    ctx.save();
    ctx.globalCompositeOperation = 'destination-over';
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore();
  }
};


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


// main line chart start
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

// config block
let configLineChart = new Chart(ctx, {
  type: "line",
  data: dataLineChart,
  plugins: [plugin],
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

// main line chart end.



// lastweek line chart start
var ctx = document.getElementById("lastWeekChart").getContext("2d");
var gradient = ctx.createLinearGradient(0, 0, 0, 300);
gradient.addColorStop(0, "#147AD6");
gradient.addColorStop(1, "#FFFFFF");
const dataLastWeekChart = {
  labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"],
  datasets: [
    {
      label: "# of Votes",
      data: [300, 500, 240, 620, 255, 252, 5],
      backgroundColor: gradient,
      pointRadius: 7,
      borderColor: "#147AD6",
      borderWidth: 2,
      tension: 0.5,
      fill: false,
    },
  ],
};

// config block
let configLastWeekChart = new Chart(ctx, {
  type: "line",
  data: dataLastWeekChart,
  plugins: [plugin],
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

// main line chart end.


// doughunut chart garages start 

const dataDoughnut = {
  labels: ["possitive", "negetive", "unsure"],
  datasets: [
    {
      label: "# of Votes",
      data: [60, 20, 6],
      backgroundColor: ["#9791FF", "#FF5959", "lightgray"],
      borderColor: ["#9791FF", "#FF5959", "lightgray"],
      cutout: "70%",
    },
  ],
};

// config
const doughnutConfig = {
  type: "doughnut",
  data: dataDoughnut,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "left",
        align: "center",
        fontSize: "14",
        labels: {
          pointStyle: "circle",
          usePointStyle: true,
          padding: 14,
        },
      },
    },
  },
};

// data redering
// const garagesDoughnut = new Chart(
//   document.getElementById("garagesDoughnutChart"),
//   doughnutConfig
// );

// doughnut chart gareges end 