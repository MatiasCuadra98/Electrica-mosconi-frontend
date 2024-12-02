
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//import { getBusinessByIdAction } from "../redux/actions/actionBusiness.js";
import {
  getAllMessagesReceivedAction,
  getAllMessagesSentAction,
} from "../redux/actions/actionMessages.js";
import { sweetAlertsError } from "../components/utils/alerts/alerts.jsx";
import SpinnerLogin from "../components/utils/spinners/SpinnerLogin.jsx";
//import { authBusinessByAllSocialMediaAction } from "../redux/actions/actionBusiness.js";

const LandingPage = () => {
  const navigate = useNavigate();
  //const location = useLocation();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  
  const login = useSelector((state) => state.businessLogin);
  console.log('login', login);
  const business = useSelector((state) => state.business);
  //console.log('empresa en landing', business);
  const businessId = business ? business.id : null;
  const businessName = business ? business.name :  null;
  // let path = location.search ? location.search : null;
  // console.log('mi ruta actual', path);

  // const [landingButton, setLandingButton] = useState(
  //   localStorage.getItem("landingButton") || "login"
  // );

  useEffect(() => {
    // localStorage.setItem("businessId", businessId);
    //dispatch(getBusinessByIdAction(businessId, businessName));
    if (businessId) {
      dispatch(getAllMessagesReceivedAction());
      dispatch(getAllMessagesSentAction());
      //dispatch(getAllSocialMediaByBusinessAction());
    }
  }, [dispatch, businessId]);

  const loginHandler = () => {
    navigate("/login")
    // setLandingButton("meli")
    // localStorage.setItem('landingButton', "meli")
  }

  //ver de tomar el path
  const handlerOnClick = () => {
    if (!businessId) {
      sweetAlertsError(
        "Intenta de nuevo",
        `No podemos encontrar a ${businessName}`,
        "Ok"
      );
    } else {
      //dispatch(authBusinessByAllSocialMediaAction(businessId, path))
      setLoading(true);
      localStorage.setItem("businessId", businessId);
      if (businessName) {
        setTimeout(() => {
          navigate("/inbox");
          setLoading(false);
        }, 4000);
      }
    }
  };

  //habria que agregar una funcion que compruebe si tiene activo meli, faceboo e instagram y hacer esos botones condicionales
  // const changeButtonHandler = (button) => {
  //   setLandingButton(button)
  //   localStorage.setItem("landingButton", button);
  // }
  // console.log('boton', landingButton);
  
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
            {
              !login ? (
                <button onClick={loginHandler} className="w-fit h-fit  relative mx-auto px-8 py-1 bg-sky-950 hover:bg-amber-500 border-gray-700 rounded-[30px] shadow-inner text-white text-base font-normal font-['Oswald']"> LOGIN </button>
              ) : (
                <div>
                      <a
              href={`https://electrica-mosconi-backend.onrender.com/mercadolibre/auth`}
              className="w-fit h-fit  relative mx-auto px-8 py-1 bg-sky-950 hover:bg-amber-500 border-gray-700 rounded-[30px] shadow-inner text-white text-base font-normal font-['Oswald']"
              >
              INICIAR SESIÓN CON MERCADO LIBRE
              </a>
              <a
              href={`https://electrica-mosconi-backend.onrender.com/auth/facebook`}
              className="w-fit h-fit  relative mx-auto px-8 py-1 bg-sky-950 hover:bg-amber-500 border-gray-700 rounded-[30px] shadow-inner text-white text-base font-normal font-['Oswald']"
              
            >
              INICIAR SESIÓN CON FACEBOOK
            </a>
            <a
              href={`https://electrica-mosconi-backend.onrender.com/auth/instagram`}
              className="w-fit h-fit  relative mx-auto px-8 py-1 bg-sky-950 hover:bg-amber-500 border-gray-700 rounded-[30px] shadow-inner text-white text-base font-normal font-['Oswald']"
              
            >
              INICIAR SESIÓN CON INSTAGRAM
            </a>
               
              <button
                onClick={handlerOnClick}
                className="w-fit h-fit  relative mx-auto px-8 py-1 bg-sky-950 hover:bg-amber-500 border-gray-700 rounded-[30px] shadow-inner text-white text-base font-normal font-['Oswald']"
              >
                COMENCEMOS
              </button>
                </div>
              )
            }
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;

