import React from "react";
import { useState } from "react";
import InputConversation from "./InputConversation";
import ConversationDetail from "../../utils/conversationDetail/ConversationDetail";

const ConversationActive = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      {isActive ? (
        <img src="/public/imagenFondoCAInactiva.svg" />
      ) : (
        <div>
          <ConversationDetail />
          <InputConversation />
        </div>
      )}
    </div>
  );
};

export default ConversationActive;
