"use client"
import { useState } from 'react';
import Container from '@/components/Container';
import Addcart from '@/components/props/Addcart';
import { Josef, lato } from '@/uitils/Font';

const page = () => {
    const [cartItems, setCartItems] = useState([
        // Initialize with some default items
        {
            title: 'Sample Item',
            price: 32.00,
            quantity: 1
        }
    ]);

    const [shippingCost, setShippingCost] = useState(0);
    const [subtotal, setSubtotal] = useState(0);
    const [total, setTotal] = useState(0);

    const calculateTotals = () => {
        const newSubtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setSubtotal(newSubtotal);
        const newTotal = newSubtotal + shippingCost;
        setTotal(newTotal);
    };

    const handleUpdateCart = () => {
        // Handle cart update logic here
        calculateTotals();
    };

    const handleClearCart = () => {
        setCartItems([]);
        setSubtotal(0);
        setTotal(0);
    };

    const handleCalculateShipping = () => {
        // Example shipping calculation logic
        setShippingCost(10); // Example flat rate shipping cost
        calculateTotals();
    };

    return (
        <>
            <section>
                <div className="pt-[98px] pb-[126px] bg-[rgba(246,245,255,1)]">
                    <Container>
                        <h1 className={`${Josef.className} font-bold text-[36px]`}>Shopping Cart</h1>
                        <p className={`${lato.className} font-normal text-[16px]`}>
                            <span className='hover:text-[#FB2E86] cursor-pointer'>Home </span>
                            <span className='hover:text-[#FB2E86] cursor-pointer'>. Pages </span>
                            <span className='hover:text-[#FB2E86] cursor-pointer'>. Shopping Cart</span>
                        </p>
                    </Container>
                </div>

                <div className="py-[147px]">
                    <Container>
                        <div className="flex justify-between">
                            <div className="w-[70%]">
                                <div className={`${Josef.className} flex justify-between pr-10`}>
                                    <h3 className='font-bold text-[20px] text-[#1D3178]'>Product</h3>
                                    <h3 className='font-bold text-[20px] text-[#1D3178] pl-[110px]'>Price</h3>
                                    <h3 className='font-bold text-[20px] text-[#1D3178]'>Quantity</h3>
                                    <h3 className='font-bold text-[20px] text-[#1D3178]'>Total</h3>
                                </div>

                                <div className="">
                                    {cartItems.map((item, index) => (
                                        <Addcart key={index} item={item} />
                                    ))}
                                </div>

                                <div className="w-[100%] flex justify-between">
                                    <h2
                                        onClick={handleUpdateCart}
                                        className='w-[150px] h-[40px] rounded-[5px] flex items-center justify-center bg-[#FB2E86] text-[#fff] text-[17px] font-[500] cursor-pointer'>
                                        Update Cart
                                    </h2>
                                    <h2
                                        onClick={handleClearCart}
                                        className='w-[150px] h-[40px] rounded-[5px] flex items-center justify-center bg-[#FB2E86] text-[#fff] text-[17px] font-[500] cursor-pointer'>
                                        Clear Cart
                                    </h2>
                                </div>
                            </div>
                            <div className="w-[30%]">
                                <div className={`${Josef.className} flex flex-col justify-center items-center`}>
                                    <h3 className='font-Sans font-bold text-[20px] text-[#0D0E43] text-center'>Cart Totals</h3>
                                    <div className="w-[371px] h-[284px] py-[34px] px-[31px] bg-[#F4F4FC] mt-[40px]">
                                        <div className="flex justify-between relative after:absolute after:contain-[''] after:bottom-[-10px] after:left-0 after:h-[1px] after:w-[100%] after:bg-[#fff]">
                                            <h3 className={`${lato.className} font-semibold text-[18px] text-[#1D3178]`}>Subtotals:</h3>
                                            <h3 className={`${lato.className} font-semibold text-[18px] text-[#1D3178]`}>£{subtotal.toFixed(2)}</h3>
                                        </div>
                                        <div className="flex justify-between relative after:absolute after:contain-[''] after:bottom-[-10px] after:left-0 after:h-[1px] after:w-[100%] after:bg-[#fff] mt-[47px]">
                                            <h3 className={`${lato.className} font-semibold text-[18px] text-[#1D3178]`}>Totals:</h3>
                                            <h3 className={`${lato.className} font-semibold text-[18px] text-[#1D3178]`}>£{total.toFixed(2)}</h3>
                                        </div>
                                        <div className="flex items-center mt-[38px] space-x-3">
                                            <input type="radio" name='yes' />
                                            <p className={`${lato.className} font-normal text-[12px] text-[#8A91AB]`}>Shipping & taxes calculated at checkout</p>
                                        </div>

                                        <div className="flex justify-center mt-[35px] w-[312px] h-[40px] text-center pb-[35px]">
                                            <a
                                                href=""
                                                className={`${lato.className} font-normal w-[312px] h-[40px] leading-[40px] text-[#8A91AB] hover:text-[#FFF] hover:bg-[#19D16F] border border-[#19D16F] duration-200 ease-in-out`}>
                                                Proceed To Checkout
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className={`${Josef.className} flex flex-col justify-center items-center mt-[40px]`}>
                                    <h3 className='font-Sans font-bold text-[20px] text-[#0D0E43] text-center'>Calculate Shipping</h3>
                                    <div className="w-[371px] h-[294px] space-y-8 py-[34px] px-[31px] bg-[#F4F4FC] mt-[40px]">
                                        <div className="flex justify-between relative after:absolute after:contain-[''] after:bottom-[-10px] after:left-0 after:h-[1px] after:w-[100%] after:bg-[#fff]">
                                            <h3 className={`${lato.className} font-semibold text-[18px] text-[#C5CBE3]`}>Bangladesh</h3>
                                        </div>
                                        <div className="flex justify-between relative after:absolute after:contain-[''] after:bottom-[-10px] after:left-0 after:h-[1px] after:w-[100%] after:bg-[#fff]">
                                            <h3 className={`${lato.className} font-semibold text-[18px] text-[#C5CBE3]`}>Mirpur Dhaka - 1200</h3>
                                        </div>
                                        <div className="flex justify-between relative after:absolute after:contain-[''] after:bottom-[-10px] after:left-0 after:h-[1px] after:w-[100%] after:bg-[#fff]">
                                            <h3 className={`${lato.className} font-semibold text-[18px] text-[#C5CBE3]`}>Postal Code</h3>
                                        </div>
                                        <div className="flex items-center mt-[38px] space-x-3">
                                            {/* You can add input fields for user to enter shipping info here */}
                                        </div>

                                        <div className="flex mt-[35px] w-[312px] h-[40px] text-center pb-[35px]">
                                            <button
                                                onClick={handleCalculateShipping}
                                                className={`${lato.className} font-normal w-[189px] h-[40px] leading-[40px] text-[#8A91AB] hover:text-[#FFF] hover:bg-[#FB2E86] border border-[#FB2E86] duration-200 ease-in-out`}>
                                                Calculate Shipping
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    );
};

export default page;
