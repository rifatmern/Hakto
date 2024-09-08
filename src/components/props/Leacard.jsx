import { Josefin_Sans } from 'next/font/google'
import React from 'react'
import Image from 'next/image'
import feapro from '@/assets/leapro.png'
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiZoomIn } from "react-icons/ci";


const josef = Josefin_Sans({
    subsets: ['latin'],
    weight: ['200', '400', '700']
})

const Leacard = async () => {
    // let { products } = await api("https://dummyjson.com/products")

    return (
        <>
            <div className="relative w-[360px] h-[306] flex flex-col overflow-hidden items-center bg-gray-100 text-center shadow-[0px_0px_20px_10px_rgba(246,247,251,1)] group">
                <div className=" flex items-center justify-center transition duration-500 ease-in-out ">
                    <Image src={feapro} alt="feapro" className="object-cover h-[233px] w-[229px] pt-[33px] pb-[7px]" />
                </div>


                <div className={`${josef.className} flex justify-between w-full items-center  bg-white duration-500 ease-in-out px-2 py-[15px]`}>
                    <h2 className="font-bold text-[18px] text-[#151875] duration-500 ease-in-out">Comfort Handy Craft</h2>
                    <p className="font-medium text-[14px]  text-[#FB2448] duration-500 ease-in-out">$42.00 <span className='ml-2 line-through'>$65.00</span></p>
                </div>

                <div className="absolute left-0 bottom-[-100px] group-hover:bottom-[0px] top-1 duration-700 ease-in-out flex items-center">
                    <ul className=" z-40 space-x-3 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 transition-all duration-700 ease-in-out">
                        <CiShoppingCart className="ml-[10px] text-[25px] scale-0 group-hover:scale-100 transform transition-transform duration-500 ease-in-out" />
                        <CiHeart className="text-[25px] scale-0 group-hover:scale-100 transform transition-transform duration-700 ease-in-out" />
                        <CiZoomIn className="text-[25px] scale-0 group-hover:scale-100 transform transition-transform duration-900 ease-in-out" />
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Leacard