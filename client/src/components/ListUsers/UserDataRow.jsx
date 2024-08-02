import React from 'react'

const UserDataRow = ({number, username, firstName, lastName, email, type, payStat, action}) => {
  return (
    <>
    <div className="bg-white font-normal border-t-[1px] border-slate-200 flex justify-evenly border">
              <span>{number || "1"}</span>
              <span>{username || "TestBruc3"}</span>
              <span>{firstName || "Test99"}</span>
              <span>{lastName || "Test99"}</span>
              <span>{email || "nigroid@h..	"}</span>
              <span>{type ||"Principal"}</span>
              <span>{payStat || "paid"}</span>
              <span>{action || "action"}</span>
              <span>{number || "1"}</span>
              <span>{username || "TestBruc3"}</span>
              <span>{firstName || "Test99"}</span>
              <span>{lastName || "Test99"}</span>
              <span>{email || "nigroid@h..	"}</span>
              <span>{type ||"Principal"}</span>
              <span>{payStat || "paid"}</span>
              <span>{action || "action"}</span>
            </div>
    </>
  )
}

export default UserDataRow