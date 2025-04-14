import { useState } from "react";
import ResponsiveTable from "../global/tables/ResponsiveTable";

export default function BookedLabTestsPage() {
  // eslint-disable-next-line no-unused-vars
  const [currentPage, setCurrentPage] = useState(1);

  // eslint-disable-next-line no-unused-vars
  const [pages, setPages] = useState(3);

  const handleActionBtnClick = (item, actionType) => {
    console.log(item, `${actionType} btn clicked`);
  };

  const labTestsData = [
    {
      id: "#20462",
      test: "Blood Count",
      lab: "Microbiology",
      collBy: "13/05/2022",
      fee: `$${(100.95).toFixed(2)}`,
      visit: <span className="text-[#4C63BD]">Clinic</span>,
      status: "Paid",
    },
    {
      id: "#20462",
      test: "Blood Count",
      lab: "Microbiology",
      collBy: "13/05/2022",
      fee: `$${(100.95).toFixed(2)}`,
      visit: <span className="text-[#4C63BD]">Home Sample</span>,
      status: "UnPaid",
    },
    {
      id: "#20462",
      test: "Blood Count",
      lab: "Microbiology",
      collBy: "13/05/2022",
      fee: `$${(100.95).toFixed(2)}`,
      visit: <span className="text-[#4C63BD]">Clinic</span>,
      status: "Paid",
    },
    {
      id: "#20462",
      test: "Blood Count",
      lab: "Microbiology",
      collBy: "13/05/2022",
      fee: `$${(100.95).toFixed(2)}`,
      visit: <span className="text-[#4C63BD]">Clinic</span>,
      status: "Paid",
    },
    {
      id: "#20462",
      test: "Blood Count",
      lab: "Microbiology",
      collBy: "13/05/2022",
      fee: `$${(100.95).toFixed(2)}`,
      visit: <span className="text-[#4C63BD]">Clinic</span>,
      status: "Paid",
    },
    {
      id: "#20462",
      test: "Blood Count",
      lab: "Microbiology",
      collBy: "13/05/2022",
      fee: `$${(100.95).toFixed(2)}`,
      visit: <span className="text-[#4C63BD]">Clinic</span>,
      status: "Paid",
    },
    {
      id: "#20462",
      test: "Blood Count",
      lab: "Microbiology",
      collBy: "13/05/2022",
      fee: `$${(100.95).toFixed(2)}`,
      visit: <span className="text-[#4C63BD]">Clinic</span>,
      status: "Paid",
    },
    {
      id: "#20462",
      test: "Blood Count",
      lab: "Microbiology",
      collBy: "13/05/2022",
      fee: `$${(100.95).toFixed(2)}`,
      visit: <span className="text-[#4C63BD]">Clinic</span>,
      status: "Paid",
    },
    {
      id: "#20462",
      test: "Blood Count",
      lab: "Microbiology",
      collBy: "13/05/2022",
      fee: `$${(100.95).toFixed(2)}`,
      visit: <span className="text-[#4C63BD]">Clinic</span>,
      status: "Paid",
    },
    {
      id: "#20462",
      test: "Blood Count",
      lab: "Microbiology",
      collBy: "13/05/2022",
      fee: `$${(100.95).toFixed(2)}`,
      visit: <span className="text-[#4C63BD]">Clinic</span>,
      status: "Paid",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex max-[450px]:flex-col gap-3 items-center justify-between">
          <h1 className="main-heading">Booked Lab Tests</h1>
          <div>
            <button className="inline-flex items-center gap-[8px] px-[12px] py-[8px] bg-[#624DE3] rounded-[8px] font-[600] text-white cursor-pointer">
              <span>+</span>
              <span>Add New</span>
            </button>
          </div>
        </div>

        <div className="">
          <ResponsiveTable
            data={labTestsData}
            mainHeading={"Booked Lab Tests"}
            searchBar={true}
            headings={[
              "Order #",
              "Test",
              "Lab",
              "Coll. By",
              "Fee",
              "Visit",
              "Status",
              "Action",
            ]}
            cells={["id", "test", "lab", "collBy", "fee", "visit"]}
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
