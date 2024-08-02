import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import TemplateRow from "../../components/ManageTemplates/TemplateRow";

const ManageTemplates = () => {
  const templates=[
    {name:"Sign Up", createdAt: "27-03-2024", updatedAt: "10-04-2023"},
    {name:"Change Password", createdAt: "27-03-2024", updatedAt: "10-04-2023"},
    {name:"Create Admin", createdAt: "27-03-2024", updatedAt: "10-04-2023"},
    {name:"Forgot Password", createdAt: "27-03-2024", updatedAt: "10-04-2023"},
    {name:"Verification Link", createdAt: "27-03-2024", updatedAt: "10-04-2023"},
    {name:"User Sign Up", createdAt: "27-03-2024", updatedAt: "10-04-2023"},
    {name:"User Forgot Password", createdAt: "27-03-2024", updatedAt: "10-04-2023"},
    {name:"User Verification Link", createdAt: "27-03-2024", updatedAt: "10-04-2023"},
    {name:"Create Employee", createdAt: "27-03-2024", updatedAt: "10-04-2023"},
  ]
  return (
    <>
      <Header />
      <div className="flex justify-between px-12">
        <Sidebar />
        <div className="w-full">
          <div className="p-2.5 rounded-md bg-white m-3 shadow-sm text-black sm:text-base text-xs self-stretch border">
            <h1 className="bg-[#214139] text-white text-left py-1.5 pl-5 text-base">
              EMAIL TEMPLATES
            </h1>
            <div className="m-3 flex flex-col border">
              <div className="bg-[#ddd] rounded-tr-md rounded-tl-md font-normal border border-slate-300 flex  justify-evenly">
                <span className="border-x-white border-x-2 w-2/5 p-3">
                  Template Name
                </span>
                <span className="border-x-white border-x-2 w-1/4 p-3">
                  Created At
                </span>
                <span className="border-x-white border-x-2 w-1/4 p-3">
                  Updated At
                </span>
                <span className="border-x-white border-x-2 w-[10%] p-3">
                  Action
                </span>
              </div>
              {templates.map(({name, createdAt, updatedAt})=><TemplateRow templateName={name} createdAt={createdAt} updatedAt={updatedAt}/>)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageTemplates;
