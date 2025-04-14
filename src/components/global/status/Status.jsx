export default function Status({ status }) {
  return (
    <>
      <span
        className={`${
          status === "Paid" ||
          status === "paid" ||
          status === "approved" ||
          status === "Approved"
            ? "bg-[#e6ffe6]"
            : status === "UnPaid" ||
              status === "unpaid" ||
              status === "unPaid" ||
              status === "pending" ||
              status === "Pending"
            ? "bg-[#ffe6e6]"
            : status === "In Review" || status === "inReview"
            ? "bg-[#E5E4FF]"
            : status === "Declined" || status === "declined"
            ? "bg-[#FFBC92]"
            : status === "Blocked" || status === "blocked"
            ? "bg-[#313D4F]"
            : ""
        } px-[18px] py-[8px] rounded-[22px] text-[12px] font-[500]`}
      >
        <span
          className={`${
            status === "Paid" ||
            status === "paid" ||
            status === "approved" ||
            status === "Approved"
              ? "text-[#38761d]"
              : status === "UnPaid" ||
                status === "unpaid" ||
                status === "unPaid" ||
                status === "pending" ||
                status === "Pending"
              ? "text-[#cc0000]"
              : status === "In Review" || status === "inReview"
              ? "text-[#3D42DF]"
              : status === "Declined" || status === "declined"
              ? "text-[#FF4617]"
              : status === "Blocked" || status === "blocked"
              ? "text-white"
              : ""
          }`}
        >
          {status}
        </span>
      </span>
    </>
  );
}
