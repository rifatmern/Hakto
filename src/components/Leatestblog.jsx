import React from 'react'
import Container from './Container'
import { Josef, lato } from '@/uitils/Font'
import Image from 'next/image'
import leablog1 from '@/assets/leablog1.png'

const Leatestblog = () => {
    return (
        <section className='pb-[115px] bg-[rgba(255, 255, 255, 1)] shadow-[0px_8px_40px_0px_rgba(49,32,138,0.05)]'>
            <Container>
                <div className='text-center pb-[60px]'>
                    <h2 className={`${Josef.className} font-bold text-[42px]`}>Leatest Blog</h2>
                </div>

                <div className="flex  justify-center space-x-10">
                <div className=" w-[370px] h-[494px]">
                    <div className="">
                        <Image src={leablog1} />
                    </div>
                    <div className="pt-[19px] pb-[35px]">
                        <h5 className={`${lato.className} font-bold text-[22px] text-[#0D0E43] mt-[20px]`}>SaberAli</h5>
                        <h2 className={`${Josef.className} font-bold text-[22px] text-[#0D0E43] mt-[20px]`}>Top esssential Trends in 2021</h2>
                        <p className={`${lato.className} text-[16px] font-medium text-[#72718F] py-[17px] pb-[14px]`}>More off this less hello samlande lied much
                            over tightly circa horse taped mightly</p>
                        <a href="" className={`${lato.className} font-normal text-[16px] hover:underline hover:text-[#FB2E86]`}>Read More</a>
                    </div>
                </div>
                <div className=" w-[370px] h-[494px]">
                    <div className="">
                        <Image src={leablog1} />
                    </div>
                    <div className="pt-[19px] pb-[35px]">
                        <h5 className={`${lato.className} font-bold text-[22px] text-[#0D0E43] mt-[20px]`}>SaberAli</h5>
                        <h2 className={`${Josef.className} font-bold text-[22px] text-[#0D0E43] mt-[20px]`}>Top esssential Trends in 2021</h2>
                        <p className={`${lato.className} text-[16px] font-medium text-[#72718F] py-[17px] pb-[14px]`}>More off this less hello samlande lied much
                            over tightly circa horse taped mightly</p>
                        <a href="" className={`${lato.className} font-normal text-[16px] hover:underline hover:text-[#FB2E86]`}>Read More</a>
                    </div>
                </div>
                <div className=" w-[370px] h-[494px]">
                    <div className="">
                        <Image src={leablog1} />
                    </div>
                    <div className="pt-[19px] pb-[35px]">
                        <h5 className={`${lato.className} font-bold text-[22px] text-[#0D0E43] mt-[20px]`}>SaberAli</h5>
                        <h2 className={`${Josef.className} font-bold text-[22px] text-[#0D0E43] mt-[20px]`}>Top esssential Trends in 2021</h2>
                        <p className={`${lato.className} text-[16px] font-medium text-[#72718F] py-[17px] pb-[14px]`}>More off this less hello samlande lied much
                            over tightly circa horse taped mightly</p>
                        <a href="" className={`${lato.className} font-normal text-[16px] hover:underline hover:text-[#FB2E86]`}>Read More</a>
                    </div>
                </div>
                </div>
            </Container>
        </section>
    )
}

export default Leatestblog