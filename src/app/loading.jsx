import Container from '@/components/Container';
import React from 'react'
import { SpinnerInfinity } from 'spinners-react';


const loading = () => {
    return (
        <>
            <section className='py-[200px]'>
                <Container>
                    <div className="flex justify-center ">
                        <SpinnerInfinity />
                    </div>
                </Container>
            </section>
        </>

    )
}

export default loading