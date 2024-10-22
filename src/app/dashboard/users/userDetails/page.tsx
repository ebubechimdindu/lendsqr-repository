import UserDetailsHeader from '@/components/dashboard/users/userDetails/UserDetailsHeader'
import UserDetailsHero from '@/components/dashboard/users/userDetails/UserDetailsHero'
import UserInformation from '@/components/dashboard/users/userDetails/UserInformation'
import React from 'react'

export default function page() {
    return (
        <>
            <UserDetailsHeader />
            <UserDetailsHero />
            <UserInformation/>
        </>
    )
}
