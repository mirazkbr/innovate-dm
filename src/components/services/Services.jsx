import React from 'react'
import headerIcon from "/headerIcon.svg";
import service1 from "/service1.png";
import service2 from "/service2.png";
import service3 from "/service3.png";

const Services = () => {
  return (
    <>
      <div className='max-w-[1024px] mx-auto h-auto py-10'>
        <div className='w-full flex justify-center pb-6'>
          <div className='max-w-[260px] flex justify-center flex-col px-4 '>
            <img src={headerIcon} alt="" className='h-[50px]' draggable='false' />
            <h2 className='header text-[35px] font-extrabold capitalize text-center py-2'>our services</h2>
            <p className='paragraph text-center text-[14px] leading-6'>We have been providing great flooring solutions service.</p>
          </div>
        </div>

            {/* services cards */}
        <div className='w-full grid grid-cols-3 gap-6 '>
            {/* card 1 */}
          <div className='h-auto bg-[#EBF7E9] py-10 px-10 flex justify-center flex-col gap-4 rounded-[20px] '>
            <div className='w-auto h-[50px] mx-auto'>
              <img src={service1} alt="" className='h-full' />
            </div>
            <h2 className='heading text-[24px] font-semibold capitalize text-center'>marketing strategy</h2>
            <p className='paragraph text-center text-[14px] leading-6 px-8'>Social media has changed the way we interact & do business while creating</p>
            <button className='heading relative after:content-[""] after:absolute after:w-8 after:h-8 after:top-[-5px] after:left-[70px] after:bg-[#ff772893] after:z-[-1] z-0 after:rounded-full font-bold'>Read more</button>
          </div>
            {/* card 2 */}
          <div className='h-auto bg-[#D8EAFF] py-10 px-10 flex justify-center flex-col gap-4 rounded-[20px]'>
            <div className='w-auto h-[50px] mx-auto'>
              <img src={service2} alt="" className='h-full' />
            </div>
            <h2 className='heading text-[24px] font-semibold capitalize text-center'>social marketing</h2>
            <p className='paragraph text-center text-[14px] leading-6 px-8'>Social Media has changed the way we interact & do business while creating a new avenue.</p>
            <button className='heading relative after:content-[""] after:absolute after:w-8 after:h-8 after:top-[-5px] after:left-[70px] after:bg-[#ff772893] after:z-[-1] z-0 after:rounded-full font-bold'>Read more</button>
          </div>
              {/* card 3 */}
          <div className='h-auto bg-[#FBF1EC] py-10 px-10 flex justify-center flex-col gap-4 rounded-[20px]'>
            <div className='w-auto h-[50px] mx-auto'>
              <img src={service3} alt="" className='h-full' />
            </div>
            <h2 className='heading text-[24px] font-semibold capitalize text-center'>content marketing</h2>
            <p className='paragraph text-center text-[14px] leading-6 px-8'>Content Marketing is the other fold of online advertisement. If you are looking to build</p>
            <button className='heading relative after:content-[""] after:absolute after:w-8 after:h-8 after:top-[-5px] after:left-[70px] after:bg-[#ff772893] after:z-[-1] z-0 after:rounded-full font-bold'>Read more</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services