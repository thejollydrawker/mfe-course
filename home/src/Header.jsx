import React from "react";

import { Link } from "react-router-dom";

import MiniCart from "cart/MiniCart";
import Login from "cart/Login";

export default function Header() {
    return <div className="p-5 bg-blue-500 text-white text-3xl font-bold">
        <div className="flex">
            <div className="flex-grow">
                <Link to="/">
                    TJD Prints
                </Link>
            </div>
            <div className="flex-end relative">
                <Login />
                    <MiniCart link="/cart"/>          
            </div>
        </div>
    </div>
}