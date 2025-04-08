import { useNavigate } from "react-router";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem("loggedIn", JSON.stringify(false));

    navigate(0);
    navigate("/login");
  };

  return (
    <>
      <div className="navbar">
        <div className="border w-[20%] pl-[16px]">
          <p>
            <span>Digi</span>
            <span>Pet</span>
          </p>
        </div>
        <div className="w-[80%] border">
          <div className="w-full">
            <p>Search</p>
          </div>
          <div className="w-full">
            <button className="bg-amber-50 border" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
