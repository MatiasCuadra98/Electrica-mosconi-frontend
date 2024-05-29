import React from "react";
import InboxCardUser from "./InboxCardUser";
import messageRecivedJson from "../../../../public/json/messagesRecivedJson";
//import { useSelector } from "react-redux";

const InboxListUser = (props) => {
  //const messages = useSelector((state) => state.messages)
  //const messages = messageRecivedJson;

  return (
    <div className="w-80 h-screen overflow-y-auto overflow-x-hidden bg-green-400">
      <InboxCardUser />
      <InboxCardUser />
      <InboxCardUser />
      <InboxCardUser />
      <InboxCardUser />
      <InboxCardUser />
      <InboxCardUser />
      <InboxCardUser />
      <InboxCardUser />
      <InboxCardUser />
      <InboxCardUser />
      <InboxCardUser />
      <InboxCardUser />
      <InboxCardUser />
      <InboxCardUser />
      <InboxCardUser />
    </div>
  );
};

export default InboxListUser;
