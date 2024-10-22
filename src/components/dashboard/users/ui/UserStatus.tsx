import React from 'react'

export default function UserStatus({status}:{status:string}) {
  return (
    <div  className='py-2 px-3 rounded-3xl bg-[rgba(84,95,125,0.06)] '>
      <p className='text-[rgba(84,95,125,1)] text-center'>{status}</p>
    </div>
  )
}
