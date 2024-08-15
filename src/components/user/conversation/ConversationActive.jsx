import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import InputConversation from "./InputConversation";
import ConversationDetail from "../../utils/conversationDetail/ConversationDetail";
import Spinner from "../../utils/spinners/Spinner";

const ConversationActive = () => {
  const [isActive, setIsActive] = useState(false);
  const [loading, setLoading] = useState(true);
  const contact = useSelector((state) => state.contact);
  useEffect(() => {
    if (contact.id) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [contact.id]);

  return (
    <div className="w-full h-full flex flex-col overflow-hidden">
      <div className="flex-grow overflow-y-auto">
        {loading ? (
          <Spinner />
        ) : (
          <ConversationDetail
            isActive={isActive}
            setIsActive={setIsActive}
            contact={contact}
          />
        )}
      </div>
      <div className="w-full">
        <InputConversation />
      </div>
    </div>
  );
};

export default ConversationActive;
