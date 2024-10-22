"use client"

import React from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link'
import Image from 'next/image'

const links = [
    { name: 'Switch Organizations', href: '/', icon: '/dashboard/briefcase.svg' },
    {
        name: 'Dashboard',
        href: '/',
        icon: "/dashboard/home.svg",
    },
    { name: 'Users', href: '/dashboard/users', icon: "/dashboard/users.svg" },
    { name: 'Guarantors', href: '/', icon: "/dashboard/guarantors.svg" },
    { name: 'Loans', href: '/', icon: "/dashboard/loans.svg" },
    { name: 'Decision Models', href: '/', icon: "/dashboard/decision.svg" },
    { name: 'Savings', href: '/', icon: "/dashboard/savings.svg" },
    { name: 'Loan Requests', href: '/', icon: "/dashboard/loan-requests.svg" },
    { name: 'Whitelist', href: '/', icon: "/dashboard/whitelist.svg" },
    { name: 'Karma', href: '/', icon: "/dashboard/karma.svg" },
];

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <>
            {
                links.map((link) => {
                    const LinkIcon = link.icon;
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`
                                flex h-[48px] grow items-center justify-center gap-2
                                  p-3 text-sm font-medium hover:bg-sky-100
                                  hover:text-blue-600 
                            md:flex-none md:justify-start md:p-2 md:pl-8 ${!pathname.includes(link.href,1) && 'bg-sky-100 text-blue-600'}
                            `}
                        >
                            <Image
                                src={LinkIcon}
                                width={24}
                                height={24}
                                alt='side bar icons'
                                className=' w-6 h-6'
                            />
                            <p className="hidden md:block">{link.name}</p>
                        </Link>
                    )
                })
            }
        </>
    )
}
