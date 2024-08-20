import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch  } from "react-redux";
import MsgRecived from "./MsgRecived";
import MsgSent from "./MsgSent";
import ClouseConversationButton from "../buttons/ClouseConversationButton";
import configureSocketListeners from "../../../socket/configureSocketListeners";

const ConversationDetail = ({ contact }) => {
  console.log("conversation detail contact", contact);

  const [messages, setMessages] = useState([
    ...contact.MsgReceiveds, 
    ...contact.MsgSents
  ]);
  
  const socket = useSelector((state) => state.socket); // Obtenemos el socket desde Redux
  const dispatch = useDispatch(); // Para despachar acciones


  // Auto scroll
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    if (socket) {
        // Configurar los listeners del socket
        const cleanup = configureSocketListeners(socket, dispatch, contact.id);

        return () => {
            cleanup(); // Limpia los listeners al desmontar el componente
        };
    }
}, [socket, contact.id, dispatch]);

if (!contact) {
    return null;
}
  const sortedMessages = [...messages].sort((a, b) => a.timestamp - b.timestamp);

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

// Definición de PropTypes para validar las props
ConversationDetail.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.number.isRequired, // Asegúrate de que 'id' es un número y es requerido
    MsgReceiveds: PropTypes.array.isRequired,
    MsgSents: PropTypes.array.isRequired,
    SocialMedium: PropTypes.shape({
      icon: PropTypes.string,
      name: PropTypes.string,
    }),
  }).isRequired,
};

export default ConversationDetail;
