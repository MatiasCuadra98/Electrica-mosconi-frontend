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
import {
  getAllMessagesReceivedAction,
  getAllMessagesSentAction,
} from "../../redux/actions/actionMessages";
import { getContactByMessageReceivedAction } from "../../redux/actions/actionContact";
import ConversationActive from "../../components/user/conversation/ConversationActive";
import { CONNECT_SOCKET, DISCONNECT_SOCKET } from "../../redux/types";

const InboxDetailUser = () => {
  const dispatch = useDispatch();

  const businessRedux = useSelector((state) => state.business);
  const businessId = businessRedux.id || localStorage.getItem("businessId");

  const userRedux = useSelector((state) => state.user);
  const userId = userRedux.id || localStorage.getItem("userId");

  const { messageId } = useParams();
  const contact = useSelector((state) => state.contact);
  const socket = useSelector((state) => state.socket);
  const msgSent = useSelector((state) => state.messagesSent);

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
  }, [dispatch, businessId, userId, messageId, msgSent]);

  useEffect(() => {
    // Conectar al socket
    if (!socket) {
      dispatch({ type: CONNECT_SOCKET });
    }
    return () => {
      dispatch({ type: DISCONNECT_SOCKET });
    };
  }, [socket]);

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
