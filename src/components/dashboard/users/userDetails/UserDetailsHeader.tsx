"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import { HiOutlineArrowLongLeft } from "react-icons/hi2";

export default function UserDetailsHeader() {
  const router = useRouter()
  return (
    <section className='mt-6'>
      <div className='container'>
        <div className='w-full'>
          <button onClick={()=>router.back()} className='flex items-center gap-5'>
            <HiOutlineArrowLongLeft color='#545F7D' size={24} />
            <h4>Back to Users</h4>
          </button>

          <div className='flex mt-6 items-center  justify-between'>
            <h2 className='text-lg md:text-2xl text-[#213F7D] font-semibold'>User Details</h2>
            <div className='flex space-x-3'>
              <button className='flex border-[#E4033B] border py-2 px-2 md:px-4 rounded-lg items-center gap-5'>
                <h4 className='text-[#E4033B] text-sm md:text-base  font-semibold'>BLACKLIST USER</h4>
              </button>
              <button className='flex  border-[#39CDCC] border rounded-lg py-2 px-2 md:px-4 items-center gap-5'>
                <h4 className='text-[#39CDCC] text-sm md:text-base font-semibold'>ACTIVATE USER</h4>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
