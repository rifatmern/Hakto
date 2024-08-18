import React from 'react'
import { IoMailUnreadOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import Container from './Container';
import { Josefin_Sans } from 'next/font/google';
import Link from 'next/link';

const josef = Josefin_Sans(
    {
        subsets: ["latin"],
        weight: ["400"]
    }
)



const Header = () => {
    return (
        <section className='bg-[#7E33E0]'>
            <Container>
                <div className="flex items-center py-2">
                    <div className="w-[30%] flex">
                        <div className="flex items-center text-white">
                            <IoMailUnreadOutline />
                            <p className={`${josef.className} pl-2`}>ritoukir@gmail.com</p>
                        </div>
                    </div>
                    <div className="w-[30%]">
                        <div className={`${josef.className} flex items-center text-white`}>
                            <FaPhoneAlt />
                            <p className='pl-2'>+8801852449087</p>
                        </div>
                    </div>
                    <div className="w-[40%] flex justify-end">
                        <ul className={`${josef.className} flex items-center gap-x-5`}>
                            <li>
                                <select name="" id="" className={`${josef.className} bg-[#7E33E0] text-white cursor-pointer`}>
                                    <option value="">English</option>
                                    <option value="">Bangla</option>
                                    <option value="">Hindi</option>
                                </select>
                            </li>
                            <li>
                                <select name="" id="" className={`${josef.className} bg-[#7E33E0] text-white cursor-pointer`}>
                                    <option value="" >USD</option>
                                    <option value="">BDT</option>
                                    <option value="">RUP</option>
                                </select>
                            </li>
                            <li className={`${josef.className} flex bg-[#7E33E0] text-white cursor-pointer items-center`} ><Link href={"/login"}>login</Link><CiUser className='ml-2' /></li>
                            <li className={`${josef.className} flex bg-[#7E33E0] text-white cursor-pointer items-center`}>Wishlist<CiHeart className='ml-2' /></li>
                            <li className="flex bg-[#7E33E0] text-white cursor-pointer items-center"><CiShoppingCart className='ml-2' /></li>
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Header