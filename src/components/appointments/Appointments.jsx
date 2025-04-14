import { useState } from "react";
import DashboardDataCard from "../dashboard/DashboardContainer1";
import ResponsiveTable from "../global/tables/ResponsiveTable";

import "./appointmentsStyles.css";

export default function AppointmentsPage() {
  // eslint-disable-next-line no-unused-vars
  const [currentPage, setCurrentPage] = useState(1);

  // eslint-disable-next-line no-unused-vars
  const [pages, setPages] = useState(3);

  const [activeBtn, setActiveBtn] = useState(0);

  // eslint-disable-next-line no-unused-vars
  const [appointmentsValue, setAppointmentsValue] = useState(21);

  // eslint-disable-next-line no-unused-vars
  const [homeCheckupValue, setHomeCheckupValue] = useState(21);

  // eslint-disable-next-line no-unused-vars
  const [clinicAppointmentsValue, setClinicAppointmentsValue] = useState(21);

  // eslint-disable-next-line no-unused-vars
  const [videoConsultationValue, setVideoConsultationValue] = useState(21);

  const [filterBtnType, setFilterBtnType] = useState("All");

  console.log(filterBtnType);

  const appointmentsCardData = [
    {
      label: "Today Appointments",
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
      label: "Completed",
      currency: "$",
      totalValue: 89000,
      icon: "./images/dashboard/appointments-icon.svg",
      status: "Down",
      value: 4.3,
      duration: "yesterday",
    },
    {
      label: "Cancelled/Declined",
      totalValue: 2040,
      icon: "./images/dashboard/admin-profit-icon.svg",
      status: "Up",
      value: 1.8,
      duration: "yesterday",
    },
  ];

  const appointmentsData = [
    {
      id: "#20462",
      doctorName: "Travis Head",
      petParents: "Matt Dickerson",
      appointmentDate: "13/05/22",
      type: "Home Checkup",
      fee: `$${(400.95).toFixed(2)}`,
      status: "Paid",
    },
    {
      id: "#20463",
      doctorName: "Travis",
      petParents: "Matt",
      appointmentDate: "13/05/22",
      type: "Home Checkup",
      fee: `$${(400.95).toFixed(2)}`,
      status: "UnPaid",
    },
    {
      id: "#20463",
      doctorName: "Travis",
      petParents: "Matt",
      appointmentDate: "13/05/22",
      type: "Home Checkup",
      fee: `$${(400.95).toFixed(2)}`,
      status: "UnPaid",
    },
    {
      id: "#20463",
      doctorName: "Travis",
      petParents: "Matt",
      appointmentDate: "13/05/22",
      type: "Home Checkup",
      fee: `$${(400.95).toFixed(2)}`,
      status: "UnPaid",
    },
    {
      id: "#20463",
      doctorName: "Travis",
      petParents: "Matt",
      appointmentDate: "13/05/22",
      type: "Home Checkup",
      fee: `$${(400.95).toFixed(2)}`,
      status: "Paid",
    },
    {
      id: "#20463",
      doctorName: "Travis",
      petParents: "Matt",
      appointmentDate: "13/05/22",
      type: "Home Checkup",
      fee: `$${(400.95).toFixed(2)}`,
      status: "UnPaid",
    },
    {
      id: "#20463",
      doctorName: "Travis",
      petParents: "Matt",
      appointmentDate: "13/05/22",
      type: "Home Checkup",
      fee: `$${(400.95).toFixed(2)}`,
      status: "UnPaid",
    },
    {
      id: "#20463",
      doctorName: "Travis",
      petParents: "Matt",
      appointmentDate: "13/05/22",
      type: "Home Checkup",
      fee: `$${(400.95).toFixed(2)}`,
      status: "UnPaid",
    },
    {
      id: "#20463",
      doctorName: "Travis",
      petParents: "Matt",
      appointmentDate: "13/05/22",
      type: "Home Checkup",
      fee: `$${(400.95).toFixed(2)}`,
      status: "UnPaid",
    },
    {
      id: "#20463",
      doctorName: "Travis",
      petParents: "Matt",
      appointmentDate: "13/05/22",
      type: "Home Checkup",
      fee: `$${(400.95).toFixed(2)}`,
      status: "Paid",
    },
  ];

  const filterButtons = [
    {
      id: 0,
      name: "All",
      value: "All",
      total: appointmentsValue,
    },
    {
      id: 1,
      name: "Home Checkup",
      value: "homeCheckup",
      total: homeCheckupValue,
    },
    {
      id: 2,
      name: "Clinic Appointments",
      value: "clinicAppointments",
      total: clinicAppointmentsValue,
    },
    {
      id: 3,
      name: "Video Consultation",
      value: "videoConsultation",
      total: videoConsultationValue,
    },
  ];

  const handleActionBtnClick = (item, actionType) => {
    console.log(item, `${actionType} btn clicked`);
  };

  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex max-[450px]:flex-col gap-3 items-center justify-between">
          <h1 className="main-heading">Appointments</h1>
          <div>
            <button className="inline-flex items-center gap-[8px] px-[12px] py-[8px] bg-[#624DE3] rounded-[8px] font-[600] text-white cursor-pointer">
              <span>+</span>
              <span>Add New Appointment</span>
            </button>
          </div>
        </div>

        <div className="">
          <DashboardDataCard data={appointmentsCardData} />
        </div>

        {/* filter buttons start */}

        <div className="flex items-center gap-3 overflow-auto filterBtn-container">
          {filterButtons?.map((button, index) => {
            return (
              <div className="" key={index}>
                <button
                  className={`${
                    activeBtn === index ? "active-btn" : ""
                  } border border-[#4c63bd] text-[#4c63bd] font-[600] inline-flex items-center justify-between gap-2 px-[11px] py-[5px] rounded-[45px] cursor-pointer transition-colors`}
                  type="button"
                  onClick={() => {
                    setActiveBtn(index);
                    setFilterBtnType(button?.value);
                  }}
                >
                  <span
                    className={`${activeBtn === index ? "text-white" : ""}`}
                  >
                    {button?.name}
                  </span>
                  <span
                    className={`bg-white rounded-[20px] w-[39px] h-[31px] inline-flex items-center justify-center`}
                  >
                    {button?.total}
                  </span>
                </button>
              </div>
            );
          })}
        </div>

        {/* filter buttons end */}
        <div className="">
          <ResponsiveTable
            data={appointmentsData}
            mainHeading={"Appointments"}
            searchBar={true}
            headings={[
              "Order #",
              "Doctor Name",
              "Pet Parents",
              "Appointment Booked",
              "Type",
              "Fee",
              "Status",
              "Action",
            ]}
            cells={[
              "id",
              "doctorName",
              "petParents",
              "appointmentDate",
              "type",
              "fee",
            ]}
            status={true}
            actions={true}
            actionTypes={[
              {
                action: "edit",
                icon: "./images/edit-icon.svg",
              },
              {
                action: "delete",
                icon: "./images/delete-icon.svg",
              },
            ]}
            actionHandler={handleActionBtnClick}
            setCurrentPage={setCurrentPage}
            pages={pages}
          />
        </div>
      </div>
    </>
  );
}
