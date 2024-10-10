import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMessagesReceivedAction } from "../../../redux/actions/actionMessages";
import { cleanFiltersAction } from "../../../redux/actions/actionFilters";

const ResetButton = ({ customBg = "bg-sky-950 border-gray-700" }) => {
  const dispatch = useDispatch();

  const handlerOnClick = () => {
    dispatch(cleanFiltersAction());
    dispatch(getAllMessagesReceivedAction());
  };

  return (
    <div>
      <button
        onClick={handlerOnClick}
        className={`w-fit h-fit  px-8 py-1 ${customBg} hover:bg-amber-500 rounded-[30px] shadow-inner text-white text-sm font-normal font-['Oswald']`}
      >
        RESET
      </button>
    </div>
  );
};

export default ResetButton;
