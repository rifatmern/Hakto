"use client";
import Container from '@/components/Container';
import { Josefin_Sans, Lato } from 'next/font/google';
import Link from 'next/link';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import React, { useState } from 'react';
import Image from 'next/image';
import sponsor from '@/assets/sponsor.png';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'next/navigation'; // Correct import for useRouter in Next.js 13+
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const josef = Josefin_Sans({
    subsets: ["latin"],
    weight: ['400', '700'],
});

const lato = Lato({
    subsets: ['latin'],
    weight: ['100', '400', '700'],
});

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter(); // useRouter from 'next/navigation'
    const auth = getAuth();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSignIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in successfully
                toast.success("Successfully logged in!");
                setTimeout(() => {
                    router.push('/'); // Redirect to home page after 2 seconds
                }, 2000);
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(`Login failed: ${errorMessage}`);
            });
    };

    return (
        <>
            <ToastContainer />
            <section>
                <div className="pt-[98px] pb-[126px] bg-[rgba(246,245,255,1)]">
                    <Container>
                        <h1 className={`${josef.className} font-bold text-[36px]`}>My Account</h1>
                        <p className={`${lato.className} font-normal text-[16px]`}>
                            <span className='hover:text-[#FB2E86] cursor-pointer'>Home </span>
                            <span className='hover:text-[#FB2E86] cursor-pointer'>. Pages </span>
                            <span className='hover:text-[#FB2E86] cursor-pointer'>. My Account </span>
                        </p>
                    </Container>
                </div>
            </section>
            <section className={`${lato.className} dark:bg-gray-900`}>
                <div className="flex flex-col items-center justify-center text-center pt-[120px] pb-[109px]">
                    <div className="bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
                        <div className="px-[57px] py-[50px]">
                            <h1 className={`${josef.className} text-xl font-bold leading-tight tracking-tight text-gray-900 text-[32px] dark:text-white mb-[7px]`}>
                                Login
                            </h1>
                            <p className='text-[#9096B2] text-[17px] mb-[57px]'>
                                Please login using account details below.
                            </p>
                            <form onSubmit={handleSignIn} className="space-y-4 md:space-y-6">
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-[432px] bg-gray-50 border border-gray-300 text-gray-900 focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Email Address"
                                        required=""
                                    />
                                </div>
                                <div className="relative">
                                    <input
                                        name="password"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Password"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required=""
                                    />
                                    <div
                                        className="absolute top-[50%] translate-y-[-50%] right-[3%] cursor-pointer text-[20px]"
                                        onClick={togglePasswordVisibility}
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-[#FFF] font-semibold bg-[#FB2E86] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    Sign in
                                </button>
                                <p className="font-normal text-[#9096B2] dark:text-gray-400">
                                    Don’t have an Account?
                                    <Link
                                        href="/signup"
                                        className="font-medium text-primary-600 text-[#9096B2] hover:underline dark:text-primary-500">
                                        Create account
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center mb-[109px]">
                    <Image src={sponsor} alt="Sponsor Image" />
                </div>
            </section>
        </>
    );
};

export default Login;
