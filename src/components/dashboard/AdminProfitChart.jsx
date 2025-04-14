import { useState } from "react";

import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const AdminProfitChart = () => {
  const data = {
    labels: [
      "5k",
      "10k",
      "15k",
      "20k",
      "25k",
      "30k",
      "35k",
      "40k",
      "45k",
      "50k",
      "55k",
      "60k",
    ],
    datasets: [
      {
        label: "Admin Profit",
        data: [
          20, 25, 30, 40, 52, 40, 38, 55, 90, 45, 50, 48, 52, 40, 62, 65, 25,
          30, 45, 42, 72, 60, 65, 58, 52, 55, 42, 58, 50, 52, 55,
        ],
        fill: true,
        backgroundColor: "rgba(30, 136, 229, 0.2)",
        borderColor: "#1e88e5",
        tension: 0.3,
        pointBackgroundColor: "#1e88e5",
        pointBorderColor: "#fff",
        pointRadius: 5,
        pointHoverRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(30, 136, 229, 0.9)", // Blue tooltip background
        titleColor: "#fff",
        bodyColor: "#fff",
        boxPadding: 8,
        cornerRadius: 5,
        callbacks: {
          title: function () {
            return null; // Don't show the title (x-axis label)
          },
          label: function (context) {
            if (context.parsed.y !== null) {
              const dollarValue = `$${(
                (context.parsed.y / 100) *
                71500
              ).toFixed(1)}`; // Calculate dollar value
              return dollarValue;
            }
            return null;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#AAACAE",
        },
      },
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: function (value) {
            return value + "%";
          },
          color: "#AAACAE",
        },
        grid: {
          color: "#f0f0f0",
        },
      },
    },
  };

  const styles = {
    container: {
      backgroundColor: "#fff",
      borderRadius: "20px",
      padding: "20px",
      //   boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
      //   border: "1px solid #e0e0e0",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
    },
    title: {
      fontSize: "1.2rem",
      fontWeight: "bold",
      color: "#333",
      margin: 0,
    },
    dropdown: {
      position: "relative",
    },
    select: {
      padding: "8px 25px 8px 10px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      backgroundColor: "#fff",
      fontSize: "0.9rem",
      fontWeight: "600",
      color: "#AAACAE",
      appearance: "none",
      backgroundImage: `url(./images/dashboard/down-arrow.svg)`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right 10px top 50%",
      backgroundSize: "0.7em",
    },
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [selectedMonth, setSelectedMonth] = useState("October"); // Initialize with a default month

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
    console.log("Selected Month:", event.target.value);
    // You can add your logic here to fetch or update data based on the selected month
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h3 style={styles.title}>Admin Profit</h3>
        <div style={styles.dropdown}>
          <select
            style={styles.select}
            value={selectedMonth}
            onChange={handleMonthChange}
          >
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default AdminProfitChart;
