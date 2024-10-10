import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Spinner from "../../utils/spinners/Spinner";
import StateMessagesIcons from "../../utils/icons/StateMessagesIcons";
import SocialMediaIcons from "../../utils/icons/socialMediaIcons";
import FormattedTimestamp from "../../utils/FormatedTimeStamp";
import ArchivedButton from "./ArchivedButton";

const InboxAdmiTable = () => {
  const allMessagesReceived = useSelector((state) => state.messagesReceived);
  console.log("mensajes en inboxAdmi", allMessagesReceived);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timeoutId;
    if (allMessagesReceived.length) {
      setLoading(false);
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    }
    return () => {
      if (timeoutId) clearTimeout(timeoutId); // Limpia el timeout si el componente se desmonta
    };
  }, [allMessagesReceived]);

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
    <div>
      <table className="min-w-full table-auto bg-white ">
        <thead className="bg-stone-400 shadow-md">
          <tr>
            <th className=" px-4 py-2 text-sm text-center text-normal font-['Oswald']">
              ESTADO
            </th>
            <th className="px-4 py-2 text-sm text-center text-normal font-['Oswald']">
              FECHA INICIAL
            </th>
            <th className="px-4 py-2 text-sm text-center text-normal font-['Oswald']">
              RED SOCIAL
            </th>
            <th className="px-4 py-2 text-sm text-center text-normal font-['Oswald']">
              DATOS DEL CONTACTO
            </th>
            <th className="px-4 py-2 text-sm text-center text-normal font-['Oswald']">
              USUARIO
            </th>
            <th className="px-4 py-2 text-sm text-center text-normal font-['Oswald']">
              FECHA RESPUESTA
            </th>
            <th className="px-4 py-2 text-sm text-center text-normal font-['Oswald']">
              ARCHIVAR
            </th>
          </tr>
        </thead>
        {loading ? (
          <Spinner />
        ) : (
          <tbody className="overflow-x-auto">
            {!allMessagesReceived.length ? (
              <tr>
                <td colSpan="7" className="text-center py-4">
                  No hay datos disponibles
                </td>
              </tr>
            ) : (
              messagesByContact.map((message, index) => {
                {
                  console.log(
                    message.SocialMedium && message.SocialMedium.name
                  );
                }
                return (
                  <tr key={index} className="odd:bg-white even:bg-stone-300 ">
                    <td className="pl-6 pr-4 py-2 text-center">
                      <StateMessagesIcons state={message.state} />
                    </td>
                    {/* esta deberia ser la fecha en la que se recibio el primer mensaje del contacto */}
                    <td className="px-4 py-2 text-center text-xs font-normal font-['Inter'] capitalize">
                      <FormattedTimestamp timestamp={message.timestamp} />
                    </td>
                    <td className="px-4 py-2 text-center w-8 h-8">
                      <SocialMediaIcons
                        socialMedia={
                          message.SocialMedium
                            ? message.SocialMedium.name.toUpperCase()
                            : "RED SOCIAL"
                        }
                      />
                    </td>
                    <td className="px-4 py-2 text-center text-sm font-normal font-['Inter'] capitalize">
                      {message.name}
                    </td>
                    {/* esta deberia traer el icono del usuario que respondio */}
                    <td className="px-4 py-2 text-center"> ICONO USER </td>
                    <td className="px-4 py-2 text-center text-xs font-normal font-['Inter'] capitalize">
                      <FormattedTimestamp timestamp={message.timestamp} />
                    </td>
                    <td className="pl-8 pr-4 py-2 text-center ">
                      <ArchivedButton />
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default InboxAdmiTable;
