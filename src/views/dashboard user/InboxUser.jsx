import React from "react";
import SideBarU from "../../components/dashboard user/SideBarU";
import InboxListUser from "../../components/dashboard user/inbox/InboxListUser";
import { useEffect } from "react";

const InboxUser = () => {
  useEffect(() => {}, []);

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
