// pages/shop-grid.js
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/productsSlice';
import Link from 'next/link';

const ShopGrid = () => {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (loading) return <p>Loading products...</p>;
    if (error) return <p>Error fetching products: {error}</p>;

    return (
        <div>
            <h1>Shop Grid</h1>
            <div className="grid grid-cols-3 gap-4">
                {products.map((product) => (
                    <div key={product.id} className="border p-4">
                        <h2>{product.title}</h2>
                        <img src={product.thumbnail} alt={product.title} width={100} height={100} />
                        <p>${product.price}</p>
                        <Link href={`/products/${product.id}`}>
                            <a>View Details</a>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShopGrid;
