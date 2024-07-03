import React from "react";

const MsgRecived = (props) => {
  //NOta: la img deberia cargarse segun la red social asociada al contacto
  console.log("props", props);
  return (
    <div className="w-[473px] h-auto bg-neutral-200 rounded-tl-[40px] rounded-tr-[40px] rounded-bl-[40px] p-4 flex flex-col justify-between self-start ml-12 mt-4">
      <div className="flex items-center mb-4">
        <img
          src="/socialMediaImage/telegram.svg"
          className="w-14 h-14 rounded-[33.50px] shadow-xl mr-4"
        />
        <h2 className="text-black text-lg font-normal font-['Oswald'] capitalize">
          {props.props.name}
        </h2>
      </div>
      <div className="text-center mb-4">
        <h2 className="w-[432px] h-auto text-black text-base font-normal font-['Inter']">
          {props.props.text}
        </h2>
      </div>
      <div className="flex justify-end">
        <p className="w-[74px] h-[18px] text-black text-[13px] font-normal font-['Oswald'] capitalize">
          {props.props.timestamp}
        </p>
      </div>
    </div>
  );
};

export default MsgRecived;
