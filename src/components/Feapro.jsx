import { Josefin_Sans, Lato } from 'next/font/google'
import React from 'react'
import Container from './Container';
import Feacard from './props/Feacard';
// import Slider from "react-slick";







const josef = Josefin_Sans({
    subsets: ['latin'],
    weight: ['200', '400', '700']
})

const lato = Lato({
    subsets: ['latin'],
    weight: ['100', '400', '700']
})

const Feapro = () => {

    // var settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    // };

    return (
        <section className='pt-[129px] pb-[120px]'>
            <Container>
                <div className="text-center">
                    <h1 className={`${josef.className} text-[42px] font-bold pb-[48px]`}>Featured Products</h1>
                </div>
                {/* <Slider {...settings}> */}
                    <div className="flex justify-center flex-wrap space-x-5">
                        <Feacard />
                        <Feacard />
                        <Feacard />
                        <Feacard />
                    </div>
                {/* </Slider> */}
            </Container>
        </section>
    )
}

export default Feapro