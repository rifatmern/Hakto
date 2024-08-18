import React from 'react'
import Container from './Container'
import { Josefin_Sans, Lato } from 'next/font/google'
import Leacard from './props/Leacard'


const josef = Josefin_Sans({
    subsets: ['latin'],
    weight: ['200', '400', '700']
})

const lato = Lato({
    subsets: ['latin'],
    weight: ['100', '400', '700']
})

const Leapro = () => {
    return (
        <section>
            <Container>
                <div className='text-center'>
                    <h2 className={`${josef.className} font-bold text-[42px]`}>Leatest Products</h2>
                </div>

                <div className="mt-[19px]">
                    <ul className='flex  justify-center space-x-7'>
                        <li className={`${lato.className} cursor-pointer items-center font-semibold text-[16px] text-[#0D0E43] duration-300 ease-in-out hover:text-[#FB2E86]`}>New Arrival</li>
                        <li className={`${lato.className} cursor-pointer items-center font-semibold text-[16px] text-[#0D0E43] duration-300 ease-in-out hover:text-[#FB2E86]`}>Best Seller</li>
                        <li className={`${lato.className} cursor-pointer items-center font-semibold text-[16px] text-[#0D0E43] duration-300 ease-in-out hover:text-[#FB2E86]`}>Featured</li>
                        <li className={`${lato.className} cursor-pointer items-center font-semibold text-[16px] text-[#0D0E43] duration-300 ease-in-out hover:text-[#FB2E86]`}>Special Offer</li>
                    </ul>
                </div>
                <div className="flex flex-wrap justify-center space-x-7 pt-[62px]">
                    <Leacard />
                    <Leacard />
                    <Leacard />
                </div>
                <div className="flex flex-wrap justify-center space-x-7 mt-[120px]">
                    <Leacard />
                    <Leacard />
                    <Leacard />
                </div>
            </Container>
        </section>
    )
}

export default Leapro