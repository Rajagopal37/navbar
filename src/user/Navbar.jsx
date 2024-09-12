import { Navigate, useNavigate } from "react-router-dom";
import UserProfile from "./UserProfile";

const Navbar = () => {
  const navigate = useNavigate;

  const onLogout = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center py-2 px-6">
        <h2 className="text-primary px-5 pt-2 ">Task Manager</h2>
        <UserProfile onLogout={onLogout} />
      </div>
    </>
  );
};

export default Navbar;
