import React from "react";
// este archivo de deberia oder usar para asignar iconos de redes sociales a los mensajes
const SocialMediaIcons = (props) => {
  //falta desestructurar props segun modelo y pasar ese dato a UpperCase
  return (
    <div className="w-8 h-8">
      {props === "INSTAGRAM" ? (
        <img src="/socialMediaImage/instagram.svg" />
      ) : props === "TELEGRAM" ? (
        <img src="/socialMediaImage/telegram.svg" />
      ) : props === "MERCADO LIBRE" ? (
        <img src="/socialMediaImage/mercadoLibre.svg" />
      ) : props === "WHATSAPP" ? (
        <img src="/socialMediaImage/whatsapp.svg" />
      ) : (
        <img src="/iconoLogoBlanco.svg" />
      )}
    </div>
  );
};

export default SocialMediaIcons;
