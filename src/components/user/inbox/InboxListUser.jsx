import InboxCardUser from "./InboxCardUser";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import FilterText from "../../utils/filters/FilterText";
import Spinner from "../../utils/spinners/Spinner";

const InboxListUser = () => {
  const allMessagesReceived = useSelector((state) => state.messagesReceived);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

  const sortedMessages = allMessagesReceived
    .slice()
    .sort((a, b) => b.timestamp - a.timestamp);

  const messagesByContact = []; //array para almacenar mensajes de contactos únicos.
  const seenContactIds = new Set(); //conjunto (Set) es una colección de valores únicos, no puede contener elementos duplicados.
  //itero sobre cada mensaje de array sortedMessages
  for (const message of sortedMessages) {
    if (!seenContactIds.has(message.ContactId)) {
      // este id de contacto  NO existe en el conjunto?
      messagesByContact.push(message); // ==> pusheo el mensaje en messagesByContact
      seenContactIds.add(message.ContactId); // ==> agrego el contacto en el conjunto
    }
  }
  return (
    <div className="sticky w-72 h-screen overflow-y-auto overflow-x-hidden bg-green-400">
      {loading ? (
        <Spinner />
      ) : allMessagesReceived.length ? (
        messagesByContact.map((message, index) => {
          const {
            id,
            name,
            timestamp,
            state,
            active,
            SocialMedium,
            ContactId,
          } = message; // Desestructurar aca para pasar los props a inboxCardUser correctamente
          return (
            <div key={index}>
              <InboxCardUser
                id={id}
                name={name}
                timestamp={timestamp}
                state={state}
                active={active}
                SocialMedium={SocialMedium}
                ContactId={ContactId}
                messagesReceived={allMessagesReceived}
              />
            </div>
          );
        })
      ) : (
        <div className="flex justify-center items-center mt-64">
          <FilterText />
        </div>
      )}
    </div>
  );
};

export default InboxListUser;
