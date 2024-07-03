import React from "react";
import MsgRecived from "./MsgRecived";
import MsgSent from "./MsgSent";
import ClouseConversationButton from "../buttons/ClouseButton";
//en este componente deberia tomar todos los mensajes de un y mapearlos: si es enviado por el contacto ? <MsgRecived /> : <MsgSent />
const ConversationDetail = ({ isActive, setIsActive, contact }) => {
  console.log("contacto", contact);
  if (!contact) {
    return null;
  }
  const allMessages = [...contact.MsgReceiveds, ...contact.MsgSents].sort(
    (a, b) => b.timestamp - a.timestamp
  );

  console.log("todos los mensajes", allMessages);

  return (
    <div className="relative flex flex-col overflow-y-auto overflow-x-hidden p-4">
      <div className="fixed top-16 right-10 mt-2">
        <ClouseConversationButton
          isActive={isActive}
          setIsActive={setIsActive}
        />
      </div>
      {allMessages &&
        allMessages.map((message) =>
          message.received ? (
            <div key={message.id}>
              <MsgRecived props={message} />
            </div>
          ) : (
            <div key={message.id}>
              <MsgSent props={message} />
            </div>
          )
        )}
    </div>
  );
};

export default ConversationDetail;
