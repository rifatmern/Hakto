import Container from '@/components/Container'
import { Josef, lato } from '@/uitils/Font'
import React from 'react'
import { FaInstagram, FaFacebook, FaRegStar, FaStar, FaArrowRight } from 'react-icons/fa'
import { CiTwitter, CiHeart } from "react-icons/ci";
import Link from 'next/link';
import Image from 'next/image'




const page = () => {

    return (
        <>
            <section>
                <div className="pt-[98px] pb-[126px] bg-[rgba(246,245,255,1)]">
                    <Container>
                        <h1 className={`${Josef.className} font-bold text-[36px]`}>Shop Grid Default</h1>
                        <p className={`${lato.className} font-normal text-[16px]`}> <span className='hover:text-[#FB2E86] cursor-pointer'>Home </span> <span className='hover:text-[#FB2E86] cursor-pointer'>. Pages </span> <span className='hover:text-[#FB2E86] cursor-pointer'>. Shop Grid Default </span> </p>
                    </Container>
                </div>
            </section>
            <section>
                <Container>

                    <div className="mainBox flex py-[100px] gap-[40px] w-[100%]">
                        <div className=" ProdectImgBox flex h-[390px] gap-[10px] w-[50%]">
                            <div className="miniimgbox w-[25%]">
                                <Image className=' mb-[8px] w-[100%] h-[125px] border-[1px] border-[#9e9e9e] rounded-[6px]' src={"#"} width={100} height={125} alt="" />
                                <Image className=' mb-[8px] w-[100%] h-[125px] border-[1px] border-[#9e9e9e] rounded-[6px]' src={"#"} width={100} height={125} alt="" />
                                <Image className=' mb-[8px] w-[100%] h-[125px] border-[1px] border-[#9e9e9e] rounded-[6px]' src={"#"} width={100} height={125} alt="" />
                            </div>
                            <div className=" w-[75%]">
                                <Image src={'#'} className='h-[391px] w-[100%] border-[1px] border-[#9e9e9e] rounded-[6px]' alt="" />
                            </div>
                        </div>
                        <div className="ProdectDetailBox w-[50%] py-[30px]">
                            <h2 className={`${Josef.className} text-[36px] font-[700]`}>Playwood arm chair</h2>
                            <div className="review mb-[10px] items-center gap-4 flex">
                                <div className="reating flex item-center">
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                </div>
                                <div className="review">
                                    <span className='text-[#767676] ml-[10px]  text-[14px]'>(29)</span>
                                </div>
                            </div>
                            <icon></icon>
                            <h3 className='text-[16px] text-[#151875] font-[600] mb-[10px]'>$3200<span className=' ml-[10px] text-[#FB2E86]'>20% <span className=' uppercase '>discount</span></span> </h3>
                            <p className='text-[#8A8FB9] w-[549px] font-[600] text-[16px] mb-[10px] block'></p>
                            <h2 className=' pb-[10px] text-[20px] text-[#FB2E86] font-[700]'>Stock : <span className='font-[500] text-[#000]'>5</span></h2>
                            <Link href={"/cart"}><p className={`${Josef.className} flex w-[200px] font-semibold text-[16px] py-4 justify-center mt-[10px] items-center gap-x-2 border border-[#FB2E86]`}>Add To cart<CiHeart className='text-[25px]' /></p>
                            </Link>
                            <h2 className={`${Josef.className} pt-[30px] text-[#151875] font-semibold`}>Categories: </h2>
                            <h2 className={`${Josef.className} pt-[10px] text-[#151875] font-semibold`}>Tags: #</h2>
                            <div className="flex space-x-3 items-center">
                                <h2 className={`${Josef.className} pt-[10px] text-[#151875] font-semibold`}>Share</h2>
                                <div className="flex space-x-3">
                                    <FaFacebook />
                                    <FaInstagram />
                                    <CiTwitter />
                                </div>
                            </div>
                        </div>
                    </div>


                </Container>
            </section>
            <section className='bg-[#F9F8FE]'>
                <Container>
                    <div className="py-[100px]">
                        <div className="w-[60%]">
                            <ul className='flex space-x-[120px]'>
                                <li className={`${Josef.className} font-Sans font-bold text-[24px] text-[#0D0E43] mt-[50px]`}>Description</li>
                                <li className={`${Josef.className} font-Sans font-bold text-[24px] text-[#0D0E43] mt-[50px]`}>Additional Info</li>
                                <li className={`${Josef.className} font-Sans font-bold text-[24px] text-[#0D0E43] mt-[50px]`}>Reviews</li>
                                <li className={`${Josef.className} font-Sans font-bold text-[24px] text-[#0D0E43] mt-[50px]`}>Video</li>
                            </ul>
                        </div>
                        <div className="mt-[70px]">
                            <h3 className={`${Josef.className} font-Sans font-bold text-[22px] text-[#0D0E43] mt-[50px]`}>Varius tempor.</h3>
                            <p className={`${Josef.className} font-Sans font-bold text-[16px] text-[#A9ACC6] mt-[20px]`}>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>

                        </div>
                        <div className="mt-[70px]">
                            <h3 className={`${Josef.className} font-Sans font-bold text-[22px] text-[#0D0E43] mt-[50px]`}>More details</h3>
                            <div className="flex mt-[15px] items-center space-x-4">
                                <FaArrowRight className='text-[#A9ACC6]' />
                                <p className={`${Josef.className} font-Sans font-bold text-[16px] text-[#A9ACC6]`}>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            </div>
                            <div className="flex mt-[15px] items-center space-x-4">
                                <FaArrowRight className='text-[#A9ACC6]' />
                                <p className={`${Josef.className} font-Sans font-bold text-[16px] text-[#A9ACC6]`}>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            </div>
                            <div className="flex mt-[15px] items-center space-x-4">
                                <FaArrowRight className='text-[#A9ACC6]' />
                                <p className={`${Josef.className} font-Sans font-bold text-[16px] text-[#A9ACC6]`}>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            </div>
                            <div className="flex mt-[15px] items-center space-x-4">
                                <FaArrowRight className='text-[#A9ACC6]' />
                                <p className={`${Josef.className} font-Sans font-bold text-[16px] text-[#A9ACC6]`}>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            </div>
                        </div>
                    </div>
                    <div className="px-3">
                        <h2 className={`${Josef.className} font-bold text-[36px] text-[#0D0E43] mt-[20px]`}>Related Products</h2>
                        <div className="lg:flex justify-between mt-[40px]">
                            <div className="lg:w-[24%] w-full">
                                <Image className='w-full' src={"#"} alt="" />
                                <div className="flex justify-between px-2">
                                    <div className="">
                                        <h4 className='font-Sans font-bold text-[16px] text-[#0D0E43] mt-[20px] '>Mens Fashion Wear</h4>
                                    </div>
                                    <div className="flex mt-[20px] gap-1  items-center text-[#FFC416] ">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                </div>
                                <h5 className='font-Sans font-bold text-[16px] text-[#0D0E43] mt-[10px] px-2 '>$43.00</h5>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default page