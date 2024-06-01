import React from "react";
import { NavLink } from "react-router-dom";

const NavLinkButton = ({ route, nameRoute }) => {
  return (
    <NavLink
      to={route}
      className={({ isActive }) =>
        `w-52 h-32 shadow-inner border border-sky-950 flex items-center justify-center ${
          isActive ? "bg-green-400" : "bg-sky-950"
        }`
      }
    >
      <div className="flex items-center justify-end">
        <div
          className={`w-48 h-28 flex items-center justify-center ${({
            isActive,
          }) => (isActive ? "border-amber-500 border-4" : "")}`}
        >
          <h1 className=" text-white text-lg font-normal font-['Oswald'] uppercase">
            {nameRoute}
          </h1>
        </div>
      </div>
    </NavLink>
  );
};

export default NavLinkButton;
