import React from 'react'
import unique from '@/assets/unique.png'
import Container from './Container'
import Image from 'next/image'
import { Josefin_Sans, Lato } from 'next/font/google'

const lato = Lato({
    subsets: ["latin"],
    weight: ['400', '700']
})
const Josef = Josefin_Sans({
    subsets: ["latin"],
    weight: ['400', '700']
})

const Unique = () => {
    return (
        <section className='bg-[#F1F0FF]'>
            <Container>
                <div className="flex justify-center space-x-8">
                    <div className="w-[40%]">
                        <Image src={unique} alt='#' />
                    </div>
                    <div className="w-[60%]">
                        <div className="mt-[50px]">
                            <h2 className={`${Josef.className} font-bold text-[42px] text-[#0D0E43]`} >Unique Features Of leatest & <br />
                                Trending Poducts</h2>
                        </div>
                        <div className="space-y-4">
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
                                <h2 className={`${Josef.className} font-bold text-[14px] text-[#0D0E43] `}>B&B Italian Sofa </h2>
                                <h3 className={`${Josef.className} font-bold text-[14px] text-[#0D0E43] `}>$32.00</h3>
                            </div>
                        </div>

                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Unique
