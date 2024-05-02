import React from "react";
import SideBarU from "../../components/dashboard user/SideBarU";
import InboxListUser from "../../components/dashboard user/inbox/InboxListUser";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllUsersAction,
  getUserByIdAction,
} from "../../redux/actions/actionsUsers";

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
    </div>
  );
};

export default InboxUser;
