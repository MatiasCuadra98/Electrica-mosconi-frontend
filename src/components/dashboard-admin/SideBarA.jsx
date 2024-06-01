import React from "react";
import { useSelector } from "react-redux";
import IconUser from "../utils/selectUser/IconUser";
import NavLinkButton from "../utils/buttons/NavLinkButton";

const SideBarA = ({ user }) => {
  //   const user = useSelector((state) => state.user);
  //   console.log("user", user);
  return (
    <div className="w-52 h-screen bg-sky-950 fixed top-0">
      <img
        src="/logos/logo.svg"
        alt="Logo"
        className="w-24 h-auto mt-4 mx-auto z-50"
      />
      <div className="flex flex-col justify-between pt-8">
        <div className="flex items-center justify-center">
          <IconUser name={user.name} />
          {user.name ? (
            <h4 className="text-md text-white text-base font-normal font-['Oswald'] capitalize ">
              {user.name}
            </h4>
          ) : (
            <p className="text-md text-white text-base font-normal font-['Oswald'] capitalize ml-3">
              nombreAdministrador
            </p>
          )}
        </div>
        <div className="flex flex-col justify-between pt-8">
          {/* seguramente estos links deberan ser modificados al refactorizar el codigo para usar <Outlet /> en el layout del Admi */}
          <NavLinkButton
            route={"/dashboardAdmi/profile"}
            nameRoute={"MI PERFIL"}
          />
          <NavLinkButton
            route={"/dashboardAdmi/inboxAdmi"}
            nameRoute={"BANDEJA DE ENTRADA"}
          />
          <NavLinkButton
            route={"/dashboardAdmi/usersManagement"}
            nameRoute={"USUARIOS"}
          />
          <NavLinkButton route={null} nameRoute={"ANALISIS-METRICAS"} />
        </div>
      </div>
    </div>
  );
};

export default SideBarA;
