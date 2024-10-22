"use client"

import { formatDateToLocal } from '@/lib/utils'
import { fetchUsers } from '@/services/api'
import React, { useEffect, useState } from 'react'
import UserStatus from './UserStatus'
import { IUser } from '@/lib/definitions'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import FilterUsers from './FilterUsers'
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoFilterSharp } from "react-icons/io5";
import { UsersTableSkeleton } from '@/components/DashboardSkeleton'


export default function UsersTable() {
    const [users, setUsers] = useState<IUser[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [showModal, setShowModal] = useState(false)

    const router = useRouter()
    const searchParams = useSearchParams()
    const page = searchParams.get('page') || 1
    const limit = 6

    useEffect(() => {
        const fetchUsersData = async () => {
            setLoading(true);

            try {
                const users: IUser[] = await fetchUsers();
                const totalUsers = users.length

                setTotalPages(Math.ceil(totalUsers / limit))

                const pageIndex = (Number(+page - 1) * limit)
                const usersForPage = users.slice(pageIndex, pageIndex + limit)

                setUsers(usersForPage);
            } catch (error) {
                console.error('Error fetching users:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchUsersData();
    }, [page])



    const handlePageChange = (newPage: number) => {
        if (newPage > 0 && newPage <= totalPages) {
            router.push(`/dashboard/users?page=${newPage}`);
        }
    };

    const onShowModal = () => {
        setShowModal(!showModal);
    }

    const handleViewDetails = (id: string) => {
        const user = users.find((user) => user.id === id)
        localStorage.setItem("selectedUser", JSON.stringify(user))
        router.push('/dashboard/users/userDetails');
    }

    
    if(loading){
        return <UsersTableSkeleton/>
    }


    return (
        <div className="mt-6  flow-root ">
            <div className=''>
                <div className="inline-block mb-6 w-full align-middle">
                    <div className="rounded-lg bg-white p-2 md:pt-0">
                        <div className="lg:hidden ">
                            {users?.map((user) => (
                                <div
                                    onClick={() => handleViewDetails(user.id)}
                                    key={user.id}
                                    className="mb-2 cursor-pointer  w-full rounded-md bg-white p-4"
                                >
                                    <div className="flex items-center justify-between border-b pb-4">
                                        <div>
                                            <div className="mb-2 flex items-center">
                                                <p>{user.personalInfo.userName}</p>
                                            </div>
                                            <p className="text-sm text-gray-500">{user.educationEmploymentInfo.officeEmail}</p>
                                        </div>
                                        <UserStatus status={user.status} />
                                    </div>
                                    <div className="flex w-full items-center justify-between pt-4">
                                        <div>
                                            <p className="text-xl font-medium">
                                                {user.personalInfo.phoneNumber}
                                            </p>
                                            <p>{formatDateToLocal(user.educationEmploymentInfo.dateJoined)}</p>
                                        </div>
                                        <div className="flex justify-end gap-2">

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <table className="hidden relative bg-white  min-w-full text-gray-900 lg:table">
                            <thead className="rounded-lg text-left text-sm font-normal">
                                <tr>
                                    <th scope="col" className="px-4 py-5 font-semibold sm:pl-6 text-[rgba(84,95,125,1)]">
                                        <div className='flex space-x-2 items-center'><h2>ORGANIZATION</h2> <IoFilterSharp size={16} /></div>
                                    </th>
                                    <th scope="col" className="px-3 py-5 font-semibold text-[rgba(84,95,125,1)]">
                                        <div className='flex space-x-2 items-center'><h2>USERNAME</h2> <IoFilterSharp size={16} /></div>

                                    </th>
                                    <th scope="col" className="px-3 py-5  font-semibold text-[rgba(84,95,125,1)]">
                                        <div className='flex space-x-2 items-center'><h2>EMAIL</h2> <IoFilterSharp size={16} /></div>
                                    </th>
                                    <th scope="col" className="px-3 py-5 font-semibold text-[rgba(84,95,125,1)]">
                                        <div className='flex space-x-2 items-center '><h2 className="truncate">PHONE NUMBER</h2> <IoFilterSharp size={16} /></div>
                                    </th>
                                    <th scope="col" className="px-3 py-5 font-semibold text-[rgba(84,95,125,1)]">
                                        <div className='flex space-x-2 items-center'><h2 className="truncate">DATE JOINED</h2> <IoFilterSharp size={16} /></div>

                                    </th>
                                    <th scope="col" className="px-3 py-5 font-semibold text-[rgba(84,95,125,1)]">
                                        <div className='flex space-x-2 items-center'><h2>STATUS</h2> <IoFilterSharp size={16} /></div>

                                    </th>
                                    <th scope="col" className="relative py-3 pl-6 pr-3">
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white ">
                                {
                                    showModal && (
                                        <div className='absolute right-0  bg-white w-40 h-20 py-5 flex flex-col items-center justify-center  rounded-md border  '>
                                            <button className="flex gap-2 items-center">
                                                <MdOutlineRemoveRedEye size={20} />
                                                <p>View Details</p>
                                            </button>
                                        </div>
                                    )
                                }
                                {users?.map((user) => (
                                    <tr
                                        onClick={() => handleViewDetails(user.id)}
                                        key={user.id}
                                        className="w-full cursor-pointer   border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                                    >
                                        <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                            <p>{user.educationEmploymentInfo.organisation}</p>
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-3">
                                            {user.personalInfo.userName}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-3">
                                            {user.educationEmploymentInfo.officeEmail}

                                        </td>
                                        <td className="whitespace-nowrap px-3 py-3">
                                            {user.guarantorInfo.phoneNumber}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-3">
                                            {formatDateToLocal(user.educationEmploymentInfo.dateJoined)}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-3">
                                            <UserStatus status={user.status} />
                                        </td>
                                        <td className=" whitespace-nowrap py-3 pl-6 pr-3">
                                            <button onClick={onShowModal} className="flex justify-end gap-3">
                                                <BsThreeDotsVertical size={20} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                        <FilterUsers handlePageChange={handlePageChange} totalPages={totalPages} page={page} />
                    </div>
                </div>
            </div>
        </div>
    )
}
