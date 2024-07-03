import InboxCardUser from "./InboxCardUser";
import { useSelector } from "react-redux";

const InboxListUser = () => {
  const messagesReceived = useSelector((state) => state.messagesReceived);

  console.log("menasajes recibidos:", messagesReceived);
  //const messages = messageRecivedJson;
  const sortedMessages = messagesReceived.slice().sort((a, b) => b.timestamp - a.timestamp);


  return (
    <div className="sticky w-72 h-screen overflow-y-auto overflow-x-hidden bg-green-400">
      {messagesReceived.length ? (
        sortedMessages.map((message, index) => {
          const { name, timestamp, state } = message; // Desestructurar aca para pasar los props a inboxCardUser correctamente

          return (
            <div key={index}>
              <InboxCardUser name={name} timestamp={timestamp} state={state} />
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
