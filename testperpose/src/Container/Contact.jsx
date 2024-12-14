import React from "react";

const Contact = () => {
    return (
        <div className="w-[70%] m-auto mt-[10%] p-10 bg-gray-100 rounded-lg ">
            <h1 className="text-5xl mt-2 font-extrabold text-gray-600 text-center mb-[5%]">
                CONTACT
            </h1>
          <input className="w-full border rounded-md px-6 py-3 text-lg mb-5" 
          type="email" placeholder="email@gmail.com" />
            {/* <button className="rounded-md text-md bg-gray-600 text-white py-2 px-5 hover:bg-gray-700 duration-200">
                SEND MAIL &nbsp; &#8594;
            </button> */}
        </div>
    );
};

export default Contact;