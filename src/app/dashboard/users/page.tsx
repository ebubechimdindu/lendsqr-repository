// "use client"

import Cards from '@/components/dashboard/users/ui/Cards'
import UsersTable from '@/components/dashboard/users/ui/UsersTable'

import { CardSkeleton, UsersTableSkeleton } from '@/components/DashboardSkeleton'
import { Suspense } from 'react'

export default function page() {
  return (
    <div className='container-fluid hide-scrollbar'>
      <div className='w-full overflow-hidden'>
        <Suspense fallback={<CardSkeleton />}>
          <Cards />
        </Suspense>

        <Suspense fallback={<UsersTableSkeleton />}>
          <UsersTable />
        </Suspense>
      </div>
    </div>
  )
}
