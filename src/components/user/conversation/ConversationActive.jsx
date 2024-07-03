import  { useState } from "react";
import InputConversation from "./InputConversation";
import ConversationDetail from "../../utils/conversationDetail/ConversationDetail";

const ConversationActive = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="w-full h-full flex items-center justify-center">
      {isActive ? (
        <img src="/public/imagenFondoCAInactiva.svg" className="-mt-12" />
      ) : (
        <div className="w-full flex flex-col h-full">
          <div className="flex-grow overflow-y-auto overflow-x-hidden">
            <ConversationDetail isActive={isActive} setIsActive={setIsActive} />
          </div>
          <div className="w-full">
            <InputConversation />
          </div>
        </div>
      )}
    </div>
  );
};

export default ConversationActive;
