import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetwatchs } from "../store/actions/watchActions";

const Update = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();
    const { watchs } = useSelector((state) => state.watchReducer);
    const watch = watchs && watchs.find((r) => r.id === id);

    const [image, setimage] = useState(watch.image);
    const [title, settitle] = useState(watch.title);
    const [description, setdescription] = useState(watch.description);
    const [price, setprice] = useState(watch.price);

    const UpdateHandler = (e) => {
        e.preventDefault();
        const updatedWatch = {
            id: id,
            title,
            image,
            description,
            price
        };
        const copyWatch = [...watchs];
        const watchIndex = watchs.findIndex((r) => r.id === id);
        copyWatch[watchIndex] = updatedWatch;

        localStorage.setItem("watchs", JSON.stringify(copyWatch));
        dispatch(asyncgetwatchs());

        toast.success(" Updated Successfully!");
        navigate("/watchs");
    };

    return watch ? (
        <form onSubmit={UpdateHandler} className="w-[70%] m-auto  ">
            <h1 className="text-7xl mt-5 font-extrabold text-gray-600 mb-[5%]">
                Update <br /> Existing 
            </h1>
            <input
                onChange={(e) => setimage(e.target.value)}
                value={image}
                type="url"
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder=" Image URL"
            />
            <input
                onChange={(e) => settitle(e.target.value)}
                value={title}
                type="text"
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder=" Name"
            />
            <textarea
                onChange={(e) => setdescription(e.target.value)}
                value={description}
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder=" description..."
            ></textarea>
            <input
                onChange={(e) => setprice(e.target.value)}
                value={price}
                type="text"
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder=" price"
            />
        
            <div className="w-full text-right">
                <button className="rounded-md text-xl bg-gray-600 text-white py-2 px-5 hover:bg-gray-700 duration-200">
                    Re-Publish &nbsp; &#8594;
                </button>
            </div>
        </form>
    ) : (
        <h1 className="w-full text-center text-4xl text-gray-600 mt-10">
            Loading....
        </h1>
    );
};

export default Update;