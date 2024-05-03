import React from "react";
import { useDispatch } from "react-redux";
import { getAllMessagesAction } from "../../../redux/actions/actionMessages";

const ResetButton = () => {
  const dispatch = useDispatch();
  const handlerOnClick = () => {
    dispatch(getAllMessagesAction());
  };

  return (
    <div>
      <button
        onClick={handlerOnClick}
        className="w-fit h-fit  px-8 py-1 bg-sky-950 hover:bg-amber-500 border-gray-700 rounded-[30px] shadow-inner text-white text-sm font-normal font-['Oswald']"
      >
        RESET
      </button>
    </div>
  );
};

export default ResetButton;