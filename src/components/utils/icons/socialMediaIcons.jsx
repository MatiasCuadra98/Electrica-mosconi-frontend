import React from "react";
// este archivo de deberia oder usar para asignar iconos de redes sociales a los mensajes
const SocialMediaIcons = (socialMediaName) => {
  //falta desestructurar props segun modelo y pasar ese dato a UpperCase
  const socialMedia = socialMediaName.socialMediaName;

  return (
    <div>
      {socialMediaName && socialMedia === "INSTAGRAM" ? (
        <img src="/socialMediaImage/instagram.svg" alt={socialMedia} />
      ) : socialMediaName && socialMedia === "TELEGRAM" ? (
        <img src="/socialMediaImage/telegram.svg" alt={socialMedia} />
      ) : socialMediaName && socialMedia === "MERCADO LIBRE" ? (
        <img src="/socialMediaImage/mercadoLibre.svg" alt={socialMedia} />
      ) : socialMediaName && socialMedia === "WHATSAPP" ? (
        <img src="/socialMediaImage/whatsapp.svg" alt={socialMedia} />
      ) : socialMediaName && socialMedia === "FACEBOOK" ? (
        <img src="/socialMediaImage/facebook.svg" alt={socialMedia} />
      ) : (
        <img src="/iconoLogoBlanco.svg" alt="RedSocial" />
      )}
    </div>
  );
};

export default SocialMediaIcons;
