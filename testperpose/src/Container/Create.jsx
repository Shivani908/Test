import { nanoid } from "nanoid";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetwatchs } from "../store/actions/watchActions";

const Create = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { watchs } = useSelector((state) => state.watchReducer);

    const [image, setimage] = useState("");
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");
    const [price, setprice] = useState("");

    const SubmitHandler = (e) => {
        e.preventDefault();
        const newWatch = {
            id: nanoid(),
            image,
            title,
            description,
            price
        };

        localStorage.setItem(
            "watchs",
            JSON.stringify([...watchs, newWatch])
        );
        dispatch(asyncgetwatchs());
        toast.success("Watch Upload Successfully!");
        navigate("/watchs");
    };
    return (
        <form onSubmit={SubmitHandler} className="w-[70%] m-auto  pb-5">
            <h1 className="text-7xl mt-5 font-extrabold text-gray-600 mb-[5%]">
                Create <br /> New Watch
            </h1>
            <input
                onChange={(e) => setimage(e.target.value)}
                value={image}
                type="url"
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="Watch Image URL"
            />
            <input
                onChange={(e) => settitle(e.target.value)}
                value={title}
                type="text"
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="Watch Name"
            />
            <textarea
                onChange={(e) => setdescription(e.target.value)}
                value={description}
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="Watch description..."
            ></textarea>
             <input
                onChange={(e) => setprice(e.target.value)}
                value={price}
                type="text"
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="Watch Price"
            />
           
            <div className="w-full text-right">
                <button className="rounded-md text-xl bg-gray-600 text-white py-2 px-5 hover:bg-gray-700 duration-200">
                    uploaded &nbsp; &#8594;
                </button>
            </div>
        </form>
    );
};

export default Create;