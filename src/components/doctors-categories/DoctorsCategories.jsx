import { useState } from "react";
import ResponsiveTable from "../global/tables/ResponsiveTable";

export default function DoctorsCategoriesPage() {
  // eslint-disable-next-line no-unused-vars
  const [currentPage, setCurrentPage] = useState(1);

  // eslint-disable-next-line no-unused-vars
  const [pages, setPages] = useState(3);

  const handleActionBtnClick = (item, actionType) => {
    console.log(item, `${actionType} btn clicked`);
  };

  const doctorsCategoriesData = [
    {
      id: "#20462",
      doctors: (
        <span className="inline-flex max-[351px]:flex-col max-[350px]:items-end items-center gap-[18px]">
          <span className="w-[50px] h-[50px] rounded-[6px]">
            <img
              src={"./images/doctors-categories/doctor-1.svg"}
              alt="doctor image"
              style={{
                width: "100%",
                height: "100%",
                display: "inline-flex",
                borderRadius: "6px",
              }}
            />
          </span>
          <span>Dr. Charles Scott</span>
        </span>
      ),
    },
    {
      id: "#20462",
      doctors: (
        <span className="inline-flex max-[351px]:flex-col max-[350px]:items-end items-center gap-[18px]">
          <span className="w-[50px] h-[50px] rounded-[6px]">
            <img
              src={"./images/doctors-categories/doctor-1.svg"}
              alt="doctor image"
              style={{
                width: "100%",
                height: "100%",
                display: "inline-flex",
                borderRadius: "6px",
              }}
            />
          </span>
          <span>Dr. Charles Scott</span>
        </span>
      ),
    },
    {
      id: "#20462",
      doctors: (
        <span className="inline-flex max-[351px]:flex-col max-[350px]:items-end items-center gap-[18px]">
          <span className="w-[50px] h-[50px] rounded-[6px]">
            <img
              src={"./images/doctors-categories/doctor-1.svg"}
              alt="doctor image"
              style={{
                width: "100%",
                height: "100%",
                display: "inline-flex",
                borderRadius: "6px",
              }}
            />
          </span>
          <span>Dr. Charles Scott</span>
        </span>
      ),
    },
    {
      id: "#20462",
      doctors: (
        <span className="inline-flex max-[351px]:flex-col max-[350px]:items-end items-center gap-[18px]">
          <span className="w-[50px] h-[50px] rounded-[6px]">
            <img
              src={"./images/doctors-categories/doctor-1.svg"}
              alt="doctor image"
              style={{
                width: "100%",
                height: "100%",
                display: "inline-flex",
                borderRadius: "6px",
              }}
            />
          </span>
          <span>Dr. Charles Scott</span>
        </span>
      ),
    },
    {
      id: "#20462",
      doctors: (
        <span className="inline-flex max-[351px]:flex-col max-[350px]:items-end items-center gap-[18px]">
          <span className="w-[50px] h-[50px] rounded-[6px]">
            <img
              src={"./images/doctors-categories/doctor-1.svg"}
              alt="doctor image"
              style={{
                width: "100%",
                height: "100%",
                display: "inline-flex",
                borderRadius: "6px",
              }}
            />
          </span>
          <span>Dr. Charles Scott</span>
        </span>
      ),
    },
    {
      id: "#20462",
      doctors: (
        <span className="inline-flex max-[351px]:flex-col max-[350px]:items-end items-center gap-[18px]">
          <span className="w-[50px] h-[50px] rounded-[6px]">
            <img
              src={"./images/doctors-categories/doctor-1.svg"}
              alt="doctor image"
              style={{
                width: "100%",
                height: "100%",
                display: "inline-flex",
                borderRadius: "6px",
              }}
            />
          </span>
          <span>Dr. Charles Scott</span>
        </span>
      ),
    },
    {
      id: "#20462",
      doctors: (
        <span className="inline-flex max-[351px]:flex-col max-[350px]:items-end items-center gap-[18px]">
          <span className="w-[50px] h-[50px] rounded-[6px]">
            <img
              src={"./images/doctors-categories/doctor-1.svg"}
              alt="doctor image"
              style={{
                width: "100%",
                height: "100%",
                display: "inline-flex",
                borderRadius: "6px",
              }}
            />
          </span>
          <span>Dr. Charles Scott</span>
        </span>
      ),
    },
    {
      id: "#20462",
      doctors: (
        <span className="inline-flex max-[351px]:flex-col max-[350px]:items-end items-center gap-[18px]">
          <span className="w-[50px] h-[50px] rounded-[6px]">
            <img
              src={"./images/doctors-categories/doctor-1.svg"}
              alt="doctor image"
              style={{
                width: "100%",
                height: "100%",
                display: "inline-flex",
                borderRadius: "6px",
              }}
            />
          </span>
          <span>Dr. Charles Scott</span>
        </span>
      ),
    },
    {
      id: "#20462",
      doctors: (
        <span className="inline-flex max-[351px]:flex-col max-[350px]:items-end items-center gap-[18px]">
          <span className="w-[50px] h-[50px] rounded-[6px]">
            <img
              src={"./images/doctors-categories/doctor-1.svg"}
              alt="doctor image"
              style={{
                width: "100%",
                height: "100%",
                display: "inline-flex",
                borderRadius: "6px",
              }}
            />
          </span>
          <span>Dr. Charles Scott</span>
        </span>
      ),
    },
    {
      id: "#20462",
      doctors: (
        <span className="inline-flex max-[351px]:flex-col max-[350px]:items-end items-center gap-[18px]">
          <span className="w-[50px] h-[50px] rounded-[6px]">
            <img
              src={"./images/doctors-categories/doctor-1.svg"}
              alt="doctor image"
              style={{
                width: "100%",
                height: "100%",
                display: "inline-flex",
                borderRadius: "6px",
              }}
            />
          </span>
          <span>Dr. Charles Scott</span>
        </span>
      ),
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex max-[450px]:flex-col gap-3 items-center justify-between">
          <h1 className="main-heading">Doctors Categories</h1>
          <div>
            <button className="inline-flex items-center gap-[8px] px-[12px] py-[8px] bg-[#624DE3] rounded-[8px] font-[600] text-white cursor-pointer">
              <span>+</span>
              <span>Add New</span>
            </button>
          </div>
        </div>

        <div className="">
          <ResponsiveTable
            data={doctorsCategoriesData}
            mainHeading={""}
            searchBar={false}
            headings={["ID #", "Doctors", "Action"]}
            cells={["id", "doctors"]}
            status={false}
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
