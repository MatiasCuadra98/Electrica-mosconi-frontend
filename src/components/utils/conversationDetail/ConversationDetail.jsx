import { useEffect, useRef } from "react";
import MsgRecived from "./MsgRecived";
import MsgSent from "./MsgSent";
import ClouseConversationButton from "../buttons/ClouseConversationButton";
import { timestampToISO } from "../timeStampToISO";

const ConversationDetail = ({ contact }) => {
  console.log("conversation detail contact", contact);

  //auto scroll
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [contact]);

  if (!contact) {
    return null;
  }
  //termina el auto scroll

  const concatMessages = [...contact.MsgReceiveds, ...contact.MsgSents];
  //console.log("mensajes concatenados", concatMessages);

  const formattedMessages = concatMessages.map((message) => {
    return {
      ...message,
      timestamp: timestampToISO(message.timestamp),
    };
  });

  const sortedMessages = formattedMessages.sort((a, b) =>
    a.timestamp.localeCompare(b.timestamp)
  );
  //console.log("mensajes ordenados", sortedMessages);

  return (
    <div className="relative flex flex-col overflow-y-auto overflow-x-hidden p-4">
      <div className="fixed top-16 right-10 mt-2">
        <ClouseConversationButton msgReceiveds={contact.MsgReceiveds} />
      </div>
      {sortedMessages &&
        sortedMessages.map((message) =>
          message.received ? (
            <div key={message.id}>
              <MsgRecived props={message} contact={contact} />
            </div>
          ) : (
            <div key={message.id}>
              <MsgSent props={message} />
            </div>
          )
        )}
      {/* referencia para auto scroll */}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ConversationDetail;
