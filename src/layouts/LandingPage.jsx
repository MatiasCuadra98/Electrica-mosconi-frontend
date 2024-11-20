import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBusinessByIdAction } from "../redux/actions/actionBusiness.js";
import {
  getAllMessagesReceivedAction,
  getAllMessagesSentAction,
} from "../redux/actions/actionMessages.js";
import { sweetAlertsError } from "../components/utils/alerts/alerts.jsx";
import SpinnerLogin from "../components/utils/spinners/SpinnerLogin.jsx";
//import { getAllSocialMediaByBusinessAction } from "../redux/actions/actionSocialMedia.js";

const LandingPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const business = useSelector((state) => state.business);

  //estos datos deberian ser recibidos del login inicial
  const businessId = "4b3171a4-7d37-44ce-a9fe-96bac07c8843";
  const businessName = "Electrica Mosconi";

  useEffect(() => {
    localStorage.setItem("businessId", businessId);
    dispatch(getBusinessByIdAction(businessId, businessName));
    dispatch(getAllMessagesReceivedAction());
    dispatch(getAllMessagesSentAction());
    //dispatch(getAllSocialMediaByBusinessAction());
  }, [dispatch, businessId]);

  const handlerOnClick = () => {
    if (!businessId) {
      sweetAlertsError(
        "Intenta de nuevo",
        `No podemos encontrar a ${businessName}`,
        "Ok"
      );
    } else {
      //este dispatch deberia ejecutarse con un login inicial NIY
      dispatch(getBusinessByIdAction(businessId, businessName));
      setLoading(true);
      if (businessName) {
        setTimeout(() => {
          navigate("/inbox");
          setLoading(false);
        }, 4000);
      }
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
            alt="OneInbox landing"
          />
          <div className="w-[800px] h-[150px] absolute top-8 left-28">
            <img
              className="w-40 h-24"
              src="/logos/logo.svg"
              alt="OneInbox logo"
            />
            <span className="text-white text-base font-normal font-['Inter'] absolute top-0 left-28">
              Dale la bienvenida a la tranquilidad en tu vida digital
              <br />
            </span>
            <span className="text-white text-base font-normal font-['Inter'] absolute top-7 left-28">
              Unifica, Organiza, conecta
              <br />
            </span>
            <div className="text-white text-4xl font-semibold font-['Inter'] capitalize absolute top-16 left-44">
              oneInbox
            </div>
            <div className="text-white text-base font-normal font-['Inter'] absolute top-28 left-20">
              Tu bandeja de entrada social definitiva
            </div>
          </div>
          <div className="absolute bottom-14 left-0 right-0 flex justify-center">
            <button
              onClick={handlerOnClick}
              className="w-fit h-fit  relative mx-auto px-8 py-1 bg-sky-950 hover:bg-amber-500 border-gray-700 rounded-[30px] shadow-inner text-white text-base font-normal font-['Oswald']"
            >
              COMENCEMOS
            </button>
            <a
              href={`https://electrica-mosconi-server.onrender.com/mercadolibre/auth`}
              className="w-fit h-fit  relative mx-auto px-8 py-1 bg-yellow-600 hover:bg-yellow-700 border-gray-700 rounded-[30px] shadow-inner text-white text-base font-normal font-['Oswald']"
            >
              INICIAR SESIÓN CON MERCADO LIBRE
            </a>
            {/* este es el boton de fb, hay que meter la url en el .env y unir al boton de comencemos */}
            <a
              href={`https://electrica-mosconi-server.onrender.com/auth/facebook`}
              className="w-fit h-fit  relative mx-auto px-8 py-1 bg-blue-600 hover:bg-blue-700 border-gray-700 rounded-[30px] shadow-inner text-white text-base font-normal font-['Oswald']"
            >
              INICIAR SESIÓN CON FACEBOOK
            </a>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
