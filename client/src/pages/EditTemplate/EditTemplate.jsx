import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Editor from "../../components/EditTemplate/Editor";

const EditTemplate = () => {
  return (
    <>
      <Header />
      <div className="flex justify-between px-12">
        <Sidebar />
        <div className="w-full">
          <div className="p-2.5 rounded-md bg-white m-3 shadow-sm text-black sm:text-base text-xs self-stretch border">
            <h1 className="bg-[#214139] text-white text-left py-1.5 pl-5 text-base">
              EDIT EMAIL TEMPLATE
            </h1>
            <div className="m-3 flex flex-col border p-2">
                <div className="flex gap-3">
                <label className="text-xl">Subject :</label>
                <input type="text" className="border border-black rounded-xl w-[80%] text-base p-2"/>
                </div>
                <div className="text-xl my-5">Body : </div>
              <Editor/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTemplate;
