import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SideBarAButton = ({ route, nameRoute }) => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const handlerOnclick = () => {
    navigate(route);
    setIsActive(true);
  };
  return (
    <div>
      {isActive ? (
        <div>
          <button className="w-52 h-32 shadow-inner border border-green-400 flex items-center justify-center bg-green-400 text-white text-lg font-normal font-['Oswald'] uppercase">
            <div className="w-48 h-28 flex items-center justify-end border-amber-500 border-4">
              {nameRoute}
            </div>
          </button>
        </div>
      ) : (
        <div>
          <button className="w-52 h-32 shadow-inner border border-sky-950 flex items-center justify-center bg-sky-950 hover:bg-amber-500 text-white text-lg font-normal font-['Oswald'] uppercase">
            {nameRoute}
          </button>
        </div>
      )}
    </div>
  );
};

export default SideBarAButton;
