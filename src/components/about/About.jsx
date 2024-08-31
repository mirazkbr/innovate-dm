import React from 'react'
import about1 from "/about1.jpg";
import about2 from "/about2.jpg";
import pattern from "/pattern.svg";
import headerIcon from "/headerIcon.svg";
import partners from "/partners.svg";

const About = () => {
        return (
                <>
                        <div className='max-w-[1024px] mx-auto py-10 '>
                                <div className='w-full flex'>
                                        <div className='w-1/2 h-[430px] '>
                                                <div className='w-[400px] h-full relative'>
                                                        <div className='w-auto h-[200px] absolute top-[80px] left-0 overflow-hidden'>
                                                                <img src={pattern} alt="" className='h-full' />
                                                        </div>
                                                        <div className='w-[300px] h-[320px] absolute bg-imgThumb rounded-[40px] top-0 right-0 overflow-hidden'>
                                                                <img src={about1} alt="" className='w-full h-full object-cover'/>
                                                        </div>
                                                        <div className='w-[220px] h-[200px] absolute bg-imgThumb border-[7px] border-white rounded-[50px] left-0 bottom-0 overflow-hidden'>
                                                                <img src={about2} alt="" className='w-full h-full object-cover'/>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className='w-1/2 '>
                                                <div className='max-w-[80%] pr-10 pl-5'>
                                                        <img src={headerIcon} alt="" className='h-[50px]' />
                                                        <h2 className='header text-[35px] font-extrabold capitalize py-2'>who we are</h2>
                                                        <p className='paragraph text-[14px] leading-6'>We are a Dhaka based Digital Communication Agency committed to creating an actionable strategy, online marketing & technology solution for our partners. As a multidisciplinary company, we operate as a unified, </p>
                                                        <p className='paragraph text-[10px] leading-6'>Join the 10.000+ Companys Trusting </p>

                                                </div>
                                                <div className='max-w-[60%]'>
                                                        <img src={partners} alt="" className='w-full h-full' />
                                                </div>
                                        </div>
                                </div>
                        </div>
                </>
        )
}

export default About