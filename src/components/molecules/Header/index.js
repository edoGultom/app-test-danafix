import React from "react";
import { Logo } from "../../../assets/images";
export default function Header() {
  return (
    <div className="flex items-start justify-between bg-full bg-white shadow-lg ">
      <img src={Logo} className="w-40 px-7 py-5" />
    </div>
  );
}
