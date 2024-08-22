import React from "react";
import SideBarU from "../../components/user/SideBarU";
import InboxListUser from "../../components/user/inbox/InboxListUser";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllUsersAction,
  getUserByIdAction,
} from "../../redux/actions/actionsUsers";
import { getBusinessByIdAction } from "../../redux/actions/actionBusiness";
import { getAllMessagesReceivedAction } from "../../redux/actions/actionMessages";
import { CONNECT_SOCKET, DISCONNECT_SOCKET } from "../../redux/types";

const InboxUser = () => {
  const dispatch = useDispatch();
  const businessRedux = useSelector((state) => state.business);
  const businessId = businessRedux.id || localStorage.getItem("businessId");
  const userRedux = useSelector((state) => state.user);
  const userId = userRedux.id || localStorage.getItem("userId");
  //const messagesReceived = useSelector((state) => state.messagesReceived);

  // const handleNewMessage = (message) => {
  //   dispatch(addNewMessageReceivedAction(message));
  //   console.log("socket agrego un mensaje con mensaje:", mensaje);
  // };

  useEffect(() => {
    if (businessId) {
      dispatch(getBusinessByIdAction(businessId));
      dispatch(getAllMessagesReceivedAction());
      if (userId) {
        dispatch(getUserByIdAction(userId));
      }
      dispatch(getAllUsersAction());
    }

    // Conectar al socket
    dispatch({ type: CONNECT_SOCKET });

    // // Manejar la recepción de nuevos mensajes
    // handleNewMessage(message);

    // Limpieza al desmontar el componente
    return () => {
      dispatch({ type: DISCONNECT_SOCKET });
    };
  }, [dispatch, businessId, userId]);

  return (
    <div className="w-screen h-screen flex overflow-hidden">
      <div className="w-52 flex-shrink-0">
        <SideBarU />
      </div>
      <div className="flex flex-col">
        <InboxListUser />
      </div>
      <div className="flex flex-1 items-center justify-center overflow-y-auto overflow-x-hidden">
        <img src="/public/imagenFondoCAInactiva.svg" className="-mt-12" />
      </div>
    </div>
  );
};

export default InboxUser;
