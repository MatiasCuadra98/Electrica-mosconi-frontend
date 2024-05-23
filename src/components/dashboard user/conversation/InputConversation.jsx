import React from "react";

const InputConversation = () => {
  return (
    <div className="w-full h-24 bg-neutral-200 shadow-inner">
      <input
        placeholder="tu mensaje..."
        className="w-4/5 h-10 bg-white rounded-[30px] shadow-xl mt-10 p-1"
      />
      <button>&#9658;</button>
    </div>
  );
};

export default InputConversation;
