import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createMessageSentAction,
  updateStateMessageReceivedAction,
} from "../../../redux/actions/actionMessages";
import { sweetAlertsError } from "../../utils/alerts/alerts";

const InputConversation = () => {
  const [input, setInput] = useState({
    chatId: "",
    message: "",
    UserId: "",
  });

  const dispatch = useDispatch();

  const contact = useSelector((state) => state.contact);
  //console.log("contacto en input", contact);

  const contactChatId = contact ? contact.chatId : null;
  const messages = contact && contact.MsgReceiveds;
  const newMessages =
    messages && messages.filter((message) => message.state === "Leidos");
  //console.log(newMessages);

  const user = useSelector((state) => state.user);

  const inputHandler = (e) => {
    setInput({
      chatId: contactChatId,
      message: e.target.value,
      UserId: user && user.id,
    });
  };
  // console.log("UserId", input.UserId);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.UserId && input.message && input.chatId) {
      dispatch(createMessageSentAction(input));
      newMessages.forEach((message) =>
        dispatch(updateStateMessageReceivedAction(message.id))
      );
      //console.log("despacho la action del input:", input);
      setInput({
        chatId: "",
        message: "",
        UserId: "",
      });
    } else if (!input.UserId && input.message && input.chatId) {
      sweetAlertsError(
        "Seleccioná un Usuario!",
        "No se puede enviar una respuesta sin un usuario asociado",
        "Ok"
      );
    } else if (!input.message && input.UserId && input.chatId) {
      sweetAlertsError(
        "Escribí un mensaje!",
        "No se puede enviar una respuesta vacía",
        "Ok"
      );
    } else {
      sweetAlertsError(
        "Falló el envío!",
        "Falta información...Intentá enviar la respuesta nuevamente",
        "Ok"
      );
    }
  };

  // Manejar la pulsación de tecla en el textarea
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Evitar el comportamiento predeterminado de la tecla Enter
      handleSubmit(e); // Llamar a la función handleSubmit para enviar el mensaje
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full h-20 bg-neutral-200 shadow-inner flex flex-row">
        <input
          className="w-10/12 h-10 bg-white rounded-[30px] shadow-xl mt-7 ml-6 mr-2 p-1 text-black"
          // id="message"
          // name="message"
          type="textarea"
          value={input.message}
          onChange={inputHandler}
          placeholder="Escribe tu mensaje..."
          onKeyPress={handleKeyPress} // Manejar la pulsación de tecla
        />
        <button
          type="submit"
          // onClick={handleClick}
          className="bg-transparent border-none m-0 p-0"
        >
          <img
            src="/send-icon.svg"
            className="w-8 h-auto mt-4"
            onMouseOver={(e) => (e.currentTarget.src = "/send-hover-icon.svg")}
            onMouseOut={(e) => (e.currentTarget.src = "/send-icon.svg")}
            alt="enviar"
          />
        </button>
      </div>
    </form>
  );
};

export default InputConversation;
