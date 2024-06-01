import React from "react";
import IconUser from "../utils/selectUser/IconUser";
import SideBarAButton from "../utils/buttons/SideBarAButton";
import routes from "../../../public/json/routes";

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
          {routes &&
            routes.map((route) => (
              <SideBarAButton route={route.route} nameRoute={route.name} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SideBarA;
