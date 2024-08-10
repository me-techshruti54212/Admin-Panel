import React from "react";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";
import TableHeading from "../../components/ConnectionRequests/TableHeading";
import UserDataRow from "../../components/ConnectionRequests/UserDataRow";

const ConnectionRequests = () => {
  const data = [
    {
      userId: "@rohan",
      send_Accepted: 56,
      send_Rejected: 65,
      send_Pending: 45,
      received_Accepted: 56,
      received_Rejected: 65,
      received_Pending: 45,
    },
    {
      userId: "@abc",
      send_Accepted: 56,
      send_Rejected: 65,
      send_Pending: 45,
      received_Accepted: 56,
      received_Rejected: 65,
      received_Pending: 45,
    },
    {
      userId: "@bcd",
      send_Accepted: 56,
      send_Rejected: 65,
      send_Pending: 45,
      received_Accepted: 56,
      received_Rejected: 65,
      received_Pending: 45,
    },
  ];
  return (
    <>
      <NavBar />
      <div className="w-full flex">
        <Sidebar />
        <div className="p-4 w-full flex flex-col gap-4 relative">
          <h1 className="text-2xl">All Connection Requests</h1>
          <TableHeading />
          <div className="bg-white min-h-96 max-h-[75vh] h-full overflow-y-scroll overflow-x-hidden connectionRequest-container shadow-xl">
            {data.map(
              ({
                userId,
                send_Accepted,
                send_Pending,
                send_Rejected,
                received_Accepted,
                received_Pending,
                received_Rejected,
              }, index) => (
                <UserDataRow
                  key={index}
                  index={index+1}
                  userId={userId}
                  send_Accepted={send_Accepted}
                  send_Pending={send_Pending}
                  send_Rejected={send_Rejected}
                  received_Accepted={received_Accepted}
                  received_Pending={received_Pending}
                  received_Rejected={received_Rejected}
                />
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ConnectionRequests;
