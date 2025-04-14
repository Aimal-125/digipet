import { useState } from "react";
import ResponsiveTable from "../global/tables/ResponsiveTable";

export default function LabTestsCategoriesPage() {
  // eslint-disable-next-line no-unused-vars
  const [currentPage, setCurrentPage] = useState(1);

  // eslint-disable-next-line no-unused-vars
  const [pages, setPages] = useState(3);

  const handleActionBtnClick = (item, actionType) => {
    console.log(item, `${actionType} btn clicked`);
  };

  const labTestsCategoriesData = [
    {
      id: "#24602",
      labTest: (
        <span className="inline-flex max-[351px]:flex-col max-[350px]:items-end items-center gap-[18px]">
          <span className="w-[50px] h-[50px] rounded-full">
            <img
              src={"./images/lab-tests-categories/stomach-icon.svg"}
              alt="test type image"
              style={{
                width: "100%",
                height: "100%",
                display: "inline-flex",
                borderRadius: "50%",
              }}
            />
          </span>
          <span>Digestion</span>
        </span>
      ),
    },
    {
      id: "#24602",
      labTest: (
        <span className="inline-flex max-[351px]:flex-col max-[350px]:items-end items-center gap-[18px]">
          <span className="w-[50px] h-[50px] rounded-full">
            <img
              src={"./images/lab-tests-categories/bone-icon.svg"}
              alt="test type image"
              style={{
                width: "100%",
                height: "100%",
                display: "inline-flex",
                borderRadius: "50%",
              }}
            />
          </span>
          <span>Bone</span>
        </span>
      ),
    },
    {
      id: "#24602",
      labTest: (
        <span className="inline-flex max-[351px]:flex-col max-[350px]:items-end items-center gap-[18px]">
          <span className="w-[50px] h-[50px] rounded-full">
            <img
              src={"./images/lab-tests-categories/kidney-icon.svg"}
              alt="test type image"
              style={{
                width: "100%",
                height: "100%",
                display: "inline-flex",
                borderRadius: "50%",
              }}
            />
          </span>
          <span>Kidney</span>
        </span>
      ),
    },
    {
      id: "#24602",
      labTest: (
        <span className="inline-flex max-[351px]:flex-col max-[350px]:items-end items-center gap-[18px]">
          <span className="w-[50px] h-[50px] rounded-full">
            <img
              src={"./images/lab-tests-categories/skin-icon.svg"}
              alt="test type image"
              style={{
                width: "100%",
                height: "100%",
                display: "inline-flex",
                borderRadius: "50%",
              }}
            />
          </span>
          <span>Skin</span>
        </span>
      ),
    },
    {
      id: "#24602",
      labTest: (
        <span className="inline-flex max-[351px]:flex-col max-[350px]:items-end items-center gap-[18px]">
          <span className="w-[50px] h-[50px] rounded-full">
            <img
              src={"./images/lab-tests-categories/gender-icon.svg"}
              alt="test type image"
              style={{
                width: "100%",
                height: "100%",
                display: "inline-flex",
                borderRadius: "50%",
              }}
            />
          </span>
          <span>Sexual Wellness</span>
        </span>
      ),
    },
    {
      id: "#24602",
      labTest: (
        <span className="inline-flex max-[351px]:flex-col max-[350px]:items-end items-center gap-[18px]">
          <span className="w-[50px] h-[50px] rounded-full">
            <img
              src={"./images/lab-tests-categories/cancer-icon.svg"}
              alt="test type image"
              style={{
                width: "100%",
                height: "100%",
                display: "inline-flex",
                borderRadius: "50%",
              }}
            />
          </span>
          <span>Cancer</span>
        </span>
      ),
    },
    {
      id: "#24602",
      labTest: (
        <span className="inline-flex max-[351px]:flex-col max-[350px]:items-end items-center gap-[18px]">
          <span className="w-[50px] h-[50px] rounded-full">
            <img
              src={"./images/lab-tests-categories/blood-icon.svg"}
              alt="test type image"
              style={{
                width: "100%",
                height: "100%",
                display: "inline-flex",
                borderRadius: "50%",
              }}
            />
          </span>
          <span>Blood</span>
        </span>
      ),
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex max-[450px]:flex-col gap-3 items-center justify-between">
          <h1 className="main-heading">Lab Tests Categories</h1>
          <div>
            <button className="inline-flex items-center gap-[8px] px-[12px] py-[8px] bg-[#624DE3] rounded-[8px] font-[600] text-white cursor-pointer">
              <span>+</span>
              <span>Add New</span>
            </button>
          </div>
        </div>

        <div className="">
          <ResponsiveTable
            data={labTestsCategoriesData}
            mainHeading={""}
            searchBar={false}
            headings={["ID #", "Lab Test", "Action"]}
            cells={["id", "labTest"]}
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
