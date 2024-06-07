import React from "react";
import IconUserProfile from "../../IconUserProfile";

const ProfileData = ({ user }) => {
  return (
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
  );
};

export default ProfileData;