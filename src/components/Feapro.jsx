import { Josefin_Sans, Lato } from 'next/font/google';
import React from 'react';
import Container from './Container';
import Feacard from './props/Feacard';
import Link from 'next/link';


const josef = Josefin_Sans({
    subsets: ['latin'],
    weight: ['200', '400', '700'],
});

const lato = Lato({
    subsets: ['latin'],
    weight: ['100', '400', '700'],
});

const Feapro = () => {
    return (
        <section className="pt-[129px] pb-[120px]">
            <Container>
                <div className="text-center">
                    <h1 className={`${josef.className} text-[42px] font-bold pb-[48px]`}>Featured Products</h1>
                </div>
                <div className="flex justify-center flex-wrap space-x-5">
                <Feacard />
                </div>
            </Container>
        </section>
    );
};

export default Feapro;
