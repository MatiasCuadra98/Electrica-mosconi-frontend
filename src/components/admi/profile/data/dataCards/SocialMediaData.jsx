import React from "react";

const SocialMediaData = ({ socialMedia }) => {
  const sort =
    socialMedia.length > 1
      ? socialMedia.sort((a, b) => {
          a.name - b.name;
        })
      : socialMedia;
  const half = Math.ceil(sort.length / 2);
  const groupA = socialMedia.length > 1 ? sort.slice(0, half) : sort;
  const groupB = socialMedia.length > 1 ? sort.slice(half) : false;

  return (
    <div className="w-[777px] h-auto bg-neutral-200 rounded-br-[50px] rounded-tr-[50px] rounded-bl-[50px] relative">
      <div className="w-[777px] h-auto bg-neutral-200 rounded-tr-[50px] rounded-bl-[50px] relative">
        <div className="flex flex-col items-center pt-6 mt-6">
          <h1 className="text-lg font-normal font-['Oswald'] uppercase">
            plataforma redes sociales
          </h1>
        </div>
        {!groupB ? (
          <div div className="flex flex-col justify-between px-12 mt-6">
            <div className="mb-12">
              {groupA &&
                groupA.map((sm, index) => (
                  <div className="flex flex-row mt-2" key={index}>
                    <img src={sm.icon} className="w-10 h-10" />
                    <h4 className="text-m font-normal font-['Oswald'] uppercase ml-2">
                      {sm.name}:
                    </h4>
                    <span className="text-base font-normal font-['Inter'] ml-2">
                      {sm.dataUser}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-row justify-between px-12 mt-6">
            <div className="flex flex-col mb-12">
              {groupA &&
                groupA.map((sm, index) => (
                  <div className="flex flex-row mt-2" key={index}>
                    <img src={sm.icon} className="w-10 h-10" />
                    <h4 className="text-m font-normal font-['Oswald'] uppercase ml-2">
                      {sm.name}:
                    </h4>
                    <span className="text-base font-normal font-['Inter'] ml-2">
                      {sm.dataUser}
                    </span>
                  </div>
                ))}
            </div>
            <div className="flex flex-col px-12 mb-12">
              {groupB &&
                groupB.map((sm, index) => (
                  <div className="flex flex-row mt-2" key={index}>
                    <img src={sm.icon} className="w-10 h-10" />
                    <h4 className="text-m font-normal font-['Oswald'] uppercase ml-2">
                      {sm.name}:
                    </h4>
                    <span className="text-base font-normal font-['Inter'] ml-2">
                      {sm.dataUser}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SocialMediaData;
