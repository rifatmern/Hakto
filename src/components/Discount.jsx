import React from 'react'
import Container from './Container'
import { Josefin_Sans, Lato } from 'next/font/google'
import discount from '@/assets/discount.png'
import Image from 'next/image'



const josef = Josefin_Sans({
    subsets: ['latin'],
    weight: ['200', '400', '700']
})

const lato = Lato({
    subsets: ['latin'],
    weight: ['100', '400', '700']
})


const Discount = () => {
    return (
        <>
            <section>
                <Container>
                    <div className='text-center'>
                        <h2 className={`${josef.className} font-bold text-[42px]`}>Discount Item</h2>
                    </div>

                    <div className="mt-[19px]">
                        <ul className='flex  justify-center space-x-7'>
                            <li className={`${lato.className} cursor-pointer items-center font-semibold text-[16px] text-[#0D0E43] duration-300 ease-in-out hover:text-[#FB2E86]`}>Wood Chair</li>
                            <li className={`${lato.className} cursor-pointer items-center font-semibold text-[16px] text-[#0D0E43] duration-300 ease-in-out hover:text-[#FB2E86]`}>Plastic Chair</li>
                            <li className={`${lato.className} cursor-pointer items-center font-semibold text-[16px] text-[#0D0E43] duration-300 ease-in-out hover:text-[#FB2E86]`}>Sofa Colletion</li>
                        </ul>
                    </div>

                    <div className="flex justify-center">
                        <div className="w-[50%]">
                            <div className="mt-[50px]">
                                <h2 className={`${josef.className} font-bold text-[42px] text-[#0D0E43]`} >20% Discount Of All Products</h2>
                                <p className={`${lato.className} font-semibold text-[#FB2E86]`}>Eams Sofa Compact</p>
                            </div>
                            <div className="">
                                <p className={`${lato.className} text-[#B7BACB] w-[523px] mt-[21px]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
                            </div>
                            <div className={`${lato.className} flex space-x-4 text-[#B7BACB] py-8`}>
                                <ul className=''>
                                    <li>Material expose like metals</li>
                                    <li>Simple neutral colours.</li>
                                </ul>
                                <ul>
                                    <li>Clear lines and geomatric figures</li>
                                    <li>Material expose like metals</li>
                                </ul>
                            </div>
                            <div className="mt-5">
                                <a href="" className={`${lato.className} font-semibold border-[1px] border-[#FB2E86] py-4 px-10 hover:bg-[#FB2E86] hover:text-white duration-500 rounded-sm`}>Shop Now</a>
                            </div>
                        </div>
                        <div className="w-[50%]">
                            <Image src={discount} className='w-[]' />
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Discount