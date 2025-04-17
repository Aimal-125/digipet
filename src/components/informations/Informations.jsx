import { useState } from "react";
import ResponsiveTable from "../global/tables/ResponsiveTable";

export default function InformationsPage() {
  // eslint-disable-next-line no-unused-vars
  const [currentPage, setCurrentPage] = useState(1);

  // eslint-disable-next-line no-unused-vars
  const [pages, setPages] = useState(3);

  const handleActionBtnClick = (item, actionType) => {
    console.log(item, `${actionType} btn clicked`);
  };

  const inforamtionsData = [
    {
      id: "#20462",
      title: "How do I get started?",
      description: (
        <span className="text-[#624DE3]">Lab, Clinic, Hospital</span>
      ),
      status: "Approved",
    },
    {
      id: "#20462",
      title: "How do I get started?",
      description: (
        <span className="text-[#624DE3]">Lab, Clinic, Hospital</span>
      ),
      status: "Approved",
    },
    {
      id: "#20462",
      title: "How do I get started?",
      description: (
        <span className="text-[#624DE3]">Lab, Clinic, Hospital</span>
      ),
      status: "Approved",
    },
    {
      id: "#20462",
      title: "How do I get started?",
      description: (
        <span className="text-[#624DE3]">Lab, Clinic, Hospital</span>
      ),
      status: "Approved",
    },
    {
      id: "#20462",
      title: "How do I get started?",
      description: (
        <span className="text-[#624DE3]">Lab, Clinic, Hospital</span>
      ),
      status: "Approved",
    },
    {
      id: "#20462",
      title: "How do I get started?",
      description: (
        <span className="text-[#624DE3]">Lab, Clinic, Hospital</span>
      ),
      status: "Approved",
    },
    {
      id: "#20462",
      title: "How do I get started?",
      description: (
        <span className="text-[#624DE3]">Lab, Clinic, Hospital</span>
      ),
      status: "Approved",
    },
    {
      id: "#20462",
      title: "How do I get started?",
      description: (
        <span className="text-[#624DE3]">Lab, Clinic, Hospital</span>
      ),
      status: "Approved",
    },
    {
      id: "#20462",
      title: "How do I get started?",
      description: (
        <span className="text-[#624DE3]">Lab, Clinic, Hospital</span>
      ),
      status: "Approved",
    },
    {
      id: "#20462",
      title: "How do I get started?",
      description: (
        <span className="text-[#624DE3]">Lab, Clinic, Hospital</span>
      ),
      status: "Approved",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex max-[450px]:flex-col gap-3 items-center justify-between">
          <h1 className="main-heading">Informations</h1>
          <div>
            <button className="inline-flex items-center gap-[8px] px-[12px] py-[8px] bg-[#624DE3] rounded-[8px] font-[600] text-white cursor-pointer">
              <span>+</span>
              <span>Add New</span>
            </button>
          </div>
        </div>

        <div className="">
          <ResponsiveTable
            data={inforamtionsData}
            mainHeading={""}
            searchBar={false}
            headings={["ID #", "Title", "Description", "Status", "Action"]}
            cells={["id", "title", "description"]}
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
