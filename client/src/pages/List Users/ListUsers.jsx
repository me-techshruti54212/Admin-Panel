import React from "react";
import Header from "../../components/Header";
import UserDataRow from "../../components/ListUsers/UserDataRow";
import PaginationBar from "../../components/ListUsers/PaginationBar";
import SearchSection from "../../components/ListUsers/SearchSection";

const ListUser = () => {
  return (
    <>
      <Header />
      <div className="p-2.5 rounded-md bg-white m-3 shadow-sm">
        <h1 className="bg-[#214139] text-white text-left py-1.5 pl-5 text-base">
          LIST USERS
        </h1>
        <SearchSection />
        <div className="w-full">
          <div className="flex flex-col">
            <div className="bg-[#ddd] rounded-tr-md rounded-tl-md font-normal border border-slate-300 flex justify-evenly">
              <span>S.no</span>
              <span>User Name</span>
              <span>First Name</span>
              <span>Last Name</span>
              <span> E-Mail</span>
              <span>User Type</span>
              <span>Payment Status</span>
              <span>Action</span>
            </div>
            <UserDataRow />
            <UserDataRow />
            <UserDataRow />
            <UserDataRow />
            <UserDataRow />
            <UserDataRow />
            <PaginationBar />
          </div>
        </div>
      </div>
    </>
  );
};

export default ListUser;
