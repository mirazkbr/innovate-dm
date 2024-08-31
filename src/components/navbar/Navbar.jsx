import React from 'react'
import logo from '/logo.svg'
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
    return (
        <>
            <div className='max-w-[1024px] h-[50px] mx-auto '>
                <div className='w-full flex justify-between items-center capitalize font-semibold font-primary text-primary text-[14px]'>
                    {/* logo section */}
                    <div id='logo' className='w-auto h-[40px]'>
                        <a href="#"  draggable='false'>
                            <img src={logo} alt="" className='w-full h-full object-contain' draggable='false'/>
                        </a>
                    </div>
                    {/* nav section */}
                    <nav>
                        <ul className='w-auto flex gap-x-2 px-2'>
                            <li className='group py-3 px-3'>
                                <a href="" className='h-auto flex items-center'>
                                    <span className='group-hover:text-logo'>home</span>
                                    <MdKeyboardArrowDown />
                                </a>
                            </li>
                            <li className='group py-3 px-3'>
                                <a href="" className='h-auto flex items-center'>
                                    <span className='group-hover:text-logo'>about</span>
                                    <MdKeyboardArrowDown />
                                </a>
                            </li>
                            <li className='group py-3 px-3'>
                                <a href="" className='h-auto flex items-center'>
                                    <span className='group-hover:text-logo'>portfolio</span>
                                    <MdKeyboardArrowDown />
                                </a>
                            </li>
                            <li className='group py-3 px-3'>
                                <a href="" className='h-auto flex items-center'>
                                    <span className='group-hover:text-logo'>price</span>
                                    <MdKeyboardArrowDown />
                                </a>
                            </li>
                            <li className='group py-3 px-3'>
                                <a href="" className='h-auto flex items-center'>
                                    <span className='group-hover:text-logo'>blog</span>
                                    <MdKeyboardArrowDown />
                                </a>
                            </li>
                        </ul>
                    </nav>
                    {/* contact btn */}
                    <div>
                        <button className='capitalize text-white bg-logo px-5 py-3 rounded-[50px]'>
                            contact us
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar