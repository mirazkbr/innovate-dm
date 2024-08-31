import React from 'react'
import headerIcon from "/headerIcon.svg";

const Blog = () => {
    return (
        <>
            <div className='max-w-[1024px] mx-auto py-10'>
                <div className='w-full flex justify-center py-10'>
                <div className='max-w-[450px] flex justify-center flex-col px-4 '>
                    <img src={headerIcon} alt="" className='h-[50px]' draggable='false' />
                    <h2 className='header text-[35px] font-extrabold capitalize text-center py-2'>our latest blog</h2>
                    <p className='font-subMenu text-para text-center text-[16px] px-6'>
                    We provide digital experience services to startups and small businesses.
                    </p>
                </div>
                </div>
                <div className='w-full h-[350px] grid grid-cols-3 gap-4 '>
                    <div className='h-full grid grid-rows-2 rounded-2xl overflow-hidden bg-white shadow-md'>
                        <div className='w-full bg-imgThumb'>
                            {/* <img src="" alt="" /> */}
                        </div>
                        <div className='capitalize p-5'>
                            <h3 className='font-blog-header text-blog-h font-medium text-[18px]'>how to be ahead of stock changes</h3>
                            <h4 className='font-blog-sub-h text-blog-sh font-normal'>by john  - 5 comments</h4>
                            <button className='heading relative after:content-[""] after:absolute after:w-8 after:h-8 after:top-[-3px] after:left-[-15px] after:bg-[#ff772893] after:z-[-1] z-0 after:rounded-full font-bold ml-4 mt-5'>Read more</button>
                        </div>
                    </div>
                    <div className='h-full grid grid-rows-2 rounded-2xl overflow-hidden bg-white shadow-md'>
                    <div className='w-full bg-imgThumb'>

                        </div>
                        <div>

                        </div>
                    </div>
                    <div className='h-full grid grid-rows-2 rounded-2xl overflow-hidden bg-white shadow-md'>
                    <div className='w-full bg-imgThumb'>

                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog