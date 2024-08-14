import React from "react";
import FormattedTimestamp from "../FormatedTimeStamp";

const MsgRecived = ({ props, contact }) => {
  //console.log("propsMsgReceived", props);

  //console.log("contactoMsgRecived", contact);

  //NOta: la img deberia cargarse segun la red social asociada al contacto
  return (
    <div className="w-[473px] h-auto bg-neutral-200 rounded-tl-[40px] rounded-tr-[40px] rounded-bl-[40px] p-4 flex flex-col justify-between self-start ml-12 mt-4">
      <div className="flex items-center mb-4">
        <img
          src={contact.SocialMedium.icon}
          alt={contact.SocialMedium.name}
          className="w-14 h-14 rounded-[33.50px] shadow-xl mr-4"
        />
        <h2 className="text-black text-lg font-normal font-['Oswald'] capitalize">
          {props.name}
        </h2>
      </div>
      <div className="text-center mb-4">
        <h2 className="w-[432px] h-auto text-black text-base font-normal font-['Inter']">
          {props.text}
        </h2>
      </div>
      <div className="flex justify-end">
        <div className="w-[74px] h-[18px] text-black text-[13px] font-normal font-['Oswald'] capitalize mb-4">
          <FormattedTimestamp
            timestamp={props.timestamp}
            // className="w-[74px] h-[18px] text-black text-[13px] font-normal font-['Oswald'] capitalize"
          />
        </div>
      </div>
    </div>
  );
};

export default MsgRecived;
