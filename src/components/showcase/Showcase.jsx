import React from 'react'
import headerIcon from "/headerIcon.svg";

const Showcase = () => {
  return (
    <>
      <div className='max-w-[1024px] mx-auto py-10'>
        <div className='w-full flex justify-center pb-6'>
          <div className='max-w-[360px] flex justify-center flex-col px-4 '>
            <img src={headerIcon} alt="" className='h-[50px]' draggable='false' />
            <h2 className='header text-[35px] font-extrabold capitalize text-center py-2'>work showcase</h2>
          </div>
        </div>
        <div>
            <div>
              <ul className='w-full flex gap-5 text-[14px] capitalize font-primary font-semibold cursor-default text-[#6C7D93] py-9'>
                <li className='active:text-logo'>all</li>
                <li>digital mkt</li>
                <li>branding</li>
                <li>content mkt</li>
                <li>social media mkt</li>
              </ul>
            </div>
            <div className='w-full flex flex-col gap-5'>
                <div className='w-full flex gap-5'>
                    <div className='h-[300px] flex flex-1 bg-red-500 rounded-2xl'>

                    </div>
                    <div className='h-[300px] flex flex-[2] bg-green-500 rounded-2xl'>

                    </div>
                    <div className='h-[300px] flex flex-1 bg-blue-500 rounded-2xl'>

                    </div>
                </div>
                <div className='w-full h-[300px] flex gap-5'>
                    <div className='h-full flex-[4] bg-red-500 rounded-2xl'>

                    </div>
                    <div className='h-full flex-[3] bg-blue-500 rounded-2xl'>

                    </div>
                    <div className='h-full flex-[4] bg-green-500 rounded-2xl'>

                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Showcase