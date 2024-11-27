import React, { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
//import { useSelector } from "react-redux";

export const ProtectRoutes = ({ isAllowed, route }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAllowed) {
      navigate('/inbox'); // Redirige al login si no está autorizado
    }
  }, [isAllowed, navigate]);

  return <Outlet />;
};