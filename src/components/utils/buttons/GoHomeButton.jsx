import React from "react";
import { useNavigate } from "react-router-dom";

const GoHomeButton = () => {
  const navigate = useNavigate();
  const handlerOnClick = () => {
    navigate("/");
  };

  return (
    <div>
      <button
        onClick={handlerOnClick}
        className="w-fit h-fit  px-8 py-1 bg-sky-950 hover:bg-amber-500 border-gray-700 rounded-[30px] shadow-inner text-white text-sm font-normal font-['Oswald']"
      >
        CERRAR
      </button>
    </div>
  );
};

export default GoHomeButton;
