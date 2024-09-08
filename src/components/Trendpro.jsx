import React from 'react'
import Container from './Container'
import { Josefin_Sans, Lato } from 'next/font/google'
import Shop from './props/Shop'
import trend from '@/assets/trend.png'
import trend2 from '@/assets/trend2.png'
import trenpro1 from '@/assets/trenpro1.png'
import trenpro2 from '@/assets/trenpro2.png'
import trenpro3 from '@/assets/trenpro3.png'
import Image from 'next/image'

const lato = Lato({
    subsets: ["latin"],
    weight: ['400', '700']
})
const Josef = Josefin_Sans({
    subsets: ["latin"],
    weight: ['400', '700']
})

const Trendpro = () => {
    return (
        <>
            <section className='py-[146px]'>
                <Container>
                    <div className="text-center">
                        <h1 className={`${Josef.className} font-bold text-[42px]`}>Trending Products</h1>
                    </div>
                    <div className="flex flex-wrap justify-center space-x-9">
                        <Shop />
                    </div>
                </Container>
            </section>
            <section className='pb-[128px]'>
                <Container>
                    <div className="flex justify-center">
                        <div className="w-[29%]">
                            <div className="w-[420px] h-[270px] bg-[#FFF6FB] relative px-8">
                                <h2 className={`${Josef.className} text-[26] text-[#151875] font-semibold pt-[34px]`}>23% off in all products</h2>
                                <p className={`${lato.className} font-normal text-[16px] hover:underline hover:text-[#FB2E86]`}>Shop Now</p>
                                <Image src={trend} alt='#' className=' absolute right-0 bottom-0 mb-1 w-[213px] h-[207px]' />
                            </div>
                        </div>
                        <div className="w-[29%]">
                            <div className="w-[420px] h-[270px] bg-[#FFF6FB] relative px-8">
                                <h2 className={`${Josef.className} text-[26] text-[#151875] font-semibold pt-[34px]`}>23% off in all products</h2>
                                <p className={`${lato.className} font-normal text-[16px] hover:underline hover:text-[#FB2E86]`}>View Collection</p>
                                <Image src={trend2} alt='#' className=' absolute right-0 bottom-0 mb-1 w-[213px] h-[207px]' />
                            </div>
                        </div>
                        
                        <div className="w-[20%] flex flex-col justify-between">
                            <div className="flex justify-between items-center">
                                <div className="bg-[#F5F6F8] w-[107px] h-[74px] flex justify-center">
                                    <Image src={trenpro1} alt='#'/>
                                </div>
                                <div className="">
                                    <h1 className={`${Josef.className} font-normal text-[#151875] text-[14px]`}>Executive Seat chair</h1>
                                    <p className={`${Josef.className} font-normal text-[#151875] text-[12px]`}>$3200</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="bg-[#F5F6F8] w-[107px] h-[74px] flex justify-center">
                                    <Image src={trenpro2} alt='#'/>
                                </div>
                                <div className="">
                                    <h1 className={`${Josef.className} font-normal text-[#151875] text-[14px]`}>Executive Seat chair</h1>
                                    <p className={`${Josef.className} font-normal text-[#151875] text-[12px]`}>$3200</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="bg-[#F5F6F8] w-[107px] h-[74px] flex justify-center">
                                    <Image src={trenpro3} alt='#'/>
                                </div>
                                <div className="">
                                    <h1 className={`${Josef.className} font-normal text-[#151875] text-[14px]`}>Executive Seat chair</h1>
                                    <p className={`${Josef.className} font-normal text-[#151875] text-[12px]`}>$3200</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Trendpro
