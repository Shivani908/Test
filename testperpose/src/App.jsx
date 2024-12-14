import React, { useEffect } from "react";
import Nav from "./Container/Nav";

import { Route, Routes } from "react-router-dom";
import Layout from "./Container/Layout";
import Watch from "./Container/Watch";
import Details from "./Container/Details";
import Create from "./Container/Create";
import About from "./Container/About";
import Contact from "./Container/Contact";
import Update from "./Container/Update";
import { useDispatch } from "react-redux";
import { asyncgetwatchs } from "./store/actions/watchActions";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncgetwatchs());
    }, []);

    return (
        <div className="w-[80%] m-auto ">
            <Nav />

            <Routes>
                <Route path="/" element={<Layout />} />
                <Route path="/create-watchs" element={<Create />} />
                <Route path="/update-watchs/:id" element={<Update />} />
                <Route path="/watchs" element={<Watch />} />
                <Route path="/watchs/:id" element={<Details />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
};

export default App;