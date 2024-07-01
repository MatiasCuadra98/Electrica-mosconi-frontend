import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const SideBarAButton = ({ route, nameRoute }) => {
  const location = useLocation();
  console.log("location", location.pathname);
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(
    route === location.pathname ? true : false
  );

  const handlerOnclick = () => {
    navigate(route);
    setIsActive(true);
  };
  return (
    <div>
      {isActive ? (
        <div>
          <button
            onClick={handlerOnclick}
            className="w-52 h-32 rounded-none shadow-inner flex items-center justify-center bg-green-400 text-white text-lg font-normal font-['Oswald'] uppercase"
          >
            <div className="flex items-center justify-end absolute right-0">
              <div className="w-[12.5rem] h-28 border-t-amber-500 border-l-amber-500  border-b-amber-500 border-r-transparent border-4 flex items-center justify-center">
                {nameRoute}
              </div>
            </div>
          </button>
        </div>
      ) : (
        <div>
          <button
            onClick={handlerOnclick}
            className="w-52 h-32 rounded-none shadow-inner flex items-center justify-center bg-sky-950 hover:bg-amber-500 text-white text-lg font-normal font-['Oswald'] uppercase"
          >
            {nameRoute}
          </button>
        </div>
      )}
    </div>
  );
};

export default SideBarAButton;
