import Image from 'next/image'
import React from 'react'

const iconType = {
    user: "/dashboard/card-users.svg",
    activeUser: "/dashboard/card-active-users.svg",
    loans: "/dashboard/card-loan.svg",
    money: "/dashboard/card-money.svg",
}

type CardProps = {
    title: string,
    value: number,
    type: "user" | "activeUser" | "loans" | "money"
}
export default function Card({ title, value, type }: CardProps) {
    const Icon = iconType[type]
    return (
        <div className="flex shadow-lg md:basis-60 items-center  flex-shrink gap-y-3 flex-col md:items-start rounded-md bg-white pt-2 pb-4 md:pt-5 md:pb-8 md:pl-8 ">
            <div
                className={`flex items-center justify-center h-20 w-20 md:size-10 rounded-full bg-[rgba(223,24,255,0.1)] `}>
            <Image
                height={22}
                width={22}
                src={Icon}
                alt='Card Icon'
                className='w-10 h-10 md:w-5 md:h-5'
            />
            </div>
            <h3
                className={`md:text-sm text-lg font-medium text-[rgba(84,95,125,1)]`}>
                {title.toUpperCase()}
            </h3>
            <p
                className={`truncate font-semibold text-[rgba(84,95,125,1)]  text-3xl md:text-2xl`}>
                {value}
            </p>
        </div>
    )
}
