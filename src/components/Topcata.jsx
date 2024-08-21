import React from 'react'
import Container from './Container'
import { Josef, lato } from '@/uitils/Font'
import top from '@/assets/top.png'
import Image from 'next/image'
import Cover from '@/assets/cover.png'
import Sponsor from '@/assets/sponsor.png'

const Topcata = () => {
    return (
        <section>
            <Container>
                <div className='text-center pb-[60px]'>
                    <h2 className={`${Josef.className} font-bold text-[42px]`}>Discount Item</h2>
                </div>

                <div className=" flex justify-center space-x-[50px] ">
                    <div className="flex flex-col w-[269px] h-[345px]">
                        <div className="w-[269px] h-[269px] bg-[#F6F7FB] rounded-full text-center items-center py-[46px] px-[40px]">
                            <Image src={top} className='' />
                        </div>
                        <div className={`${Josef.className} text-center`}>
                            <h3 className={`${Josef.className} font-medium text-[20px] text-[#151875]`}>Mini LCW Chair</h3>
                            <h3 className={`${Josef.className} font-medium text-[20px] text-[#151875]`}>$56.00</h3>
                        </div>
                    </div>
                    <div className="flex flex-col w-[269px] h-[345px]">
                        <div className="w-[269px] h-[269px] bg-[#F6F7FB] rounded-full text-center items-center py-[46px] px-[40px]">
                            <Image src={top} className='' />
                        </div>
                        <div className={`${Josef.className} text-center`}>
                            <h3 className={`${Josef.className} font-medium text-[20px] text-[#151875]`}>Mini LCW Chair</h3>
                            <h3 className={`${Josef.className} font-medium text-[20px] text-[#151875]`}>$56.00</h3>
                        </div>
                    </div>
                    <div className="flex flex-col w-[269px] h-[345px]">
                        <div className="w-[269px] h-[269px] bg-[#F6F7FB] rounded-full text-center items-center py-[46px] px-[40px]">
                            <Image src={top} className='' />
                        </div>
                        <div className={`${Josef.className} text-center`}>
                            <h3 className={`${Josef.className} font-medium text-[20px] text-[#151875]`}>Mini LCW Chair</h3>
                            <h3 className={`${Josef.className} font-medium text-[20px] text-[#151875]`}>$56.00</h3>
                        </div>
                    </div>
                    <div className="flex flex-col w-[269px] h-[345px]">
                        <div className="w-[269px] h-[269px] bg-[#F6F7FB] rounded-full text-center items-center py-[46px] px-[40px]">
                            <Image src={top} className='' />
                        </div>
                        <div className={`${Josef.className} text-center`}>
                            <h3 className={`${Josef.className} font-medium text-[20px] text-[#151875]`}>Mini LCW Chair</h3>
                            <h3 className={`${Josef.className} font-medium text-[20px] text-[#151875]`}>$56.00</h3>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="relative mt-[50px]">
                <Image src={Cover} className="w-full h-full object-cover" alt="Cover Image" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
                    <h3 className={`${Josef.className} font-bold lg:text-[42px] text-[32px] text-[#0D0E43] mb-[40px]`}>
                        Get Latest Update By Subscribing <br /> to Our Newsletter
                    </h3>
                    <a href="" className={`${lato.className} font-semibold border-[1px] border-[#FB2E86] py-4 px-10 hover:bg-[#FB2E86] hover:text-white duration-500 rounded-sm`}>Shop Now</a>

                </div>
            </div>
            <Container>
                <div className="py-[96px] flex justify-center">
                    <Image src={Sponsor} />
                </div>
            </Container>
        </section>
    )
}

export default Topcata