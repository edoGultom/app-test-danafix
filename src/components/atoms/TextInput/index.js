import React from "react";
// import { Button } from "@material-tailwind/react";

export default function TextInput({ className = "", ...restProps }) {
  return (
    <input
      className={`form-control px-2 py-2 border m-2 text-sm ${className}`}
      {...restProps}
    />
  );
}
