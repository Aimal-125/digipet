import { useState } from "react";
import ResponsiveTable from "../global/tables/ResponsiveTable";

export default function AllHospitalsPage() {
  // eslint-disable-next-line no-unused-vars
  const [currentPage, setCurrentPage] = useState(1);

  // eslint-disable-next-line no-unused-vars
  const [pages, setPages] = useState(3);

  const handleActionBtnClick = (item, actionType) => {
    console.log(item, `${actionType} btn clicked`);
  };

  const hospitalsData = [
    {
      id: "#20462",
      hospitalName: (
        <span className="inline-flex max-[351px]:flex-col max-[350px]:items-end items-center gap-[18px]">
          <span className="w-[50px] h-[50px] rounded-[6px]">
            <img
              src={"./images/all-hospitals/hospital-1.svg"}
              alt="hospital image"
              style={{
                width: "100%",
                height: "100%",
                display: "inline-flex",
                borderRadius: "6px",
              }}
            />
          </span>
          <span>UK HealthCare</span>
        </span>
      ),
      location: "1000 S Limestone, Lexington, KY 40536, United States",
      status: "Approved",
    },
    {
      id: "#20462",
      hospitalName: (
        <span className="inline-flex max-[351px]:flex-col max-[350px]:items-end items-center gap-[18px]">
          <span className="w-[50px] h-[50px] rounded-[6px]">
            <img
              src={"./images/all-hospitals/hospital-2.svg"}
              alt="hospital image"
              style={{
                width: "100%",
                height: "100%",
                display: "inline-flex",
                borderRadius: "6px",
              }}
            />
          </span>
          <span>VA HealthCare</span>
        </span>
      ),
      location: "1101 Veterans Dr, Lexington, KY 40502, United States",
      status: "Pending",
    },
    {
      id: "#20462",
      hospitalName: (
        <span className="inline-flex max-[351px]:flex-col max-[350px]:items-end items-center gap-[18px]">
          <span className="w-[50px] h-[50px] rounded-[6px]">
            <img
              src={"./images/all-hospitals/hospital-3.svg"}
              alt="hospital image"
              style={{
                width: "100%",
                height: "100%",
                display: "inline-flex",
                borderRadius: "6px",
              }}
            />
          </span>
          <span>Chandler Hospital</span>
        </span>
      ),
      location: "800 Rose St, Lexington, KY 40536, United States",
      status: "Declined",
    },
    {
      id: "#20462",
      hospitalName: (
        <span className="inline-flex max-[351px]:flex-col max-[350px]:items-end items-center gap-[18px]">
          <span className="w-[50px] h-[50px] rounded-[6px]">
            <img
              src={"./images/all-hospitals/hospital-1.svg"}
              alt="hospital image"
              style={{
                width: "100%",
                height: "100%",
                display: "inline-flex",
                borderRadius: "6px",
              }}
            />
          </span>
          <span>UK HealthCare</span>
        </span>
      ),
      location: "1000 S Limestone, Lexington, KY 40536, United States",
      status: "Approved",
    },
    {
      id: "#20462",
      hospitalName: (
        <span className="inline-flex max-[351px]:flex-col max-[350px]:items-end items-center gap-[18px]">
          <span className="w-[50px] h-[50px] rounded-[6px]">
            <img
              src={"./images/all-hospitals/hospital-1.svg"}
              alt="hospital image"
              style={{
                width: "100%",
                height: "100%",
                display: "inline-flex",
                borderRadius: "6px",
              }}
            />
          </span>
          <span>UK HealthCare</span>
        </span>
      ),
      location: "1000 S Limestone, Lexington, KY 40536, United States",
      status: "Approved",
    },
    {
      id: "#20462",
      hospitalName: (
        <span className="inline-flex max-[351px]:flex-col max-[350px]:items-end items-center gap-[18px]">
          <span className="w-[50px] h-[50px] rounded-[6px]">
            <img
              src={"./images/all-hospitals/hospital-1.svg"}
              alt="hospital image"
              style={{
                width: "100%",
                height: "100%",
                display: "inline-flex",
                borderRadius: "6px",
              }}
            />
          </span>
          <span>UK HealthCare</span>
        </span>
      ),
      location: "1000 S Limestone, Lexington, KY 40536, United States",
      status: "Approved",
    },
    {
      id: "#20462",
      hospitalName: (
        <span className="inline-flex max-[351px]:flex-col max-[350px]:items-end items-center gap-[18px]">
          <span className="w-[50px] h-[50px] rounded-[6px]">
            <img
              src={"./images/all-hospitals/hospital-1.svg"}
              alt="hospital image"
              style={{
                width: "100%",
                height: "100%",
                display: "inline-flex",
                borderRadius: "6px",
              }}
            />
          </span>
          <span>UK HealthCare</span>
        </span>
      ),
      location: "1000 S Limestone, Lexington, KY 40536, United States",
      status: "Approved",
    },
    {
      id: "#20462",
      hospitalName: (
        <span className="inline-flex max-[351px]:flex-col max-[350px]:items-end items-center gap-[18px]">
          <span className="w-[50px] h-[50px] rounded-[6px]">
            <img
              src={"./images/all-hospitals/hospital-1.svg"}
              alt="hospital image"
              style={{
                width: "100%",
                height: "100%",
                display: "inline-flex",
                borderRadius: "6px",
              }}
            />
          </span>
          <span>UK HealthCare</span>
        </span>
      ),
      location: "1000 S Limestone, Lexington, KY 40536, United States",
      status: "Approved",
    },
    {
      id: "#20462",
      hospitalName: (
        <span className="inline-flex max-[351px]:flex-col max-[350px]:items-end items-center gap-[18px]">
          <span className="w-[50px] h-[50px] rounded-[6px]">
            <img
              src={"./images/all-hospitals/hospital-1.svg"}
              alt="hospital image"
              style={{
                width: "100%",
                height: "100%",
                display: "inline-flex",
                borderRadius: "6px",
              }}
            />
          </span>
          <span>UK HealthCare</span>
        </span>
      ),
      location: "1000 S Limestone, Lexington, KY 40536, United States",
      status: "Approved",
    },
    {
      id: "#20462",
      hospitalName: (
        <span className="inline-flex max-[351px]:flex-col max-[350px]:items-end items-center gap-[18px]">
          <span className="w-[50px] h-[50px] rounded-[6px]">
            <img
              src={"./images/all-hospitals/hospital-1.svg"}
              alt="hospital image"
              style={{
                width: "100%",
                height: "100%",
                display: "inline-flex",
                borderRadius: "6px",
              }}
            />
          </span>
          <span>UK HealthCare</span>
        </span>
      ),
      location: "1000 S Limestone, Lexington, KY 40536, United States",
      status: "Approved",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex max-[450px]:flex-col gap-3 items-center justify-between">
          <h1 className="main-heading">All Hospitals</h1>
          <div>
            <button className="inline-flex items-center gap-[8px] px-[12px] py-[8px] bg-[#624DE3] rounded-[8px] font-[600] text-white cursor-pointer">
              <span>+</span>
              <span>Add New</span>
            </button>
          </div>
        </div>

        <div className="">
          <ResponsiveTable
            data={hospitalsData}
            mainHeading={"All Hospitals"}
            searchBar={true}
            headings={["ID #", "Hospital Name", "Location", "Status", "Action"]}
            cells={["id", "hospitalName", "location"]}
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
