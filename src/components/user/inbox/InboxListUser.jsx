import React from "react";
import InboxCardUser from "./InboxCardUser";
import { useSelector } from "react-redux";

const InboxListUser = () => {
  const messagesReceived = useSelector((state) => state.messagesReceived);
  console.log("menasajes recibidos:", messagesReceived);
  //const messages = messageRecivedJson;

  return (
    <div className="sticky w-72 h-screen overflow-y-auto overflow-x-hidden bg-green-400">
      {messagesReceived.length ? (
        messagesReceived.map((message, index) => {
          return (
            <div key={index}>
              <InboxCardUser props={message} />
            </div>
          );
        })
      ) : (
        <p>No hay mensajes en su OneInbox</p>
      )}
    </div>
  );
};

export default InboxListUser;
