import React from "react";
import IconUserProfile from "./IconUserProfile";
import { useSelector } from "react-redux";
import socialMediaJson from "../../../../public/json/socialMediaJson";

const Data = () => {
  const user = useSelector((state) => state.user);
  const business = useSelector((state) => state.business);
  return (
    <div className="mt-10">
      <div className="w-[777px] h-auto bg-neutral-200 rounded-tl-[50px] rounded-tr-[50px] rounded-bl-[50px] relative">
        <div className="left-6 top-5 absolute">
          {!user ? (
            <img className="w-18 h-18" src="/noUser.svg" />
          ) : user.image ? (
            <img className="w-18 h-18" src={user.image} />
          ) : (
            <IconUserProfile name={user.name} />
          )}
        </div>
        <div className="flex flex-col items-center pt-6 mt-6">
          <h4 className="text-sm font-normal font-['Oswald'] uppercase">
            mis datos
          </h4>
          <h1 className="text-lg font-normal font-['Oswald'] uppercase">
            {!user.name ? "nombre administrador" : user.name}
          </h1>
        </div>
        <div className="flex flex-row justify-between px-12 mt-12">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <h4 className="text-m font-normal font-['Oswald'] uppercase">
                PRIVILEGIOS:
              </h4>
              <span className="text-base font-normal font-['Inter'] ml-2">
                {user.privilege ? user.privilege : "Administrador"}
              </span>
            </div>
            <div className="flex flex-row">
              <h4 className="text-m font-normal font-['Oswald'] uppercase">
                E-MAIL:
              </h4>
              <span className="text-base font-normal font-['Inter'] ml-2 mb-12">
                {user.email ? user.email : "administrador@email.com"}
              </span>
            </div>
          </div>
          <div className="flex flex-col px-12">
            <div className="flex flex-row">
              <h4 className="text-m font-normal font-['Oswald'] uppercase">
                PASSWORD:
              </h4>
              <span className="text-base font-normal font-['Inter'] ml-2">
                {user.password ? user.password : "password"}
              </span>
            </div>
            <div className="flex flex-row mb-12">
              <h4 className="text-m font-normal font-['Oswald'] uppercase">
                TELEFONO:
              </h4>
              <span className="text-base font-normal font-['Inter'] ml-2">
                {user.phone ? user.phone : "123-456-7890"}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[777px] h-auto bg-neutral-200 rounded-tr-[50px] rounded-bl-[50px] relative">
        <div className="flex flex-col items-center pt-6 mt-6">
          <h4 className="text-sm font-normal font-['Oswald'] uppercase">
            datos de la empresa
          </h4>
          <h1 className="text-lg font-normal font-['Oswald'] uppercase">
            {!business.name ? "null" : business.name}
          </h1>
        </div>
        <div className="flex flex-row justify-between px-12 mt-6">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <h4 className="text-m font-normal font-['Oswald'] uppercase">
                DIRECCION:
              </h4>
              <span className="text-base font-normal font-['Inter'] ml-2">
                {business.address ? business.address : null}
              </span>
            </div>
            <div className="flex flex-row">
              <h4 className="text-m font-normal font-['Oswald'] uppercase">
                pais:
              </h4>
              <span className="text-base font-normal font-['Inter'] ml-2">
                {business.country ? business.country : null}
              </span>
            </div>
            <div className="flex flex-row">
              <h4 className="text-m font-normal font-['Oswald'] uppercase">
                E-MAIL:
              </h4>
              <span className="text-base font-normal font-['Inter'] ml-2">
                {business.email ? business.email : null}
              </span>
            </div>
          </div>
          <div className="flex flex-col px-12">
            <div className="flex flex-row">
              <h4 className="text-m font-normal font-['Oswald'] uppercase">
                provincia/estado:
              </h4>
              <span className="text-base font-normal font-['Inter'] ml-2">
                {business.city ? business.city : "buenos aires"}
              </span>
            </div>
            <div className="flex flex-row">
              <h4 className="text-m font-normal font-['Oswald'] uppercase">
                TELEFONO:
              </h4>
              <span className="text-base font-normal font-['Inter'] ml-2">
                {business.phone ? business.phone : null}
              </span>
            </div>
            <div className="flex flex-row mb-12">
              <h4 className="text-m font-normal font-['Oswald'] uppercase">
                Password:
              </h4>
              <span className="text-base font-normal font-['Inter'] ml-2">
                {business.password ? business.password : null}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[777px] h-auto bg-neutral-200 rounded-br-[50px] rounded-tr-[50px] rounded-bl-[50px] relative">
        <div className="w-[777px] h-auto bg-neutral-200 rounded-tr-[50px] rounded-bl-[50px] relative">
          <div className="flex flex-col items-center pt-6 mt-6">
            <h1 className="text-lg font-normal font-['Oswald'] uppercase">
              plataforma redes sociales
            </h1>
          </div>
          <div div className="flex flex-col justify-between px-12 mt-6">
            {socialMediaJson &&
              socialMediaJson.map((sm) => (
                <div className="flex flex-row mt-2">
                  <img src={sm.icon} className="w-10 h-10" />
                  <h4 className="text-m font-normal font-['Oswald'] uppercase ml-2">
                    {sm.name}:
                  </h4>
                  <span className="text-base font-normal font-['Inter'] ml-2">
                    {sm.dataUser}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
