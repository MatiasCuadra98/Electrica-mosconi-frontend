import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SocialMediaIcons from "../../../utils/icons/socialMediaIcons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateSocialMediaAction } from "../../../../redux/actions/actionSocialMedia";
import {
  sweetAlertsSuccessfully,
  sweetAlertsError,
} from "../../../utils/alerts/alerts";
import FormExitButton from "../../../utils/buttons/FormExitButton";

const EditSocialMedia = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //logica para ordenar las redes sociales activas
  //ver de refactorizar y pasar esta logica a un archivo aparte
  const socialMedia = useSelector((state) => state.socialMedia);

  const socialMediaSortered =
    socialMedia && socialMedia.length > 1
      ? socialMedia.sort((a, b) => {
          // a.SocialMedia.name - b.SocialMedia.name;
          return a.SocialMedia[0].name.localeCompare(b.SocialMedia[0].name);
        })
      : socialMedia;
  const half = Math.ceil(socialMediaSortered.length / 2);
  const groupA =
    socialMedia.length > 1
      ? socialMediaSortered.slice(0, half)
      : socialMediaSortered;

  const groupB =
    socialMedia.length > 1 ? socialMediaSortered.slice(half) : false;

  //logica del formulario en si mismo
  const [input, setInput] = useState(() => {
    const initialState = {};
    socialMedia.forEach((sm) => {
      initialState[sm.id] = sm.dataUser || "";
    });
    return initialState;
  });

  const handlerInputChange = (e, id) => {
    setInput({
      ...input,
      [id]: e.target.value,
    });
  };
  const handlerEditSubmit = (e) => {
    e.preventDefault();
    // Convertimos el objeto input en un array de objetos
    const updatedSocialMedia = Object.keys(input).map((id) => ({
      id, // El id de la red social
      dataUser: input[id], // El valor modificado por el usuario
    }));
    try {
      updatedSocialMedia.map((sm) =>
        dispatch(updateSocialMediaAction(sm.id, sm.dataUser))
      );
      sweetAlertsSuccessfully(
        `Felicitaciones!`,
        `los datos de tus redes sociales se actualizaron corectamente...`,
        "Ok"
      );
      navigate("/dashboardAdmi/profile");
    } catch (error) {
      sweetAlertsError(
        `Intenta de nuevo...`,
        "No pudimos actualizar tus datos",
        "Ok"
      );
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-stone-300">
      <div className="w-[777px] h-auto bg-sky-950 rounded-tl-[50px] rounded-tr-[50px] rounded-bl-[50px] relative">
        <form onSubmit={handlerEditSubmit}>
          <div className="absolute top-6 right-10">
            <FormExitButton path={"/dashboardAdmi/homeAdmi"} />
          </div>
          <div className="flex flex-col items-center pt-6 mt-6">
            <h4 className=" text-white text-lg font-normal font-['Oswald'] uppercase">
              plataforma de redes sociales
            </h4>
            {!socialMedia.length ? (
              <div className="flex flex-col items-center my-6 pb-6">
                <p className="text-base font-normal font-['Inter'] text-white ">
                  Aún no hay Redes Sociales activas
                </p>
              </div>
            ) : !groupB ? (
              <div>
                {socialMedia.map((sm, index) => (
                  <div className="flex flex-row mt-2" key={index}>
                    <div className="w-10 h-10">
                      <SocialMediaIcons
                        socialMedia={
                          sm.SocialMedia &&
                          sm.SocialMedia.map((e) => {
                            return e.name.toUpperCase();
                          })
                        }
                      />
                    </div>
                    <div>
                      <label
                        htmlFor={
                          sm.SocialMedia && sm.SocialMedia.map((e) => e.name)
                        }
                        className=" text-white text-m font-normal font-['Oswald'] uppercase"
                      >
                        {sm.SocialMedia && sm.SocialMedia.map((e) => e.name)}:
                      </label>
                      <input
                        placeholder={sm.dataUser}
                        className="w-56 h-6 bg-white rounded-[30px] shadow-inner px-2 text-base font-normal font-['Inter'] ml-2 "
                        id={sm.SocialMedia && sm.SocialMedia.map((e) => e.name)}
                        type="text"
                        value={input[sm.id] || ""}
                        name={
                          sm.SocialMedia && sm.SocialMedia.map((e) => e.name)
                        }
                        onChange={(e) => handlerInputChange(e, sm.id)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-row justify-between px-12 mt-6">
                <div className="flex flex-col mb-12">
                  {groupA &&
                    groupA.map((sm, index) => (
                      <div className="flex flex-row mt-2" key={index}>
                        <div className="w-10 h-10">
                          <SocialMediaIcons
                            socialMedia={
                              sm.SocialMedia &&
                              sm.SocialMedia.map((e) => {
                                return e.name.toUpperCase();
                              })
                            }
                          />
                        </div>

                        <div>
                          <label
                            htmlFor={
                              sm.SocialMedia &&
                              sm.SocialMedia.map((e) => e.name)
                            }
                            className=" text-white text-m font-normal font-['Oswald'] uppercase"
                          >
                            {sm.SocialMedia &&
                              sm.SocialMedia.map((e) => e.name)}
                            :
                          </label>
                          <input
                            placeholder={sm.dataUser}
                            className="w-56 h-6 bg-white rounded-[30px] shadow-inner px-2 text-base font-normal font-['Inter'] ml-2 "
                            id={
                              sm.SocialMedia &&
                              sm.SocialMedia.map((e) => e.name)
                            }
                            type="text"
                            value={input[sm.id] || ""}
                            name={
                              sm.SocialMedia &&
                              sm.SocialMedia.map((e) => e.name)
                            }
                            onChange={(e) => handlerInputChange(e, sm.id)}
                          />
                        </div>
                      </div>
                    ))}
                </div>
                <div className="flex flex-col px-12 mb-12">
                  {groupB &&
                    groupB.map((sm, index) => (
                      <div className="flex flex-row mt-2" key={index}>
                        <div className="w-10 h-10">
                          <SocialMediaIcons
                            socialMedia={
                              sm.SocialMedia &&
                              sm.SocialMedia.map((e) => {
                                return e.name.toUpperCase();
                              })
                            }
                          />
                        </div>
                        <div>
                          <label
                            htmlFor={
                              sm.SocialMedia &&
                              sm.SocialMedia.map((e) => e.name)
                            }
                            className=" text-white text-m font-normal font-['Oswald'] uppercase"
                          >
                            {sm.SocialMedia &&
                              sm.SocialMedia.map((e) => e.name)}
                            :
                          </label>
                          <input
                            placeholder={sm.dataUser}
                            className="w-56 h-6 bg-white rounded-[30px] shadow-inner px-2 text-base font-normal font-['Inter'] ml-2 "
                            id={
                              sm.SocialMedia &&
                              sm.SocialMedia.map((e) => e.name)
                            }
                            type="text"
                            value={input[sm.id] || ""}
                            name={
                              sm.SocialMedia &&
                              sm.SocialMedia.map((e) => e.name)
                            }
                            onChange={(e) => handlerInputChange(e, sm.id)}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
          <div className="flex justify-center mb-12">
            <button
              type="submit"
              className="bg-transparent border-none outline-none"
            >
              <img
                src={"/actionIcons/next icon.svg"}
                className="w-8 h-auto"
                onMouseOver={(e) =>
                  (e.currentTarget.src = "/actionIcons/next hover icon.svg")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.src = "/actionIcons/next icon.svg")
                }
                alt="next"
              />
            </button>
          </div>
        </form>
        <img
          src="/logos/logo.svg"
          className="w-24 h-auto absolute bottom-8 right-8"
        />
      </div>
    </div>
  );
};

export default EditSocialMedia;
