import React from "react";
import { useNavigate } from "react-router-dom";

const GoHomeButton = () => {
  const navigate = useNavigate();
  const handlerOnClick = () => {
    navigate("/");
  };

  return (
    <div>
      <button onClick={handlerOnClick}>CERRAR</button>
    </div>
  );
};

export default GoHomeButton;
