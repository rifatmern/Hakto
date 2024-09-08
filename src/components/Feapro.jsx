"use client";
import { Josefin_Sans } from 'next/font/google';
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


const Feapro = async (item, index) => {
    let { products } = await api("https://dummyjson.com/products");

    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
        appendDots: (dots) => {
            const activeIndex = dots.findIndex((dot) =>
                dot.props.className.includes("slick-active")
            );
            const dotsToShow = dots.slice(0, 4); // Limiting to 4 dots

            return (
                <div
                    style={{
                        borderRadius: "10px",
                        padding: "10px",
                        position: "absolute",
                        left: "50%",
                        bottom: "-35px",
                        transform: "translateX(-50%)", // Center the dots
                        width: "fit-content", // Ensure the dots are centered by content width
                    }}
                >
                    <div className="w-[91px] h-[4px] flex gap-x-[6px]">
                        {dotsToShow.map((dot, index) => (
                            <div
                                key={index}
                                className={`h-[4px] rounded-[2px] ${
                                    index === activeIndex % 4
                                        ? "w-[21px] bg-[#FB2E86]"
                                        : "w-[16px] bg-[#FEBAD7]"
                                }`}
                            ></div>
                        ))}
                    </div>
                </div>
            );
        },
        customPaging: (i) => {
            const totalDots = 4; // Set total dots to 4
            return (
                <div
                    style={{
                        height: "4px",
                        width: "16px",
                        borderRadius: "2px",
                        backgroundColor: i % totalDots === 0 ? "#FB2E86" : "#FEBAD7",
                    }}
                />
            );
        },
    };

    return (
        <section key={index} className="pt-[129px] pb-[120px]">
            <Container>
                <div className="text-center">
                    <h1 className={`${josef.className} text-[42px] font-bold pb-[48px]`}>
                        Featured Products
                    </h1>
                </div>
                <Slider {...settings}>
                    {products?.map((item) => (
                        <Link href="/shop" key={item.id}>
                            <Feacard item={item} />
                        </Link>
                    ))}
                </Slider>
            </Container>
        </section>
    );
};

export default Feapro;
