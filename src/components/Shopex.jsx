import Image from 'next/image';
import shop1 from '@/assets/shop1.png';
import shop2 from '@/assets/shop2.png';
import shop3 from '@/assets/shop3.png';
import shop4 from '@/assets/shop4.png';
import { Josefin_Sans, Lato } from 'next/font/google';

const josef = Josefin_Sans({
    subsets: ['latin'],
    weight: ['200', '400', '700']
});

const lato = Lato({
    subsets: ['latin'],
    weight: ['100', '400', '700']
});

const CenteredContent = () => {
    return (
        <div className="flex flex-wrap justify-center items-center my-[150px] gap-x-5">
            <div className="w-[270px] pt-[56px] pb-[45px] text-center bg-white shadow-lg rounded-lg">
                <Image src={shop1} alt="24/7 Support" className="mx-auto pb-[27px]" />
                <h2 className={`${josef.className} text-xl font-bold mt-4 mb-[20px]`}>24/7 Support</h2>
                <p className={`${lato.className} text-gray-600 px-10`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>
            <div className="w-[270px] pt-[56px] pb-[45px] text-center bg-white shadow-lg rounded-lg">
                <Image src={shop2} alt="24/7 Support" className="mx-auto pb-[27px]" />
                <h2 className={`${josef.className} text-xl font-bold mt-4 mb-[20px]`}>24/7 Support</h2>
                <p className={`${lato.className} text-gray-600 px-10`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>
            <div className="w-[270px] pt-[56px] pb-[45px] text-center bg-white shadow-lg rounded-lg">
                <Image src={shop3} alt="24/7 Support" className="mx-auto pb-[27px]" />
                <h2 className={`${josef.className} text-xl font-bold mt-4 mb-[20px]`}>24/7 Support</h2>
                <p className={`${lato.className} text-gray-600 px-10`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>
            <div className="w-[270px] pt-[56px] pb-[45px] text-center bg-white shadow-lg rounded-lg">
                <Image src={shop4} alt="24/7 Support" className="mx-auto pb-[27px]" />
                <h2 className={`${josef.className} text-xl font-bold mt-4 mb-[20px]`}>24/7 Support</h2>
                <p className={`${lato.className} text-gray-600 px-10`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>
        </div>
    );
};

export default CenteredContent;
