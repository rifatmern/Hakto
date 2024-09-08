// hooks/useSearch.js
import { useState } from 'react';
import api from '@/uitils/Api';

const useSearch = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const search = async () => {
        if (query.trim()) {
            try {
                let { products } = await api(`https://dummyjson.com/products/search?q=${query}`);
                setResults(products);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    };

    return {
        query,
        setQuery,
        results,
        search
    };
};

export default useSearch;
