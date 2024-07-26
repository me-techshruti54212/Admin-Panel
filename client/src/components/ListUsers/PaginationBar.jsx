import React from "react";

const PaginationBar = () => {
  return (
    <div className="bg-[#ddd] rounded-br-md rounded-bl-md font-normal border border-slate-300 flex justify-center gap-2 py-2">
      <button className="bg-white font-semibold p-2 text-sm py-0 border rounded-md hoverBgOrange">
        Prev
      </button>
      <button className="bg-white font-semibold p-2 text-sm py-0 border rounded-md hoverBgOrange">
        1
      </button>
      <button className="bg-white font-semibold p-2 text-sm py-0 border rounded-md hoverBgOrange">
        2
      </button>
      <button className="bg-white font-semibold p-2 text-sm py-0 border rounded-md hoverBgOrange">
        3
      </button>
      <button className="bg-white font-semibold p-2 text-sm py-0 border rounded-md hoverBgOrange">
        Next
      </button>
    </div>
  );
};

export default PaginationBar;
