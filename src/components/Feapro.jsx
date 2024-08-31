"use client"
import { Josefin_Sans, Lato } from 'next/font/google';
import React from 'react';
import Container from './Container';
import Feacard from './props/Feacard';
import Link from 'next/link';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import api from '@/uitils/Api';



const josef = Josefin_Sans({
    subsets: ['latin'],
    weight: ['200', '400', '700'],
});

const lato = Lato({
    subsets: ['latin'],
    weight: ['100', '400', '700'],
});

const Feapro = async (item, index) => {
    let { products } = await api("https://dummyjson.com/products")


    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
    };


    return (
        <section key={index} className="pt-[129px] pb-[120px]">
            <Container>
                <div className="text-center">
                    <h1 className={`${josef.className} text-[42px] font-bold pb-[48px]`}>Featured Products</h1>
                </div>
                <Slider {...settings}>
                    {
                        products?.map((item) => (
                            <Link href={"/shop"}>< Feacard item={item} /></Link>
                        ))
                    }
                </Slider>
            </Container>
        </section>
    );
};

export default Feapro;
