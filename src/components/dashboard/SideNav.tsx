import React from 'react'
import NavLinks from './NavLinks'

export default function SideNav() {
    return (
        <nav className='lg:overflow-y-auto overflow-x-auto w-full   hide-scrollbar shadow-xl flex h-full flex-col mt-5 md:mt-0  pb-10 md:px-0'>
            <div className='flex grow flex-row gap-y-3 space-x-2 lg:flex-col mt-5  md:space-x-0 md:space-y-2'>
                <NavLinks />
            </div>
        </nav>
    )
}
