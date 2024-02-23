import React from "react";
import { BiDonateBlood } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import { toast } from 'react-hot-toast'
import { useSelector } from "react-redux";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  // const userName = user ? user.name : "";
  const navigate = useNavigate();
  // logout handler
  const handleLogout = () => {
    toast.success("Logout Success");
    localStorage.clear();

    navigate("/login");
  };
  return (
    <>
      <nav className="navbar ">
        <div className="container-fluid">
          <div className="navbar-brand h1 align-items-center">
            <BiDonateBlood color="red" />
            Blood Bank App{" "}
          </div>
          <ul className="navbar-nav flex-row">
            <li className="nav-item mx-3">
              <p className="nav-link">
                <FaUser /> &nbsp; Welcome{" "}
                {user?.name || user?.hospitalName || user?.organizationName}{" "}
                &nbsp;
                <span className="badge text-bg-light">{user?.role}</span>
              </p>
            </li>
            <li className="nav-item mx-3">
              <button className="btn btn-danger" onClick={handleLogout}>
                Logout{" "}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
