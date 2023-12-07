import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getProducts, currency } from "./products";

import { addToCart, useLoggedIn } from "cart/cart";

export default function HomeContent() {
    const loggedIn = useLoggedIn();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(setProducts);
    }, []);

    return (
    <div className="my-10 grid grid-cols-4 gap-5 max-w-6xl mx-auto">
        {products.map((product) => (
            <div key={product.id}>
                <Link to={`/product/${product.id}`}>
                    <img className="fade-in object-cover h-60 w-full hover:shadow-xl hover:shadow-blue-500/50" src={product.image} alt={product.name} />
                </Link>
                <div className="flex">
                    <div className="flex-grow font-bold">
                        <Link to={`/product/${product.id}`}>{product.name}</Link>
                    </div>
                    <div className="flex-end">{currency.format(product.price)}</div>
                </div>
                <div className="text-sm mt-4">{product.description}</div>
                {loggedIn && (
                    <div className="text-right mt-2">
                        <button 
                            onClick={() => addToCart(product.id)}
                            id={`addtocart_${product.id}`}
                            className="bg-blue-500 px-5 py-2 text-sm hover:bg-blue-700 text-white rounded-md transform transition hover:scale-125 duration-300 ease-in"
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