import React from "react";
import postsIcon from "../../assets/icons/posts.svg"


const UserDetails = () => {
  return (
    <div className="grid grid-rows-3 w-full p-4">
      <div className="w-full grid grid-cols-3 text-xl">
        <div>Name</div>
        <div>@userId</div>
      </div>
      <div className="w-full grid grid-cols-3 text-lg">
        <div>
          Email: <span className="text-blue-700">email@example.com</span>
        </div>
        <div>
          Mobile Number: <span className="text-blue-700">1234567890</span>
        </div>
        <div className="flex gap-3 items-start">
          Posts: <img src={postsIcon} alt="Icon" className="w-6 mt-1" />
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
