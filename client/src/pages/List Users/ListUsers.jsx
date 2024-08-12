import React from 'react'
import NavBar from '../../components/NavBar'
import Sidebar from '../../components/Sidebar'
import TableHeading from '../../components/ListUsers/TableHeading'
import UserDataRow from '../../components/ListUsers/UserDataRow'

const ListUsers = () => {

  const data = [
    {
      userId: "@rohan",
      Name: "Rohan",
      Email:"rohan@gmail.com",
      Mobile:"1234567890",
      type:"Developer",
      createdAt:"12/12/2021"
    },
    {
      userId: "@abc",
      Name: "Rohan",
      Email:"rohan@gmail.com",
      Mobile:"1234567890",
      type:"Developer",
      createdAt:"12/12/2021"
    },
    {
      userId: "@bcd",
      Name: "Rohan",
      Email:"rohan@gmail.com",
      Mobile:"1234567890",
      type:"Developer",
      createdAt:"12/12/2021"
    },
  ];

  return (
    <>
    <NavBar/>
    <div className="flex">
        <Sidebar/>
        <div className="p-4 w-full flex flex-col gap-4 relative">
          <h1 className="text-2xl">All Connection Requests</h1>
          <TableHeading />
          <div className="bg-white min-h-96 max-h-[75vh] h-full overflow-y-scroll overflow-x-hidden connectionRequest-container shadow-xl">
            {data.map(
              ({
                userId,
                Name,
                Email,
                Mobile,
                type,
                createdAt
              }, index) => (
                <UserDataRow
                  key={index}
                  index={index+1}
                  userId={userId}
                  Name={Name}
                  Email={Email}
                  Mobile={Mobile}
                  type={type}
                  createdAt={createdAt}
                />
              )
            )}
          </div>
        </div>
    </div>
    </>
  )
}

export default ListUsers