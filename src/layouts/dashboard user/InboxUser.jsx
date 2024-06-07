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
import ConversationActive from "../../components/user/conversation/ConversationActive";

const InboxUser = () => {
  const dispatch = useDispatch();
  const businessRedux = useSelector((state) => state.business);
  const businessId = businessRedux.id || localStorage.getItem("businessId");
  const userRedux = useSelector((state) => state.user);
  const userId = userRedux.id || localStorage.getItem("userId");

  //console.log(userId);

  useEffect(() => {
    if (businessId) {
      dispatch(getBusinessByIdAction(businessId));
      if (userId) {
        dispatch(getUserByIdAction(userId));
      }
      dispatch(getAllUsersAction());
      //console.log("despacho la accion");
    }
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
        <ConversationActive />
      </div>
    </div>
  );
};

export default InboxUser;
