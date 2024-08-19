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
                        <div className="w-[60%]">
                            <div className="mt-[50px]">
                                <h2 className={`${josef.className} font-bold text-[42px] text-[#0D0E43]`} >20% Discount Of All Products</h2>
                                <p className={`${lato.className} font-semibold text-[#FB2E86]`}>Eams Sofa Compact</p>
                            </div>
                            {/* <div className="">
                                <div className="flex items-center">
                                    <div className="h-[15px] w-[15px] bg-[#FB2E86] rounded-full"></div>
                                    <div className="">
                                        <h4 className={`${lato.className} font-normal text-[16px] text-[#ACABC3] ml-[20px] items-center `} >All frames constructed with hardwood solids and laminates</h4>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="h-[15px] w-[15px] bg-[#0D0E43] rounded-full"></div>
                                    <div className="">
                                        <h4 className={`${lato.className} font-normal text-[16px] text-[#ACABC3] ml-[20px] items-center`}  >Reinforced with double wood dowels, glue, screw - nails cornerblocks <br /> and machine nails</h4>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="h-[15px] w-[15px] bg-[#05E6B7] rounded-full"></div>
                                    <div className="">
                                        <h4 className={`${lato.className} font-normal text-[16px] text-[#ACABC3] ml-[20px] items-center`}  >Arms, backs and seats are structurally reinforced</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="flex mt-[50px] gap-6 items-center">
                                <div className="">
                                    <a href="" className={`${lato.className} font-semibold border-[1px] border-[#FB2E86] py-4 px-10 hover:bg-[#FB2E86] hover:text-white duration-500 rounded-sm`}>Add To Cart</a>
                                </div>
                                <div className="">
                                    <h2 className={`${josef.className} font-bold text-[14px] text-[#0D0E43] `}>B&B Italian Sofa </h2>
                                    <h3 className={`${josef.className} font-bold text-[14px] text-[#0D0E43] `}>$32.00</h3>
                                </div>
                            </div> */}

                        </div>
                        <div className="w-[40%]">
                            <Image src={discount}/>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Discount