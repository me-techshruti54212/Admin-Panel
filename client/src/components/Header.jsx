import React from "react";
import img1 from "../assets/logo.png";
const Header = () => {
  return (
    <div className="header_main">
      <div className="wrapper_main">
        <div className="logo_main">
          <a href="#">
            <img src={img1} alt="Logo" />
          </a>
        </div>
        <div className="right_side_main">
          <ul>
            <li style={{ color: "white" }}>Welcome Admin</li>

            <li>
              <a href="">Log Out</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="nav_top_main">
        <ul>
          <li className="active">
            <a href="home.php">Dashboard</a>
          </li>
          <li>
            <a href="settings.php">Users</a>
          </li>
          <li>
            <a href="agentloclist.php">Employee</a>
          </li>
          <li>
            <a href="geoloclist.php">Meeting List</a>
          </li>
          <li>
            <a href="geoloclist.php">Withdraw List</a>
          </li>
          <li>
            <a href="geoloclist.php">Reported post List</a>
          </li>
          <li>
            <a href="geoloclist.php">Change Password</a>
          </li>
          <li>
            <a href="geoloclist.php">Manage Template</a>
          </li>
          <li>
            <a href="geoloclist.php">Manage Testimonials</a>
          </li>
          <li>
            <a href="geoloclist.php">Settings</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
