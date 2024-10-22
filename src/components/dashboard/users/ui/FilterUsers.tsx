import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type filterUsersProps = {
    handlePageChange: (page: number) => void,
    page: string | number,
    totalPages: number,
}
export default function FilterUsers({ handlePageChange, page, totalPages }: filterUsersProps) {
    return (
        <>
            <div className="md:flex hidden  justify-between items-center mt-4">
                <div className='flex justify-between items-center gap-x-3 text-[rgba(84,95,125,1)]'>
                    <p>showing</p>
                    <div className='flex items-center bg-[rgba(33,63,125,0.1)] rounded-md px-5 py-1'>
                        <p className='text-[rgba(33,63,125,1)] text-center font-medium'>
                            {page}
                        </p>
                    </div>
                    <h4>out of {totalPages}</h4>
                </div>

                <div className='flex gap-x-4 justify-between items-center '>
                    <button
                        onClick={() => handlePageChange(Number(page) - 1)}
                        disabled={Number(page) === 1}
                        className="p-2 bg-[rgba(33,63,125,0.1)] rounded-md disabled:opacity-50"
                    >
                        <IoIosArrowBack />
                    </button>
                    <div className='flex  gap-x-2 items-center'>
                        <p className='flex gap-x-2 items-center'>
                            {page}
                        </p>
                        <p className='flex gap-x-2 items-center'>
                            {+page + 1}
                        </p>
                        <p className='flex  gap-x-2 items-center'>
                            {+page + 2}
                        </p>
                    </div>
                    <button
                        onClick={() => handlePageChange(Number(+page) + 1)}
                        disabled={Number(page) === totalPages}
                        className="p-2 bg-[rgba(33,63,125,0.1)] rounded-md disabled:opacity-50"
                    >
                        <IoIosArrowForward size={16} color='rgba(33,63,125,1)' />
                    </button>
                </div>
            </div>



            <div className="flex md:hidden  justify-between items-center mt-4">

                <div className='flex gap-x-4 justify-between items-center '>
                    <button
                        onClick={() => handlePageChange(Number(page) - 1)}
                        disabled={Number(page) === 1}
                        className="p-2 bg-[rgba(33,63,125,0.1)] rounded-md disabled:opacity-50"
                    >
                        <IoIosArrowBack />
                    </button>
                    <div className='flex justify-between items-center gap-x-3 text-[rgba(84,95,125,1)]'>
                        <p>showing</p>
                        <div className='flex items-center bg-[rgba(33,63,125,0.1)] rounded-md px-5 py-1'>
                            <p className='text-[rgba(33,63,125,1)] text-center font-medium'>
                                {page}
                            </p>
                        </div>
                        <h4>out of {totalPages}</h4>
                    </div>
                    <button
                        onClick={() => handlePageChange(Number(+page) + 1)}
                        disabled={Number(page) === totalPages}
                        className="p-2 bg-[rgba(33,63,125,0.1)] rounded-md disabled:opacity-50"
                    >
                        <IoIosArrowForward size={16} color='rgba(33,63,125,1)' />
                    </button>
                </div>
            </div>
        </>
    )
}
