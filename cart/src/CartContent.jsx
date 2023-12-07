import React from "react"; 
import{ useState, useEffect } from "react";

import { cart, clearCart } from "cart/cart"; //NOTE: this import must be cart cart referencing own remote
import { currency } from "home/products";

export default function CartContent() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        cart.subscribe(value => setItems(value?.cartItems ?? []));
    }, []);

    return (
        <>
        <div className="max-w-6xl mx-auto text-gray-900">
         <h2 className="my-10 text-lg">Cart: </h2>
            <div className="grid gap-5 grid-cols-4 items-center">
                {items.map((item) => (
                    <React.Fragment key={item.id}>
                        <div>{item.quantity}</div>
                        <img src={item.image} alt={item.name} className="h-32 w-32 object-cover"/>
                        <div>{item.name}</div>
                        <div className="text-right">
                            {currency.format(item.quantity * item.price)}
                        </div>
                    </React.Fragment>
                ))}
                <div></div>
                <div></div>
                <div></div>
                <div className="text-right">
                    {currency.format(items.reduce((a,v) => a + v.quantity * v.price, 0))}
                </div>
            </div>
            {items.length > 0 && (
                <div className="flex mt-6 px-12">
                    <div className="flex-grow">
                        <button 
                            id="clear-btn"
                            className="bg-white border border-green-800 text-green-800 py-2 px-5 rounded-md text-sm"
                            onClick={clearCart}
                        >
                            Clear Cart
                        </button>
                    </div>
                    <div className="flex-end">
                        <button 
                            id="clear-btn"
                            className="bg-white border border-green-800 text-green-800 py-2 px-5 rounded-md text-sm"
                            onClick={clearCart}
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
        </>
    );
}