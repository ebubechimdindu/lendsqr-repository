"use client"
import { IUser } from '@/lib/definitions';
import { formatCurrency } from '@/lib/utils';
import React, { useEffect, useState } from 'react'

export default function UserInformation() {
    const [user, setUser] = useState<IUser | null>(null)

    useEffect(() => {
        const storedUser = localStorage.getItem('selectedUser');
        if (storedUser) {
            setUser(JSON.parse(storedUser))
        }
    }, [])

    return (
        <section className='w-full mb-10'>
            <div className='container'>
                {/* Personal Information */}
                <div className='w-full p-8 shadow-lg rounded border'>
                    <div className='after:block after:my-7 after:h-[2px] after:w-full after:bg-[rgba(33,63,125,0.1)] '>
                        <header className='text-[#213F7D] font-medium text-base'>Personal Information</header>
                        <div className='grid 2xl:grid-cols-5 md:grid-cols-4 grid-cols-3  gap-[30px] mt-8   '>
                            <div className='gap-y-2 '>
                                <h4 className='text-[#545F7D] text-[8px] sm:text-[10px] md:text-xs'>FULL NAME</h4>
                                <p className='text-[#213F7D] font-medium text-[10px] sm:text-sm md:text-base'>{user?.personalInfo.fullName}</p>
                            </div>

                            <div className='gap-y-2 '>
                                <h4 className='text-[#545F7D] text-[8px] sm:text-[10px] md:text-xs'>PHONE NUMBER</h4>
                                <p className='text-[#213F7D] font-medium text-xs sm:text-sm md:text-base'>{user?.personalInfo.phoneNumber}</p>
                            </div>

                            <div className='gap-y-2 w-10'>
                                <h4 className='text-[#545F7D]  text-[8px] sm:text-[10px] md:text-xs'>EMAIL ADDRESS</h4>
                                <p className='text-[#213F7D]  font-medium text-xs sm:text-sm md:text-base truncate'
                                title={user?.personalInfo.emailAddress}
                                >{user?.personalInfo.emailAddress}</p>
                            </div>

                            <div className='gap-y-2'>
                                <h4 className='text-[#545F7D] text-[8px] sm:text-[10px] md:text-xs'>BVN</h4>
                                <p className='text-[#213F7D] font-medium text-xs sm:text-sm md:text-base'>{user?.personalInfo.bvn}</p>
                            </div>

                            <div className='gap-y-2 '>
                                <h4 className='text-[#545F7D] text-[8px] sm:text-[10px] md:text-xs'>GENDER</h4>
                                <p className='text-[#213F7D] font-medium text-xs sm:text-sm md:text-base'>{user?.personalInfo.gender}</p>
                            </div>

                            <div className='gap-y-2 '>
                                <h4 className='text-[#545F7D] text-[8px] sm:text-[10px] md:text-xs'>MARITAL STATUS</h4>
                                <p className='text-[#213F7D] font-medium text-xs sm:text-sm md:text-base'>{user?.personalInfo.maritalStatus}</p>
                            </div>


                            <div className='gap-y-2 '>
                                <h4 className='text-[#545F7D] text-[8px] sm:text-[10px] md:text-x'>CHILDREN</h4>
                                <p className='text-[#213F7D] font-medium text-xs sm:text-sm md:text-base'>{user?.personalInfo.children}</p>
                            </div>

                            <div className='gap-y-2'>
                                <h4 className='text-[#545F7D] text-[8px] sm:text-[10px] md:text-xs'>TYPE OF RESIDENCE</h4>
                                <p className='text-[#213F7D] font-medium text-xs sm:text-sm md:text-base'>{user?.personalInfo.typeOfResidence}</p>
                            </div>
                        </div>
                    </div>


                    {/* Education and Employment */}
                    <div className=' after:block after:my-7 after:h-[2px] after:w-full after:bg-[rgba(33,63,125,0.1)] '>
                        <header className='text-[#213F7D] font-medium text-base'>Education and Employment</header>
                        <div className='grid 2xl:grid-cols-5 md:grid-cols-4 grid-cols-3 gap-[30px] mt-8   '>
                            <div className='gap-y-2 '>
                                <h4 className='text-[#545F7D] text-[8px] sm:text-[10px] md:text-xs'>LEVEL OF EDUCATION</h4>
                                <p className='text-[#213F7D] text-xs sm:text-sm md:text-base'>{user?.educationEmploymentInfo.levelOfEducation}</p>
                            </div>

                            <div className='gap-y-2 '>
                                <h4 className='text-[#545F7D] text-[8px] sm:text-[10px] md:text-xs'>EMPLOYMENT STATUS</h4>
                                <p className='text-[#213F7D] font-medium text-xs sm:text-sm md:text-base'>{user?.educationEmploymentInfo.employmentStatus}</p>
                            </div>

                            <div className='gap-y-2 '>
                                <h4 className='text-[#545F7D] text-[8px] sm:text-[10px] md:text-xs'>SECTOR OF EMPLOYMENT</h4>
                                <p className='text-[#213F7D] font-medium text-xs sm:text-sm md:text-base'>{user?.educationEmploymentInfo.sectorOfEmployment}</p>
                            </div>

                            <div className='gap-y-2'>
                                <h4 className='text-[#545F7D] text-[8px] sm:text-[10px] md:text-xs'>DURATION OF EMPLOYMENT</h4>
                                <p className='text-[#213F7D] font-medium text-xs sm:text-sm md:text-base'>{user?.educationEmploymentInfo.durationOfEmployment}</p>
                            </div>

                            <div className='gap-y-2 '>
                                <h4 className='text-[#545F7D] text-[8px] sm:text-[10px] md:text-xs'>OFFICE EMAIL</h4>
                                <p className='text-[#213F7D] font-medium text-xs sm:text-sm md:text-base truncate '
                                title={user?.educationEmploymentInfo.officeEmail}
                                >{user?.educationEmploymentInfo.officeEmail}</p>
                            </div>

                            <div className='gap-y-2 '>
                                <h4 className='text-[#545F7D] text-[8px] sm:text-[10px] md:text-xs'>MONTHLY INCOME</h4>
                                <p className='text-[#213F7D] font-medium text-xs sm:text-sm md:text-base'>{formatCurrency(user?.educationEmploymentInfo.monthlyIncome as number)}</p>
                            </div>


                            <div className='gap-y-2 '>
                                <h4 className='text-[#545F7D] text-[8px] sm:text-[10px] md:text-xs'>LOAN REPAYMENT</h4>
                                <p className='text-[#213F7D] font-medium text-xs sm:text-sm md:text-base'>{user?.educationEmploymentInfo.loanRepayment}</p>
                            </div>

                        </div>

                    </div>

                     {/* Socials*/}
                     <div className=' after:block after:my-7 after:h-[2px] after:w-full after:bg-[rgba(33,63,125,0.1)] '>
                        <header className='text-[#213F7D] font-medium text-base'>Socials</header>
                        <div className='grid 2xl:grid-cols-5 md:grid-cols-4 grid-cols-3  gap-[30px] mt-8   '>
                            <div className='gap-y-2 '>
                                <h4 className='text-[#545F7D] text-[8px] sm:text-[10px] md:text-xs'>TWITTER</h4>
                                <p className='text-[#213F7D] font-medium text-xs sm:text-sm md:text-base'>{user?.socialMedia.twitter}</p>
                            </div>

                            <div className='gap-y-2 '>
                                <h4 className='text-[#545F7D] text-[8px] sm:text-[10px] md:text-xs'>FACEBOOK</h4>
                                <p className='text-[#213F7D] font-medium text-xs sm:text-sm md:text-base'>{user?.socialMedia.facebook}</p>
                            </div>

                            <div className='gap-y-2 '>
                                <h4 className='text-[#545F7D] text-[8px] sm:text-[10px] md:text-xs'>INSTAGRAM</h4>
                                <p className='text-[#213F7D] font-medium text-xs sm:text-sm md:text-base'>{user?.socialMedia.instagram}</p>
                            </div>
                        </div>

                    </div>

                     {/*Guarantor */}
                     <div className=''>
                        <header className='text-[#213F7D] font-medium text-base'>Guarantor</header>
                        <div className='grid 2xl:grid-cols-5 md:grid-cols-4 grid-cols-3 gap-[30px] mt-8   '>
                            <div className='gap-y-2 '>
                                <h4 className='text-[#545F7D] text-[8px] sm:text-[10px] md:text-xs'>FULL NAME</h4>
                                <p className='text-[#213F7D] font-medium text-xs sm:text-sm md:text-base'>{user?.guarantorInfo.fullName}</p>
                            </div>

                            <div className='gap-y-2 '>
                                <h4 className='text-[#545F7D] text-[8px] sm:text-[10px] md:text-xs'>PHONE NUMBER</h4>
                                <p className='text-[#213F7D] font-medium text-xs sm:text-sm md:text-base'>{user?.guarantorInfo.phoneNumber}</p>
                            </div>

                            <div className='gap-y-2 '>
                                <h4 className='text-[#545F7D] text-[8px] sm:text-[10px] md:text-xs'>EMAIL ADDRESS</h4>
                                <p className='text-[#213F7D] font-medium text-xs sm:text-sm md:text-base truncate'
                                title={user?.guarantorInfo.emailAddress}
                                >{user?.guarantorInfo.emailAddress}</p>
                            </div>

                            <div className='gap-y-2 '>
                                <h4 className='text-[#545F7D] text-[8px] sm:text-[10px] md:text-xs'>RELATIONSHIP</h4>
                                <p className='text-[#213F7D] font-medium text-xs sm:text-sm md:text-base'>{user?.guarantorInfo.relationship}</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}
