import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="p-2.5 rounded-md bg-white m-3 shadow-sm text-black w-1/5 sm:text-base text-xs">
          <div className="wrapper_">
            <div className="left_sidebr">
              <ul className="submenu">
                <li>
                  <a href="">Dashboard</a>
                </li>
                <li>
                  <a href="">Users</a>
                </li>
                <li>
                  <a href="">Employee</a>
                </li>
                <li> 
                  <a href="">Meeting List</a>
                </li>
                <li>
                  <a href="">Withdraw List</a>
                </li>
                <li>
                  <a href="">Reported Post List</a>
                </li>
                <li>
                  <a href="">Change Password</a>
                </li>
                <li>
                  <a href="">Manage Templates</a>
                </li>
                <li>
                  <a href="">Manage Testimonials</a>
                </li>
                <li>
                  <a href="">Settings</a>
                </li>
              </ul>
            </div>
          </div>
      </div>
    </>
  );
};

export default Sidebar;
