import React from "react";
import MsgRecived from "./MsgRecived";
import MsgSent from "./MsgSent";

//en este componente deberia tomar todos los mensajes de un y mapearlos: si es enviado por el contacto ? <MsgRecived /> : <MsgSent />
const ConversationDetail = () => {
  return (
    <div className="flex flex-col">
      <div className="my-4">
        <MsgRecived />
      </div>
      <div className="mb-4">
        <MsgSent />
      </div>
      <div className="mb-4">
        <MsgRecived />
      </div>
    </div>
  );
};

export default ConversationDetail;
