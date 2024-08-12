import React from 'react'
import NavBar from '../../components/NavBar'
import Sidebar from '../../components/Sidebar'
import UserDetails from '../../components/Profile/UserDetails'

const Profile = () => {
    const profile_url="https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg"

    const userId="rohan"
  return (
    <>
    <NavBar/>
    <div className="flex">
        <Sidebar/>
        <div className="w-full p-8">
            <div className="w-full flex gap-8">
                <img src={profile_url} alt={userId} className='w-40 rounded-full'/>
                <UserDetails/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Profile