import React, { useState, useEffect } from "react";

import { getProducts, currency } from "./products";

import { addToCart, useLoggedIn } from "cart/cart";

export default function HomeContent() {
    const loggedIn = useLoggedIn();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(setProducts);
    }, []);

    return (
    <div className="my-10 grid grid-cols-4 gap-5">
        {products.map((product) => (
            <div key={product.id}>
                <img className="object-cover h-60 w-full" src={product.image} alt={product.name} />
                <div className="flex">
                    <div className="flex-grow font-bold">
                        <a href="">{product.name}</a>
                    </div>
                    <div className="flex-end">{currency.format(product.price)}</div>
                </div>
                <div className="text-sm mt-4">{product.description}</div>
                {loggedIn && (
                    <div className="text-right mt-2">
                        <button 
                            onClick={() => addToCart(product.id)}
                            id={`addtocart_${product.id}`}
                            className="bg-blue-500 px-5 py-2 text-sm hover:bg-blue-700 text-white rounded-md"
                        >
                            Add to cart
                        </button>
                    </div>
                )}
            </div>
        ))}
    </div>
    )
}