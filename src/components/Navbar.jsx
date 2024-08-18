import React from 'react'
import Container from './Container'
import Image from 'next/image'
import logo from "@/assets/Hekto.png"
import { Lato } from 'next/font/google'
import Link from 'next/link'
import { CiSearch } from "react-icons/ci";


const lato = Lato({
    subsets: ["latin"],
    weight: ["400"]
})

const Navbar = () => {
    return (
        <section className='py-3'>
            <Container>
                <div className="flex justify-between items-center">
                    <div className="">
                        <Image src={logo} alt='logo' className='w-[98px] h-[30px]' />
                    </div>
                    <div className="">
                        <ul className={`${lato.className} flex gap-x-6 items-center`}>
                            <li className={`${lato.className} hover:text-[#FB2E86]`}><p><Link href={"/"}>Home</Link></p></li>
                            <li className={`${lato.className} hover:text-[#FB2E86]`}><Link href={""}>Pages</Link></li>
                            <li className={`${lato.className} hover:text-[#FB2E86]`}><Link href={"/shop"}>Products</Link></li>
                            <li className={`${lato.className} hover:text-[#FB2E86]`}><Link href={""}>Blog</Link></li>
                            <li className={`${lato.className} hover:text-[#FB2E86]`}><Link href={"/shop-list"}>Shop</Link></li>
                            <li className={`${lato.className} hover:text-[#FB2E86]`}><Link href={""}>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="flex">
                        <input type="search" name="" id="" className='w-[266px] h-[40px] outline-none border border-gray-400' />
                        <CiSearch className='w-[40px] bg-[#FB2E86] h-[40px] py-[10px] text-white cursor-pointer' />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Navbar