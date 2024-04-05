import React from "react";
// import { userMenu } from "./Menus/userMenu";
import { useLocation, Link } from "react-router-dom";
import { useSelector } from 'react-redux'
import "../../../styles/Layout.css";

const Sidebar = () => {
  const location = useLocation();
  // const isActive = location.pathname

  //GET USER STATE
  const { user } = useSelector(state => state.auth)

  return (
    <div>
      <div className="sidebar">
        <div className="menu">

          {user?.role === 'organization' && (
            <>
              <div className={`menu-item ${location.pathname === '/' && "active"}`}
              >
                <i className="fa-solid fa-warehouse"></i>
                <Link to='/'>Inventory</Link>
              </div>
              <div className={`menu-item ${location.pathname === '/donar' && "active"}`}
              >
                <i className='fa-solid fa-hand-holding-droplet'></i>
                <Link to='/donar'>Donar</Link>
              </div>
              <div className={`menu-item ${location.pathname === '/hospital' && "active"}`}
              >
                <i className="fa-solid fa-hospital"></i>
                <Link to='/hospital'>Hospital</Link>
              </div>
              {/* <div className={`menu-item ${location.pathname === '/donationCamp' && "active"}`}
              >
                <i class="fa-solid fa-tent"></i>
                <Link to='/donationCamp'>Donation Camp</Link>

              </div> */}
            </>
          )}

          {user?.role === "admin" && (
            <>
              <div
                className={`menu-item ${location.pathname === "/donar-list" && "active"
                  }`}
              >
                <i className="fa-solid fa-warehouse"></i>
                <Link to="/donar-list">Donar List</Link>
              </div>
              <div
                className={`menu-item ${location.pathname === "/hospital-list" && "active"
                  }`}
              >
                <i className="fa-solid fa-hand-holding-medical"></i>
                <Link to="/hospital-list">Hospital List</Link>
              </div>
              <div
                className={`menu-item ${location.pathname === "/org-list" && "active"
                  }`}
              >
                <i className="fa-solid fa-hospital"></i>
                <Link to="/org-list">Organisation List</Link>
              </div>
            </>
          )}

          {(user?.role === 'donar' || user?.role === 'hostipal') && (
            <>
              <div className={`menu-item ${location.pathname === '/organization ' && "active"}`}
              >
                <i className="fa-solid fa-building-ngo"></i>
                <Link to='/organization'>Organization</Link>
              </div>

            </>
          )}
          {user?.role === 'hostipal' && (
            <>
              <div className={`menu-item ${location.pathname === '/consumer ' && "active"}`}
              >
                <i className="fa-solid fa-building-ngo"></i>
                <Link to='/consumer'>Consumer</Link>
              </div>

            </>
          )}

          {user?.role === 'donar' && (
            <>
              <div className={`menu-item ${location.pathname === '/donation ' && "active"}`}>
                <i className="fa-solid fa-building-ngo"></i>
                <Link to='/donation'>Donation</Link>
                {/* <Link to='/slot'>Book Appointment</Link> */}
              </div>



            </>
          )}


          {/* {userMenu.map((menu) => {
            const isActive = location.pathname === menu.path;
            return (
              <div className={`menu-item ${isActive && "active"}`}
                key={menu.name}
              >
                <i className={menu.icon}></i>
                <Link to={menu.path}>{menu.name}</Link>
              </div>
            );
          })} */}
        </div >
      </div >
    </div >
  );
};

export default Sidebar;
