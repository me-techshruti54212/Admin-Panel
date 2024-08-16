import React from 'react'

const MeetingTabRowHead = () => {
  return (
    <div className='bg-white grid grid-cols-6'>
        <div className="p-2 border text-center text-xl font-semibold">Meeting Initiator</div>
        <div className="p-2 border text-center text-xl font-semibold">Meeting With</div>
        <div className="p-2 border text-center text-xl font-semibold">Date</div>
        <div className="p-2 border text-center text-xl font-semibold">Time</div>
        <div className="p-2 border text-center text-xl font-semibold">Charge Per Hour</div>
        <div className="p-2 border text-center text-xl font-semibold">Status</div>
    </div>
  )
}

export default MeetingTabRowHead