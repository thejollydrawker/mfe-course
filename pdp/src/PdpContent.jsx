import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import { getProductById, currency } from "home/products";
import placeAdddToCart from "addtocart/placeAddToCart";

export default function PdpContent() {
    const {id} = useParams(null);
    const [product, setProduct] = useState([]);

    useEffect(() => {
        if (id) {
            getProductById(id).then(setProduct);
        } else {
            setProduct(null);
        }
    }, [id]);

    const addToCart = useRef(null);

    useEffect(() => {
        if (addToCart.current && product.id) {
            placeAdddToCart(addToCart.current, product.id);
        }
    }, [product]);

    if (!product) return null;

    return (
    <div className="m-4 max-w-6xl mx-auto">
            <img src={product.image} alt={product.name} className="float-left shadow-lg h-80 w-1/3 mr-4 mb-8"/>
        <div>
            <div className="flex">
                <div className="font-bold text-3xl flex-grow">
                    {product.name}
                </div>
                <div className="font-bold text-3xl flex-end">
                    {currency.format(product.price)}
                </div>
            </div>
            <div ref={addToCart}></div>
            <div className="mt-10">
                {product.description}
            </div>
            <div className="mt-2 whitespace-pre-line">
                {product.longDescription}
            </div>
        </div>
    </div>
    )
}