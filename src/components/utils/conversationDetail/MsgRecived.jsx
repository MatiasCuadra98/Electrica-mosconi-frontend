import React from "react";

const MsgRecived = (props) => {
  return (
    <div className="w-[473px] h-auto bg-neutral-200 rounded-tl-[40px] rounded-tr-[40px] rounded-bl-[40px] p-4 flex flex-col justify-between">
      <div className="flex items-center mb-4">
        <img
          src="/socialMediaImage/whatsapp.svg"
          className="w-14 h-14 rounded-[33.50px] shadow-xl mr-4"
        />
        <h2 className="text-black text-lg font-normal font-['Oswald'] capitalize">
          DATO CONTACTO
        </h2>
      </div>
      <div className="text-center mb-4">
        <h2 className="w-[432px] h-auto text-black text-base font-normal font-['Inter']">
          soy un mensaje de entrada
        </h2>
      </div>
      <div className="flex justify-end">
        <p className="w-[74px] h-[18px] text-black text-[13px] font-normal font-['Oswald'] capitalize">
          FECHA Y HORA
        </p>
      </div>
    </div>
  );
};

export default MsgRecived;
