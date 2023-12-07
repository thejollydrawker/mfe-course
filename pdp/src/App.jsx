import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import "./index.scss";

import Header from "home/Header";
import Footer from "home/Footer";
import PdpContent from "./PdpContent";

import "remixicon/fonts/remixicon.css";

const App = () => (
  <Router>
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Header />
      <Routes>
        <Route path="/product/:id" element={<PdpContent />}/>
      </Routes>
      <Footer />
    </div>
  </Router>
);
ReactDOM.render(<App />, document.getElementById("app"));
