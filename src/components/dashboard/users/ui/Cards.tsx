import React from 'react'
import Card from '../../Card'
import { fetchUsers } from '@/services/api'

export default async function Cards() {
    const users = await fetchUsers()
    return (
        <div className='mt-6 '>
            <div className=' w-full '>
                <h2 className='font-semibold text-[rgba(84,95,125,1)] text-2xl mb-10'>Users</h2>
                <div className='flex flex-col gap-4 md:flex-row justify-between w-full'>
                    <Card title='USERS' value={users.length} type='user' />
                    <Card title='Active Users' value={users.length} type='activeUser' />
                    <Card title='Users with Loans' value={users.length/5} type='loans' />
                    <Card title='Users with Savings' value={users.length/2} type='money' />
                </div>
            </div>
        </div>
    )
}
