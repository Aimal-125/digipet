import { useState } from "react";
import ResponsiveTable from "../global/tables/ResponsiveTable";

export default function AdminUsersPage() {
  // eslint-disable-next-line no-unused-vars
  const [currentPage, setCurrentPage] = useState(1);

  // eslint-disable-next-line no-unused-vars
  const [pages, setPages] = useState(3);

  const handleActionBtnClick = (item, actionType) => {
    console.log(item, `${actionType} btn clicked`);
  };

  const adminUsersData = [
    {
      id: "#20462",
      username: (
        <span className="inline-flex max-[351px]:flex-col max-[350px]:items-end items-center gap-[18px]">
          <span className="w-[50px] h-[50px] rounded-[6px]">
            <img
              src={"./images/admin/img-1.svg"}
              alt="User image"
              style={{
                width: "100%",
                height: "100%",
                display: "inline-flex",
                borderRadius: "6px",
              }}
            />
          </span>
          <span>Susan Lingo</span>
        </span>
      ),
      email: "JosphHealth@gmail.com",
      role: <span className="text-[#624DE3]">Lab, Clinic, Hospital</span>,
      status: "Approved",
    },
    {
      id: "#20462",
      username: (
        <span className="inline-flex max-[351px]:flex-col max-[350px]:items-end items-center gap-[18px]">
          <span className="w-[50px] h-[50px] rounded-[6px]">
            <img
              src={"./images/admin/img-1.svg"}
              alt="User image"
              style={{
                width: "100%",
                height: "100%",
                display: "inline-flex",
                borderRadius: "6px",
              }}
            />
          </span>
          <span>Susan Lingo</span>
        </span>
      ),
      email: "JosphHealth@gmail.com",
      role: <span className="text-[#624DE3]">Lab, Clinic, Hospital</span>,
      status: "Pending",
    },
    {
      id: "#20462",
      username: (
        <span className="inline-flex max-[351px]:flex-col max-[350px]:items-end items-center gap-[18px]">
          <span className="w-[50px] h-[50px] rounded-[6px]">
            <img
              src={"./images/admin/img-1.svg"}
              alt="User image"
              style={{
                width: "100%",
                height: "100%",
                display: "inline-flex",
                borderRadius: "6px",
              }}
            />
          </span>
          <span>Susan Lingo</span>
        </span>
      ),
      email: "JosphHealth@gmail.com",
      role: <span className="text-[#624DE3]">Lab, Clinic, Hospital</span>,
      status: "Declined",
    },
    {
      id: "#20462",
      username: (
        <span className="inline-flex max-[351px]:flex-col max-[350px]:items-end items-center gap-[18px]">
          <span className="w-[50px] h-[50px] rounded-[6px]">
            <img
              src={"./images/admin/img-1.svg"}
              alt="User image"
              style={{
                width: "100%",
                height: "100%",
                display: "inline-flex",
                borderRadius: "6px",
              }}
            />
          </span>
          <span>Susan Lingo</span>
        </span>
      ),
      email: "JosphHealth@gmail.com",
      role: <span className="text-[#624DE3]">Lab, Clinic, Hospital</span>,
      status: "Blocked",
    },
    {
      id: "#20462",
      username: (
        <span className="inline-flex max-[351px]:flex-col max-[350px]:items-end items-center gap-[18px]">
          <span className="w-[50px] h-[50px] rounded-[6px]">
            <img
              src={"./images/admin/img-1.svg"}
              alt="User image"
              style={{
                width: "100%",
                height: "100%",
                display: "inline-flex",
                borderRadius: "6px",
              }}
            />
          </span>
          <span>Susan Lingo</span>
        </span>
      ),
      email: "JosphHealth@gmail.com",
      role: <span className="text-[#624DE3]">Lab, Clinic, Hospital</span>,
      status: "Blocked",
    },
    {
      id: "#20462",
      username: (
        <span className="inline-flex max-[351px]:flex-col max-[350px]:items-end items-center gap-[18px]">
          <span className="w-[50px] h-[50px] rounded-[6px]">
            <img
              src={"./images/admin/img-1.svg"}
              alt="User image"
              style={{
                width: "100%",
                height: "100%",
                display: "inline-flex",
                borderRadius: "6px",
              }}
            />
          </span>
          <span>Susan Lingo</span>
        </span>
      ),
      email: "JosphHealth@gmail.com",
      role: <span className="text-[#624DE3]">Lab, Clinic, Hospital</span>,
      status: "Blocked",
    },
    {
      id: "#20462",
      username: (
        <span className="inline-flex max-[351px]:flex-col max-[350px]:items-end items-center gap-[18px]">
          <span className="w-[50px] h-[50px] rounded-[6px]">
            <img
              src={"./images/admin/img-1.svg"}
              alt="User image"
              style={{
                width: "100%",
                height: "100%",
                display: "inline-flex",
                borderRadius: "6px",
              }}
            />
          </span>
          <span>Susan Lingo</span>
        </span>
      ),
      email: "JosphHealth@gmail.com",
      role: <span className="text-[#624DE3]">Lab, Clinic, Hospital</span>,
      status: "Blocked",
    },
    {
      id: "#20462",
      username: (
        <span className="inline-flex max-[351px]:flex-col max-[350px]:items-end items-center gap-[18px]">
          <span className="w-[50px] h-[50px] rounded-[6px]">
            <img
              src={"./images/admin/img-1.svg"}
              alt="User image"
              style={{
                width: "100%",
                height: "100%",
                display: "inline-flex",
                borderRadius: "6px",
              }}
            />
          </span>
          <span>Susan Lingo</span>
        </span>
      ),
      email: "JosphHealth@gmail.com",
      role: <span className="text-[#624DE3]">Lab, Clinic, Hospital</span>,
      status: "Blocked",
    },
    {
      id: "#20462",
      username: (
        <span className="inline-flex max-[351px]:flex-col max-[350px]:items-end items-center gap-[18px]">
          <span className="w-[50px] h-[50px] rounded-[6px]">
            <img
              src={"./images/admin/img-1.svg"}
              alt="User image"
              style={{
                width: "100%",
                height: "100%",
                display: "inline-flex",
                borderRadius: "6px",
              }}
            />
          </span>
          <span>Susan Lingo</span>
        </span>
      ),
      email: "JosphHealth@gmail.com",
      role: <span className="text-[#624DE3]">Lab, Clinic, Hospital</span>,
      status: "Blocked",
    },
    {
      id: "#20462",
      username: (
        <span className="inline-flex max-[351px]:flex-col max-[350px]:items-end items-center gap-[18px]">
          <span className="w-[50px] h-[50px] rounded-[6px]">
            <img
              src={"./images/admin/img-1.svg"}
              alt="User image"
              style={{
                width: "100%",
                height: "100%",
                display: "inline-flex",
                borderRadius: "6px",
              }}
            />
          </span>
          <span>Susan Lingo</span>
        </span>
      ),
      email: "JosphHealth@gmail.com",
      role: <span className="text-[#624DE3]">Lab, Clinic, Hospital</span>,
      status: "Blocked",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex max-[450px]:flex-col gap-3 items-center justify-between">
          <h1 className="main-heading">Admin Users</h1>
          <div>
            <button className="inline-flex items-center gap-[8px] px-[12px] py-[8px] bg-[#624DE3] rounded-[8px] font-[600] text-white cursor-pointer">
              <span>+</span>
              <span>Add New</span>
            </button>
          </div>
        </div>

        <div className="">
          <ResponsiveTable
            data={adminUsersData}
            mainHeading={"Admin Users"}
            searchBar={true}
            headings={["ID #", "Username", "Email", "Role", "Status", "Action"]}
            cells={["id", "username", "email", "role"]}
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
