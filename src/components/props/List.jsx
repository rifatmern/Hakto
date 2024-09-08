"use client";

import React, { useState, useEffect } from 'react';
import { FaStar, FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import Image from 'next/image';
import { Josef } from '@/uitils/Font';
import api from '@/uitils/Api';

const List = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6; // Adjust this value based on your design

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
            {currentItems.map((item, index) => (
                <div key={index} className="flex items-center px-3 space-x-8 py-6">
                    <div className="">
                        <div className="w-[313px] h-[217px]">
                            <Image src={item.thumbnail} width={313} height={217} className="w-[313px] h-[217px]" alt="#" />
                        </div>
                    </div>
                    <div className="">
                        <h2 className={`${Josef.className} font-bold text-[24px] text-[#0D0E43]`}>{item.title}</h2>
                        <div className="flex items-center space-x-8">
                            <div className="flex space-x-8">
                                <h3 className="font-Sans font-bold text-[16px] text-[#0D0E43]">${item.price}</h3>
                                <h4 className="font-Sans font-bold text-[16px] text-[#FB2E86]">${item.price}</h4>
                            </div>
                            <div className="flex space-x-1">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </div>
                        <p className={`${Josef.className} font-normal text-[16px] text-[#9295AA] w-[600px] pb-[35px] pt-[15px]`}>{item.description}</p>
                        <div className="flex space-x-5">
                            <FiShoppingCart />
                            <FaRegHeart />
                            <IoSearch />
                        </div>
                    </div>
                </div>
            ))}

            {/* Pagination Component */}
            <div className="flex justify-center mt-10">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`px-3 py-1 mx-1 border ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                            }`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </>
    );
}

export default List;
