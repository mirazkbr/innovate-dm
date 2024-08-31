import React from 'react'
import headerIcon from "/headerIcon.svg";

const Skills = () => {
    return (
        <>
            <div className='w-[1024px] mx-auto py-10'>
                <div className='w-full flex justify-center pb-10'>
                    <div className='max-w-[450px] flex justify-center flex-col px-4 '>
                        <img src={headerIcon} alt="" className='h-[50px]' draggable='false' />
                        <h2 className='header text-[35px] font-extrabold capitalize text-center py-2'>our creative process.</h2>
                        <p className='font-subMenu text-para text-center text-[16px] px-6'>
                            We provide digital experience services to startups and small businesses.
                        </p>
                    </div>
                </div>
                <div className='w-full flex flex-col'>
                    {/* card 1 */}
                    <div className='w-full h-[250px] grid grid-cols-2 gap-4'>
                        <div className='w-full h-full flex items-center'>
                            <div className='max-w-[80%] flex flex-col gap-4 p-5 bg-[#EBF7E9] rounded-2xl '>
                                <h4 className='heading relative after:content-[""] after:absolute after:w-8 after:h-8 after:top-[-5px] after:left-[-15px] after:bg-[#ff772893] after:z-[-1] z-0 after:rounded-full font-bold mx-4'>Step-1</h4>
                                <h3 className='heading font-semibold text-[24px]'>Global SEO Research</h3>
                                <p className='font-subMenu text-para text-[14px] w-[65%]'>
                                    Practical tools and features make it easier to build and manage your site.
                                </p>
                            </div>
                        </div>
                        <div className='w-full h-full bg-imgThumb rounded-2xl'>

                        </div>
                    </div>
                    {/* card 2 */}
                    <div className='w-full h-[250px] grid grid-cols-2 gap-4'>
                    <div className='w-full h-full bg-imgThumb rounded-2xl'>

</div>
                        <div className='w-full h-full flex items-center '>
                            <div className='max-w-[80%] flex flex-col gap-4 p-5 bg-[#D8EAFF] rounded-2xl ml-auto'>
                                <h4 className='heading relative after:content-[""] after:absolute after:w-8 after:h-8 after:top-[-5px] after:left-[-15px] after:bg-[#ff772893] after:z-[-1] z-0 after:rounded-full font-bold mx-4'>Step-2</h4>
                                <h3 className='heading font-semibold text-[24px]'>Social media integration</h3>
                                <p className='font-subMenu text-para text-[14px] w-[65%]'>
                                Practical tools and features make it easier to build and manage your site.
                                </p>
                            </div>
                        </div>
                        
                    </div>
                    {/* card 3 */}
                    <div className='w-full h-[250px] grid grid-cols-2 gap-4'>
                        <div className='w-full h-full flex items-center'>
                            <div className='max-w-[80%] flex flex-col gap-4 p-5 bg-[#FBF1EC] rounded-2xl'>
                                <h4 className='heading relative after:content-[""] after:absolute after:w-8 after:h-8 after:top-[-5px] after:left-[-15px] after:bg-[#ff772893] after:z-[-1] z-0 after:rounded-full font-bold mx-4'>Step-3</h4>
                                <h3 className='heading font-semibold text-[24px]'>Launching the Application</h3>
                                <p className='font-subMenu text-para text-[14px] w-[65%]'>
                                Practical tools and features make it easier to build and manage your site.
                                </p>
                            </div>
                        </div>
                        <div className='w-full h-full bg-imgThumb rounded-2xl'>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills