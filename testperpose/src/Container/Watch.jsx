import Card from "./Card";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
const Watch = () => {
    const { watchs } = useSelector((state) => state.watchReducer);
    const { pathname } = useLocation();

    return (
        <div className=" ">
            <h1 className="text-center text-2xl font-semibold">OUR COLLECTION</h1>
            <p className="text-center text-zinc-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                aperiam?
            </p>
            <div className="watch-cards mt-[5%]  flex flex-wrap p-5">
                {watchs.length > 0 ? (
                    watchs.map((r) => <Card key={r.id} watch={r} />)
                ) : (
                    <h1 className="w-full text-gray-600 text-3xl font-extrabold text-center mt-10">
                        Not found
                    </h1>
                )}
            </div>
            {pathname === "/Watchs" && (
                <Link
                    to="/create-watchs"
                    className="cursor-pointer rounded-md absolute top-[15%] py-2 px-5 left-[10%]  bg-gray-200 gap-x-3 flex items-center"
                >
                    <i className="text-3xl text-gray-600 ri-add-box-line"></i>
                    Create 
                </Link>
            )}
        </div>
       
    );
};

export default Watch;