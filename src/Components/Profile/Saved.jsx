import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { FiLock } from 'react-icons/fi'
import { GrLocation } from 'react-icons/gr'

const Saved = () => {
  return (
    <div className='p-4 mx-10 my-4'>
        <div className="font-semibold text-2xl mb-4 tracking-wider text-gray-700">
        Saved Jobs
      </div>
        <div className='space-y-3'>
            <div className='px-20 py-6 bg-gray-200 rounded-xl '>
                <div className='flex place-items-center justify-end'><AiOutlineDelete className='h-5 w-5'/></div>
                <div className='flex justify-between place-items-center'>
                    <div className='font-semibold text-lg tracking-wider'>Full Stack Developer</div>
                    <div className='flex gap-5 text-sm'>
                        <div className="flex gap-2 place-items-center">
                            <FiLock/> Full-Time
                        </div>
                        <div className="flex gap-2 place-items-center">
                            <GrLocation/> Bangolre
                        </div>
                    </div>
                </div>
                <div className='flex gap-3 place-items-center text-sm'>
                        <div>Technology</div> | <div>Experience: 2-3 Years</div>
                    </div>
                    <div className='flex justify-between place-items-center mt-3'>
                        <div className='text-sm grid place-items-center'>Posted: 2 days ago</div>
                        <div className='flex gap-5 place-items-center'>
                            <button className=' rounded-xl text-sm text-white bg-[#BC312E] border border-[#BC312E] px-4 py-1 '>View Job</button>
                        </div>
                    </div>
            </div>
            <div className='px-20 py-6 bg-gray-200 rounded-xl '>
            <div className='flex place-items-center justify-end'><AiOutlineDelete className='h-5 w-5'/></div>
                <div className='flex justify-between place-items-center'>
                    <div className='font-semibold text-lg tracking-wider'>Full Stack Developer</div>
                    <div className='flex gap-5 text-sm'>
                        <div className="flex gap-2 place-items-center">
                            <FiLock/> Full-Time
                        </div>
                        <div className="flex gap-2 place-items-center">
                            <GrLocation/> Bangolre
                        </div>
                    </div>
                </div>
                <div className='flex gap-3 place-items-center text-sm'>
                        <div>Technology</div> | <div>Experience: 2-3 Years</div>
                    </div>
                    <div className='flex justify-between place-items-center mt-3'>
                        <div className='text-sm grid place-items-center'>Posted: 21 days ago</div>
                        <div className='flex gap-5 place-items-center'>
                            <button className=' rounded-xl text-sm text-gray-500 font-semibold px-4 py-1 '>Positon filled</button>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Saved