import { useState } from "react";
import DashboardDataCard from "../dashboard/DashboardContainer1";
import ResponsiveTable from "../global/tables/ResponsiveTable";

export default function LabsPage() {
  const labsDataForCard = [
    {
      label: "Today Tests",
      totalValue: 40689,
      icon: "./images/dashboard/patients-icon.svg",
      status: "Up",
      value: 8.5,
      duration: "yesterday",
    },
    {
      label: "Registered Labs",
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

  const labsData = [
    {
      id: "#20462",
      labName: "CITI Lab",
      email: "lab@gmail.com",
      bookedLabTests: "01",
      phone: "035455421",
      status: "Approved",
    },
    {
      id: "#20462",
      labName: "CITI Lab",
      email: "lab@gmail.com",
      bookedLabTests: "01",
      phone: "035455421",
      status: "Pending",
    },
    {
      id: "#20462",
      labName: "CITI Lab",
      email: "lab@gmail.com",
      bookedLabTests: "01",
      phone: "035455421",
      status: "In Review",
    },
    {
      id: "#20462",
      labName: "CITI Lab",
      email: "lab@gmail.com",
      bookedLabTests: "01",
      phone: "035455421",
      status: "Declined",
    },
    {
      id: "#20462",
      labName: "CITI Lab",
      email: "lab@gmail.com",
      bookedLabTests: "01",
      phone: "035455421",
      status: "Blocked",
    },
    {
      id: "#20462",
      labName: "CITI Lab",
      email: "lab@gmail.com",
      bookedLabTests: "01",
      phone: "035455421",
      status: "Pending",
    },
    {
      id: "#20462",
      labName: "CITI Lab",
      email: "lab@gmail.com",
      bookedLabTests: "01",
      phone: "035455421",
      status: "Approved",
    },
    {
      id: "#20462",
      labName: "CITI Lab",
      email: "lab@gmail.com",
      bookedLabTests: "01",
      phone: "035455421",
      status: "In Review",
    },
    {
      id: "#20462",
      labName: "CITI Lab",
      email: "lab@gmail.com",
      bookedLabTests: "01",
      phone: "035455421",
      status: "Approved",
    },
    {
      id: "#20462",
      labName: "CITI Lab",
      email: "lab@gmail.com",
      bookedLabTests: "01",
      phone: "035455421",
      status: "Pending",
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
          <h1 className="main-heading">Labs</h1>
          <div>
            <button className="inline-flex items-center gap-[8px] px-[12px] py-[8px] bg-[#624DE3] rounded-[8px] font-[600] text-white cursor-pointer">
              <span>+</span>
              <span>Add New Lab</span>
            </button>
          </div>
        </div>
        <div className="">
          <DashboardDataCard data={labsDataForCard} />
        </div>
        <div className="">
          <ResponsiveTable
            data={labsData}
            mainHeading={"All Labs"}
            searchBar={true}
            headings={[
              "ID #",
              "Lab Name",
              "Email",
              "Phone",
              "Booked Lab Tests",
              "Status",
              "Action",
            ]}
            cells={["id", "labName", "email", "phone", "bookedLabTests"]}
            status={true}
            actions={true}
            actionTypes={[
              {
                action: "view",
                icon: "./images/view-icon.svg",
              },
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
