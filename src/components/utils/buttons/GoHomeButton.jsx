import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cleanUserByIdAction } from "../../../redux/actions/actionsUsers";
//import { updateActiveMessageReceivedAction } from "../../../redux/actions/actionMessages";
import { setActiveMessageAction } from "../../../redux/actions/actionMessages";
import { cleanFiltersAction } from "../../../redux/actions/actionFilters";

const GoHomeButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const msgActive = useSelector((state) => state.messageActive);

  const handlerOnClick = () => {
    navigate("/");
    dispatch(cleanUserByIdAction());
    dispatch(cleanFiltersAction());
    if (msgActive) {
      dispatch(setActiveMessageAction(""));
    }
    localStorage.removeItem("businessId");
    localStorage.removeItem("userId");
    localStorage.removeItem("state");
    localStorage.removeItem("loginBusiness")
  };

  return (
    <div>
      <button
        onClick={handlerOnClick}
        className="w-fit h-fit px-8 py-1 bg-sky-950 hover:bg-amber-500 border-gray-700 rounded-[30px] shadow-inner text-white text-xs font-normal font-['Oswald']"
      >
        CERRAR
      </button>
    </div>
  );
};

export default GoHomeButton;
