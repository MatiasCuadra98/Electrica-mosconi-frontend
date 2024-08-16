import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import InputConversation from "./InputConversation";
import ConversationDetail from "../../utils/conversationDetail/ConversationDetail";
import Spinner from "../../utils/spinners/Spinner";
import CounterInConversation from "../../utils/CounterInConversation";

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
          <div>
            <div className="w-3/5 h-6 fixed top-16 z-40  ml-4 mt-2">
              <CounterInConversation contact={contact} />
            </div>
            <ConversationDetail
              isActive={isActive}
              setIsActive={setIsActive}
              contact={contact}
            />
          </div>
        )}
      </div>
      <div className="w-full">
        <InputConversation />
      </div>
    </div>
  );
};

export default ConversationActive;
