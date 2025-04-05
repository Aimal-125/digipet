import { useNavigate } from "react-router";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem("loggedIn", JSON.stringify(false));

    navigate("/login");
  };

  return (
    <>
      <div className="navbar">
        <div className="ml-auto">
          <button className="bg-amber-50 border" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
}
