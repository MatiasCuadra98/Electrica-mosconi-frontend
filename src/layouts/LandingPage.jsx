import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBusinessByIdAction } from "../redux/actions/actionBusiness.js";
import { getAllMessagesSentAction } from "../redux/actions/actionMessages.js";
import { sweetAlertsError } from "../components/utils/alerts/alerts.jsx";
import SpinnerLogin from "../components/utils/spinners/SpinnerLogin.jsx";

const LandingPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const business = useSelector((state) => state.business);
  //console.log("landing: ", business);
  //estos datos deberian ser recibidos del login inicial
  const businessId = "3c3518bb-9639-4055-91ee-1768f56a77d1";
  const businessName = "Electrica Mosconi";

  useEffect(() => {
    localStorage.setItem("businessId", businessId);
    dispatch(getBusinessByIdAction(businessId, businessName));
    dispatch(getAllMessagesSentAction());
    // console.log(
    //   "despacho la action get business by Id",
    //   businessId,
    //   businessName
    // );
  }, [dispatch]);

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
      setTimeout(() => {
        navigate("/inbox");
        setLoading(false);
      }, 4000);
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
          <div className="w-[800px] h-[150px] absolute top-10 left-28">
            <img
              className="w-[168px] h-[107px]"
              src="/logos/logo.svg"
              alt="OneInbox logo"
            />
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
          <div className="absolute bottom-9 left-0 right-0 flex justify-center">
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
