import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createMessageSentAction,
  setUploadFileAction,
  updateStateMessageReceivedAction,
} from "../../../redux/actions/actionMessages";
import { sweetAlertsError } from "../../utils/alerts/alerts";
import UploadFiles from "../../utils/UploadFiles";

const InputConversation = () => {
  const [input, setInput] = useState({
    chatId: "",
    message: "",
    UserId: "",
    accessToken: "",
    businessId: "",
    IdSocialMedia: "",
    contactId: "",
  });

  const dispatch = useDispatch();
  const contact = useSelector((state) => state.contact);
  //console.log("contacto", contact.SocialMediumId);

  const socialMedia = useSelector((state) => state.socialMedia);
  //console.log("socialMedia", socialMedia);

  //esta parte del codigo esta hecha porque al cambiar el token de MeLi, se crea una nueva red social Activa
  const meLiId = 5;
  const meLiArray =
    contact.SocialMediumId === meLiId &&
    socialMedia &&
    socialMedia
      .filter((sm) => sm.socialMediaId === meLiId)
      .sort((a, b) => a.id - b.id);
  //console.log("mercadoLibreArray", meLiArray);
  const token = meLiArray.length
    ? meLiArray[meLiArray.length - 1].accessToken
    : null;
  //console.log("token", token);

  //ESTE ES EL CODIGO QUE DEBERIA ESTAR CUANDO SE ARREGLE:
  //const findSocialMedia = socialMedia && socialMedia.find(sm => sm.socialMediaId === contact.socialMediumId)
  //const token = findSocialMedia.accessToken

  const user = useSelector((state) => state.user);
  const uploadedFile = useSelector((state) => state.uploadedFile);
  const business = useSelector((state) => state.business);
  // console.log("uploadFile en InputConversation", uploadedFile);
  // const [preview, setPreview] = useState(uploadedFile ? true : false);
  // console.log("preview", preview);

  const contactChatId = contact ? contact.chatId : null;
  const messages = contact && contact.MsgReceiveds;
  const newMessages =
    messages && messages.filter((message) => message.state === "Leidos");

  useEffect(() => {
    if (uploadedFile) {
      // Si hay archivo subido, establece el mensaje como la URL del archivo
      setInput((prev) => ({
        ...prev,
        message: uploadedFile,
        UserId: user && user.id,
        chatId: contactChatId,
        accessToken: token,
        businessId: business.id,
        IdSocialMedia: contact.SocialMediumId,
        contactId: contact.id,
      }));
    } else {
      // Si se borra el archivo subido, limpia el campo de mensaje
      setInput((prev) => ({
        ...prev,
        message: "",
      }));
    }
  }, [uploadedFile, user, contactChatId]);

  const inputHandler = (e) => {
    setInput({
      chatId: contactChatId,
      message: e.target.value,
      UserId: user && user.id,
      accessToken: token,
      businessId: business.id,
      IdSocialMedia: contact.SocialMediumId,
      contactId: contact.id,
    });
    //}
    //console.log("input", input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (uploadedFile) {
      setInput({
        chatId: contactChatId,
        message: uploadedFile,
        UserId: user && user.id,
        accessToken: token,
        businessId: business.id,
        IdSocialMedia: contact.SocialMediumId,
        contactId: contact.id,
      });
    }
    console.log("input SUBMIT: ", input);

    //setPreview(false);
    if (input.UserId && input.message && input.chatId) {
      dispatch(createMessageSentAction(input));
      //console.log("LOG2-envio el mensaje: ", input);
      newMessages.forEach((message) =>
        dispatch(updateStateMessageReceivedAction(message.id))
      );
      setInput({
        chatId: "",
        message: "",
        UserId: "",
        accessToken: "",
        businessId: "",
        IdSocialMedia: "",
        contactId: "",
      });
      uploadedFile && dispatch(setUploadFileAction(""));
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
      <div className="w-full h-16 bg-neutral-200 shadow-inner flex flex-row">
        <input
          className="w-10/12 h-8 bg-white rounded-[30px] shadow-xl mt-6 mb-2 ml-6 mr-2 p-1 text-black"
          type="textarea"
          value={input.message}
          onChange={inputHandler}
          placeholder="Escribe tu mensaje..."
          onKeyPress={handleKeyPress} // Manejar la pulsación de tecla
        />
        <UploadFiles />
        <button
          type="submit"
          className="bg-transparent border-none mx-0 my-2 p-0"
        >
          <img
            src="/send-icon.svg"
            className="w-[1.75rem] h-auto mt-3"
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
