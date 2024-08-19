import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMessagesReceivedAction } from "../../../redux/actions/actionMessages";
import { cleanFiltersAction } from "../../../redux/actions/actionFilters";

const ResetButton = () => {
  const dispatch = useDispatch();
  const businessRedux = useSelector((state) => state.business);
  const businessId = businessRedux.id || localStorage.getItem("businessId");

  const handlerOnClick = () => {
    dispatch(getAllMessagesReceivedAction());
    dispatch(cleanFiltersAction());
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
