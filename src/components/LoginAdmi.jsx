import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getUserByIdAction,
  admiLoginAction,
} from "../redux/actions/actionsUsers";
import { sweetAlertsError } from "./utils/alerts/alerts";
import FormExitButton from "./utils/buttons/FormExitButton";

const LoginAdmi = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.users);

  const [input, setInput] = useState({
    name: "",
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
    const user = input.name
      ? allUsers.find(
          (user) => user.name.toUpperCase() === input.name.toUpperCase()
        )
      : null;
    if (user && user.password === input.password && user.privilege == "Admin") {
      dispatch(getUserByIdAction(user.id));
      dispatch(admiLoginAction(true));
      localStorage.removeItem("userId");
      localStorage.getItem("userId", user.id);
      navigate("/dashboardAdmi/homeAdmi");
    } else {
      sweetAlertsError(
        `${input.name} no tiene privilegios`,
        "comprueba que el nombre y la contraseña sean los correctos",
        "Ok"
      );
      //este navigate deberia cerrar el modal --- hecho asi para prueba de desarrollo
      navigate(-1);
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-stone-300">
      <div className="w-96 h-[26rem] bg-sky-950 rounded-tl-[80px] rounded-tr-[80px] rounded-bl-[80px]  flex flex-col items-center justify-center relative">
        <form onSubmit={handlerLoginSubmit}>
          <div className="absolute top-12 right-10">
            <FormExitButton path={-1} />
          </div>
          <h1 className="text-white text-xl font-semibold font-['Inter'] capitalize text-center">
            Bienvenido
          </h1>
          <div className="flex flex-col items-center justify-center my-10">
            <input
              placeholder="Usuario"
<<<<<<< HEAD
              className="w-64 h-6 bg-white rounded-[30px] shadow-inner p-4 text-sm"
=======
              className="w-72 h-8 bg-white rounded-[30px] shadow-inner p-4 text-black"
>>>>>>> 5e7db6210fed3d4c22e36fc784d47877ea65a0dd
              id="name"
              type="text"
              value={input.name}
              name="name"
              onChange={handlerInputChange}
            />
            <input
              placeholder="Contraseña"
<<<<<<< HEAD
              className="w-64 h-6 bg-white rounded-[30px] shadow-inner mt-4 p-4 text-sm"
=======
              className="w-72 h-8 bg-white rounded-[30px] shadow-inner mt-4 p-4 text-black"
>>>>>>> 5e7db6210fed3d4c22e36fc784d47877ea65a0dd
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

export default LoginAdmi;
