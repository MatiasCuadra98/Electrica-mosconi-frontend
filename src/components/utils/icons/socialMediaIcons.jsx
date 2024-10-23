import React from "react";
// este archivo de deberia oder usar para asignar iconos de redes sociales a los mensajes
// const SocialMediaIcons = (socialMediaName) => {
//   //falta desestructurar props segun modelo y pasar ese dato a UpperCase
//   console.log("socialMediaIcons", socialMediaName.socialMedia);
//   const socialMedia =
//     socialMediaName && socialMediaName.socialMediaName
//       ? socialMediaName.socialMediaName
//       : socialMediaName.socialMedia[0];
//   console.log("socialMname", socialMedia);

//   return (
//     <div>
//       {(socialMediaName && socialMediaName.socialMedia === "INSTAGRAM") ||
//       (socialMediaName && socialMedia === "INSTAGRAM") ? (
//         <img src="/socialMediaImage/instagram.svg" alt={socialMedia} />
//       ) : socialMediaName && socialMedia === "TELEGRAM" ? (
//         <img src="/socialMediaImage/telegram.svg" alt={socialMedia} />
//       ) : (socialMediaName &&
//           socialMediaName.socialMedia === "MERCADO LIBRE") ||
//         (socialMediaName && socialMedia === "MERCADO LIBRE") ? (
//         <img src="/socialMediaImage/mercadoLibre.svg" alt={socialMedia} />
//       ) : (socialMediaName && socialMediaName.socialMedia === "WHATSAPP") ||
//         (socialMediaName && socialMedia === "WHATSAPP") ? (
//         <img src="/socialMediaImage/whatsapp.svg" alt={socialMedia} />
//       ) : (socialMediaName && socialMediaName.socialMedia === "MESSENGER") ||
//         (socialMediaName && socialMedia === "MESSENGER") ? (
//         <img src="/socialMediaImage/facebook.svg" alt={socialMedia} />
//       ) : (socialMediaName && socialMediaName.socialMedia === "FACEBOOK") ||
//         (socialMediaName && socialMedia === "FACEBOOK") ? (
//         <img src="/socialMediaImage/facebook.svg" alt={socialMedia} />
//       ) : (
//         <img src="/logos/iconoLogoAzul.svg" alt="RedSocial" />
//       )}
//     </div>
//   );
// };

// export default SocialMediaIcons;

const SocialMediaIcons = ({ socialMedia }) => {
  // Pasamos la prop correctamente y la convertimos a mayúsculas
  // const socialMediaName = socialMedia ? socialMedia.toUpperCase() : "";
  const socialMediaName = Array.isArray(socialMedia)
    ? socialMedia[0]
    : socialMedia;
  // Debugging (puedes quitar estos console.logs luego de probar)
  console.log("socialMediaName recibido:", socialMediaName);

  return (
    <div>
      {socialMediaName === "INSTAGRAM" ? (
        <img src="/socialMediaImage/instagram.svg" alt="Instagram" />
      ) : socialMediaName === "TELEGRAM" ? (
        <img src="/socialMediaImage/telegram.svg" alt="Telegram" />
      ) : socialMediaName === "MERCADO LIBRE" ? (
        <img src="/socialMediaImage/mercadoLibre.svg" alt="Mercado Libre" />
      ) : socialMediaName === "WHATSAPP" ? (
        <img src="/socialMediaImage/whatsapp.svg" alt="WhatsApp" />
      ) : socialMediaName === "MESSENGER" || socialMediaName === "FACEBOOK" ? (
        <img src="/socialMediaImage/facebook.svg" alt="Facebook" />
      ) : (
        <img src="/logos/iconoLogoAzul.svg" alt="Red Social" />
      )}
    </div>
  );
};

export default SocialMediaIcons;
