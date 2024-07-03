import { useState } from "react";

const InputConversation = () => {
  const [message, setMessage] = useState(""); // Estado para almacenar el mensaje escrito

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evitar el envío automático del formulario

    if (message.trim() === '') {
      return; // No hacer nada si el mensaje está vacío
    }
    console.log("Mensaje enviado:", message); // Aquí puedes implementar la lógica para enviar el mensaje
    setMessage(""); // Limpiar el estado del mensaje después de enviarlo
  };

  // Manejar el cambio en el textarea
  const handleChange = (e) => {
    setMessage(e.target.value); // Actualizar el estado del mensaje
  };

  // Manejar la pulsación de tecla en el textarea
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Evitar el comportamiento predeterminado de la tecla Enter
      handleSubmit(e); // Llamar a la función handleSubmit para enviar el mensaje
    }
  };

  // Manejar clic en el botón de enviar
  const handleClick = (e) => {
    handleSubmit(e); // Llamar a la función handleSubmit para enviar el mensaje
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full h-20 bg-neutral-200 shadow-inner flex flex-row">
        <textarea
          placeholder="Escribe tu mensaje..."
          className="w-10/12 h-10 bg-white rounded-[30px] shadow-xl mt-7 ml-6 mr-2 p-1 text-black"
          value={message}
          onChange={handleChange} // Actualizar el estado del mensaje
          onKeyPress={handleKeyPress} // Manejar la pulsación de tecla
        />
        <button type="submit" onClick={handleClick}> {/* Botón de enviar */}
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
