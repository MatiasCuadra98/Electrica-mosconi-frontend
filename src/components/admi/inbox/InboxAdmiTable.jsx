import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Spinner from "../../utils/spinners/Spinner";
import StateMessagesIcons from "../../utils/icons/StateMessagesIcons";
import SocialMediaIcons from "../../utils/icons/socialMediaIcons";
import FormattedTimestamp from "../../utils/FormatedTimeStamp";
import ArchivedButton from "./ArchivedButton";
import FilterText from "../../utils/filters/FilterText";
import IconUser from "../../utils/selectUser/IconUser";

const InboxAdmiTable = () => {
  const allMessagesReceived = useSelector((state) => state.messagesReceived);
  // allMessagesReceived.forEach((msg) => {
  //   console.log("mensajes en inboxAdmi", msg.Contact);
  // });

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

  messagesByContact.forEach((msg) => {
    console.log("mensajes por contacto", msg.Contact);
  });

  return (
    <div>
      <table className="min-w-full table-auto bg-white ">
        <thead className="bg-stone-200 shadow-md relative z-10">
          <tr>
            <th className=" px-4 py-2 text-sm text-center text-normal font-['Oswald']">
              ESTADO
            </th>
            <th className="px-4 py-2 text-sm text-center text-normal font-['Oswald']">
              INICIO
            </th>
            <th className="px-4 py-2 text-sm text-center text-normal font-['Oswald'] whitespace-nowrap">
              RED SOCIAL
            </th>
            <th className="px-4 py-2 text-sm text-center text-normal font-['Oswald']">
              DATOS DEL CONTACTO
            </th>
            <th className="px-4 py-2 text-sm text-center text-normal font-['Oswald']">
              USUARIO
            </th>
            <th className="px-4 py-2 text-sm text-center text-normal font-['Oswald']">
              RESPUESTA
            </th>
            <th className="px-4 py-2 text-sm text-center text-normal font-['Oswald']">
              ARCHIVAR
            </th>
          </tr>
        </thead>
        {loading ? (
          <tr>
            <td colSpan="7" className="text-center py-4 h-[600px]">
              <Spinner />
            </td>
          </tr>
        ) : (
          <tbody className="overflow-x-auto">
            {!allMessagesReceived.length ? (
              <tr>
                <td
                  colSpan="7"
                  className="text-center py-4 h-[600px] font-normal font-['Inter']"
                >
                  <FilterText />
                </td>
              </tr>
            ) : (
              messagesByContact.map((message, index) => {
                return (
                  <tr key={index} className="odd:bg-white even:bg-stone-300 ">
                    <td className="pl-6 pr-4 py-2 text-center">
                      <StateMessagesIcons state={message.state} />
                    </td>
                    {/* esta deberia ser la fecha en la que se recibio el primer mensaje del contacto */}
                    <td className="px-4 py-2 text-center text-xs font-normal font-['Inter'] capitalize">
                      <FormattedTimestamp
                        timestamp={
                          message.Contact &&
                          message.Contact.MsgReceiveds.length > 0
                            ? message.Contact.MsgReceiveds.sort(
                                (a, b) => a.timestamp - b.timestamp
                              )[0].timestamp
                            : null
                        }
                      />
                    </td>
                    <td className="px-[1.75rem] py-2 text-center w-6 h-6">
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
                    <td className="pl-6 pr-4 py-2 text-center w-8 h-8 ">
                      <IconUser
                        name={
                          message.Contact &&
                          message.Contact.MsgSents.length > 0 &&
                          message.Contact.MsgSents.Users
                            ? message.Contact.MsgSents.Users.name
                            : null
                        }
                      />
                    </td>
                    <td className="px-4 py-2 text-center text-xs font-normal font-['Inter'] capitalize">
                      <FormattedTimestamp
                        timestamp={
                          message.Contact && message.Contact.MsgSents.length > 0
                            ? message.Contact.MsgSents.sort(
                                (a, b) => b.timestamp - a.timestamp
                              )[0].timestamp
                            : null
                        }
                      />
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