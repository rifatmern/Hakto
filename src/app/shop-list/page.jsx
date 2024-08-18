import React from 'react'
import { Josefin_Sans, Lato } from 'next/font/google';
import Container from '@/components/Container';

const josef = Josefin_Sans({
    subsets: ["latin"],
    weight: ['400', '700'],
});

const lato = Lato({
    subsets: ['latin'],
    weight: ['100', '400', '700'],
});

const page = () => {
    return (
        <section>
            <div className="pt-[98px] pb-[126px] bg-[rgba(246,245,255,1)]">
                <Container>
                    <h1 className={`${josef.className} font-bold text-[36px]`}>Shop List</h1>
                    <p className={`${lato.className} font-normal text-[16px]`}> <span className='hover:text-[#FB2E86] cursor-pointer'>Home </span> <span className='hover:text-[#FB2E86] cursor-pointer'>. Pages </span> <span className='hover:text-[#FB2E86] cursor-pointer'>. Shop List </span> </p>
                </Container>
            </div>
        </section>
    )
}

export default page