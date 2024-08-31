import React from 'react';

const UserPage = async () => {    
    const data = await fetch("https://dummyjson.com/products").then(res => res.json());
    
    return (
        <div>
            <h1>Static Page</h1>
            {
                data.products?.map((item) => (
                    <div key={item.id}>
                        <p>{item.title}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default UserPage;
