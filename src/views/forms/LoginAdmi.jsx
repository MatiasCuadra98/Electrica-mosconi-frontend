import React from "react";
import LoginFormButton from "../../components/utils/buttons/LoginFormButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

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
      [e.target.value]: e.target.value,
    });
  };

  const handlerLoginSubmit = () => {
    const user = input.name
      ? allUsers.find((user) => user.name === input.name)
      : null;
    if (user && user.password === input.password && user.privilege == "Admin") {
      localStorage.removeItem("userId");
      localStorage.getItem("userId", user.id);
      dispatch(getUserByIdAction(user.id));
      navigate("/inboxAdmi");
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
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="w-[368px] h-[414px] bg-sky-950 rounded-tl-[80px] rounded-tr-[80px] rounded-bl-[80px]  flex flex-col items-center justify-center relative">
        <form onSubmit={handlerLoginSubmit}>
          <h1 className="text-white text-2xl font-semibold font-['Inter'] capitalize text-center">
            Bienvenido
          </h1>
          <div className="flex flex-col items-center justify-center my-10">
            <input
              placeholder="Usuario"
              className="w-72 h-8 bg-white rounded-[30px] shadow-inner p-4"
              id="name"
              type="text"
              value={input.name}
              name="name"
              onChange={handlerInputChange}
            />
            <input
              placeholder="Contraseña"
              className="w-72 h-8 bg-white rounded-[30px] shadow-inner mt-4 p-4"
              id="password"
              name="password"
              //   value={input.password}
              onChange={handlerInputChange}
            />
          </div>
          <div className="flex justify-center">
            <LoginFormButton />
          </div>
          <img
            src="/logos/logo.svg"
            className="w-24 h-auto absolute bottom-8 right-8"
          />
        </form>
      </div>
    </div>
  );
};

export default LoginAdmi;
