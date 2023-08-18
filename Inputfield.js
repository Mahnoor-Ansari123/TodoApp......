import React, { useRef } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

export default function InputField(props) {
    const inputBox = useRef();

    return (
        <div className="p-3 flex justify-between items-center">
            <input
                type="text"
                placeholder="Enter here!!"
                className="p-3 focus:outline-none w-[100%] border border-slate-400"
                ref={inputBox}
            />
            <div
                className="cursor-pointer w-12 h-12 bg-red-500 text-white text-3xl rounded-full flex justify-center items-center"
                onClick={() => {
                props.handler(inputBox.current.value)
                inputBox.current.value = "";
             } } >
                <AiOutlinePlus />
            </div>
        </div>

    

    );
}

