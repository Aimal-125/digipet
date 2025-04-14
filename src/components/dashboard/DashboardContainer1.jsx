import "./dashboardStyles.css";

import { compactNumberFormat } from "../../utils/formatValueInCompactType";

const labelColorMap = {
  "Total Patients": "bg-[#FFF3D6]",
  "Today Appointments": "bg-[#FFF3D6]",
  "All Doctors": "bg-[#FFF3D6]",
  "Today Tests": "bg-[#FFF3D6]",
  "Registered Doctors": "bg-[#E5E4FF]",
  "In Wait of Verification": "bg-[#E5E4FF]",
  "Registered Labs": "bg-[#E5E4FF]",
  Appointments: "bg-[#D9F7E8]",
  Completed: "bg-[#D9F7E8]",
  "Verified Doctors": "bg-[#D9F7E8]",
  "Admin Profit": "bg-[#FFDED1]",
  "Cancelled/Declined": "bg-[#FFDED1]",
  "Doctors Blocked": "bg-[#FFDED1]",
};

const DashboardDataCard = ({ data }) => {
  return (
    <div className="dashboard-data-1-container">
      {data?.map((item, index) => {
        return (
          <div
            key={index}
            className="bg-white rounded-[15px] flex flex-col gap-5 p-[16px] dashboard-data-1-shadow"
          >
            <div className="flex gap-5 justify-between">
              <div className="flex flex-col gap-3">
                <div>
                  <p className="text-[#535658] text-[17px] max-[320px]:text-[12px] font-[600]">
                    {item?.label}
                  </p>
                </div>
                <div>
                  <p className="text-[#202224] text-[29px] max-[320px]:text-[14px] font-[700]">
                    <span>{item?.currency ? item?.currency : ""}</span>
                    <span>{compactNumberFormat(item?.totalValue)}</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div
                  className={`${
                    labelColorMap[item?.label] || ""
                  } w-[62px] h-[62px] max-[320px]:w-[30px] max-[320px]:h-[30px] flex items-center justify-center rounded-3xl`}
                  key={index}
                >
                  <img
                    className="max-[320px]:w-[16px] max-[320px]:h-[16px]"
                    src={item?.icon}
                    alt={`${item?.label} icon`}
                  />
                </div>
              </div>
            </div>
            <div className="flex">
              <p className="flex items-center gap-1 text-[17px] font-[600] max-[320px]:text-[12px] text-[#535658]">
                <span>
                  <img
                    src={`${
                      item?.status === "Up"
                        ? "./images/dashboard/up.svg"
                        : "./images/dashboard/down.svg"
                    } `}
                    alt="icon"
                  />
                </span>
                <span
                  className={`${
                    item?.status === "Up" ? "text-[#00B69B]" : "text-[#F93C65]"
                  }`}
                >
                  {item?.value?.toFixed(1)} %
                </span>
                <span>{item?.status} from</span>
                <span>{item?.duration}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardDataCard;
