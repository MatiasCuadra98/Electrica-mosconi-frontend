import React from "react";
import { useSelector } from "react-redux";
import IconUser from "../selectUser/IconUser";

const MsgSent = (props) => {
  //IMPORTANTE: se trae el dato de user, pero en realidad deberia traer el dato del usuario que contesto el mensaje, y no el activo en el momento!!!
  const user = useSelector((state) => state.user);
  return (
    <div className=" w-[473px] h-auto bg-stone-300 rounded-tr-[40px] rounded-bl-[40px] rounded-br-[40px] p-4 flex flex-col justify-between m-4 self-end mr-10">
      <div className="text-center mb-4">
        <h2 className="w-[432px] h-auto text-black text-base font-normal font-['Inter']">
          Soy un mensaje de salida
        </h2>
      </div>
      <div className="flex items-center justify-end gap-4">
        <p className="w-[74px] h-[18px] text-black text-[13px] font-normal font-['Oswald'] capitalize">
          FECHA Y HORA
        </p>
        <IconUser name={user.name} />
      </div>
    </div>
  );
};

export default MsgSent;
