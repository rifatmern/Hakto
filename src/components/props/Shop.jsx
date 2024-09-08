"use client";

import { Josefin_Sans, Lato } from 'next/font/google';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { CiShoppingCart, CiHeart, CiZoomIn } from "react-icons/ci";
import api from '@/uitils/Api';

const josef = Josefin_Sans({
    subsets: ['latin'],
    weight: ['200', '400', '700'],
});

const lato = Lato({
    subsets: ['latin'],
    weight: ['100', '400', '700'],
});

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    useEffect(() => {
        const fetchProducts = async () => {
            let { products } = await api("https://dummyjson.com/products");
            setProducts(products);
        };
        fetchProducts();
    }, []);

    const totalPages = Math.ceil(products.length / itemsPerPage);

    const currentItems = products.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            <div className="flex flex-wrap justify-center gap-5 mt-[40px]">
                {currentItems.map((item, index) => (
                    <div
                        key={index}
                        className="relative w-[270px] h-[363px] flex flex-col overflow-hidden items-center text-center shadow-[0px_0px_20px_10px_rgba(246,247,251,1)] group"
                    >
                        <div className="flex items-center h-[280px] justify-center w-full transition duration-500 ease-in-out group-hover:bg-[#EBF4F3]">
                            <Image
                                src={item.thumbnail}
                                width={201}
                                height={201}
                                alt={item.title}
                                className="object-cover h-[201px] w-[201px] pt-[33px] pb-[7px]"
                            />
                        </div>
                        <div className={`${josef.className} flex flex-col justify-between w-full items-center bg-white duration-500 ease-in-out pt-[18px] pb-[10px]`}>
                            <h2 className="font-bold text-[18px] text-[#151875] duration-500 ease-in-out">
                                {item.title}
                            </h2>
                            <div className="flex justify-center pb-[8px] space-x-2">
                                <div className="w-3 h-3 rounded-full bg-[#05E6B7]  duration-500 ease-in-out"></div>
                                <div className="w-3 h-3 rounded-full bg-[#F701A8]  duration-500 ease-in-out"></div>
                                <div className="w-3 h-3 rounded-full bg-[#00009D]  duration-500 ease-in-out"></div>
                            </div>
                            <p className="font-medium text-[14px] text-[#FB2448] duration-500 ease-in-out">
                                ${item.price} <span className='ml-2 line-through'>${item.price}</span>
                            </p>
                        </div>
                        <div className="absolute left-0 bottom-[-100px] group-hover:bottom-[0px] top-1 duration-700 ease-in-out flex items-center">
                            <ul className="z-40 space-x-3 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 transition-all duration-700 ease-in-out">
                                <CiShoppingCart className="ml-[10px] text-[25px] scale-0 group-hover:scale-100 transform transition-transform duration-500 ease-in-out" />
                                <CiHeart className="text-[25px] scale-0 group-hover:scale-100 transform transition-transform duration-700 ease-in-out" />
                                <CiZoomIn className="text-[25px] scale-0 group-hover:scale-100 transform transition-transform duration-900 ease-in-out" />
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-10">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`px-3 py-1 mx-1 border rounded-full ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-200 transition duration-200 ease-in-out`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </>
    );
};

export default Shop;
