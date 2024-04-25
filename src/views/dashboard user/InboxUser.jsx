import React from "react";
import SideBarU from "../../components/dashboard user/SideBarU";
import { useEffect } from "react";

const InboxUser = () => {
  useEffect(() => {}, []);

  return (
    <div>
      <SideBarU />
      <div className="w-[1300px] h-screen bg-green-400">
        <h1>BANDEJA DE ENTRADA USER</h1>
      </div>
    </div>
  );
};

export default InboxUser;
