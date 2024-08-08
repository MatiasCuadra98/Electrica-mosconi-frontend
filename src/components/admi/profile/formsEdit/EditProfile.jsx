import React from "react";
import IconUserProfile from "../IconUserProfile";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUserAction } from "../../../../redux/actions/actionsUsers";

const EditProfile = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [input, setInput] = useState({
    name: user.name || "nombre administrador",
    privilege: user.privilege || "",
    email: user.email || "",
    password: user.password || "",
    phone: user.phone || "",
  });

  const handlerInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  console.log(input);

  const handlerEditSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserAction(user.id, input));
    navigate("/dashboardAdmi/profile/edit-business");
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="w-[777px] h-auto bg-sky-950 rounded-tl-[50px] rounded-tr-[50px] rounded-bl-[50px] relative">
        <form onSubmit={handlerEditSubmit}>
          {/* NIY edit imagen: falta implementar cloudinary para la imagen */}
          <div className="left-6 top-5 absolute">
            {!user ? (
              <img className="w-18 h-18" src="/noUser.svg" />
            ) : user.image ? (
              <img className="w-18 h-18" src={user.image} />
            ) : (
              <IconUserProfile name={user.name} />
            )}
            <div className="left-10 top-7 absolute">
              <img
                src="/actionIcons/pencilEdit-icon.svg"
                className=" w-12 h-auto"
              />
            </div>
          </div>
          <div className="flex flex-col items-center pt-6 mt-6">
            <h4 className=" text-white text-sm font-normal font-['Oswald'] uppercase">
              mis datos
            </h4>
            <input
              placeholder={input.name}
              className="w-72 h-8 bg-white rounded-[30px] shadow-inner px-6 text-lg font-normal font-['Oswald'] uppercase"
              id="name"
              type="text"
              value={input.name}
              name="name"
              onChange={handlerInputChange}
            />
          </div>
          <div className="flex flex-row justify-between px-12 mt-12 mb-12">
            <div className="flex flex-col">
              <div className="flex flex-row">
                <fieldset className="flex flex-row">
                  <legend className=" text-white text-m font-normal font-['Oswald'] uppercase">
                    PRIVILEGIOS:
                  </legend>
                  <div className=" flex flex-col">
                    <div className="flex flex-row">
                      <input
                        className="w-5 h-5 accent-amber-400 px-2"
                        id="Admin"
                        type="radio"
                        value="Admin"
                        name="privilege"
                        onChange={handlerInputChange}
                        checked={input.privilege === "Admin"}
                      />
                      <label
                        htmlFor="Admin"
                        className=" text-white text-base font-normal font-['Inter'] px-2"
                      >
                        administrador
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <input
                      className="ml-10 w-5 h-5 accent-amber-400"
                      id="Member"
                      type="radio"
                      value="Member"
                      name="privilege"
                      onChange={handlerInputChange}
                      checked={input.privilege === "Member"}
                    />
                    <label
                      htmlFor="Member"
                      className=" text-white text-base font-normal font-['Inter'] px-2"
                    >
                      usuario
                    </label>
                  </div>
                </fieldset>
              </div>
              <div className="flex flex-row mt-2">
                <label
                  htmlFor="email"
                  className=" text-white text-m font-normal font-['Oswald'] uppercase"
                >
                  E-mail:
                </label>
                <input
                  placeholder={input.email}
                  className="w-56 h-6 bg-white rounded-[30px] shadow-inner px-2 text-base font-normal font-['Inter'] ml-2 "
                  id="email"
                  type="email"
                  value={input.email}
                  name="email"
                  onChange={handlerInputChange}
                />
              </div>
            </div>
            <div className="flex flex-col px-12">
              <div className="flex flex-row">
                <label
                  htmlFor="password"
                  className=" text-white text-m font-normal font-['Oswald'] uppercase"
                >
                  password:
                </label>
                <input
                  placeholder={input.password}
                  className="w-56 h-6 bg-white rounded-[30px] shadow-inner px-2 text-base font-normal font-['Inter'] ml-2 "
                  id="password"
                  type="text"
                  value={input.password}
                  name="password"
                  onChange={handlerInputChange}
                />
              </div>
              <div className="flex flex-row mt-8">
                <label
                  htmlFor="phone"
                  className=" text-white text-m font-normal font-['Oswald'] uppercase"
                >
                  phone:
                </label>
                <input
                  placeholder={input.phone}
                  className="w-64 h-6 bg-white rounded-[30px] shadow-inner px-2 text-base font-normal font-['Inter'] ml-2 "
                  id="phone"
                  type="text"
                  value={input.phone}
                  name="phone"
                  onChange={handlerInputChange}
                />
              </div>
            </div>
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

export default EditProfile;