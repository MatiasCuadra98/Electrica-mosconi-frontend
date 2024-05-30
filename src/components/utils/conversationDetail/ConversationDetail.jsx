import React from "react";
import MsgRecived from "./MsgRecived";
import MsgSent from "./MsgSent";
import ClouseButton from "../buttons/ClouseButton";

//en este componente deberia tomar todos los mensajes de un y mapearlos: si es enviado por el contacto ? <MsgRecived /> : <MsgSent />
const ConversationDetail = ({ isActive, setIsActive }) => {
  return (
    <div className="relative flex flex-col overflow-y-auto overflow-x-hidden">
      <div className="fixed top-16 right-10 mt-2">
        <ClouseButton isActive={isActive} setIsActive={setIsActive} />
      </div>
      <MsgRecived />
      <MsgSent />
      <MsgRecived />
      <MsgRecived />
      <MsgSent />
      <MsgRecived />
    </div>
  );
};

export default ConversationDetail;
