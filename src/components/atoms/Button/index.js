import React from "react";
// import { Button } from "@material-tailwind/react";

export default function Button({ className = "", children, onClick }) {
  return (
    <button
      className={
        `inline-flex items-center  w-24 px-8 py-2 rounded-md font-semibold text-xs text-white  active:bg-gray-900 transition ease-in-out duration-150 ` +
        className
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
}
