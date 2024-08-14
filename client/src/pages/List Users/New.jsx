import React from 'react'
import NavBar from '../../components/NavBar'
import Sidebar from '../../components/Sidebar'
import UserDataRow from '../../components/ListUsers/UserDataRow'
import SearchSection from '../../components/ListUsers/SearchSection'
import PaginationBar from '../../components/ListUsers/PaginationBar'

const New = () => {
  return (
    <>
    <NavBar/>
    <div className="flex">
        <Sidebar/>
        <div className="flex flex-col w-full">
        <div className="p-2.5 rounded-md bg-white m-3 shadow-sm">
          <h1 className="bg-[#DBE3FF] text-left py-1.5 pl-5 text-base">
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
        </div>
    </div>
    </>
  )
}

export default New