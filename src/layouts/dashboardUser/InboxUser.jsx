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
import {
  filterBySocialMediaAction,
  filterByStateAction,
} from "../../redux/actions/actionFilters";

const InboxUser = () => {
  const dispatch = useDispatch();
  const businessRedux = useSelector((state) => state.business);
  const businessId = businessRedux.id || localStorage.getItem("businessId");
  const userRedux = useSelector((state) => state.user);
  const userId = userRedux.id || localStorage.getItem("userId");
<<<<<<< HEAD
  const messagesReceived = useSelector((state) => state.messagesReceived);
  const socialMedia = useSelector((state) => state.socialMediaFilter);
  const stateFilter = useSelector((state) => state.stateFilter);
=======
  //const messagesReceived = useSelector((state) => state.messagesReceived);
>>>>>>> e43eab4fdebaaba422db863168c70062e4541422

  // const handleNewMessage = (message) => {
  //   dispatch(addNewMessageReceivedAction(message));
  //   console.log("socket agrego un mensaje con mensaje:", mensaje);
  // };

  useEffect(() => {
    // Conectar al socket
    dispatch({ type: CONNECT_SOCKET });

    if (businessId) {
      dispatch(getBusinessByIdAction(businessId));
      dispatch(getAllMessagesReceivedAction());
      if (userId) {
        dispatch(getUserByIdAction(userId));
      }
      dispatch(getAllUsersAction());
    }

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
