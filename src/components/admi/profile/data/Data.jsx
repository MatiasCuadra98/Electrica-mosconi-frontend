import React from "react";
import ProfileData from "./dataCards/ProfileData";
import BusinessData from "./dataCards/BusinessData";
import SocialMediaData from "./dataCards/SocialMediaData";
import { useSelector } from "react-redux";
import socialMediaJson from "../../../../../public/json/socialMediaJson";

const Data = () => {
  const user = useSelector((state) => state.user);
  const business = useSelector((state) => state.business);
  //esta data deberia llegar del back, falta un modelo de redes sociales asociado a cada empresa
  const socialMedia = socialMediaJson;

  return (
    <div className="mt-10">
      <ProfileData user={user} />
      <BusinessData business={business} />
      <SocialMediaData socialMedia={socialMedia} />
    </div>
  );
};

export default Data;
