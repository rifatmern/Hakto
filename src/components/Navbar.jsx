"use client";

import React, { useState } from 'react';
import Container from './Container';
import Image from 'next/image';
import logo from "@/assets/Hekto.png";
import { Lato } from 'next/font/google';
import Link from 'next/link';
import { CiSearch } from "react-icons/ci";

const lato = Lato({
    subsets: ["latin"],
    weight: ["400"]
});

const Navbar = () => {

    const [searchInput, setSearchInput] = useState('');
    const [searchFilter, setSearchFilter] = useState([]);

    const handleSingleSearch = (e) => {
        setSearchInput(e.target.value);
        if (e.target.value === "") {
            setSearchFilter[("")];
        } else {
            let searchone = info.filter((item) => item.title.tolowerCase().includes(e.target.value));
            setSearchFilter(searchone)
        }
        // You can add the logic here to filter or handle search results
    }

    return (
        <section className='py-3'>
            <Container>
                <div className="flex justify-between items-center">
                    <div>
                        <Image src={logo} alt='logo' className='w-[98px] h-[30px]' />
                    </div>
                    <div>
                        <ul className={`${lato.className} flex gap-x-6 items-center`}>
                            <li className="hover:text-[#FB2E86]"><Link href="/">Home</Link></li>
                            <li className="hover:text-[#FB2E86]"><Link href="/pages">Pages</Link></li>
                            <li className="hover:text-[#FB2E86]"><Link href="/shop">Products</Link></li>
                            <li className="hover:text-[#FB2E86]"><Link href="/blog">Blog</Link></li>
                            <li className="hover:text-[#FB2E86]"><Link href="/shop">Shop</Link></li>
                            <li className="hover:text-[#FB2E86]"><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="flex">
                        <input
                            type="search"
                            placeholder="Search..."
                            className='w-[266px] h-[40px] outline-none border border-gray-400 px-2'
                        />
                        <CiSearch onClick={handleSingleSearch}
                            className='w-[40px] bg-[#FB2E86] h-[40px] py-[10px] text-white cursor-pointer' />
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Navbar;
