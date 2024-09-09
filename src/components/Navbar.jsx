"use client";

import React, { useState, useRef, useEffect } from 'react';
import Container from './Container';
import Image from 'next/image';
import logo from "@/assets/Hekto.png";
import { Lato } from 'next/font/google';
import Link from 'next/link';
import { CiSearch } from "react-icons/ci";
import { useRouter } from 'next/navigation'; // Import the useRouter hook

const lato = Lato({
    subsets: ["latin"],
    weight: ["400"]
});

const Navbar = () => {
    const [searchInput, setSearchInput] = useState('');
    const [searchFilter, setSearchFilter] = useState([]);
    const [focusedIndex, setFocusedIndex] = useState(-1);
    const [hoveredProduct, setHoveredProduct] = useState(null);
    const searchResultsRef = useRef(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const router = useRouter(); // Initialize useRouter

    // Function to handle scroll
    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const fetchProducts = async (query) => {
        try {
            const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
            const data = await response.json();
            setSearchFilter(data.products || []);
            setFocusedIndex(-1);
        } catch (error) {
            console.error('Error fetching data:', error);
            setSearchFilter([]);
        }
    };

    const handleInputChange = (e) => {
        const query = e.target.value;
        setSearchInput(query);
        if (query.trim()) {
            fetchProducts(query);
        } else {
            setSearchFilter([]);
        }
    };

    const handleFocus = () => {
        if (searchInput.trim()) {
            fetchProducts(searchInput);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowDown') {
            setFocusedIndex((prevIndex) =>
                prevIndex < searchFilter.length - 1 ? prevIndex + 1 : prevIndex
            );
            scrollToFocused();
        } else if (e.key === 'ArrowUp') {
            setFocusedIndex((prevIndex) =>
                prevIndex > 0 ? prevIndex - 1 : prevIndex
            );
            scrollToFocused();
        } else if (e.key === 'Enter' && focusedIndex >= 0) {
            setSearchInput(searchFilter[focusedIndex].title);
            setSearchFilter([]);
        }
    };

    const scrollToFocused = () => {
        if (focusedIndex >= 0 && searchResultsRef.current) {
            const focusedElement = searchResultsRef.current.children[focusedIndex];
            focusedElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    };

    const handleSearchClick = () => {
        fetchProducts(searchInput);
    };

    const handleMouseEnter = (product) => {
        setHoveredProduct(product);
    };

    const handleMouseLeave = () => {
        setHoveredProduct(null);
    };

    const handleProductClick = (productId) => {
        // Navigate to the product details page using the product ID
        router.push(`/product/${productId}`);
    };

    return (
        <section className={`py-3 transition-all duration-500 ${isScrolled ? 'fixed top-0 left-0 w-full bg-white shadow-lg z-50' : 'relative'}`}>
            <Container>
                <div className="flex justify-between items-center">
                    <div>
                        <Image src={logo} alt='logo' className='w-[98px] h-[30px]' />
                    </div>
                    <div>
                        <ul className={`${lato.className} flex gap-x-6 items-center`}>
                            <li className="hover:text-[#FB2E86]"><Link href="/">Home</Link></li>
                            <li className="hover:text-[#FB2E86]"><Link href="/about-us">About Us</Link></li>
                            <li className="hover:text-[#FB2E86]"><Link href="/shop">Products</Link></li>
                            <li className="hover:text-[#FB2E86]"><Link href="/blog">Blog</Link></li>
                            <li className="hover:text-[#FB2E86]"><Link href="/shop">Shop</Link></li>
                            <li className="hover:text-[#FB2E86]"><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="relative">
                        <div className="flex">
                            <input
                                type="search"
                                placeholder="Search..."
                                value={searchInput}
                                onChange={handleInputChange}
                                onFocus={handleFocus}
                                onKeyDown={handleKeyDown}
                                className='w-[266px] h-[40px] outline-none border border-gray-400 px-2'
                            />
                            <CiSearch
                                onClick={handleSearchClick}
                                className='w-[40px] bg-[#FB2E86] h-[40px] py-[10px] text-white cursor-pointer'
                            />
                        </div>
                        {searchFilter.length > 0 && (
                            <div
                                ref={searchResultsRef}
                                className="absolute top-full left-0 w-[266px] bg-white shadow-lg z-10 max-h-[200px] overflow-y-auto border border-gray-300"
                            >
                                {searchFilter.map((item, index) => (
                                    <div
                                        key={item.id}
                                        className={`p-2 cursor-pointer ${focusedIndex === index ? 'bg-gray-200' : ''}`}
                                        onMouseEnter={() => handleMouseEnter(item)}
                                        onMouseLeave={handleMouseLeave}
                                        onMouseDown={() => handleProductClick(item.id)} // Navigate on product click
                                    >
                                        {item.title}
                                    </div>
                                ))}
                            </div>
                        )}
                        {hoveredProduct && (
                            <div className="absolute top-[calc(100%+8px)] left-0 w-[266px] bg-white shadow-lg p-4 z-20 border border-gray-300">
                                <div className="flex items-center">
                                    <Image
                                        src={hoveredProduct.thumbnail}
                                        alt={hoveredProduct.title}
                                        width={100}
                                        height={100}
                                        className="w-20 h-20 object-cover"
                                    />
                                    <div className="ml-4">
                                        <h3 className="font-bold text-lg">{hoveredProduct.title}</h3>
                                        <p className="text-gray-600">${hoveredProduct.price}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Navbar;
