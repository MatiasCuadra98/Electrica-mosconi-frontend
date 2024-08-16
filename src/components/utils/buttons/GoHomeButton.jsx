import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cleanUserByIdAction } from "../../../redux/actions/actionsUsers";
import { updateActiveMessageReceivedAction } from "../../../redux/actions/actionMessages";

const GoHomeButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const msgsReceived = useSelector((state) => state.messagesReceived);
  const msgActive =
    msgsReceived && msgsReceived.find((message) => message.active);

  const handlerOnClick = () => {
    navigate("/");
    dispatch(cleanUserByIdAction());
    if (msgActive) {
      dispatch(updateActiveMessageReceivedAction(msgActive.id));
    }
    localStorage.removeItem("businessId");
    localStorage.removeItem("userId");
  };

  return (
    <div>
      <button
        onClick={handlerOnClick}
        className="w-fit h-fit px-8 py-1 bg-sky-950 hover:bg-amber-500 border-gray-700 rounded-[30px] shadow-inner text-white text-sm font-normal font-['Oswald']"
      >
        CERRAR
      </button>
    </div>
  );
};

export default GoHomeButton;
