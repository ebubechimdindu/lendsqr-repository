import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Logo() {
    return (
        <Link
            className="w-[138px]  h-[36px] relative bottom-20"
            href="/"
        >
            <Image
                src="/logo.svg"
                width={138}
                height={36}
                className="w-[138px]  h-[36px] "
                alt="Screenshots of the dashboard project showing desktop version"
            />
        </Link>
    )
}
