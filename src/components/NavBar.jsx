import React from "react";
import { useSelector } from "react-redux";
import MessagesCounter from "./utils/MessagesCounter";
import SearchBar from "./utils/SearchBar";
import LoginButton from "./utils/buttons/LoginButton";
import LogoutButton from "./utils/buttons/LogoutButton";

const NavBar = () => {
  const business = useSelector((state) => state.business);
  const user = useSelector((state) => state.user);
  const privilege = user ? user.privilege : null;
  const login = user && user.login;

  return (
    <div className="sticky w-screen h-16 flex">
      <div className="bg-sky-950 w-52 h-16"></div>
      <div className="bg-stone-300 flex-grow flex items-center px-8 justify-between">
        <h2 className="text-black text-[32px] font-semibold font-['Inter'] capitalize ml-8">
          OneInbox
        </h2>
        <span className="text-black text-sm font-normal font-['Oswald'] uppercase">
          {business ? business.name : "bandeja de entradas"}
          <br />
          <MessagesCounter />
        </span>
        {user && privilege === "Admin" && login ? null : <SearchBar />}
        {user && privilege === "Admin" && login ? (
          <LogoutButton />
        ) : (
          <LoginButton />
        )}
      </div>
    </div>
  );
};

export default NavBar;
