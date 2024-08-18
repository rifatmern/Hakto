import { Josefin_Sans, Lato } from 'next/font/google'
import React from 'react'
import Image from 'next/image'
import feapro from '@/assets/feapro.png'
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiZoomIn } from "react-icons/ci";


const josef = Josefin_Sans({
    subsets: ['latin'],
    weight: ['200', '400', '700']
})

const lato = Lato({
    subsets: ['latin'],
    weight: ['100', '400', '700']
})

const Feacard = () => {
    return (
        <>
            <div className="relative w-[270px] h-[361px] flex flex-col overflow-hidden items-center text-center shadow-[0px_0px_20px_10px_rgba(246,247,251,1)] group">
                <div className="h-[236px] w-[270px] flex items-center bg-gray-100 group-hover:bg-[#F7F7F7] justify-center transition duration-500 ease-in-out">
                    <Image src={feapro} alt="feapro" className="" />
                </div>
                <div className={`${lato.className} w-full flex flex-col items-center pt-[27px] pb-[17px] bg-white group-hover:bg-[rgba(47,26,196,1)] duration-500 ease-in-out`}>
                    <h2 className="font-bold text-[18px] text-[#FB2E86] group-hover:text-white duration-500 ease-in-out">Cantilever chair</h2>
                    <div className="flex justify-center space-x-2 mt-[12px]">
                        <div className="w-3 h-1 rounded-full bg-[#05E6B7] group-hover:bg-[#04c7a1] duration-500 ease-in-out"></div>
                        <div className="w-3 h-1 rounded-full bg-[#F701A8] group-hover:bg-[#d50191] duration-500 ease-in-out"></div>
                        <div className="w-3 h-1 rounded-full bg-[#00009D] group-hover:bg-[#FFF] duration-500 ease-in-out"></div>
                    </div>
                    <p className={`${josef.className} font-medium text-[14px] mt-[12px] text-[#151875] group-hover:text-white duration-500 ease-in-out`}>Code - Y523201</p>
                    <p className="font-medium text-[14px] mt-[12px] text-[#151875] group-hover:text-white duration-500 ease-in-out">$42.00</p>
                </div>

                <div className="absolute left-[-100px] group-hover:left-[0px] top-1 duration-700 ease-in-out flex items-center">
                    <ul className="flex pr-5 z-40 space-x-3 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 transition-all duration-700 ease-in-out">
                        <CiShoppingCart className="text-[25px] scale-0 group-hover:scale-100 transform transition-transform duration-500 ease-in-out" />
                        <CiHeart className="text-[25px] scale-0 group-hover:scale-100 transform transition-transform duration-700 ease-in-out" />
                        <CiZoomIn className="text-[25px] scale-0 group-hover:scale-100 transform transition-transform duration-900 ease-in-out" />
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Feacard