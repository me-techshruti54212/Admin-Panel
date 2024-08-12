import React from 'react';

const UserDataRow = ({ ID, Name, Username, Number, Email, Status, Created_at, Action }) => {
  return (
    <div className="bg-white font-normal border-t-[1px] border-slate-200 flex justify-evenly border">
      <span>{ID || "1"}</span>
      <span>{Name || "TestBruc3"}</span>
      <span>{Username || "Test99"}</span>
      <span>{Number || "Test99"}</span>
      <span>{Email || "nigroid@h..	"}</span>
      <span>{Status || "Principal"}</span>
      <span>{Created_at || "paid"}</span>
      <span>{Action || "action"}</span>
    </div>
  );
};

export default UserDataRow;
