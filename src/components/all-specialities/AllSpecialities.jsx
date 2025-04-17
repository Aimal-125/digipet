import { useState } from "react";
import ResponsiveTable from "../global/tables/ResponsiveTable";

export default function AllSpecialitiesPage() {
  // eslint-disable-next-line no-unused-vars
  const [currentPage, setCurrentPage] = useState(1);

  // eslint-disable-next-line no-unused-vars
  const [pages, setPages] = useState(3);

  const handleActionBtnClick = (item, actionType) => {
    console.log(item, `${actionType} btn clicked`);
  };

  const specialitiesData = [
    {
      id: "#24602",
      specialities: (
        <span className="inline-flex max-[351px]:flex-col max-[350px]:items-end items-center gap-[18px]">
          <span className="w-[50px] h-[50px] rounded-full">
            <img
              src={"./images/all-specialities/urology-icon.svg"}
              alt="speciality image"
              style={{
                width: "100%",
                height: "100%",
                display: "inline-flex",
                borderRadius: "50%",
              }}
            />
          </span>
          <span>Urology</span>
        </span>
      ),
    },
    {
      id: "#24602",
      specialities: (
        <span className="inline-flex max-[351px]:flex-col max-[350px]:items-end items-center gap-[18px]">
          <span className="w-[50px] h-[50px] rounded-full">
            <img
              src={"./images/all-specialities/neurology-icon.svg"}
              alt="speciality image"
              style={{
                width: "100%",
                height: "100%",
                display: "inline-flex",
                borderRadius: "50%",
              }}
            />
          </span>
          <span>Neurology</span>
        </span>
      ),
    },
    {
      id: "#24602",
      specialities: (
        <span className="inline-flex max-[351px]:flex-col max-[350px]:items-end items-center gap-[18px]">
          <span className="w-[50px] h-[50px] rounded-full">
            <img
              src={"./images/all-specialities/orthopedic-icon.svg"}
              alt="speciality image"
              style={{
                width: "100%",
                height: "100%",
                display: "inline-flex",
                borderRadius: "50%",
              }}
            />
          </span>
          <span>Orthopedic</span>
        </span>
      ),
    },
    {
      id: "#24602",
      specialities: (
        <span className="inline-flex max-[351px]:flex-col max-[350px]:items-end items-center gap-[18px]">
          <span className="w-[50px] h-[50px] rounded-full">
            <img
              src={"./images/all-specialities/cardiologist-icon.svg"}
              alt="speciality image"
              style={{
                width: "100%",
                height: "100%",
                display: "inline-flex",
                borderRadius: "50%",
              }}
            />
          </span>
          <span>Cardiologist</span>
        </span>
      ),
    },
    {
      id: "#24602",
      specialities: (
        <span className="inline-flex max-[351px]:flex-col max-[350px]:items-end items-center gap-[18px]">
          <span className="w-[50px] h-[50px] rounded-full">
            <img
              src={"./images/all-specialities/dentist-icon.svg"}
              alt="speciality image"
              style={{
                width: "100%",
                height: "100%",
                display: "inline-flex",
                borderRadius: "50%",
              }}
            />
          </span>
          <span>Dentist</span>
        </span>
      ),
    },
    {
      id: "#24602",
      specialities: (
        <span className="inline-flex max-[351px]:flex-col max-[350px]:items-end items-center gap-[18px]">
          <span className="w-[50px] h-[50px] rounded-full">
            <img
              src={"./images/all-specialities/neurology-icon.svg"}
              alt="speciality image"
              style={{
                width: "100%",
                height: "100%",
                display: "inline-flex",
                borderRadius: "50%",
              }}
            />
          </span>
          <span>Neurology</span>
        </span>
      ),
    },
    {
      id: "#24602",
      specialities: (
        <span className="inline-flex max-[351px]:flex-col max-[350px]:items-end items-center gap-[18px]">
          <span className="w-[50px] h-[50px] rounded-full">
            <img
              src={"./images/all-specialities/orthopedic-icon.svg"}
              alt="speciality image"
              style={{
                width: "100%",
                height: "100%",
                display: "inline-flex",
                borderRadius: "50%",
              }}
            />
          </span>
          <span>Orthopedic</span>
        </span>
      ),
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex max-[450px]:flex-col gap-3 items-center justify-between">
          <h1 className="main-heading">All Specialities</h1>
          <div>
            <button className="inline-flex items-center gap-[8px] px-[12px] py-[8px] bg-[#624DE3] rounded-[8px] font-[600] text-white cursor-pointer">
              <span>+</span>
              <span>Add New</span>
            </button>
          </div>
        </div>

        <div className="">
          <ResponsiveTable
            data={specialitiesData}
            mainHeading={""}
            searchBar={false}
            headings={["ID #", "Specialities", "Action"]}
            cells={["id", "specialities"]}
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
