import { useState } from "react";
import DashboardDataCard from "../dashboard/DashboardContainer1";

import ResponsiveTable from "../global/tables/ResponsiveTable";

export default function PetParentsPage() {
  const petParentsData1 = [
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

  const tableData = [
    {
      id: "#20462",
      parentsName: "Travis Head",
      petName: "Matt Dickerson",
      appointmentBook: "13/05/2022",
      city: "Carolina",
      phone: "9737739497",
      status: "Paid",
    },
    {
      id: "#20462",
      parentsName: "Travis Head",
      petName: "Matt Dickerson",
      appointmentBook: "13/05/2022",
      city: "Florida",
      phone: "8582595285",
      status: "UnPaid",
    },
    {
      id: "#20462",
      parentsName: "Travis Head",
      petName: "Matt Dickerson",
      appointmentBook: "13/05/2022",
      city: "Florida",
      phone: "5043686874",
      status: "Paid",
    },
    {
      id: "#20462",
      parentsName: "Travis Head",
      petName: "Matt Dickerson",
      appointmentBook: "13/05/2022",
      city: "Carolina",
      phone: "4022231492",
      status: "UnPaid",
    },
    {
      id: "#20462",
      parentsName: "Travis Head",
      petName: "Matt Dickerson",
      appointmentBook: "13/05/2022",
      city: "Carolina",
      phone: "7737265795",
      status: "Paid",
    },
    {
      id: "#20462",
      parentsName: "Travis Head",
      petName: "Matt Dickerson",
      appointmentBook: "13/05/2022",
      city: "Multan",
      phone: "7082788201",
      status: "UnPaid",
    },
    {
      id: "#20462",
      parentsName: "Travis Head",
      petName: "Matt Dickerson",
      appointmentBook: "13/05/2022",
      city: "Florida",
      phone: "9737739497",
      status: "Paid",
    },
    {
      id: "#20462",
      parentsName: "Travis Head",
      petName: "Matt Dickerson",
      appointmentBook: "13/05/2022",
      city: "Lahore",
      phone: "8582595285",
      status: "UnPaid",
    },
    {
      id: "#20462",
      parentsName: "Travis Head",
      petName: "Matt Dickerson",
      appointmentBook: "13/05/2022",
      city: "Florida",
      phone: "5043686874",
      status: "Paid",
    },
    {
      id: "#20462",
      parentsName: "Travis Head",
      petName: "Matt Dickerson",
      appointmentBook: "13/05/2022",
      city: "Carolina",
      phone: "4022231492",
      status: "Paid",
    },
  ];

  // eslint-disable-next-line no-unused-vars
  const [currentPage, setCurrentPage] = useState(1);

  // eslint-disable-next-line no-unused-vars
  const [pages, setPages] = useState(3);

  const handleActionBtnClick = (item, actionType) => {
    console.log(item, `${actionType} btn clicked`);
  };

  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex max-[450px]:flex-col gap-3 items-center justify-between">
          <h1 className="main-heading">Pet Parents</h1>
          <div>
            <button className="inline-flex items-center gap-[8px] px-[12px] py-[8px] bg-[#624DE3] rounded-[8px] font-[600] text-white cursor-pointer">
              <span>+</span>
              <span>Add New Appointment</span>
            </button>
          </div>
        </div>
        <div className="">
          <DashboardDataCard data={petParentsData1} />
        </div>
        <div className="">
          <ResponsiveTable
            data={tableData}
            mainHeading={"Pet Parents"}
            searchBar={true}
            headings={[
              "ID #",
              "Parents Name",
              "Pet Name",
              "Appointment Book",
              "City",
              "Phone",
              "Status",
              "Action",
            ]}
            cells={[
              "id",
              "parentsName",
              "petName",
              "appointmentBook",
              "city",
              "phone",
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
