const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Top Counterparties",
        backgroundColor: "#2aa5eb",
        pointbackgroundColor: "#2aa5eb",
        borderColor: "#2aa5eb",
        data: [25, 20, 25, 50, 60, 40, 100],
        borderWidth: 1,
        tension: 0.6,
        borderWidth: 2,
        pointStyle: false,
      },
      {
        label: "Top Counterparties",
        backgroundColor: "#2aa5eb",
        pointbackgroundColor: "white",
        borderColor: "#2aa5eb",
        data: [15, 20, 85, 60, 90, 35, 15, 25],
        borderWidth: 1,
        tension: 0.4,
        borderWidth: 2,
        pointStyle: false,
      },
    ],
  },

  options: {
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          stepsize: 25,
          callback: (value) => value + "%",
        },
      },
    },
  },
});
const ctxe = document.getElementById("myChart2");

new Chart(ctxe, {
  type: "line",
  data: {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Top Counterparties",
        backgroundColor: "#2aa5eb",
        pointbackgroundColor: "#2aa5eb",
        borderColor: "#2aa5eb",
        data: [25, 35, 20, 60, 50, 54, 40],
        borderWidth: 1,
        tension: 0.4,
        borderWidth: 2,
        pointStyle: false,
      },
    ],
  },

  options: {
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 100,
        ticks: {
          stepsize: 25,
          callback: (value) => value + "%",
        },
      },
    },
  },
});
