import React from "react";
import SideBarU from "../../components/user/SideBarU";
import InboxListUser from "../../components/user/inbox/InboxListUser";
import ConversationActive from "../../components/user/conversation/ConversationActive";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllUsersAction,
  getUserByIdAction,
} from "../../redux/actions/actionsUsers";
import { getBusinessByIdAction } from "../../redux/actions/actionBusiness";
import { getAllMessagesReceivedAction } from "../../redux/actions/actionMessages";
import { getContactByMessageReceivedAction } from "../../redux/actions/actionContact";
import { CONNECT_SOCKET, DISCONNECT_SOCKET } from "../../redux/types";

const InboxUser = () => {
  console.log("InboxUser render");
  const dispatch = useDispatch();
  //businees
  const businessRedux = useSelector((state) => state.business);
  const businessId = businessRedux.id || localStorage.getItem("businessId");
  //user
  const userRedux = useSelector((state) => state.user);
  const userId = userRedux.id || localStorage.getItem("userId");
  //socket
  const socket = useSelector((state) => state.socket);
  //mensajes recibidos
  const messagesReceived = useSelector((state) => state.messagesReceived);
  console.log("mensajes recibidos", messagesReceived.length);
  const messageActive = useSelector((state) => state.messageActive);
  // const messageActive =
  //   messagesReceived && messagesReceived.find((message) => message.active);
  // messageActive && console.log("mensajeActivo", messageActive);
  // //const { messageId } = useParams();
  // const msgId = messageActive && messageActive.id;
  //mesajes enviados
  const msgSent = useSelector((state) => state.messagesSent);

  useEffect(() => {
    console.log("InboxUser useEffect");
    console.log("me monto por primera vez");
    if (businessId) {
      dispatch(getBusinessByIdAction(businessId));
      dispatch(getAllMessagesReceivedAction());
      dispatch(getAllUsersAction());
    }
  }, [dispatch, businessId]);

  useEffect(() => {
    if (userId) {
      console.log("me monto si se elije un user o si userId cambia");
      dispatch(getUserByIdAction(userId));
    }
  }, [dispatch, userId]);

  useEffect(() => {
    if (messageActive) {
      console.log("cambio el mensaje activo, entonces me monto");
      dispatch(getAllMessagesReceivedAction());
      console.log("5 -despacho los mensajes recibidos");
      dispatch(getContactByMessageReceivedAction(messageActive));
      console.log("6-traigo el contacto por id");
    }
  }, [dispatch, messageActive, msgSent]);

  useEffect(() => {
    if (!socket) {
      dispatch({ type: CONNECT_SOCKET });
    }
    return () => {
      if (socket) {
        dispatch({ type: DISCONNECT_SOCKET });
      }
    };
  }, [dispatch, socket]);

  return (
    <div className="w-screenh-screen-minus-navbar flex overflow-hidden">
      <div className="w-52 flex-shrink-0">
        <SideBarU />
      </div>
      <div className="flex flex-1 w-screen-minus-sidebar h-screen-minus-navbar overflow-hidden ">
        <div className="flex flex-col">
          <InboxListUser />
        </div>
      </div>
      <div className="flex  items-center justify-center ">
        {/* {messageActive ? ( */}
        <img src="/public/imagenFondoCAInactiva.svg" className="-mt-12" />
        {/* ) : (
          <div className="flex flex-1 items-center justify-center overflow-y-auto overflow-x-hidden">
            <ConversationActive />
          </div>
        )} */}
      </div>
    </div>
  );
};

export default InboxUser;
