import React, { useContext } from 'react'
import { Josefin_Sans, Lato } from 'next/font/google';
import Container from '@/components/Container';
import { LuLayoutGrid } from "react-icons/lu";
import { FaList } from "react-icons/fa6";
import Image from 'next/image';
import List from '@/components/props/List';
import sponsor from '@/assets/sponsor.png'
import Link from 'next/link';


const josef = Josefin_Sans({
    subsets: ["latin"],
    weight: ['400', '700'],
});

const lato = Lato({
    subsets: ['latin'],
    weight: ['100', '400', '700'],
});

const page = () => {

    return (
        <>
            <section>
                <div className="pt-[98px] pb-[126px] bg-[rgba(246,245,255,1)]">
                    <Container>
                        <h1 className={`${josef.className} font-bold text-[36px]`}>Shop List</h1>
                        <p className={`${lato.className} font-normal text-[16px]`}> <span className='hover:text-[#FB2E86] cursor-pointer'>Home </span> <span className='hover:text-[#FB2E86] cursor-pointer'>. Pages </span> <span className='hover:text-[#FB2E86] cursor-pointer'>. Shop List </span> </p>
                    </Container>
                </div>
            </section>

            <section>
                <Container>
                    <div className="flex justify-between pt-[124px] pb-[144px]">
                        <div className="w-[30%]">
                            <h2 className={`${josef.className} text-[#151875] text-[22px]`}>Ecommerce Acceories & Fashion item </h2>
                            <p className={`${lato.className} text-[#8A8FB9] font-normal`}>About 9,620 results (0.62 seconds)</p>
                        </div>
                        <div className="w-[70%] flex justify-end items-center space-x-20">
                            <div className={`${lato.className} flex items-center space-x-4 text-[#3F509E] text-sm`}>
                                <p>Per Page:</p>
                                <input type="text" className='w-[55px] h-[28px] outline-none border border-[rgba(231, 230, 239, 1)] text-sm px-2' />
                            </div>
                            <div className="flex items-center space-x-4 text-sm">
                                <p>Sort By:</p>
                                <select name="" id="" className='w-[98px] h-[28px] px-2 text-[12px] text-[#8A8FB9] outline-none border border-[rgba(231, 230, 239, 1)]'>
                                    <option value="">Best Match</option>
                                    <option value="">12</option>
                                </select>
                            </div>

                            <div className="flex items-center space-x-10">
                                <div className="flex items-center space-x-2 text-sm text-[#3F509E]">
                                    <p>View:</p>
                                    <Link href={"/shop"}><LuLayoutGrid className="text-base" /></Link>
                                    <FaList className="text-base" />
                                </div>
                                <div>
                                    <input type="text" className='w-[130px] h-[28px] outline-none border border-[rgba(231, 230, 239, 1)] text-sm px-2' />
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <section>
                <Container>
                    <div className="">
                        <List />
                    </div>
                    <div className="flex justify-center pt-[200px] pb-[115px]">
                        <Image src={sponsor} alt='#'/>
                    </div>
                </Container>
            </section>
        </>


    )
}

export default page