import Header from '@/components/dashboard/Header'
import SideNav from '@/components/dashboard/SideNav'
import React from 'react'
import '../globals.css'

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-full md:overflow-hidden ">
            <Header />
            <div className="flex  flex-col lg:flex-row md:overflow-x-auto">
                <div className="w-full  flex-none lg:max-w-60 2xl:max-w-[273px]">
                    <SideNav />
                </div>
                <div className='flex-grow relative md:overFlow-y-hidden bg-[rgba(251,251,251,1)] '>{children}</div>
            </div>
        </div>
    )
}
