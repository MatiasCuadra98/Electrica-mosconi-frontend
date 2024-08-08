import InboxCardUser from "./InboxCardUser";
import { useSelector } from "react-redux";

const InboxListUser = () => {
  const business = useSelector((state) => state.business);
  const allMessagesReceived = useSelector((state) => state.messagesReceived);
  const messagesReceived = allMessagesReceived.filter(
    (message) => message.BusinessId === business.id
  );

  const sortedMessages = messagesReceived
    .slice()
    .sort((a, b) => b.timestamp - a.timestamp);

  const messagesByContact = [];
  const seenContactIds = new Set();

  for (const message of sortedMessages) {
    if (!seenContactIds.has(message.ContactId)) {
      messagesByContact.push(message);
      seenContactIds.add(message.ContactId);
    }
  }

  return (
    <div className="sticky w-72 h-screen overflow-y-auto overflow-x-hidden bg-green-400">
      {messagesReceived.length ? (
        messagesByContact.map((message, index) => {
          const { id, name, timestamp, state } = message; // Desestructurar aca para pasar los props a inboxCardUser correctamente

          return (
            <div key={index}>
              <InboxCardUser
                id={id}
                name={name}
                timestamp={timestamp}
                state={state}
              />
            </div>
          );
        })
      ) : (
        <p>No hay mensajes en su OneInbox</p>
      )}
    </div>
  );
};

export default InboxListUser;
