
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
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full flex flex-col h-full">
        <div className="flex-grow overflow-y-auto overflow-x-hidden">
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
    </div>
  );
};

export default ConversationActive;
