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

const InboxUser = () => {
  const dispatch = useDispatch();
  const businessRedux = useSelector((state) => state.business);
  const businessId = businessRedux.id || localStorage.getItem("businessId");
  const userRedux = useSelector((state) => state.user);
  const userId = userRedux.id || localStorage.getItem("userId");
  const messages = useSelector((state) => state.messagesReceived);
  //console.log("messages", messages);

  useEffect(() => {
    if (businessId) {
      dispatch(getBusinessByIdAction(businessId));
      dispatch(getAllMessagesReceivedAction());
      if (userId) {
        dispatch(getUserByIdAction(userId));
      }
      dispatch(getAllUsersAction());
    }
  }, [dispatch, businessId, userId]);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     if (businessId) {
  //       dispatch(getAllMessagesReceivedAction());
  //     }
  //   }, 15000); // Cada 15 segundos

  //   return () => clearInterval(intervalId); // Limpiar el intervalo cuando el componente se desmonte
  // }, [dispatch, businessId]);

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
