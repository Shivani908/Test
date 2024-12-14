import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="h-[10vh] w-full flex items-center justify-between ">
            <img
                className="h-full rounded mt-2  "
                src="https://images7.alphacoders.com/349/thumb-1920-349431.jpg"
                alt=""
            />
            <div className="flex gap-x-10 text-md items-center">
                <Link className="hover:text-gray-600 duration-200 font-bold" to="/">
                    Home
                </Link>
                { <Link
                    className="hover:text-gray-600 duration-200 font-bold"
                    to="/Watchs"
                >
                    Watchs
                </Link> }
                <Link className="hover:text-gray-600 duration-200 font-bold" to="/about">
                    About
                </Link>
                <Link
                    className="hover:text-gray-600 duration-200 font-bold"
                    to="/contact"
                >
                    Contact
                </Link>
            </div>
            <i className="text-3xl ri-grid-fill text-gray-600"></i>
        </nav>
    );
};

export default Nav;