import { toast } from "react-toastify";
import { addwatch } from "../reducers/watchSlice";

export const asyncgetwatchs = () => async (dispatch, getState) => {
    try {
        let data = JSON.parse(localStorage.getItem("watchs")) || [];
        dispatch(addwatch(data));
    } catch (error) {
        toast.error(error);
    }
};