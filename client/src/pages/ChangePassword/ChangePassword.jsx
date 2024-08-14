import React from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'

const ChangePassword = () => {
  return (
    <>
    <Header />
      <div className="flex justify-between px-12">
        <Sidebar />
        <div className="w-full">
          <div className="p-2.5 rounded-md bg-white m-3 shadow-sm text-black sm:text-base text-xs self-stretch border">
            <h1 className="bg-[#214139] text-white text-left py-1.5 pl-5 text-base">
              CHANGE PASSWORD
            </h1>
            <div className="m-3 flex p-2 -ml-48">
             <form className='grid grid-cols-2 gap-3 content-center w-full '>
                <label htmlFor="" className='text-right text-base'>Old Password :</label>
                <input type="password"  placeholder='Old Password' className='text-base p-1 border rounded-md w-4/5 bg-gradient-to-b from-slate-100 to-white'/>
                <label htmlFor="" className='text-right text-base'>New Password :</label>
                <input type="password"  placeholder='New Password' className='text-base p-1 border rounded-md w-4/5 bg-gradient-to-b from-slate-100 to-white'/>
                <label htmlFor="" className='text-right text-base'>Confirm Password :</label>
                <input type="password"  placeholder='Confirm Password' className='text-base p-1 border rounded-md w-4/5 bg-gradient-to-b from-slate-100 to-white'/>
                <div></div>
                <button className='bgPrimary w-fit p-2 text-white rounded-md text-base'>Save</button>
             </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChangePassword