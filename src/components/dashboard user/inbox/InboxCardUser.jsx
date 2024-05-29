import React from "react";
import { useSelector } from "react-redux";
import IconUser from "../../utils/selectUser/IconUser";

const InboxCardUser = (props) => {
  //IMPORTANTE: se trae el dato de user, pero en realidad deberia traer el dato del usuario que contesto el mensaje, y no el activo en el momento!!!
  const user = useSelector((state) => state.user);
  return (
    <div className="w-80 h-28 relative shadow-inner bg-green-400 flex items-center justify-between p-2">
      <img
        src="/socialMediaImage/whatsapp.svg"
        className="w-12 h-12 opacity-90 rounded-full border-2 border-white mr-2"
      />
      <div className="flex flex-col justify-center">
        <span className="text-black text-lg font-normal font-['Oswald'] capitalize">
          DATO CONTACTO
          <br />
        </span>
        <span className="text-black text-[13px] font-normal font-['Oswald'] capitalize">
          FECHA Y HORA
          <br />
        </span>
      </div>
      <div className="flex flex-col items-end mr-6">
        <img
          className="w-10 h-10 bg-white rounded-full mb-1"
          src="/public/states/respondido.svg"
        />
        <IconUser name={user.name} />
      </div>
    </div>
  );
};

{
  /* <div className="w-[334px] h-[120px] relative shadow-inner">
<div className="w-[334px] h-[120px] left-0 top-0 absolute bg-green-400" />
<div className="w-[163px] h-[71px] left-[93px] top-[24px] absolute"><span style="text-black text-lg font-normal font-['Oswald'] capitalize">dATO CONTACTO<br/></span><span style="text-black text-[13px] font-normal font-['Oswald'] capitalize">FECHA Y HORA<br/></span></div>
<div className="w-[38px] h-[38px] left-[276px] top-[67px] absolute">
<img className="w-[38px] h-[38px] left-0 top-0 absolute opacity-90 rounded-[110px] border-2 border-white" src="https://via.placeholder.com/38x38" />
</div>
<img className="w-[51px] h-[51px] left-[20px] top-[33px] absolute rounded-[255px] shadow" src="https://via.placeholder.com/51x51" />
<div className="w-[38px] h-[38px] left-[276px] top-[14px] absolute">
<div className="w-[38px] h-[38px] left-0 top-0 absolute bg-white rounded-full" />
<div className="w-[29.03px] h-[29.03px] left-[4.75px] top-[4.22px] absolute" />
</div>
</div> */
}

export default InboxCardUser;
