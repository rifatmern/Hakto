import Container from '@/components/Container'
import { Josef, lato } from '@/uitils/Font'
import Image from 'next/image'
import React from 'react'
import Shopex from '@/components/Shopex'
import client from '@/assets/client.png'
import about from '@/assets/about.png'


const page = () => {
    return (
        <>
            <section>
                <div className="pt-[98px] pb-[126px] bg-[rgba(246,245,255,1)]">
                    <Container>
                        <h1 className={`${Josef.className} font-bold text-[36px]`}>About Us</h1>
                        <p className={`${lato.className} font-normal text-[16px]`}> <span className='hover:text-[#FB2E86] cursor-pointer'>Home </span> <span className='hover:text-[#FB2E86] cursor-pointer'>. Pages </span> <span className='hover:text-[#FB2E86] cursor-pointer'>. About Us</span> </p>
                    </Container>
                </div>
            </section>
            <section className='mt-[119px] mb-[160px]'>
                <Container>
                    <div className="flex justify-center">
                        <div className="w-[50%]">
                            <Image src={about} className='w-[570px] h-[409px]' />
                        </div>
                        <div className="w-[50%]">
                            <div className="mt-[50px]">
                                <h2 className={`${Josef.className} font-bold text-[42px] text-[#0D0E43]`} >Know About Our Ecomerce <br />Business, History</h2>
                            </div>
                            <div className="">
                                <p className={`${lato.className} text-[#B7BACB] w-[523px] mt-[21px] mb-[50px]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
                            </div>
                            <div className="mt-5">
                                <a href="" className={`${lato.className} font-semibold border-[1px] border-[#FB2E86] py-4 px-10 hover:bg-[#FB2E86] hover:text-white duration-500 rounded-sm`}>Contact us</a>
                            </div>
                        </div>

                    </div>
                </Container>
            </section>

            <section>
                <Container>
                    <div className="">
                        <Shopex />
                    </div>
                </Container>
            </section>

            <section className='bg-[#FBFBFF] py-[71px]'>
                <Container>
                    <div className="text-center">
                        <div className={`${lato.className} mt-[40px]`}>
                            <h3 className={`${Josef.className} font-bold text-[36px] text-[#0D0E43]`}>Our Client Say!</h3>
                            <Image className='ml-[50%] translate-x-[-50%] mt-[20px]' src={client} alt="Client Image" />
                            <h4 className=' font-bold text-[16px] text-[#0D0E43] mt-[20px]'>Selina Gomez</h4>
                            <h4 className='font-semibold text-[14px] text-[#8A8FB9]'>Ceo At Webecy Digital</h4>
                            <p className=' font-semibold text-[14px] text-[#8A8FB9] mt-[20px] lg:w-[40%] w-full ml-[50%] translate-x-[-50%]'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default page