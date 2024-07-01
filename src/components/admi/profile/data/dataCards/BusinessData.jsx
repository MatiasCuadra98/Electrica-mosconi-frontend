import React from "react";

const BusinessData = ({ business }) => {
  return (
    <div className="w-[777px] h-auto bg-neutral-200 rounded-tr-[50px] rounded-bl-[50px] relative">
      <div className="flex flex-col items-center pt-6 mt-6">
        <h4 className="text-sm font-normal font-['Oswald'] uppercase">
          datos de la empresa
        </h4>
        <h1 className="text-lg font-normal font-['Oswald'] uppercase">
          {!business.name ? null : business.name}
        </h1>
      </div>
      <div className="flex flex-row justify-between px-12 mt-6">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <h4 className="text-m font-normal font-['Oswald'] uppercase">
              Password:
            </h4>
            <span className="text-base font-normal font-['Inter'] ml-2">
              {business.password ? business.password : null}
            </span>
          </div>
          <div className="flex flex-row">
            <h4 className="text-m font-normal font-['Oswald'] uppercase">
              DIRECCION:
            </h4>
            <span className="text-base font-normal font-['Inter'] ml-2">
              {business.address ? business.address : null}
            </span>
          </div>
          <div className="flex flex-row">
            <h4 className="text-m font-normal font-['Oswald'] uppercase">
              pais:
            </h4>
            <span className="text-base font-normal font-['Inter'] ml-2">
              {business.country ? business.country : null}
            </span>
          </div>
        </div>
        <div className="flex flex-col px-12">
          <div className="flex flex-row">
            <h4 className="text-m font-normal font-['Oswald'] uppercase">
              E-MAIL:
            </h4>
            <span className="text-base font-normal font-['Inter'] ml-2">
              {business.email ? business.email : null}
            </span>
          </div>
          <div className="flex flex-row">
            <h4 className="text-m font-normal font-['Oswald'] uppercase">
              provincia/estado:
            </h4>
            <span className="text-base font-normal font-['Inter'] ml-2">
              {business.city ? business.city : "buenos aires"}
            </span>
          </div>
          <div className="flex flex-row mb-12">
            <h4 className="text-m font-normal font-['Oswald'] uppercase">
              TELEFONO:
            </h4>
            <span className="text-base font-normal font-['Inter'] ml-2">
              {business.phone ? business.phone : null}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessData;
