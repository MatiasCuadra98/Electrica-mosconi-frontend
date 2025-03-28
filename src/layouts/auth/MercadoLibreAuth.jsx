import { useEffect } from "react";
import {useSearchParams, useNavigate} from "react-router-dom";
import { postCodeToAuthMeLiAction } from "../../redux/actions/actionSocialMedia";
import {useDispatch, useSelector} from "react-redux"
import Spinner from "../../components/utils/spinners/Spinner";

const MercadoLibreAuth = () => {
    const [searchParams] = useSearchParams()
    const code = {code: searchParams.get("code")};
    console.log('respuesta del search:', code);
    const dispatch = useDispatch();
    const navigate = useNavigate(); 

    const error = useSelector((state) => state.meliAuthError)

    useEffect(() => {
        console.log('MercadoLibreAuth montado');
        
    }, [])

    useEffect(() => {
        if(code.code) {
            //funcion que envia el codigo de autentificacion al backend
            dispatch(postCodeToAuthMeLiAction(code, navigate))
        }
    }, [code, navigate, dispatch])

 return (
    <div className="bg-sky-950">
        <Spinner text={'Autenticando con Mercado Libre...'} />
        {error ? (
            <div className="mt-12 mx-auto">
                <p style={{ color: "red" }}>Error: {error}</p>
                <button className="w-fit h-fit  px-8 py-1 bg-sky-950 hover:bg-amber-500 border-gray-700 rounded-[30px] shadow-inner text-white text-xs font-normal font-['Oswald']" onClick={() => dispatch(postCodeToAuthMeLiAction(code, navigate))}>
                    REINTENTAR
                </button>
            </div>
        ) : null}
    </div>
 );    

}
export default MercadoLibreAuth;