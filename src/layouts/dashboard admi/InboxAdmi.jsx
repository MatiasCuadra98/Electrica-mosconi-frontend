import React from "react";
import SideBarA from "../../components/dashboard-admin/SideBarA";

const InboxAdmi = () => {
  return (
    <div className="w-screen h-screen flex overflow-hidden">
      <div className="w-52 flex-shrink-0">
        <SideBarA />
      </div>
      <h1>BANDEJA DE ENTRADA ADMI</h1>
    </div>
  );
};

export default InboxAdmi;
