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

// config block
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
