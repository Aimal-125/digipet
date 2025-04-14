import { useEffect, useState } from "react";

import "./topRevenue.css";

import "./statusContainer.css";

import "./doctorsListStyles.css";

import "./patientsListStyles.css";

import DefaultAvatar from "/images/default-avatar.png";

import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import AdminProfitChart from "./AdminProfitChart";

import { Link, useNavigate } from "react-router";

import DashboardDataCard from "./DashboardContainer1";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function DashboardPage() {
  const [date, setDate] = useState("");

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (date) {
      console.log(date);
    }
  }, [date]);

  const dashboardData1 = [
    {
      label: "Total Patients",
      totalValue: 40689,
      icon: "./images/dashboard/patients-icon.svg",
      status: "Up",
      value: 8.5,
      duration: "yesterday",
    },
    {
      label: "Registered Doctors",
      totalValue: 10293,
      icon: "./images/dashboard/doctors-icon.svg",
      status: "Up",
      value: 1.3,
      duration: "past week",
    },
    {
      label: "Appointments",
      currency: "$",
      totalValue: 89000,
      icon: "./images/dashboard/appointments-icon.svg",
      status: "Down",
      value: 4.3,
      duration: "yesterday",
    },
    {
      label: "Admin Profit",
      totalValue: 2040,
      icon: "./images/dashboard/admin-profit-icon.svg",
      status: "Up",
      value: 1.8,
      duration: "yesterday",
    },
  ];

  const topRevenueData = [
    {
      sr: "01",
      name: "Clinic Checkup",
      popularity: 80,
      sales: 45,
    },
    {
      sr: "02",
      name: "Home Visit",
      popularity: 70,
      sales: 29,
    },
    {
      sr: "03",
      name: "Lab Test",
      popularity: 60,
      sales: 18,
    },
    {
      sr: "04",
      name: "Video Consultation",
      popularity: 20,
      sales: 25,
    },
  ];

  const statusData = {
    labels: ["2020", "2021", "2022", "2023", "2024"],
    datasets: [
      {
        label: "Dataset 1",
        data: [100, 20, 90, 50, 120],
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        pointRadius: 5,
        pointBackgroundColor: "rgba(54, 162, 235, 1)",
      },
      {
        label: "Dataset 2",
        data: [30, 60, 120, 80, 150],
        borderColor: "rgba(255, 159, 64, 1)",
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        pointRadius: 5,
        pointBackgroundColor: "rgba(255, 159, 64, 1)",
      },
    ],
  };

  const statusOptions = {
    responsive: true,
    plugins: {
      title: {
        display: false,
        text: "Status", // Add your chart title here
        align: "start", // Align the title to the start
        font: {
          size: 16, // Adjust the font size as needed
        },
      },
      legend: {
        display: false, // Set to true if you want to display the legend
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide x-axis grid lines
          drawBorder: true, // Show x-axis border
        },
        ticks: {
          color: "#96a5b8",
        },
      },
      y: {
        min: 0, // Set the minimum value for the y-axis
        max: 200, // Set the maximum value for the y-axis based on your data
        ticks: {
          stepSize: 50, // Define the steps between y-axis ticks
          color: "#96a5b8",
        },
        grid: {
          color: "rgba(0, 0, 0, 0.1)", // Customize y-axis grid line color
          drawBorder: false, // Hide y-axis border
        },
      },
    },
  };

  const doctorsData = [
    {
      _id: 1,
      name: "Dr. Ruby Perrin",
      speciality: "Dental",
      currency: "$",
      earned: "3200",
      reviews: 5,
      image: "./images/dashboard/doc-1.png",
    },
    {
      _id: 2,
      name: "Dr. Ruby Perrin",
      speciality: "Urology",
      currency: "$",
      earned: "100",
      reviews: 4,
      image: "./images/dashboard/doc-1.png",
    },
    {
      _id: 3,
      name: "Dr. Ruby Perrin",
      speciality: "Cardiology",
      currency: "$",
      earned: "110",
      reviews: 3,
      image: "./images/dashboard/doc-1.png",
    },
    {
      _id: 4,
      name: "Michelle Fairfax",
      speciality: "Urology",
      currency: "$",
      earned: "41100",
      reviews: 5,
      image: "./images/dashboard/doc-1.png",
    },
    {
      _id: 5,
      name: "Dr. Ruby Perrin",
      speciality: "Orthopaedics",
      currency: "$",
      earned: "3120",
      reviews: 4,
      image: "./images/dashboard/doc-1.png",
    },
  ];

  const StarRating = ({ rating }) => {
    const totalStars = 5;
    const filledStars = Math.round(rating); // Round to the nearest whole number if needed
    const emptyStars = totalStars - filledStars;
    const yellowStarPath = "./images/dashboard/yellow-star.svg";
    const emptyStarPath = "./images/dashboard/empty-star.svg";

    return (
      <span className="inline-flex items-center gap-0">
        {Array.from({ length: filledStars }).map((_, index) => (
          <img
            key={`filled-${index}`}
            src={yellowStarPath}
            alt="Filled Star"
            style={{ width: "16px", height: "16px" }} // Adjust size as needed
          />
        ))}
        {Array.from({ length: emptyStars }).map((_, index) => (
          <img
            key={`empty-${index}`}
            src={emptyStarPath}
            alt="Empty Star"
            style={{ width: "16px", height: "16px" }} // Adjust size as needed
          />
        ))}
      </span>
    );
  };

  const patientsData = [
    {
      _id: 1,
      name: "Charlene Reed",
      phone: "8286329170",
      lastVisit: "20 Oct 2023",
      fee: "Paid",
      image: "./images/dashboard/female-pic1.png",
    },
    {
      _id: 2,
      name: "Tom Catmoor",
      phone: "2077299974",
      lastVisit: "20 Oct 2023",
      fee: "UnPaid",
      image: "./images/dashboard/female-pic1.png",
    },
    {
      _id: 3,
      name: "Carl Kelly",
      phone: "9546207887",
      lastVisit: "20 Oct 2023",
      fee: "Paid",
      image: "./images/dashboard/female-pic1.png",
    },
    {
      _id: 4,
      name: "Michelle Fairfax",
      phone: "2077299974",
      lastVisit: "20 Oct 2023",
      fee: "Paid",
      image: "./images/dashboard/female-pic1.png",
    },
    {
      _id: 5,
      name: "Charlene Reed",
      phone: "9546207887",
      lastVisit: "20 Oct 2023",
      fee: "UnPaid",
      image: "./images/dashboard/female-pic1.png",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex max-[360px]:flex-col items-center justify-between gap-4">
          <h1 className="main-heading">Dashboard</h1>
          <div className="max-[360px]:w-full">
            <input
              className="border border-[#4C63BD] text-[#4C63BD] px-[12px] py-[7px] rounded-[8px] max-[360px]:w-full"
              type="date"
              aria-label="select date"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>

        {/* dashboard container 1 start */}

        <DashboardDataCard data={dashboardData1} />

        {/* dashboard container 1 end */}

        {/* dashboard container 2 starts */}

        <div className="flex max-[1201px]:flex-col gap-5">
          {isSmallScreen ? (
            <div className="top-revenue-container">
              <p className="top-revenue-hd">Top Revenue</p>
              <div className="flex flex-col gap-5">
                {topRevenueData?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="border-b border-[#eee] last-of-type:border-none pb-5 last-of-type:pb-0"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="py-2 text-[#96a5b8]">#</div>
                        <div className="text-[#444a6d]">{item?.sr}</div>
                      </div>
                      <div className="flex items-center justify-between gap-3">
                        <div className="py-2 text-[#96a5b8]">Name</div>
                        <div className="text-[#444a6d]">{item?.name}</div>
                      </div>
                      <div className="flex items-center justify-between gap-3">
                        <div className="py-2 text-[#96a5b8]">Popularity</div>
                        <div
                          className={`${
                            item?.name === "Clinic Checkup"
                              ? "bg-[#CDE7FF]"
                              : item?.name === "Home Visit"
                              ? "bg-[#8CFAC7]"
                              : item?.name === "Lab Test"
                              ? "bg-[#C5A8FF]"
                              : item?.name === "Video Consultation"
                              ? "bg-[#FFD5A4]"
                              : ""
                          } revenue-progress-bar-container`}
                          style={{
                            width: "200px",
                          }}
                        >
                          <div
                            className={`revenue-progress-bar`}
                            style={{
                              width: `${item.popularity}%`,
                              backgroundColor: `${
                                item?.name === "Clinic Checkup"
                                  ? "#0095FF"
                                  : item?.name === "Home Visit"
                                  ? "#00E096"
                                  : item?.name === "Lab Test"
                                  ? "#884DFF"
                                  : item?.name === "Video Consultation"
                                  ? "#FF8F0D"
                                  : ""
                              }`,
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between gap-3">
                        <div className="py-2 text-[#96a5b8]">Sales</div>
                        <div className="">
                          <span
                            className={`${
                              item?.name === "Clinic Checkup"
                                ? "bg-[#d9edff] text-[#0095FF] rounded-[7px] px-2 py-1 inline-block text-center border border-[#0095FF]"
                                : item?.name === "Home Visit"
                                ? "bg-[#c9ffe6] text-[#00E096] rounded-[7px] px-2 py-1 inline-block text-center border border-[#00E096]"
                                : item?.name === "Lab Test"
                                ? "bg-[#e9dfff] text-[#884DFF] rounded-[7px] px-2 py-1 inline-block text-center border border-[#884DFF]"
                                : item?.name === "Video Consultation"
                                ? "bg-[#fae5ce] text-[#FF8F0D] rounded-[7px] px-2 py-1 inline-block text-center border border-[#FF8F0D]"
                                : ""
                            }`}
                          >
                            {item?.sales?.toFixed(1)} %
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="top-revenue-container">
              <p className="top-revenue-hd">Top Revenue</p>
              <div className="revenue-table-container">
                <div className="revenue-hd-div">
                  <div>#</div>
                  <div>Name</div>
                  <div>Popularity</div>
                  <div className="text-center">Sales</div>
                </div>
                <div className="revenue-rows-container">
                  {topRevenueData?.map((item, index) => {
                    return (
                      <div key={index} className="revenue-row">
                        <div className="revenue-sr-div">{item?.sr}</div>
                        <div className="revenue-name-div">{item?.name}</div>
                        <div
                          className={`${
                            item?.name === "Clinic Checkup"
                              ? "bg-[#CDE7FF]"
                              : item?.name === "Home Visit"
                              ? "bg-[#8CFAC7]"
                              : item?.name === "Lab Test"
                              ? "bg-[#C5A8FF]"
                              : item?.name === "Video Consultation"
                              ? "bg-[#FFD5A4]"
                              : ""
                          } revenue-progress-bar-container`}
                        >
                          <div
                            className={`revenue-progress-bar`}
                            style={{
                              width: `${item.popularity}%`,
                              backgroundColor: `${
                                item?.name === "Clinic Checkup"
                                  ? "#0095FF"
                                  : item?.name === "Home Visit"
                                  ? "#00E096"
                                  : item?.name === "Lab Test"
                                  ? "#884DFF"
                                  : item?.name === "Video Consultation"
                                  ? "#FF8F0D"
                                  : ""
                              }`,
                            }}
                          ></div>
                        </div>
                        <div className="revenue-sales-div">
                          <span
                            className={`${
                              item?.name === "Clinic Checkup"
                                ? "bg-[#d9edff] text-[#0095FF] border border-[#0095FF]"
                                : item?.name === "Home Visit"
                                ? "bg-[#c9ffe6] text-[#00E096] border border-[#00E096]"
                                : item?.name === "Lab Test"
                                ? "bg-[#e9dfff] text-[#884DFF] border border-[#884DFF]"
                                : item?.name === "Video Consultation"
                                ? "bg-[#fae5ce] text-[#FF8F0D] border border-[#FF8F0D]"
                                : ""
                            }`}
                          >
                            {item?.sales?.toFixed(1)} %
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
          <div className="status-container">
            <p className="top-revenue-hd">Status</p>
            <Line data={statusData} options={statusOptions} />
          </div>
        </div>

        {/* dashboard container 2 end */}

        {/* dashboard container 3 starts */}

        <div>
          <AdminProfitChart />
        </div>

        {/* dashboard container 3 end */}

        {/* dashboard container 4 starts */}

        <div className="flex max-[1350px]:flex-col justify-between gap-5">
          {isSmallScreen ? (
            <div className="doctors-list-container">
              <h2 className="text-[#212529] font-[600] text-[20px]">
                Doctor List
              </h2>
              <div className="flex flex-col gap-5">
                {doctorsData?.map((doctor, index) => {
                  return (
                    <div
                      key={index}
                      className="border-b border-[#eee] last-of-type:border-none pb-5 mobile-doctors-list-container"
                    >
                      <div className="flex items-center px-5 py-2">
                        <span className="w-[80px] h-[80px] rounded-full">
                          <img
                            src={doctor?.image ? doctor?.image : DefaultAvatar}
                            alt="user avatar"
                            style={{
                              width: "100%",
                              height: "100%",
                              display: "inline-block",
                              borderRadius: "50%",
                            }}
                          />
                        </span>
                      </div>
                      <div className="flex items-center justify-between px-5 py-2">
                        <div className="text-[#333]">Name</div>
                        <div>
                          <Link
                            to={`/doctors/doctors-profile/${doctor?._id}`}
                            className="underline hover:text-blue-500 text-[#333]"
                          >
                            {doctor?.name}
                          </Link>
                        </div>
                      </div>
                      <div className="flex items-center justify-between px-5 py-2">
                        <div className="text-[#333]">Speciality</div>
                        <div className="text-[#333]">{doctor?.speciality}</div>
                      </div>
                      <div className="flex items-center justify-between px-5 py-2">
                        <div className="text-[#333]">Earned</div>
                        <div className="text-[#333]">
                          <span>{doctor?.currency}</span>
                          <span>{parseInt(doctor?.earned)?.toFixed(2)}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between px-5 py-2">
                        <div className="text-[#333]">Reviews</div>
                        <div>
                          <StarRating rating={doctor.reviews} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="doctors-list-container">
              <h2 className="text-[#212529] font-[600] text-[20px]">
                Doctor List
              </h2>
              <table className="doctors-list-table">
                <thead>
                  <tr>
                    <th>Doctor Name</th>
                    <th>Speciality</th>
                    <th>Earned</th>
                    <th>Reviews</th>
                  </tr>
                </thead>
                <tbody>
                  {doctorsData.map((doctor, index) => (
                    <tr
                      key={index}
                      onClick={() => {
                        navigate(`/doctors/doctors-profile/${doctor?._id}`);
                      }}
                    >
                      <td>
                        <span className="inline-flex items-center gap-2">
                          <span className="w-[30px] h-[30px] rounded-full">
                            <img
                              src={
                                doctor?.image ? doctor?.image : DefaultAvatar
                              }
                              alt="user avatar"
                              style={{
                                width: "100%",
                                height: "100%",
                                display: "inline-block",
                                borderRadius: "50%",
                              }}
                            />
                          </span>
                          <span>{doctor.name}</span>
                        </span>
                      </td>
                      <td>{doctor.speciality}</td>
                      <td>
                        <span>{doctor?.currency}</span>
                        <span>{parseInt(doctor?.earned)?.toFixed(2)}</span>
                      </td>
                      <td>
                        <StarRating rating={doctor.reviews} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {isSmallScreen ? (
            <div className="patients-list-container">
              <h2 className="text-[#212529] font-[600] text-[20px]">
                Patients List
              </h2>
              <div className="flex flex-col gap-5">
                {patientsData?.map((patient, index) => {
                  return (
                    <div
                      key={index}
                      className="border-b border-[#eee] last-of-type:border-none pb-5 mobile-doctors-list-container"
                    >
                      <div className="flex items-center px-5 py-2">
                        <span className="w-[80px] h-[80px] rounded-full">
                          <img
                            src={
                              patient?.image ? patient?.image : DefaultAvatar
                            }
                            alt="user avatar"
                            style={{
                              width: "100%",
                              height: "100%",
                              display: "inline-block",
                              borderRadius: "50%",
                            }}
                          />
                        </span>
                      </div>
                      <div className="flex items-center justify-between px-5 py-2">
                        <div className="text-[#333]">Name</div>
                        <div>
                          <Link
                            to="#"
                            className="underline hover:text-blue-500 text-[#333]"
                          >
                            {patient?.name}
                          </Link>
                        </div>
                      </div>
                      <div className="flex items-center justify-between px-5 py-2">
                        <div className="text-[#333]">Phone</div>
                        <div className="text-[#333]">{patient?.phone}</div>
                      </div>
                      <div className="flex items-center justify-between px-5 py-2">
                        <div className="text-[#333]">Last Visit</div>
                        <div className="text-[#333]">
                          <span>{patient?.currency}</span>
                          <span>{patient?.lastVisit}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between px-5 py-2">
                        <div className="text-[#333]">Fee</div>
                        <div>
                          <span
                            className={`${
                              patient?.fee === "Paid"
                                ? "text-green-500 bg-green-100"
                                : "text-red-500 bg-red-100"
                            } rounded-[20px] py-1 px-2`}
                          >
                            {patient.fee}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="patients-list-container">
              <h2 className="text-[#212529] font-[600] text-[20px]">
                Patients List
              </h2>
              <table className="patients-list-table">
                <thead>
                  <tr>
                    <th>Patient Name</th>
                    <th>Phone</th>
                    <th>Last Visit</th>
                    <th>Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {patientsData.map((patient, index) => (
                    <tr key={index}>
                      <td>
                        <span className="inline-flex items-center gap-2">
                          <span className="w-[30px] h-[30px] rounded-full">
                            <img
                              src={
                                patient?.image ? patient?.image : DefaultAvatar
                              }
                              alt="user avatar"
                              style={{
                                width: "100%",
                                height: "100%",
                                display: "inline-block",
                                borderRadius: "50%",
                              }}
                            />
                          </span>
                          <span>{patient.name}</span>
                        </span>
                      </td>
                      <td>{patient.phone}</td>
                      <td>{patient.lastVisit}</td>
                      <td>
                        <span
                          className={`${
                            patient?.fee === "Paid"
                              ? "text-green-500 bg-green-100"
                              : "text-red-500 bg-red-100"
                          } rounded-[20px] py-1 px-2`}
                        >
                          {patient.fee}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* dashboard container 4 end */}
      </div>
    </>
  );
}
