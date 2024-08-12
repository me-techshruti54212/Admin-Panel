import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import NavBar from '../../components/NavBar';
import Sidebar from '../../components/Sidebar';
import UserDataRow from '../../components/ListUsers/UserDataRow';
import SearchSection from '../../components/ListUsers/SearchSection';
import PaginationBar from '../../components/ListUsers/PaginationBar';

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
        <div className="flex flex-col w-full">
          <div className="p-2.5 rounded-md bg-white m-3 shadow-sm">
            <h1 className="bg-[#DBE3FF] text-left py-1.5 pl-5 text-base">LIST USERS</h1>
            <SearchSection />
            <div className="w-full">
              <div className="flex flex-col">
                <div className="bg-[#ddd] rounded-tr-md rounded-tl-md font-normal border border-slate-300 flex justify-evenly">
                  <span>Id</span>
                  <span>Name</span>
                  <span>User Name</span>
                  <span>Number</span>
                  <span>E-Mail</span>
                  <span>Status</span>
                  <span>Created_at</span>
                  <span>Action</span>
                </div>
                {usersData.map((user) => (
                  <UserDataRow
                    key={user.id}
                    ID={user.id}
                    Name={user.name}
                    Username={user.username}
                    Number={user.mobile_number}
                    Email={user.email}
                    Status={user.verified_status}
                    Created_at={user.created_at} 
                    Action={"Edit/Delete"} 
                  />
                ))}
                <PaginationBar
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListUsers;
