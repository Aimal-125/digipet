import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [date, setDate] = useState("");

  useEffect(() => {
    if (date) {
      console.log(date);
    }
  }, [date]);

  return (
    <>
      <div className="">
        <div className="flex max-[360px]:flex-col items-center justify-between gap-4">
          <h1 className="main-heading">Dashboard</h1>
          <div className="max-[360px]:w-full">
            <input
              className="border border-[#4C63BD] text-[#4C63BD] px-4 py-1 rounded max-[360px]:w-full"
              type="date"
              aria-label="select date"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
