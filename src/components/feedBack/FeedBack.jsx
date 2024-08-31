import React from 'react'
import headerIcon from "/headerIcon.svg";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { CgQuote } from "react-icons/cg";

const FeedBack = () => {
  return (
    <>
      <div className='w-[1024px] mx-auto py-10'>
        <div className='w-full grid grid-cols-3 gap-4'>
          <div className='col-span-1 pr-20'>
            <div>
              <div>
                <img src={headerIcon} alt="" className='h-[50px]' draggable='false' />
              </div>
              <h2 className='header text-[35px] font-extrabold capitalize py-2'>client review</h2>
              <p className='font-subMenu text-para text-[16px] '>
                people use digital devices instead of visiting physical shops, digital marketing campaigns are becoming more prevalent and efficient.
              </p>
            </div>
            <div className='w-full flex gap-4'>
              <div className='p-4 bg-logo inline-block rounded-full text-white hover:opacity-20'><MdArrowBackIosNew /></div>
              <div className='p-4 bg-logo inline-block rounded-full text-white hover:opacity-20'><MdArrowForwardIos /></div>
            </div>
          </div>
          <div className='col-span-2 grid grid-cols-2 gap-4'>
            <div className='h-full bg-[#D8EAFF] p-10 rounded-2xl'>
              <p className='paragraph text-left'>Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient.</p>
              <div className='w-full flex flex-row-reverse justify-start items-center gap-4 py-3'>
                <div className='text-primary capitalize'>
                  <h3 className='heading font-semibold text-right'>Jane Cooper</h3>
                  <h5 className='heading font-normal text-right text-[10px]'>fashion designer</h5>
                </div>
                <div className='w-20 h-20 relative'>
                  <div className='w-full h-full bg-imgThumb rounded-full overflow-hidden '>
                    {/* <img src="" alt="" /> */}
                  </div>
                  <div className='p-2 text-white inline-block bg-logo rounded-full absolute bottom-0 right-[-10px]'><CgQuote /></div>
                </div>
              </div>

            </div>
            <div className='h-full bg-white p-10 rounded-2xl'>
              <p className='paragraph text-left'>Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient.</p>
              <div className='w-full flex flex-row-reverse justify-start items-center gap-4 py-3'>
                <div className='text-primary capitalize'>
                  <h3 className='heading font-semibold text-right'>Jane Cooper</h3>
                  <h5 className='heading font-normal text-right text-[10px]'>fashion designer</h5>
                </div>
                <div className='w-20 h-20 relative'>
                  <div className='w-full h-full bg-imgThumb rounded-full overflow-hidden '>
                    {/* <img src="" alt="" /> */}
                  </div>
                  <div className='p-2 text-white inline-block bg-logo rounded-full absolute bottom-0 right-[-10px]'><CgQuote /></div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default FeedBack