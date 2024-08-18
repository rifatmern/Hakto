import React from 'react'
import Container from './Container'
import Image from 'next/image'
import banright from '@/assets/banright.png'
import { Josefin_Sans, Lato } from 'next/font/google'

const lato = Lato({
    subsets: ["latin"],
    weight: ['400', '700']
})
const Josef = Josefin_Sans({
    subsets: ["latin"],
    weight: ['400', '700']
})

const Banner = () => {
    return (
        <section className='bg-[#F2F0FF]'>
            <Container>
                <div className="flex pt-[39px] pb-[36px]">
                    <div className={`${lato.className} w-[60%] pt-[150px]`}>
                        <h4 className="font-semibold text-[#FB2E86] pb-[12px] text-[16px]">Best Furniture For Your Castle....</h4>
                        <p className={`${Josef.className} font-bold text-[56px] mb-[12px]`}>New Furniture Collection <br /> Trends in 2020</p>
                        <p className={`${lato.className} text-[#8A8FB9] text-[16px] font-semibold mb-[27px]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing <br /> in phasellus non in justo.</p>
                        <a href="" className={`${lato.className} font-semibold border-[1px] border-[#FB2E86] py-4 px-10 hover:bg-[#FB2E86] hover:text-white duration-500 rounded-sm`}>Shop Now</a>
                    </div>
                    <div className="w-[40%] pt-5">
                        <Image src={banright} alt='banright'/>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Banner