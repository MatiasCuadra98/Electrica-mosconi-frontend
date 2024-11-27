import React, { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { sweetAlertsError } from "../utils/alerts/alerts";
//import { useSelector } from "react-redux";

export const ProtectRoutes = ({ isAllowed, route }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAllowed) {
      navigate(route); // Redirige al login si no está autorizado
      sweetAlertsError(
        `Ud no tiene privilegios`,
        "la ruta elegida esta protegida",
        "Ok"
      );
    }
  }, [isAllowed, navigate]);

  return <Outlet />;
};