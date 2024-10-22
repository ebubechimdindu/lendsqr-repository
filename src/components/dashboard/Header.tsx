import React from 'react'
import { IoIosSearch } from "react-icons/io";
import Link from 'next/link';
import { FaRegBell } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import Image from 'next/image';



export default function Header() {
    return (
        <div className='w-full mt-10 md:mt-0  shadow-sm h-[6.3rem]'>
            <div className='container'>
                <div>
                    <Image
                        src="/logo.svg"
                        width={138}
                        height={36}
                        className="w-[138px]  h-[36px] "
                        alt="Screenshots of the dashboard project showing desktop version"
                    />
                </div>
                <div className='relative md:w-4/12 flex '>
                    <input
                        className='peer block w-full rounded-md border-2 rounded-r-none border-r-0 border-[rgba(84, 95, 125, 0.15)] py-3 pl-5 text-sm outline-0 placeholder:text-gray-500'
                        id="search"
                        type="search"
                        name="search"
                        placeholder="Search for Anything"
                        required
                        minLength={6}
                        aria-required
                    />
                    <button className='flex items-center rounded-lg rounded-s-none justify-center px-5 py-3 bg-[rgba(57,205,204,1)]'>
                        <IoIosSearch size={24} color='#ffffff' />
                    </button>
                </div>
                <div className='flex w-full xl:w-2/12 md:w-4/12 lg:w-3/12 py-3   items-center justify-between'>
                    <Link href="/">
                        <p className='underline text-[#213F7D]'>Docs</p>
                    </Link>
                    <FaRegBell size={24} color='#213F7D' />
                    <div className='flex items-center '>
                        <Image
                            src='/dashboard/avatar.png'
                            width={32}
                            height={32}
                             alt=''
                            className='w-8 h-8 rounded-full' />
                        <div className='ml-2 flex items-center gap-x-1 text-sm text-[#213F7D]'>
                            Adedeji
                            <TiArrowSortedDown />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
