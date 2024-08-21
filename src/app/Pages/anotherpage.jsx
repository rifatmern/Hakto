// pages/index.js
import Feapro from '@/components/Feapro';
import Shop from '@/components/props/Shop';

export async function getStaticProps() {
    const res = await fetch('https://dummyjson.com/products');
    const { products } = await res.json();

    return {
        props: {
            products, // Pass the fetched products as props
        },
    };
}

const Apipassing = ({ products }) => {
    return (
        <div>
            <Feapro products={products} />
            <Shop products={products}/>
        </div>
    );
};

export default Apipassing;
