import React from "react";
import { useSelector } from "react-redux";
import MessagesCounter from "../components/utils/MessagesCounter";
import SearchBar from "../components/utils/SearchBar";
import LoginButton from "../components/utils/buttons/LoginButton";
import LogoutButton from "../components/utils/buttons/LogoutButton";

const NavBar = () => {
  const user = useSelector((state) => state.user);
  const privilege = user.name ? user.privilege : null;
  console.log(privilege);
  return (
    <div className="w-full h-16 ml-52 z-10 bg-stone-300 fixed flex items-center justify-between ">
      <div className="w-80">
        <h2 className="text-black text-[32px] font-semibold font-['Inter'] capitalize">
          OneInbox
        </h2>
      </div>
      <div className="gap-x-16  flex items-center justify-between">
        <div className="w-[335px] h-[59px] text-center mt-2">
          <span className="text-black text-sm font-normal font-['Oswald'] uppercase">
            bandeja de entradas
            <br />
          </span>
          <MessagesCounter />
        </div>
        {!user.name || privilege === "Member" ? <SearchBar /> : null}
      </div>
      <div className="flex-grow">
        {!user.name || privilege === "Member" ? (
          <LoginButton />
        ) : (
          <LogoutButton />
        )}
      </div>
    </div>
  );
};

export default NavBar;
