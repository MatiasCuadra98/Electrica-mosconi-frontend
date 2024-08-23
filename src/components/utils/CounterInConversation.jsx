import React from "react";

const CounterInConversation = ({ contact }) => {
  // const contact = useSelector((state) => state.contact);
  const allMsgRecivedByContact = contact && contact.MsgReceiveds;
  const newMsgs =
    allMsgRecivedByContact &&
    allMsgRecivedByContact.filter((message) => message.state === "Leidos");

  return (
    <div className=" bg-sky-950 text-white text-sm font-['Oswald'] uppercase flex items-center justify-center">
      <span>
        ESTA CONVERSACION TIENE {newMsgs.length} MENSAJES SIN RESPONDER
      </span>
    </div>
  );
};

export default CounterInConversation;
