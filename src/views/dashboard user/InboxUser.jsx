import React from "react";
import SideBarU from "../../components/dashboard user/SideBarU";
import InboxListUser from "../../components/dashboard user/inbox/InboxListUser";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllUsersAction,
  getUserByIdAction,
} from "../../redux/actions/actionsUsers";
import { getBusinessByIdAction } from "../../redux/actions/actionBusiness";
import ConversationActive from "../../components/dashboard user/conversation/ConversationActive";

const InboxUser = () => {
  const dispatch = useDispatch();
  const businessRedux = useSelector((state) => state.business);
  const businessId = businessRedux.id || localStorage.getItem("businessId");
  // const userRedux = useSelector((state) => state.user);
  // const userId = userRedux.id || JSON.perse(localStorage.getItem("userId"));

  // useEffect(() => {
  //   if (businessId) {
  //     dispatch(getBusinessByIdAction(businessId));
  //     userId
  //       ? dispatch(getUserByIdAction(userId))
  //       : dispatch(getAllUsersAction());
  //     //console.log("despacho la accion");
  //   }
  // }, [dispatch, businessId, userId]);

  useEffect(() => {
    if (businessId) {
      dispatch(getBusinessByIdAction(businessId));
      dispatch(getAllUsersAction());
      //console.log("despacho la accion");
    }
  }, [dispatch, businessId]);

  return (
    <div className="w-screen h-screen flex">
      <div className="w-52">
        <SideBarU />
      </div>
      <div className="flex flex-col flex-1">
        <InboxListUser />
      </div>
      <div className="flex flex-col items-center justify-center flex-1">
        <ConversationActive />
      </div>
    </div>
  );
};

export default InboxUser;
