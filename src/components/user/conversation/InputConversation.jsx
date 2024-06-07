import React from "react";

const InputConversation = () => {
  return (
    <form>
      <div className="w-full h-20 bg-neutral-200 shadow-inner flex flex-row">
        <textarea
          placeholder="tu mensaje..."
          className="w-10/12 h-10 bg-white rounded-[30px] shadow-xl mt-7 ml-6 mr-2 p-1"
        />
        <img
          src="/send-icon.svg"
          className="w-8 h-auto mt-4"
          onMouseOver={(e) => (e.currentTarget.src = "/send-hover-icon.svg")}
          onMouseOut={(e) => (e.currentTarget.src = "/send-icon.svg")}
          alt="enviar"
        />
      </div>
    </form>
  );
};

export default InputConversation;
