import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import NavBar from '../../components/NavBar';
import Sidebar from '../../components/Sidebar';
import TableHeading from "../../components/ListUsers/TableHeading";
import UserDataRow from "../../components/ListUsers/UserDataRow";

const ListUsers = () => {
  const [usersData, setUsersData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState(null);
  const limit = 10; 
  const location = useLocation();
  const navigate = useNavigate(); 

  // Function to extract query parameters
  const getQueryParams = (query) => {
    return new URLSearchParams(query);
  };

  // Set the current page based on query parameters
  useEffect(() => {
    const queryParams = getQueryParams(location.search);
    const page = parseInt(queryParams.get('page')) || 1;
    setCurrentPage(page);
  }, [location.search]);

  // Fetch data whenever the current page changes
  useEffect(() => {
    fetch(`http://localhost:8081/api/usersList?page=${currentPage}&limit=${limit}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setUsersData(data.users_table_data);
        setTotalPages(data.pagination.total_pages);
      })
      .catch((err) => {
        setError("There was an error fetching the data: " + err.message);
      });
  }, [currentPage]);

  // Handle page changes and update the URL query parameters
  const handlePageChange = (page) => {
    setCurrentPage(page);
    navigate(`?page=${page}&limit=${limit}`); 
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <NavBar />
      <div className="flex">
        <Sidebar />
        <div className="p-4 w-full flex flex-col gap-4 relative">
          <h1 className="text-2xl">All Connection Requests</h1>
          <TableHeading />
          <div className="bg-white min-h-96 max-h-[75vh] h-full overflow-y-scroll overflow-x-hidden connectionRequest-container shadow-xl">
            {usersData.map(
              ({ userId, Name, Email, Mobile, type, createdAt }, index) => (
                <UserDataRow
                  key={index}
                  index={index + 1}
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
      {/* </div> */}
    </>
  );
};

export default ListUsers;