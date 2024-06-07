import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateBusnisessAction } from "../../../../redux/actions/actionBusiness";

const EditBusiness = () => {
  const business = useSelector((state) => state.business);
  //   console.log(business);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [input, setInput] = useState({
    name: business.name || "",
    password: business.password || "",
    address: business.address || "",
    city: business.city || "",
    country: business.country || "",
    email: business.email || "",
    phone: business.phone || "",
  });

  const handlerInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handlerEditSubmit = (e) => {
    e.preventDefault();
    // dispatch(updateBusnisessAction(busnisess.id, input));
    console.log("hay submit");
    navigate("/dashboardAdmi/profile/edit-socialMedia");
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="w-[777px] h-auto bg-sky-950 rounded-tr-[50px] rounded-bl-[50px] relative">
        <form onSubmit={handlerEditSubmit}>
          <div className="flex flex-col items-center pt-6 mt-6">
            <h4 className="text-white text-sm font-normal font-['Oswald'] uppercase">
              datos de la empresa
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
          <div className="flex flex-row justify-between px-12 mt-6 mb-6">
            <div className="flex flex-col">
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
                  type="password"
                  value={input.password}
                  name="password"
                  onChange={handlerInputChange}
                />
              </div>
              <div className="flex flex-row mt-2">
                <label
                  htmlFor="address"
                  className=" text-white text-m font-normal font-['Oswald'] uppercase"
                >
                  direccion:
                </label>
                <input
                  placeholder={input.address}
                  className="w-56 h-6 bg-white rounded-[30px] shadow-inner px-2 text-base font-normal font-['Inter'] ml-2 "
                  id="address"
                  type="text"
                  value={input.address}
                  name="address"
                  onChange={handlerInputChange}
                />
              </div>
              <div className="flex flex-row mt-2">
                <label
                  htmlFor="country"
                  className=" text-white text-m font-normal font-['Oswald'] uppercase"
                >
                  pais:
                </label>
                {/* podria cambiarse por un select de paises usando un api */}
                <input
                  placeholder={input.country}
                  className="w-56 h-6 bg-white rounded-[30px] shadow-inner px-2 text-base font-normal font-['Inter'] ml-12 "
                  id="country"
                  type="text"
                  value={input.country}
                  name="country"
                  onChange={handlerInputChange}
                />
              </div>
            </div>
            <div className="flex flex-col px-12">
              <div className="flex flex-row">
                <label
                  htmlFor="email"
                  className=" text-white text-m font-normal font-['Oswald'] uppercase"
                >
                  e-mail:
                </label>
                <input
                  placeholder={input.email}
                  className="w-[16.5rem] h-6 bg-white rounded-[30px] shadow-inner px-2 text-base font-normal font-['Inter'] ml-2 "
                  id="email"
                  type="email"
                  value={input.email}
                  name="email"
                  onChange={handlerInputChange}
                />
              </div>
              <div className="flex flex-row mt-2">
                {/* idem pais; podria ser un select con ciudades de una api */}
                <label
                  htmlFor="city"
                  className=" text-white text-m font-normal font-['Oswald'] uppercase"
                >
                  provincia/estado:
                </label>
                <input
                  placeholder={input.city}
                  className="w-48 h-6 bg-white rounded-[30px] shadow-inner px-2 text-base font-normal font-['Inter'] ml-2 "
                  id="city"
                  type="text"
                  value={input.city}
                  name="city"
                  onChange={handlerInputChange}
                />
              </div>
              <div className="flex flex-row mt-2">
                <label
                  htmlFor="phone"
                  className=" text-white text-m font-normal font-['Oswald'] uppercase"
                >
                  telefono:
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

export default EditBusiness;
