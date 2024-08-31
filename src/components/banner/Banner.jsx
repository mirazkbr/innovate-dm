import React from 'react'
import avatar from "/avatar.svg";
import headerIcon from "/headerIcon.svg";
import female from "/banner-f.jpg"
import male from "/banner-m.jpg"

const Banner = () => {
  return (
    <>
        <div className='relative w-full h-full pb-11 '>
            {/* 3d avatar */}
            <div className='w-[10%] h-auto absolute top-10 left-10 z-[-2]'>
                <img src={avatar} alt="" className='w-full h-full object-contain' />
            </div>
            <div className='w-2/5 ml-auto h-auto absolute top-0 right-0 z-[-1] pr-11 pt-11'>
            <div className='max-w-[530px] h-[450px] relative'>
                <div className='w-[300px] h-[280px] bg-imgThumb absolute top-0 right-0 z-0  rounded-[40px] overflow-hidden'>
                    <img src={female} alt="" className='w-full h-full object-cover'/>
                </div>
                <div className='w-[300px] h-[280px] bg-imgThumb absolute bottom-0 left-0 z-10 border-[7px] border-white rounded-[40px] overflow-hidden'>
                    <img src={male} alt="" className='w-full h-full object-cover'/>
                </div>
            </div>
            </div>
            {/* banner contents */}
            <div className='max-w-[1024px] mx-auto pt-10'>
                <div className='max-w-[590px]'>
                    <div>
                        <img src={headerIcon} alt="" className='h-[45px]' draggable='false'/>
                    </div>
                    <h1 className='header capitalize text-[57px] font-extrabold'>we are digital <span className='text-logo'>marketing </span>agency</h1>
                    <p className='paragraph py-5 pr-[150px] leading-8'>Use customer data to build great and solid product experiences that convert. Digital marketing’s development has changed the way brands and businesses use technology for marketing. </p>
                    <button className='capitalize font-bold text-white bg-logo px-5 py-3 rounded-[50px]'>
                            get free quotes
                        </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Banner