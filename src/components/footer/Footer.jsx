import React from 'react'
import logo from "/logo.svg";

const Footer = () => {
    return (
        <>
            <div className='max-w-[1024px] mx-auto py-10'>
                <div className='w-full flex'>
                    <div className='w-1/2 pr-10'>
                        <div>
                            <img src={logo} alt="" />
                        </div>
                        <div>
                            <p className='font-blog-sub-h text-[14px] leading-7 text-para py-5'>Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.</p>
                        </div>
                    </div>
                    <div className='w-1/2 flex gap-10 px-10 capitalize font-semibold text-[#413F45]'>
                        <div>
                            <h3 className='header text-[18px] pb-5'>features</h3>
                            <ul className='text-[#6C7D93] text-[14px] flex flex-col gap-3'>
                                <li>home</li>
                                <li>about</li>
                                <li>benifit</li>
                                <li>pricing</li>
                                <li>blog</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='header text-[18px] pb-5'>products</h3>
                            <ul className='text-[#6C7D93] text-[14px] flex flex-col gap-3'>
                                <li>task management</li>
                                <li>company growth</li>
                                <li>time tracking</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='header text-[18px] pb-5'>support</h3>
                            <ul className='text-[#6C7D93] text-[14px] flex flex-col gap-3'>
                                <li>customer serivce</li>
                                <li>accessibility</li>
                                <li>contact us</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-between py-5 font-blog-sub-h text-[14px] leading-7 text-para '>
                    <p>@2024 Innovate.All rights reserved.</p>
                    <span className='flex gap-5'>
                        <p><a href="">Privacy policy</a></p>
                        <p><a href="">Terms & condition</a></p>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Footer