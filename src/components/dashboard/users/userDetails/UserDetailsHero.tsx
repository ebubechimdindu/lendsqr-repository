"use client"
import { IUser } from '@/lib/definitions';
import React, { useEffect, useState } from 'react'
import { LuUser2 } from "react-icons/lu";
import { IoIosStarOutline } from "react-icons/io";
import { IoStar } from "react-icons/io5";
import { formatCurrency } from '@/lib/utils';
export default function UserDetailsHero() {
  const [user, setUser] = useState<IUser | null>(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('selectedUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  return (
    <section className='w-full my-10'>
      <div className='container '>
        <div className='w-full md:pl-8 sm:pl-4 px-2 shadow-lg rounded border'>
          <div className='flex pt-8 pb-12 items-center gap-x-3 md:gap-x-6' >
            <div className='flex items-center space-x-4'>
              <div className='md:size-[100px] size-[50px] flex items-center justify-center
              bg-[rgba(33,63,125,0.16)] rounded-full '>
                <LuUser2  className='text-[20px] md:text-[40px]' color='#213F7D' />
              </div>
              <div>
                <h4 className='text-[#213F7D] text-[14px] md:text-2xl font-medium'>{user?.personalInfo.fullName}</h4>
                <p className='text-[#545F7D ] text-[10px] md:text-[14px] '>{user?.personalInfo.userName}</p>
              </div>
            </div>

            <div className='border h-20'></div>
            <div className='space-y-2'>
              <p className='text-[10px] md:text-[14px]'>User&#39;s Tier</p>
              <div className='flex'>
                <IoStar size={16} color="#E9B200" />
                <IoIosStarOutline size={16} color="#E9B200" />
                <IoIosStarOutline size={16} color="#E9B200" />
              </div>
            </div>
            <div className='border h-20'></div>

            <div>
              <h4 className='text-[#213F7D] text-sm md:text-2xl font-medium'>{formatCurrency(user?.educationEmploymentInfo.monthlyIncome as number)}</h4>
              <p className='text-[#545F7D] text-[8px] md:text-[14px]'>9912345678/Providus Bank</p>
            </div>
          </div>

          <div className="flex">
            <div className="relative w-40 ">
              <p className="text-[#39CDCC] text-[8px] md:text-base text-center after:block after:mt-2 after:h-[2px] after:w-full after:bg-[#39CDCC] after:content-['']">
                General Details
              </p>
            </div>

            <div className="relative w-40 ">
              <p className="text-[8px] md:text-base text-center after:block after:mt-2 after:h-[2px] ">
                Documents
              </p>
            </div>

            <div className="relative w-40 ">
              <p className="text-[8px] md:text-base text-center after:block after:mt-2 after:h-[2px] ">
                Bank Details
              </p>
            </div>

            <div className="relative w-40 ">
              <p className="text-[8px] md:text-base text-center after:block after:mt-2 after:h-[2px] ">
                Loans
              </p>
            </div>

            <div className="relative w-40 ">
              <p className="text-[8px] md:text-base text-center after:block after:mt-2 after:h-[2px] ">
                Savings
              </p>
            </div>


            <div className="relative w-40 ">
              <p className="text-[8px] md:text-base text-center after:block after:mt-2 after:h-[2px] ">
                App and System
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
