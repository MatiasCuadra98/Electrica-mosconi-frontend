import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginBusinessAction } from "../../redux/actions/actionBusiness";
// import {
//   getUserByIdAction,
//   admiLoginAction,
// } from "../redux/actions/actionsUsers";
//import {getAllSocialMediaByBusinessAction} from "../redux/actions/actionSocialMedia"
import { sweetAlertsError } from "../utils/alerts/alerts";
//import FormExitButton from "./utils/buttons/FormExitButton";

const BusinessLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //const allBusiness = useSelector((state) => state.business);

  const [input, setInput] = useState({
    businessName: "",
    password: "",
  });

  const handlerInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handlerLoginSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginBusinessAction(input));
    localStorage.setItem('loginBusiness', true)
    navigate(-1)
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-stone-300">
      <div className="w-96 h-[26rem] bg-sky-950 rounded-tl-[80px] rounded-tr-[80px] rounded-bl-[80px]  flex flex-col items-center justify-center relative">
        <form onSubmit={handlerLoginSubmit}>
          <h1 className="text-white text-xl font-semibold font-['Inter'] capitalize text-center">
            Bienvenido
          </h1>
          <div className="flex flex-col items-center justify-center my-10">
            <input
              placeholder="Nombre Empresa"
              className="w-64 h-6 bg-white rounded-[30px] shadow-inner p-4 text-sm"
              id="businessName"
              type="text"
              value={input.businessName}
              name="businessName"
              onChange={handlerInputChange}
            />
            <input
              placeholder="Contraseña"
              className="w-64 h-6 bg-white rounded-[30px] shadow-inner mt-4 p-4 text-sm"
              type="password"
              id="password"
              name="password"
              value={input.password}
              onChange={handlerInputChange}
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-fit h-fit  px-8 py-1 bg-sky-950 hover:bg-amber-500 border-gray-700 rounded-[30px] shadow-inner text-white text-xs font-normal font-['Oswald']"
            >
              LOGIN
            </button>
          </div>
          <img
            src="/logos/logo.svg"
            className="w-20 h-auto absolute bottom-8 right-8"
          />
        </form>
      </div>
    </div>
  );
};

export default BusinessLogin;
