import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import "./index.scss";

import Header from "home/Header";
import Footer from "home/Footer";
import PdpContent from "pdp/PdpContent";
import HomeContent from "home/HomeContent";
import CartContent from "cart/CartContent";

import "remixicon/fonts/remixicon.css";

export default function MainLayout () {
    return (
    <Router>
        <div className="mt-10 text-3xl mx-auto max-w-6xl">
        <Header />
        <Routes>
            <Route exact path="/" element={<HomeContent />}/>
            <Route path="/product/:id" element={<PdpContent />}/>
            <Route path="/cart" element={<CartContent />}/>
        </Routes>
        <Footer />
        </div>
    </Router>
    )
}
