import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateActiveMessageReceivedAction } from "../../../redux/actions/actionMessages";

const ClouseConversationButton = ({ msgReceiveds }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const msgActive =
    msgReceiveds && msgReceiveds.find((message) => message.active);

  const handlerOnClick = () => {
    navigate("/inbox");
    if (msgActive) {
      dispatch(updateActiveMessageReceivedAction(msgActive.id));
    }
  };

  return (
    <div>
      <img
        src={"/buttons/goBack-icon.svg"}
        className="w-6 h-auto"
        onClick={handlerOnClick}
        onMouseOver={(e) =>
          (e.currentTarget.src = "/public/buttons/goBlack-hover-icon.svg")
        }
        onMouseOut={(e) => (e.currentTarget.src = "/buttons/goBack-icon.svg")}
        alt="Go back"
      />
    </div>
  );
};

export default ClouseConversationButton;
