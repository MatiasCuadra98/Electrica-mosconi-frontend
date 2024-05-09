import React from "react";
import SideBarU from "../../components/dashboard user/SideBarU";
import InboxListUser from "../../components/dashboard user/inbox/InboxListUser";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllUsersAction,
  getUserByIdAction,
} from "../../redux/actions/actionsUsers";
import ConversationActive from "../../components/dashboard user/conversation/ConversationActive";

const InboxUser = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsersAction());
    //console.log("despacho la accion");
  }, [dispatch]);

  return (
    <div className="flex">
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
