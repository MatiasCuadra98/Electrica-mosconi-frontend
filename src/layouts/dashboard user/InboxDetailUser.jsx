import React from "react";
import SideBarU from "../../components/user/SideBarU";
import InboxListUser from "../../components/user/inbox/InboxListUser";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getAllUsersAction,
  getUserByIdAction,
} from "../../redux/actions/actionsUsers";
import { getBusinessByIdAction } from "../../redux/actions/actionBusiness";
import { getAllMessagesReceivedAction } from "../../redux/actions/actionMessages";
import { getContactByMessageReceivedAction } from "../../redux/actions/actionContact";
import ConversationActive from "../../components/user/conversation/ConversationActive";

const InboxDetailUser = () => {
  const dispatch = useDispatch();

  const businessRedux = useSelector((state) => state.business);
  const businessId = businessRedux.id || localStorage.getItem("businessId");

  const userRedux = useSelector((state) => state.user);
  const userId = userRedux.id || localStorage.getItem("userId");

  const { messageId } = useParams();
  const contact = useSelector((state) => state.contact);
  const messages = useSelector((state) => state.messagesReceived);
  const messagesActive = messages && messages.active;
  //console.log("contacto", contact);

  useEffect(() => {
    if (businessId) {
      dispatch(getBusinessByIdAction(businessId));
      dispatch(getAllMessagesReceivedAction());
      if (messageId) {
        //console.log("despacha la action con el mensaje con ID", messageId);
        dispatch(getContactByMessageReceivedAction(messageId));
      }
      if (userId) {
        dispatch(getUserByIdAction(userId));
      }
      dispatch(getAllUsersAction());
    }
    //}, [dispatch, businessId, userId, messageId, contact]);
  }, [dispatch, businessId, userId, messageId]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (businessId) {
        dispatch(getAllMessagesReceivedAction());
      }
      if (messageId) {
        //console.log("despacha la action con el mensaje con ID", messageId);
        dispatch(getContactByMessageReceivedAction(messageId));
      }
    }, 15000); // Cada 15 segundos

    return () => clearInterval(intervalId); // Limpiar el intervalo cuando el componente se desmonte
  }, [dispatch, businessId]);

  return (
    <div className="w-screen">
      <div className="w-52 flex-shrink-0">
        <SideBarU />
      </div>
      <div className="flex flex-1 w-screen-minus-sidebar h-screen-minus-navbar overflow-hidden pl-52">
        <div className="flex flex-col">
          <InboxListUser />
        </div>
        <div className="flex flex-1 items-center justify-center overflow-y-auto overflow-x-hidden">
          <ConversationActive />
        </div>
      </div>
    </div>
  );
};

export default InboxDetailUser;
