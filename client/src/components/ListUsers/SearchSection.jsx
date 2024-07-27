import React from 'react'

const SearchSection = () => {
  return (
    <div className="flex w-full">
          <div className="flex w-full">
            <form className="flex justify-between w-full">
              <div className="flex gap-4 items-center p-2">
                <label>Sort By : </label>
                <div className="flex gap- items-center">
                  <select className="border rounded-lg w-40 p-2">
                    <option className="w-40">Name</option>
                    <option className="w-40">First Name</option>
                  </select>
                </div>
                <input
                  type="text"
                  className="border rounded-lg w-40 p-2"
                  placeholder="Search.."
                />
                <button
                  className="bgPrimary text-white rounded-[4px] px-4 py-2"
                  value="Search"
                >Search</button>
              </div>
            </form>
          </div>
          <button 
            className="bgPrimary text-white rounded-[4px] m-2 py-2 h w-44"
          >Add More Users</button>
        </div>
  )
}

export default SearchSection