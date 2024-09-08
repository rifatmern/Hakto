"use client";

import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handleClick = (page) => {
        onPageChange(page);
    };

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="flex space-x-2 justify-center mt-4">
            {pageNumbers.map((number) => (
                <button
                    key={number}
                    onClick={() => handleClick(number)}
                    className={`w-10 h-10 rounded-full border flex items-center justify-center ${
                        currentPage === number 
                            ? 'bg-blue-500 text-white'
                            : 'bg-white text-black'
                    } hover:bg-blue-200 transition duration-200 ease-in-out`}
                >
                    {number}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
