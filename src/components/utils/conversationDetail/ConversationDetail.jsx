import { useEffect, useRef } from "react";
import MsgRecived from "./MsgRecived";
import MsgSent from "./MsgSent";
import ClouseConversationButton from "../buttons/ClouseConversationButton";

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
  const allMessages = [...contact.MsgReceiveds, ...contact.MsgSents].sort(
    (a, b) => a.timestamp - b.timestamp
  );

  //console.log("mensaje desde Contact", allMessages);

  return (
    <div className="relative flex flex-col overflow-y-auto overflow-x-hidden p-4">
      <div className="fixed top-16 right-10 mt-2">
        <ClouseConversationButton msgReceiveds={contact.MsgReceiveds} />
      </div>
      {allMessages &&
        allMessages.map((message) =>
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
