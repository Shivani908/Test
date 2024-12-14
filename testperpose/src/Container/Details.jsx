import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetwatchs } from "../store/actions/watchActions";

const Details = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {id} = useParams();
    const { watchs } = useSelector((state) => state.watchReducer);
    const watch = watchs.find((r) => r.id == id);

    const DeleteHandler = () => {
        localStorage.setItem(
            "watchs",
            JSON.stringify(watchs.filter((r) => r.id !== id))
        );
        dispatch(asyncgetwatchs());
        toast.success("Watch Deleted Successfully!");

        navigate("/watchs");
    };

    return watch ? (
        <div className="w-[80%] m-auto p-5">
            <Link to="/watchs" className="text-3xl ri-arrow-left-line"></Link>
            <div className="details w-full flex h-[75vh] mt-3">
                <div className="dets w-[50%] p-[3%] shadow">
                    <img className="" src={watch.image} alt="" />
                    <h1 className="text-xl mb-5 mt-[10%] text-center">
                        {watch.title}
                    </h1>
                    <h1 className="text-xl mb-5 mt-[10%] text-center">
                        {watch.price}
                    </h1>
                    <p className="text-zinc-400">{watch.description}</p>
                    <div className="flex justify-between py-10 px-5">
                        <Link
                            to={`/update-watchs/${watch.id}`}
                            className="text-blue-400 border-blue-400 border py-2 px-5"
                        >
                            Update
                        </Link>
                        <button
                            onClick={DeleteHandler}
                            className="text-red-400 border-red-400 border py-2 px-5"
                        >
                            Delete
                        </button>
                    </div>
                </div>
                 <div className="desc w-[50%] px-[5%] py-[3%] overflow-auto">
                   
                </div>
            </div>
        </div> 
    ) : (
        <h1 className="w-full text-center text-4xl text-green-600 mt-10">
            Loading...
        </h1>
    );
};

export default Details;