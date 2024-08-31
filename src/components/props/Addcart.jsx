"use client"
import { Josef } from '@/uitils/Font'
import Image from 'next/image'
import React, { useState } from 'react'
import cart from '@/assets/cart.png'
import { GiSplitCross } from "react-icons/gi";

const Addcart = () => {
    const [quantity, setQuantity] = useState(1);
    const [isCartEmpty, setIsCartEmpty] = useState(false);

    const increaseQuantity = () => {
        if (!isCartEmpty) {
            setQuantity(prevQuantity => prevQuantity + 1);
        }
    };

    const decreaseQuantity = () => {
        if (!isCartEmpty) {
            setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
        }
    };

    const clearCart = () => {
        setQuantity(1);
        setIsCartEmpty(true);
    };

    const pricePerItem = 32.00;
    const totalPrice = pricePerItem * quantity;

    return (
        <>
            {isCartEmpty ? (
                <div className={`${Josef.className} text-center text-[#1D3178]`}>
                    <p>Your cart is empty.</p>
                </div>
            ) : (
                <div className={`${Josef.className} flex justify-between items-center pr-10 my-5`}>
                    <div className='flex justify-between text-[#1D3178] items-center space-x-4'>
                        <div className="w-[83px] h-[87px] relative">
                            <Image src={cart} alt="Cart Item" className='w-full h-full object-cover' />
                            <GiSplitCross
                                className='absolute top-[-12px] right-[-12px] text-black m-1 text-[20px] cursor-pointer'
                                onClick={clearCart}
                            />
                        </div>

                        <div className="">
                            <p className={`${Josef.className} text-[14px] text-[#000]`}>Ut diam consequat</p>
                            <p>Color: Brown</p>
                            <p>Size: XL</p>
                        </div>
                    </div>
                    <div className='font-bold text-[20px] text-[#1D3178]'>
                        ${pricePerItem.toFixed(2)}
                    </div>
                    <div className='font-bold text-[20px] text-[#1D3178] pl-[10px]'>
                        <div className="flex justify-center space-x-2">
                            <button
                                onClick={decreaseQuantity}
                                className='font-Sans font-bold text-[20px] text-[#0D0E43]'
                            >
                                -
                            </button>
                            <button
                                className='font-Sans font-bold text-[16px] text-[#0D0E43] px-3'
                            >
                                {quantity}
                            </button>
                            <button
                                onClick={increaseQuantity}
                                className='font-Sans font-bold text-[20px] text-[#0D0E43]'
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <div className='font-bold text-[20px] text-[#1D3178]'>
                        £{totalPrice.toFixed(2)}
                    </div>
                </div>
            )}
        </>
    )
}

export default Addcart
