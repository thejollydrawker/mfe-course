import React from "react";

import { Link } from "react-router-dom";

import MiniCart from "cart/MiniCart";
import Login from "cart/Login";

export default function Header() {
    return <div className="p-5 pb-0 border-b-4 text-3xl font-bold text-gray-900">
        <div className="flex">
            <div className="flex-grow align-baseline">
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