import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBusinessByIdAction } from "../redux/actions/actionBusiness.js";
import { sweetAlertsError } from "../components/utils/alerts/alerts.jsx";
import SpinnerLogin from "../components/utils/spinners/SpinnerLogin.jsx";

const LandingPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const business = useSelector((state) => state.business);
  //console.log("landing: ", business);
  //estos datos deberian ser recibidos del login inicial
  const businessId = "2d0ac106-d80f-45ae-900a-55ab87881fd5";
  //busnisses para prueba de alerta
  //const busnissesId = "";
  const businessNameForm = "zarasa";

  useEffect(() => {
    dispatch(getBusinessByIdAction(businessId));
  }, [dispatch]);

  const handlerOnClick = () => {
    if (!businessId) {
      sweetAlertsError(
        "Intenta de nuevo",
        `No podemos encontrar a ${businessNameForm}`,
        "Ok"
      );
    } else {
      //este dispatch deberia ejecutarse con un login inicial NIY
      dispatch(getBusinessByIdAction(businessId, businessNameForm));
      setLoading(true);
      setTimeout(() => {
        navigate("/inbox");
        setLoading(false);
      }, 3000);
    }
  };

  return (
    <div>
      {loading ? (
        <SpinnerLogin props={business} />
      ) : (
        <div className="w-screen h-screen relative bg-sky-950 flex-col justify-start items-start inline-flex z-0">
          <img
            className=" absolute w-screen h-screen left-0 right-0 mx-auto from-sky-950 mix-blend-mode-multiply"
            src="/landing.svg"
          />
          <div className="w-[800px] h-[150px] absolute top-10 left-28">
            <img className="w-[168px] h-[107px]" src="/logo.svg" />
            <span className="text-white text-lg font-normal font-['Inter'] absolute top-0 left-28">
              Dale la bienvenida a la tranquilidad en tu vida digital
              <br />
            </span>
            <span className="text-white text-lg font-normal font-['Inter'] absolute top-7 left-28">
              Unifica, Organiza, conecta
              <br />
            </span>
            <div className="text-white text-5xl font-semibold font-['Inter'] capitalize absolute top-16 left-44">
              oneInbox
            </div>
            <div className="text-white text-lg font-normal font-['Inter'] absolute top-28 left-20">
              Tu bandeja de entrada social definitiva
            </div>
          </div>
          <div className="absolute bottom-9 left-0 right-0 mx-auto">
            <button
              onClick={handlerOnClick}
              className="w-fit h-fit  relative mx-auto px-8 py-1 bg-sky-950 hover:bg-amber-500 border-gray-700 rounded-[30px] shadow-inner text-white text-lg font-normal font-['Oswald']"
            >
              COMENCEMOS
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;