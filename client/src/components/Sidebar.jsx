import React from 'react'
import { Link } from 'react-router-dom';
import DashIcon from "../assets/icons/Dashboard.svg";
import UserIcon from "../assets/icons/Users.svg";
import MeetingIcon from "../assets/icons/Meeting.svg";
import ChangePasswordIcon from "../assets/icons/ChangePassword.svg";
import ManageTemplateIcon from "../assets/icons/ManageTemplates.svg";
import ManageTestimonialsIcon from "../assets/icons/ManageTestimonials.svg";
import ReportIcon from "../assets/icons/Reported.svg";
import SettingsIcon from "../assets/icons/Settings.svg";
import WithdrawIcon from "../assets/icons/Withdraw.svg";
import EmployeeIcon from "../assets/icons/Employee.svg";
import connectionRequestIcon from "../assets/icons/connectionRequest.svg";

const Sidebar = () => {
   const route=window.location.pathname;

  return (
    <>
    <div className='bg-white w-60 min-h-screen shadow-2xl'>
        <Link to="/dashboard" className={`flex ${route === "/dashboard" ? "bg-[#5247D1] text-white" : "bg-white text-black hover:bg-indigo-100"} gap-2 p-2 w-full items-center `}>
           <img src={DashIcon} alt="" className="w-4"/>
           <span>Dashboard</span> 
        </Link>
        <Link to="/users" className={`flex ${route === "/users"? "bg-[#5247D1] text-white " : "bg-white text-black hover:bg-indigo-100"} gap-2 p-2 w-full items-center `}>
           <img src={UserIcon} alt="" className="w-4"/>
           <span>Users</span> 
        </Link>
        <button className='flex text-black gap-2 p-2 w-full items-center hover:bg-indigo-100'>
           <img src={EmployeeIcon} alt="" className="w-4"/>
           <span>Employee</span> 
        </button>
        <button className='flex text-black gap-2 p-2 w-full items-center hover:bg-indigo-100'>
           <img src={MeetingIcon} alt="" className="w-4"/>
           <span>Meeting List</span> 
        </button>
        <button className='flex text-black gap-2 p-2 w-full items-center hover:bg-indigo-100'>
           <img src={WithdrawIcon} alt="" className="w-4"/>
           <span>Withdraw List</span> 
        </button>
        <Link to="/reported-post" className={`flex ${route === "/reported-post"? "bg-[#5247D1] text-white " : "bg-white text-black hover:bg-indigo-100"} gap-2 p-2 w-full items-center `}>
           <img src={ReportIcon} alt="" className="w-4"/>
           <span>Reported Post List</span> 
        </Link>
        <button className='flex text-black gap-2 p-2 w-full items-center hover:bg-indigo-100'>
           <img src={ChangePasswordIcon} alt="" className="w-4"/>
           <span>Change Password</span> 
        </button>
        <button className='flex text-black gap-2 p-2 w-full items-center hover:bg-indigo-100'>
           <img src={ManageTemplateIcon} alt="" className="w-4"/>
           <span>Manage Templates</span> 
        </button>
        <button className='flex text-black gap-2 p-2 w-full items-center hover:bg-indigo-100'>
           <img src={ManageTestimonialsIcon} alt="" className="w-4"/>
           <span>Manage Testimonials</span> 
        </button>
        <Link to="/connection-requests" className={`flex ${route === "/connection-requests" ? "bg-[#5247D1] text-white" : "bg-white text-black hover:bg-indigo-100"} gap-2 p-2 w-full items-center `}>
           <img src={connectionRequestIcon} alt="" className="w-4"/>
           <span>Connection Requests</span> 
        </Link>
        <button className='flex text-black gap-2 p-2 w-full items-center hover:bg-indigo-100'>
           <img src={SettingsIcon} alt="" className="w-4"/>
           <span>Manage Settings</span> 
        </button>
    </div>
    </>
  )
}

export default Sidebar