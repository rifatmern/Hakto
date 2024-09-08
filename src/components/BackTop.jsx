"use client"
import React, { useEffect, useState } from 'react'
import { IoMdRocket } from "react-icons/io";

const ToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <>
            {isVisible && (
                <div>
                    <button
                        className="text-white bg-[#FB2E86] flex justify-center items-center text-[27px] z-[50] fixed bottom-5 right-5 rounded-full h-12 w-12"
                        onClick={handleToTop}
                    >
                        <IoMdRocket />
                    </button>
                </div>
            )}
        </>
    );
}

export default ToTop;