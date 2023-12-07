import { Fragment } from "react";
import React, {useEffect, useState} from "react";

import { cart, clearCart } from "./cart";
import { currency } from "home/products";
import { Link } from "react-router-dom";


export default function MiniCart({link}) {
    const [items, setItems] = useState(undefined);
    const [showCart, setShowCart] = useState(false);

    useEffect(() => {
        setItems(cart.value?.cartItems);
        cart.subscribe(sc =>{
             setItems(sc?.cartItems)
        });
        return () => cart.unsubscribe();
    }, []);

    if (!items) return null;

    return (<>
    <div onMouseEnter={() => setShowCart(true)} onMouseLeave={() => setShowCart(false)}>
        <Link to={link}>
            <span id="showcart">
                <i className="ri-shopping-cart-2-fill text-2xl" id="showcart-icon"></i>
                {items.length}
            </span>
        </Link>
        { showCart && (<>
            <div 
                className="absolute bg-white p-5 border-4 border-blue-800 text-black"
                style={{
                    width: 300,
                    top: "2rem",
                    left: -250
                }}
            >
                <div 
                className="grid gap-3 text-sm"
                style={{gridTemplateColumns: "1fr 3fr 10fr 2fr"}}>
                    {items.map((item) => (
                        <Fragment key={item.id}>
                            <div>{item.quantity}</div>
                            <img src={item.image} alt={item.name} />
                            <div>{item.name}</div>
                            <div className="text-right">
                                {currency.format(item.quantity * item.price)}
                            </div>
                        </Fragment>
                    ))}
                    <div></div>
                    <div></div>
                    <div></div>
                    <div>
                        {currency.format(items.reduce((a,v) => a + v.quantity * v.price, 0))}
                    </div>
                </div>
                <div className="flex">
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
            </div>
        </>)}
    </div>
    </>);
}