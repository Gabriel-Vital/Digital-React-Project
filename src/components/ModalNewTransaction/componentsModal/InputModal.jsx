import React from "react";

const Input = ({ placeholder }) => {
  return (
    <>
      <div className="w-full">
        <input
          className="w-full h-[50px] bg-gray-200 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-4 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default Input;
